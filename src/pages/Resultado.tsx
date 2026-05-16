import { useState, useEffect, useRef, useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import usePageMeta from "@/hooks/usePageMeta";
import HowItWorks from "@/components/HowItWorks";
import { supabase } from "@/lib/supabase";
import {
  CheckCircle2,
  Lock,
  ArrowRight,
  UserCheck,
  Loader2,
  Copy,
  Check,
  AlertCircle,
  Search,
  Fingerprint,
  BadgeCheck,
} from "lucide-react";
import pixLogo from "@/assets/pix-logo.png";

/* ── helpers ─────────────────────────────────────────────────── */
const formatarCpfExibicao = (cpf: string) => {
  const d = cpf.replace(/\D/g, "");
  if (d.length !== 11) return cpf;
  return `${d.slice(0, 3)}.${d.slice(3, 6)}.${d.slice(6, 9)}-${d.slice(9)}`;
};

const obterPrimeiroNome = (fullName: string | undefined | null) => {
  if (!fullName) return "";
  const parts = fullName.trim().split(/\s+/).filter(Boolean);
  return parts[0] || "";
};


const STARRED_ITEMS = ["Telefones", "Endereços", "Participações em CNPJs", "Vínculos Familiares"];

const CAMPOS_VISIVEIS_PREVIA = ["Nome Completo", "Data de Nascimento", "Sexo"];

const TABLE_ROWS = [
"Nome Completo",
"Data de Nascimento",
"Sexo",
"Idade",
"Signo",
"Nacionalidade",
"Nome da Mãe",
"Situação do CPF",
"Histórico Profissional",
"E-mails",
"Telefones",
"Endereços",
"Participações em CNPJs",
"Vínculos Familiares"];


/* ── component ───────────────────────────────────────────────── */
const Consulta = () => {
  usePageMeta({
    title: "Confere Aqui - Consulta",
    description: "Área de consulta restrita com conteúdo dinâmico. Dados obtidos exclusivamente de fontes públicas em conformidade com a LGPD.",
    robots: "noindex, nofollow",
  });
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const searchId = searchParams.get("id") || "";

  // Estado para dados do CPF vindos do banco
  const [cpfData, setCpfData] = useState<{cpf: string;nome: string;nome_mascarado?: string;data_nascimento: string;sexo: string;} | null>(null);
  const [loading, setLoading] = useState(true);
  const [dataError, setDataError] = useState<string | null>(null);

  const cpf = cpfData?.cpf || "00000000000";

  const totalDestaques = useMemo(() => {
    const seed = (cpfData?.cpf || searchId).replace(/\D/g, "");
    let h = 0;
    for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
    return 14 + (h % 13);
  }, [cpfData?.cpf, searchId]);
  const formattedCPF = formatarCpfExibicao(cpf);
  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [paymentState, setPaymentState] = useState<"idle" | "generating" | "pending">("idle");
  const [copied, setCopied] = useState(false);
  const [pixCode, setPixCode] = useState("");
  const [pixCodeUrl, setPixCodeUrl] = useState("");
  const [chargeId, setChargeId] = useState<string | null>(null);
  const [checkingManually, setCheckingManually] = useState(false);
  const [pixImageLoading, setPixImageLoading] = useState(false);
  const [pixImageError, setPixImageError] = useState(false);
  const toastTimeout = useRef<ReturnType<typeof setTimeout>>();

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const showEmailError = emailTouched && email.length > 0 && !isEmailValid;

  // Função para verificar pagamento manualmente
  const verificarPagamentoManualmente = async () => {
    if (!chargeId) {
      console.error('❌ Charge ID não disponível');
      return;
    }

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
        const txId = data.transaction_id;
        const url = txId
          ? `/relatorio?search_id=${searchId}&transaction_id=${txId}`
          : `/relatorio?search_id=${searchId}`;
        navigate(url);
      }
    } catch (err) {
      console.error('❌ Erro na verificação manual:', err);
    } finally {
      setCheckingManually(false);
    }
  };

  const pagamentoExpirado = (createdAt?: string | null, pixExpiresAt?: string | null) => {
    const baseTime = pixExpiresAt || createdAt;
    if (!baseTime) return true;
    const ts = new Date(baseTime).getTime();
    if (Number.isNaN(ts)) return true;
    return Date.now() - ts > 60 * 60 * 1000;
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  // Buscar dados do CPF do banco usando search_id
  useEffect(() => {
    const buscarDadosCpf = async () => {
      if (!searchId) {
        setDataError('ID de busca não fornecido');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/buscar-dados-basicos`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
          },
          body: JSON.stringify({
            search_id: searchId
          })
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error('Erro ao buscar dados:', errorData);
          setDataError('Consulta não encontrada');
          setLoading(false);
          return;
        }

        const result = await response.json();

        if (!result.success || !result.data) {
          setDataError('Consulta não encontrada');
        } else {
          setCpfData(result.data);
        }
      } catch (err) {
        console.error('Erro ao buscar dados:', err);
        setDataError('Erro ao carregar dados');
      } finally {
        setLoading(false);
      }
    };

    buscarDadosCpf();
  }, [searchId]);

  // 🔄 Polling: Verifica status do pagamento a cada 10 segundos
  useEffect(() => {
    if (!searchId || paymentState !== "pending") {
      return;
    }

    const verificarStatusPagamento = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/verificar-pagamento`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
            },
            body: JSON.stringify({
              search_id: searchId,
              tipo: 'relatório completo'
            })
          }
        );

        if (!response.ok) {
          console.error('❌ Erro HTTP ao verificar status:', response.status);
          return;
        }

        const data = await response.json();

        if (data.found && data.status) {
          if (data.status === 'paid' || data.status === 'completed') {
            const txId = data.transaction_id;
            const url = txId
              ? `/relatorio?search_id=${searchId}&transaction_id=${txId}`
              : `/relatorio?search_id=${searchId}`;
            navigate(url);
          }
        }
      } catch (err) {
        console.error('❌ Erro no polling:', err);
      }
    };

    // Verifica imediatamente
    verificarStatusPagamento();

    // E depois a cada 10 segundos
    const intervalId = setInterval(verificarStatusPagamento, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, [searchId, paymentState, navigate]);

  // 🔁 Restore pending payment on page reload (within 60 minutes)
  useEffect(() => {
    if (!searchId || paymentState !== "idle") return;

    const restaurarPagamento = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/verificar-pagamento`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
            },
            body: JSON.stringify({
              search_id: searchId,
              tipo: 'relatório completo'
            })
          }
        );

        if (!response.ok) {
          return;
        }

        const data = await response.json();
        if (!data?.found) return;

        if (data.status === 'paid' || data.status === 'completed') {
          const txId = data.transaction_id;
          const url = txId
            ? `/relatorio?search_id=${searchId}&transaction_id=${txId}`
            : `/relatorio?search_id=${searchId}`;
          navigate(url);
          return;
        }

        const expired = pagamentoExpirado(data.created_at, data.pix_expires_at);
        
        if (expired) {
          const cpfForPayment = (cpfData?.cpf || '').replace(/\D/g, '');
          if (cpfForPayment.length !== 11) {
            console.error('❌ CPF inválido para regenerar pagamento expirado:', cpfData?.cpf);
            return;
          }

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
                  cpf: cpfForPayment,
                  email: data.email_usuario || '',
                  searchId: searchId,
                  tipo: 'relatório completo'
                })
              }
            );

            if (criarPagamentoResponse.ok) {
              const newPaymentData = await criarPagamentoResponse.json();
              if (newPaymentData.success && newPaymentData.payment) {
                setEmail(data.email_usuario || "");
                setPixCode(newPaymentData.payment.qr_code || "");
                setPixCodeUrl(newPaymentData.payment.qr_code_url || "");
                setChargeId(newPaymentData.payment.charge_id || null);
                setPaymentState("pending");
                setTimeout(() => {
                  document.getElementById("qr-code-section")?.scrollIntoView({ behavior: "smooth", block: "center" });
                }, 200);
              }
            }
          } catch (err) {
            console.error('❌ Erro ao regenerar pagamento expirado:', err);
          }
          return;
        }

        if (data.qr_code || data.qr_code_url) {
          setEmail(data.email_usuario || "");
          setPixCode(data.qr_code || "");
          setPixCodeUrl(data.qr_code_url || "");
          setChargeId(data.pagarme_charge_id || null);
          setPaymentState("pending");
          setTimeout(() => {
            document.getElementById("qr-code-section")?.scrollIntoView({ behavior: "smooth", block: "center" });
          }, 200);
        }
      } catch (err) {
        console.error('❌ Erro ao restaurar pagamento:', err);
      }
    };

    restaurarPagamento();
  }, [searchId, paymentState, navigate, cpfData?.cpf]);

  useEffect(() => {
    const t = setTimeout(() => setShowToast(true), 300);
    return () => {
      clearTimeout(t);
      if (toastTimeout.current) clearTimeout(toastTimeout.current);
    };
  }, []);

  useEffect(() => {
    if (!pixCodeUrl && !pixCode) return;
    setPixImageLoading(true);
    setPixImageError(false);
  }, [pixCodeUrl, pixCode]);

  // Função para retornar o valor de cada campo baseado nos dados reais
  const obterValorCampo = (label: string): React.ReactNode => {
    if (!cpfData) return null;

    switch (label) {
      case "Nome Completo":
        return cpfData.nome_mascarado || cpfData.nome;
      case "Data de Nascimento":
        return cpfData.data_nascimento;
      case "Sexo":
        return cpfData.sexo;
      default:
        return null;
    }
  };

  const iniciarPagamento = async () => {
    setEmailTouched(true);
    if (!isEmailValid) return;

    setPaymentState("generating");

    try {
      if (!searchId) {
        console.error("searchId não encontrado para criar pagamento");
        alert("Erro: ID da consulta não encontrado. Tente novamente.");
        setPaymentState("idle");
        return;
      }

      // 1️⃣ Primeiro: criar o pagamento
      const { data: paymentData, error: paymentError } = await supabase.functions.invoke(
        'criar-pagamento',
        {
          body: {
            cpf,
            email,
            searchId,
            tipo: 'relatório completo'
          }
        }
      );

      if (paymentError || paymentData && !paymentData.success) {
        console.error('Erro ao salvar pagamento:', paymentError || paymentData?.error);
        setPaymentState("idle");
        return;
      }

      const realPixCode = paymentData?.payment?.qr_code || "";
      const realPixCodeUrl = paymentData?.payment?.qr_code_url || "";
      const realChargeId = paymentData?.payment?.charge_id || null;

      setPixCode(realPixCode);
      setPixCodeUrl(realPixCodeUrl);
      setChargeId(realChargeId);

      // ⚡ Mostrar PIX imediatamente
      setPaymentState("pending");

      // Scroll suave após um pequeno delay para garantir que o DOM foi atualizado
      setTimeout(() => {
        document.getElementById("qr-code-section")?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);

      // 2️⃣ Depois de exibir o QR Code: buscar dados completos em background
      const cpfDigits = cpf.replace(/\D/g, "");
      void supabase.functions
        .invoke("buscar-cpf-completo", {
          body: { cpf: cpfDigits, searchId }
        })
        .then(({ data: fullData, error: fullError }) => {
          if (fullError || fullData && !fullData.success) {
            console.error("❌ Erro ao buscar dados completos:", fullError || fullData?.error);
            return;
          }
        })
        .catch((err) => {
          console.error("❌ Erro ao buscar dados completos:", err);
        });
    } catch (error) {
      console.error('Payment error:', error);
      setPaymentState("idle");
    }
  };

  const copiarCodigoPix = () => {
    if (!pixCode) return;
    navigator.clipboard.writeText(pixCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <>
      <main className="flex-1 py-6 px-2 sm:px-3">
        <div className="mx-auto max-w-2xl lg:max-w-3xl space-y-4">
          {/* Loading state */}
          {loading &&
          <div className="bg-card border border-border rounded-xl px-6 py-8 text-center">
              <Loader2 className="h-8 w-8 animate-spin mx-auto mb-3 text-primary" />
              <p className="text-foreground font-medium">Carregando dados...</p>
            </div>
          }

          {/* Error state / Empty state */}
          {dataError && !loading &&
          <div className="bg-card border border-border rounded-xl px-6 py-10 text-center space-y-4">
              {!searchId ? (
                <>
                   <Search className="h-10 w-10 mx-auto text-primary" />
                   <div className="space-y-2">
                     <h1 className="text-lg font-bold text-foreground">
                       Área de Consulta de CPF
                     </h1>
                     <h2 className="text-sm font-medium text-muted-foreground max-w-md mx-auto leading-relaxed">
                       Após realizar uma consulta na página inicial, você verá aqui uma prévia com as seguintes informações vinculadas ao CPF pesquisado
                     </h2>
                    <ul className="text-sm text-muted-foreground text-left max-w-xs mx-auto space-y-1.5 mt-3">
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" /> Nome Completo</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" /> Data de Nascimento</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" /> Sexo</li>
                      <li className="flex items-center gap-2"><Lock className="h-3.5 w-3.5 text-muted-foreground shrink-0" /> Telefones e E-mails</li>
                      <li className="flex items-center gap-2"><Lock className="h-3.5 w-3.5 text-muted-foreground shrink-0" /> Endereços</li>
                      <li className="flex items-center gap-2"><Lock className="h-3.5 w-3.5 text-muted-foreground shrink-0" /> Participações em CNPJs</li>
                      <li className="flex items-center gap-2"><Lock className="h-3.5 w-3.5 text-muted-foreground shrink-0" /> Vínculos Familiares</li>
                      <li className="flex items-center gap-2"><Lock className="h-3.5 w-3.5 text-muted-foreground shrink-0" /> Histórico Profissional</li>
                    </ul>
                    <p className="text-xs text-muted-foreground mt-3">
                      O relatório completo pode ser adquirido por <strong className="text-foreground">R$ 18,90</strong> via Pix.
                    </p>
                  </div>
                  <a
                    href="/consultar"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:brightness-110 active:scale-[0.98]"
                  >
                    <Search className="h-4 w-4" />
                    Realizar Consulta
                  </a>
                </>
              ) : (
                <>
                  <AlertCircle className="h-8 w-8 mx-auto text-destructive" />
                  <p className="text-foreground font-semibold">
                    Ocorreu um erro na consulta deste CPF. Por favor, retorne mais tarde.
                  </p>
                  <a
                    href="/"
                    className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:brightness-110 active:scale-[0.98]"
                  >
                    Voltar ao Início
                  </a>
                </>
              )}
            </div>
          }

          {/* Main content - only show if no error and not loading */}
          {!loading && !dataError && cpfData &&
          <>
          {/* ── SUCCESS TOAST ─────────────────────────────── */}
          <div
              className={`transition-all duration-700 ease-out ${
              showToast ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-6 scale-90"}`
              }
              style={{ transitionDelay: showToast ? "0ms" : "0ms" }}>

            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-success/15 to-success/5 border border-success/20 px-5 py-4 flex items-center gap-4">
              <div className="relative shrink-0">
                <span className="absolute inset-0 rounded-full bg-success/40 animate-ping" />
                <div className="relative h-11 w-11 rounded-full bg-success flex items-center justify-center shadow-lg shadow-success/40">
                  <BadgeCheck className="h-6 w-6 text-white" strokeWidth={2.5} />
                </div>
              </div>
              <div className="relative">
                <p className="text-sm font-extrabold text-success leading-tight">Consulta efetuada com sucesso</p>
                <p className="text-xs mt-0.5 text-success/80">Dados localizados para o CPF {formattedCPF}</p>
              </div>
            </div>
          </div>

          {/* ── DATA PREVIEW ────────────────────────────── */}
          <section className="animate-fade-in">
            <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-card to-primary/5 shadow-md p-4 flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <UserCheck className="h-5 w-5 text-primary" strokeWidth={2.2} />
              </div>
              <div className="min-w-0 flex-1 grid grid-cols-2 gap-3">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground leading-none">Primeiro Nome</p>
                  <p className="text-sm font-extrabold text-foreground truncate leading-tight mt-1">
                    {obterPrimeiroNome(cpfData.nome_mascarado)}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground leading-none">CPF</p>
                  <p className="text-sm font-extrabold text-foreground tabular-nums tracking-tight leading-tight mt-1">
                    {formattedCPF}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── REPORT TABLE ─────────────────────────────── */}
          <section className="animate-fade-in" style={{ animationDelay: "0.15s", animationFillMode: "both" }}>
            <div className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden">
              {/* Header */}
              <button
                type="button"
                onClick={() => document.getElementById("payment-section")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                className="w-full text-left bg-primary px-5 sm:px-7 py-4 transition-all hover:brightness-110 active:scale-[0.995]"
              >
                <h3 className="text-[17px] sm:text-[19px] font-bold text-white mb-1">
                  Resultado da Consulta
                </h3>
                <p className="text-[14px] sm:text-[16px] text-white/80 flex items-center gap-1 flex-wrap">
                  Foram encontradas até
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/15 backdrop-blur text-white font-bold">
                    {totalDestaques} informações
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </p>
              </button>

              <div className="divide-y divide-border">
                {TABLE_ROWS.map((label, i) => {
                    const isStarred = STARRED_ITEMS.includes(label);
                    const campoVisivelNaPrevia = CAMPOS_VISIVEIS_PREVIA.includes(label);
                    return (
                      <button
                        type="button"
                        key={i}
                        onClick={() => document.getElementById("payment-section")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                        className="w-full text-left flex items-start justify-between gap-3 px-4 sm:px-6 py-3.5 hover:bg-muted/20 transition-colors cursor-pointer">
                        <span className="text-[15px] sm:text-sm font-medium text-foreground whitespace-nowrap shrink-0">
                          {label}
                          {isStarred && <span className="text-primary ml-0.5 text-xs">*</span>}
                        </span>
                        {campoVisivelNaPrevia ?
                        <span className="text-[15px] sm:text-sm text-foreground font-medium text-right break-words min-w-0">
                            {obterValorCampo(label)}
                          </span> :

                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-success/10 text-success text-[13px] sm:text-xs font-bold shrink-0">
                            <CheckCircle2 className="h-3 w-3" />
                            Verificado
                          </span>
                        }
                      </button>);

                  })}
              </div>

              {/* Asterisk note */}
              <div className="px-5 sm:px-7 py-3 border-t border-border">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Itens marcados com <span className="text-primary font-semibold">*</span> podem ser desbloqueados separadamente após a aquisição do relatório.
                </p>
              </div>

              {/* Footer CTA */}
              <div className="bg-[hsl(220,15%,97%)] px-5 sm:px-7 py-6 border-t border-border">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="flex flex-col items-center gap-1.5">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground leading-snug max-w-md" style={{ fontFamily: "'Outfit', sans-serif" }}>
                      Desbloqueie todas as informações do CPF{" "}
                      <span className="text-primary tabular-nums">{formattedCPF}</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Acesso imediato após o pagamento via PIX
                    </p>
                  </div>
                  <button
                      onClick={() => document.getElementById("payment-section")?.scrollIntoView({ behavior: "smooth" })}
                      className="w-full sm:w-auto inline-flex items-center justify-center bg-primary text-primary-foreground text-base sm:text-[17px] font-bold px-8 py-4 rounded-xl hover:brightness-110 transition-all active:scale-[0.97] shadow-lg shadow-primary/25 whitespace-nowrap">
                    Obter o Relatório Completo
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* ── PAYMENT / OFFER SECTION ──────────────────── */}
          <section id="payment-section" className="scroll-mt-20 animate-fade-in" style={{ animationDelay: "0.3s", animationFillMode: "both" }}>
            <div className="relative bg-card rounded-2xl border border-border shadow-xl overflow-hidden">
              

              <div className="p-5 sm:p-8">
                <div className="text-center mb-6">
                  <h3 className="text-xl sm:text-2xl font-normal text-foreground mb-1 leading-snug">
                    Acesse o <strong className="font-extrabold">Relatório Completo</strong> do CPF <strong className="font-extrabold">{formattedCPF}</strong> por apenas
                  </h3>
                </div>

                {/* Price card */}
                <div className="bg-background rounded-2xl border border-border px-5 py-6 mb-5 text-center">
                  <div className="flex justify-center mb-4">
                    <span className="inline-flex items-center gap-2 px-8 py-2.5 rounded-full bg-primary text-primary-foreground text-lg sm:text-xl font-extrabold shadow-lg shadow-primary/30 animate-pulse-scale">
                      🔥 43% OFF!
                    </span>
                  </div>
                  <p className="text-lg text-muted-foreground line-through decoration-2 mb-1">
                    R$ 32,90
                  </p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-[62px] leading-none font-extrabold tracking-tighter text-success">R$18,90</span>
                  </div>
                  <div className="mt-4 flex justify-center">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-success/10 text-success text-base font-bold">
                      💰 Você economiza <span className="font-extrabold">R$14,00</span>
                    </span>
                  </div>
                  <p className="text-base text-muted-foreground mt-4">
                    Pagamento seguro via <strong className="text-foreground">PIX</strong>
                  </p>
                </div>

                {paymentState === "idle" &&
                  <>
                    <div className="mb-4">
                      <label className="block text-[13px] font-bold text-muted-foreground uppercase tracking-wider mb-2">
                        E-mail para receber o relatório
                      </label>
                      <input
                        type="email"
                        placeholder="seu@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={() => setEmailTouched(true)}
                        className={`w-full rounded-xl border bg-background px-4 py-3.5 text-base font-semibold text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 transition-all ${
                        showEmailError ?
                        "border-destructive focus:ring-destructive/40 focus:border-destructive" :
                        "border-input focus:ring-primary/40 focus:border-primary"}`
                        } />

                      {showEmailError &&
                      <p className="mt-1.5 text-xs text-destructive flex items-center gap-1">
                          <AlertCircle className="h-3.5 w-3.5" />
                          Digite um e-mail válido
                        </p>
                      }
                    </div>

                    <button
                      onClick={iniciarPagamento}
                      disabled={showEmailError}
                      className={`w-full flex items-center justify-center gap-2.5 rounded-xl px-6 py-4 text-base sm:text-lg font-bold shadow-lg transition-all hover:brightness-110 active:scale-[0.98] ${
                      showEmailError ?
                      "bg-muted text-muted-foreground cursor-not-allowed shadow-none" :
                      "bg-primary text-primary-foreground shadow-primary/20 hover:shadow-primary/30"}`
                      }>

                        <img src={pixLogo} alt="" aria-hidden className="h-5 w-5 object-contain brightness-0 invert" />
                        Concluir Pagamento
                    </button>

                    <p className="text-center text-[13px] sm:text-[15px] font-semibold text-muted-foreground mt-3 whitespace-nowrap">
                      Acesso imediato após o pagamento
                    </p>
                    <p className="text-center text-[11px] sm:text-[12px] text-muted-foreground/80 mt-2 leading-relaxed">
                      Seu e-mail será usado exclusivamente para gerar o pagamento e enviar o relatório no e-mail indicado.
                    </p>
                  </>
                  }

                {paymentState === "generating" &&
                  <>
                    <div className="mb-4">
                      <label className="block text-[13px] font-bold text-muted-foreground uppercase tracking-wider mb-2">
                        E-mail para receber o relatório
                      </label>
                      <input
                        type="email"
                        value={email}
                        disabled
                        className="w-full rounded-xl border border-input bg-muted/50 px-4 py-3.5 text-base font-semibold text-foreground opacity-60" />

                    </div>

                    <button
                      disabled
                      className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-base sm:text-lg font-bold text-primary-foreground shadow-lg shadow-primary/20 opacity-80">

                      <Loader2 className="h-5 w-5 animate-spin" />
                      Gerando Pagamento...
                    </button>

                    <p className="text-center text-[13px] sm:text-[15px] font-semibold text-muted-foreground mt-3 whitespace-nowrap">
                      Acesso imediato após o pagamento
                    </p>
                    <p className="text-center text-[11px] sm:text-[12px] text-muted-foreground/80 mt-2 leading-relaxed">
                      Seu e-mail será usado exclusivamente para gerar o pagamento e enviar o relatório no e-mail indicado.
                    </p>
                  </>
                  }

                {paymentState === "pending" &&
                  <div className="space-y-5 animate-fade-in">
                    {/* Header text - loose, not in card */}
                    <div className="text-center">
                      <p className="text-base sm:text-xl md:text-[22px] font-semibold text-foreground leading-relaxed">
                        Realize o pagamento para receber o{" "}
                        <strong className="text-primary">Relatório Completo</strong> do CPF{" "}
                        <strong className="text-primary whitespace-nowrap">{formattedCPF}</strong> no seu e-mail{" "}
                        <span className="bg-muted px-2 py-0.5 rounded font-bold break-all">{email}</span>
                      </p>
                    </div>

                    {/* QR Code Card */}
                    <div id="qr-code-section" className="rounded-2xl border border-border bg-card shadow-xl overflow-hidden">
                      {/* Card header */}
                      <div className="bg-primary/5 border-b border-border px-5 py-3 flex items-center justify-center gap-2">
                        <img src={pixLogo} alt="Pix" className="h-4 w-4 object-contain" />
                        <span className="text-[13px] font-bold uppercase tracking-widest text-primary">
                          Pague com Pix
                        </span>
                      </div>

                      {/* QR Code */}
                      <div className="flex flex-col items-center px-5 pt-5 pb-4">
                        <div className="bg-background border border-border rounded-xl p-4 shadow-inner relative">
                          {pixImageLoading && (
                            <div className="absolute inset-0 flex items-center justify-center bg-background/80 rounded-xl">
                              <div className="flex flex-col items-center gap-2">
                                <Loader2 className="h-6 w-6 animate-spin text-primary" />
                                <span className="text-[11px] text-muted-foreground">Carregando QR Code...</span>
                              </div>
                            </div>
                          )}
                          {pixImageError && (
                            <div className="absolute inset-0 flex items-center justify-center bg-background/90 rounded-xl">
                              <div className="flex flex-col items-center gap-2 text-center px-3">
                                <AlertCircle className="h-5 w-5 text-destructive" />
                                <span className="text-[11px] text-destructive">Nao foi possivel carregar o QR Code.</span>
                              </div>
                            </div>
                          )}
                          <img
                            src={pixCodeUrl || `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(pixCode)}`}
                            alt="QR Code Pix"
                            className="h-48 w-48 sm:h-52 sm:w-52"
                            onLoad={() => setPixImageLoading(false)}
                            onError={() => {
                              setPixImageLoading(false);
                              setPixImageError(true);
                            }} />

                        </div>
                        <p className="text-[11px] text-muted-foreground mt-3">
                          Escaneie com o app do seu banco
                        </p>
                      </div>

                      {/* Divider with "ou" */}
                      <div className="flex items-center gap-3 px-5">
                        <div className="flex-1 h-px bg-border" />
                        <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">ou</span>
                        <div className="flex-1 h-px bg-border" />
                      </div>

                      {/* Copy button */}
                      <div className="p-4">
                        <button
                          onClick={copiarCodigoPix}
                          className={`w-full flex items-center justify-center gap-2 rounded-xl px-6 py-4 text-[15px] font-bold transition-all active:scale-[0.98] shadow-lg ${
                          copied ?
                          "bg-green-500 text-white" :
                          "bg-primary text-primary-foreground shadow-primary/20 hover:brightness-110"}`
                          }>

                          {copied ?
                          <>
                              <Check className="h-4.5 w-4.5" />
                              Código Pix copiado!
                            </> :

                          <>
                              <Copy className="h-4.5 w-4.5" />
                              Pix Copia e Cola
                            </>
                          }
                        </button>
                        
                      </div>
                    </div>

                    {/* Payment status - more attractive */}
                    <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 overflow-hidden shadow-md">
                      <div className="px-5 py-4 flex items-center gap-3 border-b border-primary/10 bg-primary/5">
                        <div className="relative flex items-center justify-center">
                          <div className="h-3.5 w-3.5 rounded-full bg-primary animate-pulse" />
                          <div className="absolute h-6 w-6 rounded-full bg-primary/20 animate-ping" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-foreground">Pagamento pendente</p>
                          <p className="text-[10px] text-muted-foreground">Verificando automaticamente...</p>
                        </div>
                        
                      </div>
                      <div className="px-5 py-5 space-y-3 text-sm text-muted-foreground leading-relaxed">
                        <p>
                          Seu pagamento está pendente. Assim que for confirmado, você será redirecionado automaticamente para o relatório completo e receberá os resultados no seu e-mail{" "}
                          <span className="bg-muted px-2 py-0.5 rounded font-bold text-foreground">{email}</span>.
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          A confirmação pode levar até <strong className="text-foreground">60 segundos</strong>.
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Caso o pagamento não seja identificado automaticamente, <strong className="text-foreground">clique no botão abaixo para realizar a verificação manual</strong>.
                        </p>
                        
                        {/* Botão de verificação manual */}
                        {chargeId &&
                        <div className="pt-2">
                            <button
                            onClick={verificarPagamentoManualmente}
                            disabled={checkingManually}
                            className="w-full flex items-center justify-center gap-2 bg-primary hover:brightness-110 rounded-xl px-4 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                            
                              {checkingManually ?
                            <>
                                  <Loader2 className="h-4 w-4 animate-spin" />
                                  Verificando...
                                </> :

                            <>
                                  <CheckCircle2 className="h-4 w-4" />
                                  Verificar meu pagamento
                                </>
                            }
                            </button>
                          </div>
                        }
                      </div>
                    </div>
                  </div>
                  }
              </div>
            </div>
          </section>
          <HowItWorks ctaText="Obter o Relatório Completo" ctaHref="#payment-section" />
          </>
          }
        </div>
      </main>
    </>);



};

export default Consulta;