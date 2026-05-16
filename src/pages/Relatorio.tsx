import usePageMeta from "@/hooks/usePageMeta";
import { trackConversion } from "@/lib/conversionTracking";

import {
  User,
  Phone,
  MapPin,
  Building2,
  Users,
  Lock,
  Sparkles,
  Briefcase,
  BadgeCheck,
  CreditCard,
  Eye,
  ArrowDown,
  Loader2,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import pixLogo from "@/assets/pix-logo.png";
import { supabase } from "@/lib/supabase";

const UNLOCK_BATCH = 3;
type AnyRecord = Record<string, any>;

interface RelatorioData {
  paid: boolean
  cpf: string
  nome: string
  sexo: string
  data_nascimento: string
  idade: number
  signo: string
  nacionalidade: string
  nome_mae: string
  cpf_mae: string
  situacao_do_cpf: string
  estado_civil: string
  obito: boolean
  emails: string[]
  historico_profissional: any[]
  renda: number
  ocupacao: string
  risco_credito: string
  telefones: any[]
  enderecos: any[]
  participacao_societaria: any[]
  parentes: any[]
  upsells_paid: {
    celulares: number
    enderecos: number
    empresas: number
    parentes: number
  }
  totais: {
    telefones: number
    enderecos: number
    empresas: number
    parentes: number
  }
  faltam_desbloquear: {
    telefones: number
    enderecos: number
    empresas: number
    parentes: number
  }
}

const DataRow = ({ label, value }: { label: string; value: string | React.ReactNode }) => (
  <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-4 py-3 px-4 border-b border-border last:border-b-0 even:bg-muted/30">
    <span className="text-xs font-bold text-muted-foreground uppercase tracking-wide min-w-[140px] shrink-0">{label}</span>
    <span className="text-sm font-semibold text-foreground break-all">{value}</span>
  </div>
);

type UpsellColor = "success" | "upsell-blue" | "upsell-amber" | "upsell-purple";

const colorMap: Record<UpsellColor, { bg: string; bgLight: string; bgMedium: string; text: string; border: string; shadow: string; btn: string; btnText: string }> = {
  success: {
    bg: "bg-success", bgLight: "bg-success/8", bgMedium: "bg-success/15",
    text: "text-success", border: "border-success/20", shadow: "shadow-success/25",
    btn: "bg-success", btnText: "text-success-foreground",
  },
  "upsell-blue": {
    bg: "bg-upsell-blue", bgLight: "bg-upsell-blue/8", bgMedium: "bg-upsell-blue/15",
    text: "text-upsell-blue", border: "border-upsell-blue/20", shadow: "shadow-upsell-blue/25",
    btn: "bg-upsell-blue", btnText: "text-upsell-blue-foreground",
  },
  "upsell-amber": {
    bg: "bg-upsell-amber", bgLight: "bg-upsell-amber/8", bgMedium: "bg-upsell-amber/15",
    text: "text-upsell-amber", border: "border-upsell-amber/20", shadow: "shadow-upsell-amber/25",
    btn: "bg-upsell-amber", btnText: "text-upsell-amber-foreground",
  },
  "upsell-purple": {
    bg: "bg-upsell-purple", bgLight: "bg-upsell-purple/8", bgMedium: "bg-upsell-purple/15",
    text: "text-upsell-purple", border: "border-upsell-purple/20", shadow: "shadow-upsell-purple/25",
    btn: "bg-upsell-purple", btnText: "text-upsell-purple-foreground",
  },
};

interface UpsellSectionProps {
  icon: React.ElementType;
  title: string;
  description: string;
  totalFound: number;
  unlockedCount: number;
  pricePerBatch: string;
  lockedItems: string[];
  renderUnlockedData: (count: number) => React.ReactNode;
  onUnlock: (batchSize: number, isMore: boolean) => Promise<void> | void;
  color: UpsellColor;
}

const UpsellSection = ({ icon: Icon, title, description, totalFound, unlockedCount, pricePerBatch, lockedItems, renderUnlockedData, onUnlock, color }: UpsellSectionProps) => {
  const c = colorMap[color];
  const [loading, setLoading] = useState(false);

  const remaining = totalFound - unlockedCount;
  const nextBatchSize = Math.min(UNLOCK_BATCH, remaining);
  const allUnlocked = remaining <= 0;
  const hasUnlocked = unlockedCount > 0;

  return (
    <div className={`mt-4 rounded-2xl border bg-card shadow-sm overflow-hidden ${c.border}`}>
      {/* Header */}
      <div className={`${c.bgLight} border-b ${c.border} px-4 py-3`}>
        <div className="flex items-center gap-2">
          <Icon className={`h-4 w-4 ${c.text}`} />
          <span className="text-sm font-bold text-foreground uppercase tracking-wide">{title}</span>
        </div>
        <p className="text-[11px] text-muted-foreground mt-0.5 ml-6">{description}</p>
      </div>

      {/* Already unlocked data */}
      {hasUnlocked && renderUnlockedData(unlockedCount)}

      {/* Locked section */}
      {!allUnlocked && (
        <>
          {/* When already unlocked: show "more found" banner, no blur */}
          {hasUnlocked ? (
            <>
              <div className={`${c.bgLight} border-y ${c.border} px-4 py-2.5 flex items-center gap-2`}>
                <Sparkles className={`h-3.5 w-3.5 ${c.text}`} />
                <span className={`text-xs font-bold ${c.text}`}>
                  +{remaining} {title.toLowerCase()} ainda foram encontrados!
                </span>
              </div>
              <div className="px-4 pb-4 pt-3 space-y-3">
                <div className={`rounded-xl ${c.border} ${c.bgMedium} p-3 text-center`}>
                  <p className="text-xs text-muted-foreground">Desbloqueie mais</p>
                  <p className="text-lg font-extrabold text-foreground">{nextBatchSize} {title}</p>
                  <p className={`text-sm font-bold ${c.text}`}>por apenas {pricePerBatch}</p>
                </div>
                <button
                  disabled={loading}
                  onClick={async () => {
                    setLoading(true);
                    try {
                      await onUnlock(nextBatchSize, true);
                    } finally {
                      setLoading(false);
                    }
                  }}
                  className={`w-full flex items-center justify-center gap-2 rounded-xl ${c.btn} px-5 py-3.5 text-sm font-bold ${c.btnText} shadow-lg ${c.shadow} hover:brightness-110 transition-all active:scale-[0.98] disabled:opacity-70`}
                >
                  <Lock className="h-4 w-4 shrink-0" />
                  <span className="whitespace-nowrap">{loading ? "Gerando Pagamento..." : "Desbloquear Agora"}</span>
                </button>
              </div>
            </>
          ) : (
            <>
              {/* First time: compelling blur + overlay */}
              <div className="relative">
                <div className="px-4 py-2 space-y-0 select-none" aria-hidden>
                  {lockedItems.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 py-1.5 border-b border-border/50 last:border-b-0">
                      <Lock className="h-3 w-3 text-muted-foreground/40 shrink-0" />
                      <span className="text-xs text-foreground blur-[6px]">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-card/10 via-card/50 to-card flex items-center justify-center pointer-events-none">
                  <div className={`flex items-center gap-1.5 ${c.bg} ${c.btnText} text-[11px] font-bold px-3.5 py-1.5 rounded-full shadow-lg ${c.shadow} animate-pulse`}>
                    <Lock className="h-3 w-3" />
                    <span>Aguardando Liberação</span>
                  </div>
                </div>
              </div>

              {/* Offer card */}
              <div className="px-3 pb-3 pt-2 space-y-2.5">
                <div className={`relative rounded-xl border ${c.border} overflow-hidden`}>
                  <div className={`${c.bgLight} px-4 py-3 text-center`}>
                    <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Desbloqueie</p>
                    <p className="text-lg font-extrabold text-foreground leading-tight mt-0.5">{nextBatchSize} {title}</p>
                    <p className={`text-base font-bold ${c.text} mt-0.5`}>por apenas {pricePerBatch}</p>
                  </div>
                  <div className="px-4 py-2 bg-card border-t border-border/50">
                    <p className="text-[11px] text-muted-foreground text-center flex items-center justify-center gap-1.5">
                      <CheckCircle2 className="h-3 w-3 text-success" />
                      Liberação automática em segundos após a confirmação do Pix
                    </p>
                  </div>
                </div>

                <button
                  disabled={loading}
                  onClick={async () => {
                    setLoading(true);
                    try {
                      await onUnlock(nextBatchSize, false);
                    } finally {
                      setLoading(false);
                    }
                  }}
                  className={`w-full flex items-center justify-center gap-2 rounded-xl ${c.btn} px-4 py-3.5 text-sm font-bold ${c.btnText} shadow-lg ${c.shadow} hover:brightness-110 transition-all active:scale-[0.98] disabled:opacity-70`}
                >
                  <Lock className="h-4 w-4 shrink-0" />
                  <span className="whitespace-nowrap">{loading ? "Gerando Pagamento..." : "Desbloquear Agora"}</span>
                </button>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

const PixModal = ({ open, onOpenChange, title, price, batchSize, isMore, personName, color, pixCode, pixCodeUrl, searchId, tipo, chargeId, onPaymentConfirmed }: { open: boolean; onOpenChange: (v: boolean) => void; title: string; price: string; batchSize: number; isMore: boolean; personName: string; color: UpsellColor; pixCode: string; pixCodeUrl: string; searchId: string; tipo: string; chargeId: string | null; onPaymentConfirmed: (newTransactionId?: string | null) => void }) => {
  const c = colorMap[color];
  const [copied, setCopied] = useState(false);
  const [checkingManually, setCheckingManually] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<'pending' | 'checking' | 'confirmed'>('pending');

  const handleCopy = () => {
    if (!pixCode) return;
    navigator.clipboard.writeText(pixCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  // Verificação manual de pagamento
  const verificarPagamentoManualmente = async () => {
    if (!chargeId || checkingManually) return;

    setCheckingManually(true);
    
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/verificar-pagamento-manual`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
          },
          body: JSON.stringify({ charge_id: chargeId })
        }
      );

      if (!response.ok) {
        console.error('❌ Erro ao verificar pagamento manual:', response.status);
        return;
      }

      const data = await response.json();
      
      if (data.success && data.paid) {
        setPaymentStatus('confirmed');
        
        setTimeout(() => {
          onPaymentConfirmed(chargeId);
          onOpenChange(false);
          setPaymentStatus('pending');
        }, 1500);
      }
    } catch (error) {
      console.error('❌ Erro na verificação manual:', error);
    } finally {
      setCheckingManually(false);
    }
  };

  // Polling de pagamento
  useEffect(() => {
    if (!open || !searchId || !tipo) return;
    
    let intervalId: NodeJS.Timeout;
    const startTime = Date.now();
    const MAX_DURATION = 10 * 60 * 1000; // 10 minutos

    const checkPayment = async () => {
      if (Date.now() - startTime > MAX_DURATION) {
        clearInterval(intervalId);
        return;
      }

      try {
        const response = await fetch(
          `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/verificar-pagamento`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
            },
            body: JSON.stringify({ search_id: searchId, tipo })
          }
        );

        const result = await response.json();
        
        if (result.found && result.status === 'paid') {
          setPaymentStatus('confirmed');
          clearInterval(intervalId);
          
          // Aguarda 1 segundo para mostrar confirmação
          setTimeout(() => {
            onPaymentConfirmed(chargeId);
            onOpenChange(false);
            setPaymentStatus('pending');
          }, 1500);
        }
      } catch (error) {
        console.error('Erro ao verificar pagamento:', error);
      }
    };

    // Primeira verificação após 10 segundos
    const timeoutId = setTimeout(() => {
      setPaymentStatus('checking');
      checkPayment();
      // Continua verificando a cada 10 segundos
      intervalId = setInterval(checkPayment, 10000);
    }, 10000);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [open, searchId, tipo, onPaymentConfirmed, onOpenChange]);

  const quantityText = isMore ? `mais ${batchSize} ${title.toLowerCase()}` : `${batchSize} ${title.toLowerCase()}`;

  return (
    <Dialog open={open} onOpenChange={(v) => { onOpenChange(v); if (!v) setCopied(false); }}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">Desbloquear {title}</DialogTitle>
          <DialogDescription className="text-center">
            Desbloqueie <span className={`font-bold ${c.text}`}>{quantityText}</span> de <span className="font-bold text-foreground">{personName}</span> por apenas <span className={`font-bold ${c.text}`}>{price}</span>
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center gap-4 py-4">
          <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/15 rounded-full px-4 py-2">
            <img src={pixLogo} alt="Pix" className="h-6 w-6 object-contain" />
            <span className="text-sm font-bold text-foreground">Pagar com Pix</span>
          </div>
          <div className="bg-muted rounded-2xl p-6 flex items-center justify-center">
            {pixCodeUrl || pixCode ? (
              <img
                src={pixCodeUrl || `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(pixCode)}`}
                alt="QR Code Pix"
                className="h-48 w-48 rounded-xl border border-border bg-background"
              />
            ) : (
              <div className="h-48 w-48 bg-foreground/5 rounded-xl border-2 border-dashed border-border flex items-center justify-center">
                <div className="text-center">
                  <CreditCard className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
                  <span className="text-xs text-muted-foreground">QR Code Pix</span>
                </div>
              </div>
            )}
          </div>
          <div className="text-center space-y-1">
            <p className={`text-2xl font-extrabold ${c.text}`}>{price}</p>
            {paymentStatus === 'confirmed' ? (
              <div className="flex items-center justify-center gap-2 text-success">
                <BadgeCheck className="h-4 w-4" />
                <p className="text-sm font-bold">Pagamento Confirmado!</p>
              </div>
            ) : paymentStatus === 'checking' ? (
              <div className="flex items-center justify-center gap-2">
                <Loader2 className="h-3 w-3 animate-spin text-primary" />
                <p className="text-xs text-muted-foreground">Aguardando confirmação do pagamento...</p>
              </div>
            ) : (
              <p className="text-xs text-muted-foreground">Liberação automática dos resultados em segundos após a confirmação do Pix</p>
            )}
          </div>
          <div className="w-full bg-muted rounded-xl p-4">
            <p className="text-xs text-muted-foreground text-center mb-3 font-medium">Pix Copia e Cola</p>
            <div className="flex flex-col gap-2">
              <input readOnly value={pixCode || ""} className="w-full bg-background border border-border rounded-lg px-3 py-2.5 text-xs text-muted-foreground truncate" />
              <button
                onClick={handleCopy}
                disabled={!pixCode}
                className={`w-full rounded-xl px-5 py-3.5 text-sm font-bold transition-all active:scale-[0.98] shadow-lg ${copied ? "bg-green-500 text-white" : `${c.btn} ${c.btnText} hover:brightness-110 ${c.shadow}`}`}
              >
                {copied ? "✓ Copiado!" : "Copiar Código Pix"}
              </button>
              
              {/* Link de verificação manual */}
              <p className="text-xs text-center text-muted-foreground mt-1">
                Se o redirecionamento automático não ocorrer,{" "}
                <button
                  onClick={verificarPagamentoManualmente}
                  disabled={checkingManually || !chargeId}
                  className="text-primary hover:underline font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  clique aqui
                </button>
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Relatorio = () => {
  usePageMeta({
    title: "Confere Aqui - Relatório",
    description: "Relatório individual com dados pessoais obtidos de fontes públicas. Acesso restrito e protegido em conformidade com a LGPD.",
    robots: "noindex, nofollow",
  });
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchId = searchParams.get("search_id") || "";
  const rawTransactionId = searchParams.get("transaction_id") || "";
  const [transactionId, setTransactionId] = useState(rawTransactionId === "null" ? "" : rawTransactionId);
  const [pixCode, setPixCode] = useState("");
  const [pixCodeUrl, setPixCodeUrl] = useState("");
  const [chargeId, setChargeId] = useState<string | null>(null);
  const [cpfValue, setCpfValue] = useState("");
  const [paymentConfirmedCount, setPaymentConfirmedCount] = useState(0);
  const [showPaymentToast, setShowPaymentToast] = useState(false);
  const [pixModal, setPixModal] = useState<{ open: boolean; title: string; price: string; batchSize: number; isMore: boolean; color: UpsellColor; tipo: string }>({ open: false, title: "", price: "", batchSize: 3, isMore: false, color: "success", tipo: "" });
  const [lastUpsellPurchased, setLastUpsellPurchased] = useState<string | null>(null);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [userClosedModal, setUserClosedModal] = useState(false); // Rastreia se o usuário fechou manualmente
  
  const upsellRef = useRef<HTMLDivElement>(null);
  const telefonesRef = useRef<HTMLDivElement>(null);
  const enderecosRef = useRef<HTMLDivElement>(null);
  const empresasRef = useRef<HTMLDivElement>(null);
  const parentesRef = useRef<HTMLDivElement>(null);
  const toastTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pendingCheckLastRunRef = useRef(0);
  const pendingCheckInFlightRef = useRef(false);
  const relatorioFetchInFlightRef = useRef(false);
  const relatorioFetchLastKeyRef = useRef('');
  const relatorioFetchLastAtRef = useRef(0);
  
  // Estados para dados do relatório
  const [relatorioData, setRelatorioData] = useState<RelatorioData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const scrollToUpsells = () => upsellRef.current?.scrollIntoView({ behavior: "smooth" });

  const getTipoByTitle = (title: string) => {
    const normalized = title.toLowerCase();
    if (normalized.includes("telefone")) return "celulares";
    if (normalized.includes("endereço") || normalized.includes("endere")) return "enderecos";
    if (normalized.includes("participa")) return "empresas";
    if (normalized.includes("parente") || normalized.includes("vínculo") || normalized.includes("vinculo")) return "parentes";
    return "celulares";
  };

  const getTitleByTipo = (tipo: string): { title: string; price: string; color: UpsellColor } => {
    switch (tipo) {
      case "celulares":
        return { title: "Telefones", price: "R$ 11,90", color: "success" };
      case "enderecos":
        return { title: "Endereços", price: "R$ 19,90", color: "upsell-blue" };
      case "empresas":
        return { title: "Participações Societárias", price: "R$ 11,90", color: "upsell-amber" };
      case "parentes":
        return { title: "Parentes e Vínculos", price: "R$ 14,90", color: "upsell-purple" };
      default:
        return { title: "Telefones", price: "R$ 11,90", color: "success" };
    }
  };

  // Calcular parentes válidos e únicos (remove duplicados e itens inválidos)
  const uniqueParentes = useMemo(() => {
    if (!relatorioData?.parentes) return [];
    
    // Filtrar itens inválidos (strings, nulls, objetos vazios)
    const validParentes = relatorioData.parentes.filter(item => {
      // Remove strings como "[]" ou outros valores primitivos
      if (typeof item !== 'object' || item === null) return false;
      
      // Verifica se tem pelo menos um campo válido (nome ou CPF)
      const hasNome = item.nome || item.nome_vinculo || item.nome_parente;
      const hasCpf = item.cpf || item.cpf_vinculo || item.cpf_parente;
      
      return hasNome || hasCpf;
    });
    
    // Remover vínculos duplicados baseando-se no CPF
    const unique = validParentes.reduce((acc, current) => {
      const cpf = current.cpf || current.cpf_vinculo || current.cpf_parente;
      
      // Se não tem CPF, adiciona mesmo assim (mas pode ser duplicado por nome)
      if (!cpf) {
        acc.push(current);
        return acc;
      }
      
      // Normaliza o CPF removendo caracteres não numéricos
      const cpfNormalizado = cpf.replace(/\D/g, '');
      
      // Se o CPF já existe, não adiciona duplicado
      const jaExiste = acc.some((item: AnyRecord) => {
        const itemCpf = item.cpf || item.cpf_vinculo || item.cpf_parente;
        if (!itemCpf) return false;
        const itemCpfNormalizado = itemCpf.replace(/\D/g, '');
        return itemCpfNormalizado === cpfNormalizado;
      });
      
      if (!jaExiste) {
        acc.push(current);
      }
      
      return acc;
    }, [] as any[]);
    
    return unique;
  }, [relatorioData?.parentes]);

  // Calcular empresas válidas e únicas (remove duplicados baseado no CNPJ)
  const uniqueEmpresas = useMemo(() => {
    if (!relatorioData?.participacao_societaria) return [];
    
    // Filtrar itens inválidos
    const validEmpresas = relatorioData.participacao_societaria.filter(item => {
      if (typeof item !== 'object' || item === null) return false;
      const hasCnpj = item.cnpj;
      const hasRazaoSocial = item.razao_social || item.nome_empresa;
      return hasCnpj || hasRazaoSocial;
    });
    
    // Remover duplicados baseado no CNPJ normalizado
    const unique = validEmpresas.reduce((acc, current) => {
      const cnpj = current.cnpj;
      
      // Se não tem CNPJ, adiciona mesmo assim
      if (!cnpj) {
        acc.push(current);
        return acc;
      }
      
      // Normaliza o CNPJ removendo caracteres não numéricos
      const cnpjNormalizado = cnpj.replace(/\D/g, '');
      
      // Se o CNPJ já existe, não adiciona duplicado
      const jaExiste = acc.some((item: AnyRecord) => {
        const itemCnpj = item.cnpj;
        if (!itemCnpj) return false;
        const itemCnpjNormalizado = itemCnpj.replace(/\D/g, '');
        return itemCnpjNormalizado === cnpjNormalizado;
      });
      
      if (!jaExiste) {
        acc.push(current);
      }
      
      return acc;
    }, [] as any[]);
    
    return unique;
  }, [relatorioData?.participacao_societaria]);

  const formatCpf = (value?: string) => {
    const digits = String(value || "").replace(/\D/g, "");
    if (digits.length !== 11) return value || "";
    return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9)}`;
  };

  const formatCnpj = (value?: string | null) => {
    if (!value) return "Nº de CNPJ desconhecido";
    const digits = String(value).replace(/\D/g, "");
    if (digits.length !== 14) return value;
    return `${digits.slice(0, 2)}.${digits.slice(2, 5)}.${digits.slice(5, 8)}/${digits.slice(8, 12)}-${digits.slice(12)}`;
  };

  const formatTelefoneNumero = (ddd?: string | number, numero?: string | number) => {
    const dddDigits = String(ddd ?? "").replace(/\D/g, "");
    const numeroDigits = String(numero ?? "").replace(/\D/g, "");

    if (!dddDigits || !numeroDigits) return String(numero ?? "");

    const withoutDupPrefix = numeroDigits.startsWith(dddDigits)
      ? numeroDigits.slice(dddDigits.length)
      : numeroDigits;

    // Remove o "1" extra que algumas APIs colocam após o DDD
    // Ex: (61) 1984087799 -> (61) 984087799
    if (withoutDupPrefix.startsWith("1") && withoutDupPrefix.length === 10) {
      return withoutDupPrefix.slice(1); // Remove o "1" inicial
    }

    return withoutDupPrefix;
  };

  const formatTelefoneDisplay = (ddd?: string | number, numero?: string | number) => {
    const normalized = formatTelefoneNumero(ddd, numero).replace(/\D/g, "");
    if (!normalized) return String(numero ?? "");

    if (normalized.length === 9) {
      return `${normalized.slice(0, 5)}-${normalized.slice(5)}`;
    }

    if (normalized.length === 8) {
      return `${normalized.slice(0, 4)}-${normalized.slice(4)}`;
    }

    return normalized;
  };

  const normalizeSpace = (value?: string) => String(value || "").replace(/\s+/g, " ").trim();

  const toTitleCase = (value?: string) => {
    const normalized = normalizeSpace(value).toLowerCase();
    if (!normalized) return "";

    const capitalize = (word: string) => (word ? word[0].toUpperCase() + word.slice(1) : "");

    return normalized
      .split(" ")
      .map((word) =>
        word
          .split("-")
          .map((part) => capitalize(part))
          .join("-")
      )
      .join(" ");
  };

  const toTitleCaseWithUf = (value?: string) => {
    const normalized = normalizeSpace(value);
    if (!normalized) return "";

    const [city, uf] = normalized.split("/");
    if (!uf) return toTitleCase(city);

    const ufFormatted = uf.length <= 3 ? uf.toUpperCase() : toTitleCase(uf);
    return `${toTitleCase(city)}/${ufFormatted}`;
  };

  const formatEnderecoTopLine = (end: { tipo_logradouro?: string; logradouro?: string; complemento?: string; numero?: string | number }) => {
    const main = [end.tipo_logradouro, end.logradouro].filter(Boolean).join(" ");
    const extras = [end.complemento, end.numero].filter(Boolean).join(", ");
    return normalizeSpace([main, extras].filter(Boolean).join(", ")).toUpperCase();
  };

  const formatEnderecoLineTwo = (end: { bairro?: string; cidade?: string; municipio?: string; uf?: string; estado?: string; cep?: string }) => {
    const cidade = end.municipio || end.cidade;
    const uf = end.uf || end.estado;
    const cidadeComUf = cidade && uf ? `${cidade}/${uf}` : cidade;
    const cepDigits = String(end.cep || "").replace(/\D/g, "");
    const cepFormatted = cepDigits.length === 8 ? `${cepDigits.slice(0, 5)}-${cepDigits.slice(5)}` : end.cep;
    return [toTitleCase(end.bairro), toTitleCaseWithUf(cidadeComUf), cepFormatted].filter(Boolean).join(" - ");
  };

  const openPix = (title: string, price: string, batchSize: number, isMore: boolean, color: UpsellColor) => {
    const tipo = getTipoByTitle(title);
    setUserClosedModal(false); // Reseta quando abre um novo pagamento
    setPixModal({ open: true, title, price, batchSize, isMore, color, tipo });
  };

  const aoConfirmarPagamento = async (newTransactionId?: string | null) => {
    setPaymentConfirmedCount(prev => prev + 1);

    const resolvedTransactionId = newTransactionId || chargeId || transactionId || null;
    const upsellType = pixModal.title;

    if (resolvedTransactionId) {
      setTransactionId(resolvedTransactionId);
      const nextParams = new URLSearchParams(searchParams);
      nextParams.set('search_id', searchId);
      nextParams.set('transaction_id', resolvedTransactionId);
      setSearchParams(nextParams, { replace: true });
    }

    // O refetch centralizado ocorre no useEffect de relatório (searchId/transactionId)
    setLastUpsellPurchased(upsellType);
  };

  const handleUpsellPayment = async (title: string) => {
    if (!searchId) return false;
    const tipo = getTipoByTitle(title);
    const cpfToUse = cpfValue || relatorioData?.cpf || "";

    setPixCode("");
    setPixCodeUrl("");
    setChargeId(null);

    const { data: paymentData, error: paymentError } = await supabase.functions.invoke(
      "criar-pagamento",
      {
        body: {
          cpf: cpfToUse,
          searchId,
          tipo,
        },
      }
    );

    if (paymentError || (paymentData && !paymentData.success)) {
      console.error("Erro ao criar pagamento de upsell:", paymentError || paymentData?.error);
      return false;
    }

    const paymentStatus = paymentData?.payment?.status;
    const paymentTransactionId = paymentData?.payment?.transaction_id || null;

    if (paymentStatus === 'paid' && paymentTransactionId) {
      await aoConfirmarPagamento(paymentTransactionId);
      return false;
    }

    setPixCode(paymentData?.payment?.qr_code || "");
    setPixCodeUrl(paymentData?.payment?.qr_code_url || "");
    setChargeId(paymentData?.payment?.charge_id || null);

    return true;
  };

  useEffect(() => {
    if (!searchId) return;
    const fetchCpf = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/buscar-dados-basicos`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({
            search_id: searchId,
          }),
        });

        if (response.ok) {
          const result = await response.json();
          if (result.success && result.data?.cpf) {
            setCpfValue(result.data.cpf);
          }
        }
      } catch (error) {
        console.error('Erro ao buscar CPF:', error);
      }
    };

    fetchCpf();
  }, [searchId]);

  // Buscar dados do relatório
  useEffect(() => {
    if (!searchId) {
      setError('Nenhum relatório para exibir');
      setLoading(false);
      return;
    }

    const requestKey = `${searchId}|${transactionId || ''}`;
    const now = Date.now();

    if (relatorioFetchInFlightRef.current) {
      return;
    }

    // Evita chamadas duplicadas imediatas para os mesmos parâmetros
    if (
      relatorioFetchLastKeyRef.current === requestKey &&
      now - relatorioFetchLastAtRef.current < 1500
    ) {
      return;
    }

    const fetchRelatorio = async () => {
      try {
        relatorioFetchInFlightRef.current = true;
        relatorioFetchLastKeyRef.current = requestKey;
        relatorioFetchLastAtRef.current = Date.now();
        setLoading(true);
        setError(null);
        
        const response = await fetch(
          `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/buscar-relatorio`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
            },
            body: JSON.stringify({
              search_id: searchId,
              transaction_id: transactionId || null,
            })
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          console.error('❌ Erro ao buscar relatório:', errorData);
          setError(errorData.error || 'Erro ao buscar relatório');
          setLoading(false);
          return;
        }

        const data = await response.json();
        
        if (!data.paid) {
          setError('Pagamento não confirmado');
          setLoading(false);
          return;
        }

        setRelatorioData(data);
        setLoading(false);
        setIsInitialLoad(false); // Marca que o carregamento inicial terminou
      } catch (err) {
        console.error('❌ Erro ao buscar relatório:', err);
        setError('Erro ao carregar dados');
        setLoading(false);
      } finally {
        relatorioFetchInFlightRef.current = false;
      }
    };

    fetchRelatorio();
  }, [searchId, transactionId]);

  // Dispara evento de conversão sempre que o transaction_id muda.
  // A própria função trackConversion garante que não há duplicação:
  // mantém um set persistido em localStorage com os transaction_ids já trackeados.
  useEffect(() => {
    if (!searchId || !transactionId) return;

    const isUpsell = !!lastUpsellPurchased;
    trackConversion({
      transactionId,
      searchId,
      type: isUpsell ? "upsell" : "relatorio_completo",
      productName: isUpsell ? lastUpsellPurchased : "Relatório Completo",
    });
  }, [searchId, transactionId, lastUpsellPurchased]);

  // Verificar pagamentos pendentes ao carregar
  useEffect(() => {
    if (!searchId || !relatorioData || pixModal.open || userClosedModal) return;

    const now = Date.now();
    if (pendingCheckInFlightRef.current || now - pendingCheckLastRunRef.current < 10000) {
      return;
    }

    const sessionThrottleKey = `pending-check:${searchId}`;
    const lastRunFromSession = Number(sessionStorage.getItem(sessionThrottleKey) || '0');
    if (Number.isFinite(lastRunFromSession) && now - lastRunFromSession < 10000) {
      return;
    }

    const tiposParaVerificar: string[] = [];
    if ((relatorioData.totais?.telefones || 0) > (relatorioData.telefones?.length || 0)) {
      tiposParaVerificar.push('celulares');
    }
    if ((relatorioData.totais?.enderecos || 0) > (relatorioData.enderecos?.length || 0)) {
      tiposParaVerificar.push('enderecos');
    }
    if ((relatorioData.totais?.empresas || 0) > (relatorioData.participacao_societaria?.length || 0)) {
      tiposParaVerificar.push('empresas');
    }
    if ((relatorioData.totais?.parentes || 0) > (relatorioData.parentes?.length || 0)) {
      tiposParaVerificar.push('parentes');
    }

    if (tiposParaVerificar.length === 0) {
      return;
    }

    const checkPendingPayments = async () => {
      pendingCheckInFlightRef.current = true;
      pendingCheckLastRunRef.current = Date.now();
      sessionStorage.setItem(sessionThrottleKey, String(pendingCheckLastRunRef.current));
      
      for (const tipo of tiposParaVerificar) {
        try {
          const response = await fetch(
            `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/verificar-pagamento`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
              },
              body: JSON.stringify({ search_id: searchId, tipo })
            }
          );

          if (response.ok) {
            const paymentData = await response.json();
            
            // Verifica se é um pagamento pendente
            if (paymentData.found && 
                ['pending', 'waiting_payment', 'processing'].includes(paymentData.status) &&
                paymentData.qr_code && 
                paymentData.pix_expires_at) {
              
              // Verifica se ainda não expirou (60 minutos)
              const expiresAt = new Date(paymentData.pix_expires_at);
              const now = new Date();
              
              if (expiresAt <= now) {
                // PIX expirado, gerar novo via criar-pagamento
                try {
                  const criarPagamentoResponse = await fetch(
                    `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/criar-pagamento`,
                    {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
                      },
                      body: JSON.stringify({
                        cpf: relatorioData?.cpf,
                        searchId: searchId,
                        tipo: tipo
                      })
                    }
                  );

                  if (criarPagamentoResponse.ok) {
                    const newPaymentData = await criarPagamentoResponse.json();
                    if (newPaymentData.success && newPaymentData.payment) {
                      const { title, price, color } = getTitleByTipo(tipo);
                      setPixCode(newPaymentData.payment.qr_code || "");
                      setPixCodeUrl(newPaymentData.payment.qr_code_url || "");
                      setChargeId(newPaymentData.payment.charge_id || null);
                      setPixModal({ 
                        open: true, 
                        title, 
                        price, 
                        batchSize: 3, 
                        isMore: false, 
                        color, 
                        tipo 
                      });
                      break;
                    }
                  }
                } catch (error) {
                  console.error(`❌ Erro ao regenerar pagamento expirado (${tipo}):`, error);
                }
              } else {
                // Encontrou um pagamento pendente válido! Abrir modal
                const { title, price, color } = getTitleByTipo(tipo);
                
                setPixCode(paymentData.qr_code);
                setPixCodeUrl(paymentData.qr_code_url);
                setChargeId(paymentData.pagarme_charge_id || null);
                setPixModal({ 
                  open: true, 
                  title, 
                  price, 
                  batchSize: 3, 
                  isMore: false, 
                  color, 
                  tipo 
                });
                
                // Para após encontrar o primeiro pagamento pendente
                break;
              }
            }
          }
        } catch (error) {
          console.error(`Erro ao verificar pagamento pendente (${tipo}):`, error);
        }
      }

      pendingCheckInFlightRef.current = false;
    };

    checkPendingPayments();
  }, [searchId, relatorioData, pixModal.open, userClosedModal]);


  // � Scroll para o topo ao carregar relatório
  useEffect(() => {
    if (relatorioData && !loading) {
      // Se foi um pagamento de upsell, rola para a seção específica
      if (lastUpsellPurchased) {
        let targetRef = null;
        
        if (lastUpsellPurchased.includes('Telefone')) {
          targetRef = telefonesRef;
        } else if (lastUpsellPurchased.includes('Endereço')) {
          targetRef = enderecosRef;
        } else if (lastUpsellPurchased.includes('Societária') || lastUpsellPurchased.includes('Participaç')) {
          targetRef = empresasRef;
        } else if (lastUpsellPurchased.includes('Parente') || lastUpsellPurchased.includes('Vínculo')) {
          targetRef = parentesRef;
        }
        
        if (targetRef?.current) {
          setTimeout(() => {
            targetRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 300);
        }
        
        // Limpa o estado após o scroll
        setLastUpsellPurchased(null);
      } else if (isInitialLoad) {
        // Só faz scroll para o topo no carregamento inicial
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, [relatorioData, loading, lastUpsellPurchased, isInitialLoad]);

  useEffect(() => {
    if (paymentConfirmedCount === 0) return;
    
    // Limpa qualquer timeout anterior
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }
    
    setShowPaymentToast(true);
    
    // Cria o timeout para esconder o toast
    toastTimeoutRef.current = setTimeout(() => {
      setShowPaymentToast(false);
      toastTimeoutRef.current = null;
    }, 4000);
    
    // Cleanup apenas se o componente desmontar completamente
    return () => {
      if (toastTimeoutRef.current) {
        clearTimeout(toastTimeoutRef.current);
        toastTimeoutRef.current = null;
      }
    };
  }, [paymentConfirmedCount]);

  return (
    <>
      {showPaymentToast && (
        <div className="fixed top-4 right-4 z-50 w-[calc(100%-2rem)] max-w-sm animate-in slide-in-from-top-2 fade-in duration-300">
          <div className="bg-[hsl(145,72%,95%)] border border-success/40 text-success rounded-xl px-4 py-3.5 text-left text-sm font-semibold shadow-lg flex items-center gap-2.5">
            <CheckCircle2 className="h-5 w-5 shrink-0" />
            Pagamento confirmado. Acesse os resultados agora mesmo
          </div>
        </div>
      )}
      <main className="flex-1 py-6 px-3 sm:px-4">
        <div className="mx-auto max-w-2xl">
          {/* Loading State */}
          {loading && (
            <div className="bg-card rounded-2xl border border-border shadow-sm p-8 text-center">
              <Loader2 className="h-8 w-8 animate-spin mx-auto mb-3 text-primary" />
              <p className="text-sm font-medium text-foreground">Carregando relatório...</p>
            </div>
          )}

          {/* Error State / Empty State */}
          {error && !loading && (
            <div className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden">
              <div className="px-6 py-12 text-center space-y-6">
                {!searchId ? (
                  <>
                     <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                       <Eye className="h-8 w-8 text-primary" />
                     </div>
                     <div className="space-y-2">
                       <h1 className="text-lg font-bold text-foreground">
                         Área de Relatório de Consulta
                       </h1>
                       <h2 className="text-sm font-medium text-muted-foreground max-w-md mx-auto leading-relaxed">
                         Após a confirmação do pagamento, seu relatório completo será exibido aqui com as seguintes categorias de informações
                       </h2>
                      <ul className="text-sm text-muted-foreground text-left max-w-sm mx-auto space-y-1.5 mt-3">
                        <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" /> Dados Pessoais (Nome, CPF, Nascimento, Sexo)</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" /> Situação cadastral do CPF</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" /> Nome da Mãe e Nacionalidade</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" /> E-mails e Ocupação</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" /> Histórico Profissional</li>
                        <li className="flex items-center gap-2"><Lock className="h-3.5 w-3.5 text-muted-foreground shrink-0" /> Telefones (desbloqueáveis)</li>
                        <li className="flex items-center gap-2"><Lock className="h-3.5 w-3.5 text-muted-foreground shrink-0" /> Endereços (desbloqueáveis)</li>
                        <li className="flex items-center gap-2"><Lock className="h-3.5 w-3.5 text-muted-foreground shrink-0" /> Participações Societárias (desbloqueáveis)</li>
                        <li className="flex items-center gap-2"><Lock className="h-3.5 w-3.5 text-muted-foreground shrink-0" /> Parentes e Vínculos (desbloqueáveis)</li>
                      </ul>
                      <p className="text-xs text-muted-foreground mt-3">
                        Relatório base por <strong className="text-foreground">R$ 18,90</strong> via Pix. Seções adicionais disponíveis separadamente.
                      </p>
                    </div>
                    <a
                      href="/consultar"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg hover:brightness-110 transition-all active:scale-[0.98]"
                    >
                      Realizar Consulta
                    </a>
                  </>
                ) : (
                  <>
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-destructive/10">
                      <AlertCircle className="h-8 w-8 text-destructive" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-lg font-bold text-foreground">
                        Ocorreu um erro na consulta deste CPF.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Por favor, retorne mais tarde.
                      </p>
                    </div>
                    <a
                      href="/"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg hover:brightness-110 transition-all active:scale-[0.98]"
                    >
                      Voltar ao Início
                    </a>
                  </>
                )}
              </div>
            </div>
          )}

          {/* Data Loaded */}
          {!loading && !error && relatorioData && (
            <>
              {/* Person Summary Card */}
              <div className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden mb-4">
                <div className="bg-primary px-4 py-3 flex items-center gap-3">
                  <div className="h-11 w-11 rounded-full bg-primary-foreground/15 flex items-center justify-center">
                    <User className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-base font-bold text-primary-foreground truncate">{relatorioData.nome}</h2>
                    <p className="text-xs text-primary-foreground/70">CPF: {formatCpf(relatorioData.cpf)}</p>
                  </div>
                </div>
                {relatorioData.situacao_do_cpf === "REGULAR" ? (
                  <div className="flex items-center gap-2 px-4 py-2 bg-secondary border-b border-border">
                    <BadgeCheck className="h-4 w-4 text-primary" />
                    <span className="text-xs font-bold text-primary">Situação do CPF: {relatorioData.situacao_do_cpf}</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 px-4 py-2 bg-amber-500/10 border-b border-amber-500/20">
                    <BadgeCheck className="h-4 w-4 text-amber-600" />
                    <span className="text-xs font-bold text-amber-600">Situação do CPF: {relatorioData.situacao_do_cpf}</span>
                  </div>
                )}
              </div>

          {/* CTA: Scroll to extras */}
          <button
            onClick={scrollToUpsells}
            className="w-full mb-4 relative overflow-hidden rounded-2xl border border-success/30 bg-gradient-to-r from-success/10 via-success/5 to-success/10 px-4 py-4 hover:from-success/15 hover:to-success/15 transition-all active:scale-[0.99] group"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-success/15 border border-success/20 flex items-center justify-center shrink-0 group-hover:bg-success/25 transition-colors">
                  <Sparkles className="h-5 w-5 text-success" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-extrabold text-foreground">Informações extras disponíveis</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Sua busca retornou diversas informações adicionais que podem ser liberadas abaixo</p>
                </div>
              </div>
              <div className="h-8 w-8 rounded-full bg-success flex items-center justify-center shrink-0 shadow-md shadow-success/25">
                <ArrowDown className="h-4 w-4 text-success-foreground animate-bounce" />
              </div>
            </div>
          </button>

          {/* Data Table - Personal Info */}
          <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden mb-4">
            <div className="bg-muted/50 px-4 py-2.5 border-b border-border flex items-center gap-2">
              <User className="h-4 w-4 text-primary" />
              <span className="text-xs font-bold text-foreground uppercase tracking-wide">Dados Pessoais</span>
            </div>
            <DataRow label="Nome" value={relatorioData.nome || 'N/A'} />
            <DataRow label="CPF" value={formatCpf(relatorioData.cpf) || 'N/A'} />
            <DataRow label="Sexo" value={relatorioData.sexo || 'N/A'} />
            <DataRow label="Nascimento" value={relatorioData.data_nascimento || 'N/A'} />
            <DataRow label="Idade" value={relatorioData.idade ? `${relatorioData.idade} anos` : 'N/A'} />
            <DataRow label="Nome da Mãe" value={relatorioData.nome_mae || 'N/A'} />
            <DataRow label="Nacionalidade" value={relatorioData.nacionalidade || 'N/A'} />
            <DataRow
              label="Possível Óbito"
              value={(relatorioData.obito === true || String(relatorioData.obito) === "true") ? "Sim" : "Não"}
            />
            <DataRow label="Signo" value={relatorioData.signo || 'N/A'} />
          </div>

          {/* Financial Info */}
          <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden mb-4">
            <div className="bg-muted/50 px-4 py-2.5 border-b border-border flex items-center gap-2">
              <Briefcase className="h-4 w-4 text-primary" />
              <span className="text-xs font-bold text-foreground uppercase tracking-wide">Dados Financeiros</span>
            </div>
            <DataRow
              label="Renda Estimada"
              value={relatorioData.renda ? `R$ ${relatorioData.renda}` : 'N/A'}
            />
            <DataRow label="Ocupação" value={relatorioData.ocupacao || 'N/A'} />
          </div>

          {/* Emails */}
          <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden mb-4">
            <div className="bg-muted/50 px-4 py-2.5 border-b border-border flex items-center gap-2">
              <Eye className="h-4 w-4 text-primary" />
              <span className="text-xs font-bold text-foreground uppercase tracking-wide">E-mails</span>
            </div>
            {relatorioData.emails?.map((email, i) => (
              <DataRow key={i} label={`E-mail ${i + 1}`} value={email} />
            )) || <div className="py-3 px-4 text-xs text-muted-foreground">Nenhum e-mail disponível</div>}
          </div>

          {/* Professional History */}
          <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden mb-4">
            <div className="bg-muted/50 px-4 py-2.5 border-b border-border flex items-center gap-2">
              <Briefcase className="h-4 w-4 text-primary" />
              <span className="text-xs font-bold text-foreground uppercase tracking-wide">Histórico Profissional</span>
            </div>
            {relatorioData.historico_profissional?.length > 0 ? (
              relatorioData.historico_profissional.map((emp, i) => (
                <div key={i} className="py-3 px-4 border-b border-border last:border-b-0 even:bg-muted/30">
                  <p className="text-sm font-semibold text-foreground">{emp.razao_social}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{emp.cbo_descricao ?? "Cargo não informado"}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{emp.setor}</p>
                  <p className="text-xs text-primary font-medium mt-0.5">{emp.faixa_salarial}</p>
                </div>
              ))
            ) : (
              <div className="py-3 px-4 text-xs text-muted-foreground">Nenhum histórico profissional disponível</div>
            )}
          </div>

          {/* Upsell anchor */}
          <div ref={upsellRef} />

          {/* UPSELL: Telefones */}
          {(relatorioData.totais?.telefones || 0) > 0 && (
            <div ref={telefonesRef}>
              <UpsellSection
                icon={Phone}
                title="Telefones"
                description="Celulares e fixos vinculados ao CPF, incluindo indicação de WhatsApp"
                totalFound={relatorioData.totais?.telefones || 0}
                unlockedCount={relatorioData.telefones?.length || 0}
                pricePerBatch="R$ 11,90"
                color="success"
                lockedItems={[
                  "(11) 9●●●●-●●32 — Celular / WhatsApp",
                  "(11) 9●●●●-●●21 — Celular / WhatsApp",
                  "(11) 9●●●●-●●10 — Celular",
                ]}
                renderUnlockedData={(count) => (
                  <>
                    {relatorioData.telefones?.slice(0, count).map((tel, i) => (
                      <div key={i} className="py-3 px-4 border-b border-border last:border-b-0 even:bg-muted/30">
                        <p className="text-sm font-semibold text-foreground">({tel.ddd}) {formatTelefoneDisplay(tel.ddd, tel.numero)}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{tel.tipo === "móvel" ? "Móvel" : "Fixo"}{tel.whatsapp ? " · WhatsApp" : ""}</p>
                      </div>
                    ))}
                  </>
                )}
                onUnlock={async (batchSize, isMore) => {
                  const created = await handleUpsellPayment("Telefones");
                  if (!created) return;
                  openPix("Telefones", "R$ 11,90", batchSize, isMore, "success");
                }}
              />
            </div>
          )}

          {/* UPSELL: Endereços */}
          {(relatorioData.totais?.enderecos || 0) > 0 && (
            <div ref={enderecosRef}>
              <UpsellSection
                icon={MapPin}
                title="Endereços"
                description="Endereços residenciais e comerciais registrados em bases públicas"
                totalFound={relatorioData.totais?.enderecos || 0}
                unlockedCount={relatorioData.enderecos?.length || 0}
                pricePerBatch="R$ 19,90"
                color="upsell-blue"
                lockedItems={[
                  "R. ●●● ●●●●●●, 250 — São Paulo/SP",
                  "Av. ●●●●●●●●, 1000 — São Paulo/SP",
                  "R. ●●●●●● de ●●●●●●●, 88 — Campinas/SP",
                ]}
                renderUnlockedData={(count) => (
                  <>
                    {relatorioData.enderecos?.slice(0, count).map((end, i) => (
                      <div key={i} className="py-3 px-4 border-b border-border last:border-b-0 even:bg-muted/30">
                        <p className="text-sm font-semibold text-foreground">
                          {formatEnderecoTopLine(end)}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {formatEnderecoLineTwo(end)}
                        </p>
                      </div>
                    ))}
                  </>
                )}
                onUnlock={async (batchSize, isMore) => {
                  const created = await handleUpsellPayment("Endereços");
                  if (!created) return;
                  openPix("Endereços", "R$ 19,90", batchSize, isMore, "upsell-blue");
                }}
              />
            </div>
          )}

          {/* UPSELL: Participações */}
          {((relatorioData.totais as any)?.participacao_societaria || 0) > 0 && (
            <div ref={empresasRef}>
              <UpsellSection
                icon={Building2}
                title="Participações Societárias"
                description="Empresas onde o CPF consultado possui ou possuiu participação"
                totalFound={(relatorioData.totais as any)?.participacao_societaria || 0}
                unlockedCount={uniqueEmpresas.length}
                pricePerBatch="R$ 11,90"
                color="upsell-amber"
                lockedItems={[
                  "12.●●●.●●8/0001-99 — Sócio-Administrador",
                  "●●.●●●.●●●/0001-●● — Sócio",
                  "●●.●●●.●●●/0001-●● — Sócio",
                ]}
                renderUnlockedData={(count) => (
                  <>
                    {uniqueEmpresas.slice(0, count).map((emp: AnyRecord, i: number) => (
                      <div key={i} className="py-3 px-4 border-b border-border last:border-b-0 even:bg-muted/30">
                        <p className="text-sm font-semibold text-foreground">{emp.razao_social}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">CNPJ: {formatCnpj(emp.cnpj)} — {emp.cargo || "Cargo desconhecido"}</p>
                      </div>
                    ))}
                  </>
                )}
                onUnlock={async (batchSize, isMore) => {
                  const created = await handleUpsellPayment("Participações Societárias");
                  if (!created) return;
                  openPix("Participações Societárias", "R$ 11,90", batchSize, isMore, "upsell-amber");
                }}
              />
            </div>
          )}

          {/* UPSELL: Vínculos */}
          {(relatorioData.totais?.parentes || 0) > 0 && (
            <div ref={parentesRef}>
              <UpsellSection
                icon={Users}
                title="Parentes e Vínculos"
                description="Familiares e pessoas com vínculo registrado ao CPF"
                totalFound={relatorioData.totais?.parentes || 0}
                unlockedCount={uniqueParentes.length}
                pricePerBatch="R$ 14,90"
                color="upsell-purple"
                lockedItems={[
                  "M●●●A A●●●●●●●A DA S●●●A — Mãe",
                  "J●●É C●●●●●S DA S●●●A — Pai",
                  "A●●A C●●●A DA S●●●A — Irmã(o)",
                ]}
                renderUnlockedData={(count) => {
                  return (
                    <>
                      {uniqueParentes.slice(0, count).map((v: AnyRecord, i: number) => {
                        // Tentar diferentes combinações de campos
                        const tipoRaw = v.tipo || v.tipo_vinculo || v.grau_parentesco || v.relacao;
                        // Verificar se o tipo é null (valor ou string "null")
                        const tipo = (tipoRaw && tipoRaw !== "null") ? tipoRaw : "Parentesco desconhecido";
                        const nome = v.nome || v.nome_vinculo || v.nome_parente;
                        const cpf = v.cpf || v.cpf_vinculo || v.cpf_parente;
                        const valor = nome || cpf || "N/A";
                        
                        return (
                          <DataRow
                            key={i}
                            label={tipo}
                            value={valor}
                          />
                        );
                      })}
                    </>
                  );
                }}
                onUnlock={async (batchSize, isMore) => {
                  const created = await handleUpsellPayment("Parentes e Vínculos");
                  if (!created) return;
                  openPix("Parentes e Vínculos", "R$ 14,90", batchSize, isMore, "upsell-purple");
                }}
              />
            </div>
          )}

          <div className="h-6" />
            </>
          )}
        </div>
      </main>
      

      <PixModal
        open={pixModal.open}
        onOpenChange={(v) => {
          setPixModal((p) => ({ ...p, open: v }));
          if (!v) setUserClosedModal(true); // Marca que o usuário fechou manualmente
        }}
        title={pixModal.title}
        price={pixModal.price}
        batchSize={pixModal.batchSize}
        isMore={pixModal.isMore}
        personName={relatorioData?.nome || 'N/A'}
        color={pixModal.color}
        pixCode={pixCode}
        pixCodeUrl={pixCodeUrl}
        searchId={searchId}
        tipo={pixModal.tipo}
        chargeId={chargeId}
        onPaymentConfirmed={aoConfirmarPagamento}
      />
    </>
  );
};

export default Relatorio;
