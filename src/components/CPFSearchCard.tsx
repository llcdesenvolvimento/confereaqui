import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Search, AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { useBuscarCpf } from "@/hooks/useBuscarCpf";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const PURPOSES: { value: string; title: string; description: string }[] = [
  {
    value: "legitimo-interesse",
    title: "Legítimo interesse",
    description: "Uso pessoal com motivo válido",
  },
  {
    value: "confirmacao-identidade",
    title: "Confirmação de identidade",
    description: "Conferir identidade da pessoa",
  },
  {
    value: "ciclo-credito",
    title: "Ciclo de crédito",
    description: "Avaliar crédito antes de fechar",
  },
  {
    value: "execucao-contrato",
    title: "Execução de contrato",
    description: "Antes de fechar um acordo",
  },
  {
    value: "outros",
    title: "Outros",
    description: "Outra finalidade não listada",
  },
];

const formatDoc = (value: string): string => {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `${digits.slice(0, 3)}.${digits.slice(3)}`;
  if (digits.length <= 9) return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6)}`;
  return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9)}`;
};

const isValidDoc = (value: string): boolean => {
  const digits = value.replace(/\D/g, "");
  if (digits.length !== 11) return false;
  if (/^(\d)\1{10}$/.test(digits)) return false;
  let sum = 0;
  for (let i = 0; i < 9; i++) sum += parseInt(digits[i]) * (10 - i);
  let rest = sum * 10 % 11;
  if (rest === 10) rest = 0;
  if (rest !== parseInt(digits[9])) return false;
  sum = 0;
  for (let i = 0; i < 10; i++) sum += parseInt(digits[i]) * (11 - i);
  rest = sum * 10 % 11;
  if (rest === 10) rest = 0;
  return rest === parseInt(digits[10]);
};

const CPFSearchCard = () => {
  const navigate = useNavigate();
  const [doc, setDoc] = useState("");
  const [purpose, setPurpose] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const { buscar, loading: buscarLoading } = useBuscarCpf();

  const digits = doc.replace(/\D/g, "");
  const isFilled = digits.length === 11;
  const isValid = isFilled && isValidDoc(doc);
  const showInvalidCpf = isFilled && !isValid;

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setDoc(formatDoc(e.target.value));
    setErrorMsg("");
  }, []);

  const handleSubmit = async () => {
    if (buscarLoading) return;
    if (!isValid) {
      setErrorMsg("Digite um CPF válido para continuar");
      return;
    }
    if (!purpose) {
      setErrorMsg("Indique a finalidade da consulta antes de continuar");
      return;
    }

    setErrorMsg("");

    try {
      const result = await buscar(digits, purpose);

      if (!result.success) {
        setErrorMsg(result.error?.message || 'Erro ao buscar CPF');
        return;
      }

      navigate(`/consulta?id=${result.searchId}`);
    } catch (error) {
      console.error('Error searching CPF:', error);
      setErrorMsg('Erro ao realizar busca. Tente novamente.');
    }
  };

  return (
    <>
    <section id="lookup-form" className="pt-8 md:pt-11 pb-6 md:pb-8 px-3 sm:px-4">
      <div className="mx-auto max-w-xl">
        <div className="text-center mb-5 sm:mb-7 px-2">
          <h1
            className="text-[34px] leading-[1.1] sm:text-[42px] md:text-[52px] md:leading-[1.05] font-extrabold text-foreground tracking-tight"
            style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}
          >
            Consulta de CPF
          </h1>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-md mx-auto">
            Consulte informações confiáveis de forma rápida, segura e simplificada.
          </p>
        </div>

        <div className="bg-card rounded-xl shadow-[0_40px_100px_-20px_hsl(220_95%_54%_/_0.45),0_15px_40px_-12px_hsl(220_30%_20%_/_0.22)] px-4 py-7 sm:px-8 sm:py-8 text-left">
          <label htmlFor="doc-input" className="block text-[11px] font-bold text-foreground/80 uppercase tracking-wider mb-2">
            Insira o CPF que deseja consultar
          </label>
          <div className="relative">
            <input
              id="doc-input"
              name="doc"
              type="text"
              inputMode="numeric"
              placeholder="EX: 000.000.000-00"
              value={doc}
              onChange={handleChange}
              disabled={buscarLoading}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck={false}
              data-form-type="other"
              data-lpignore="true"
              data-1p-ignore="true"
              className="w-full rounded-xl border border-[hsl(220,15%,82%)] bg-background px-4 py-3.5 text-base font-semibold text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all disabled:opacity-50"
              maxLength={14}
              aria-describedby="doc-hint" />

            {isFilled &&
            <span className="absolute right-3.5 top-1/2 -translate-y-1/2">
                {isValid ? <CheckCircle2 className="h-5 w-5 text-success" /> : <AlertCircle className="h-5 w-5 text-destructive" />}
              </span>
            }
          </div>

          {isFilled && !isValid &&
          <p id="doc-hint" className="mt-2 text-xs text-destructive flex items-center gap-1">
              <AlertCircle className="h-3.5 w-3.5" />
              Digite um CPF válido
            </p>
          }

          <label htmlFor="purpose-select" className="block text-[11px] font-bold text-foreground/80 uppercase tracking-wider mt-5 mb-2">
            Indique a finalidade da consulta
          </label>
          <Select
            value={purpose}
            onValueChange={(v) => {
              setPurpose(v);
              setErrorMsg("");
            }}
            disabled={buscarLoading}
          >
            <SelectTrigger
              id="purpose-select"
              className="w-full rounded-xl border border-[hsl(220,15%,82%)] bg-background px-4 py-3.5 h-auto text-base font-semibold text-foreground data-[placeholder]:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all disabled:opacity-50 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:stroke-[2.5]"
            >
              <SelectValue placeholder="Selecione uma opção">
                {purpose && PURPOSES.find((o) => o.value === purpose)?.title}
              </SelectValue>
            </SelectTrigger>
            <SelectContent
              position="popper"
              side="bottom"
              sideOffset={4}
              avoidCollisions={false}
              className="max-w-[calc(100vw-2rem)]"
            >
              {PURPOSES.map((opt) => (
                <SelectItem key={opt.value} value={opt.value} className="py-3 pr-8">
                  <div className="flex flex-col gap-0.5 whitespace-normal">
                    <span className="text-sm font-bold text-foreground">{opt.title}</span>
                    <span className="text-xs text-muted-foreground leading-snug">{opt.description}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
            Ao continuar, você concorda com os <a href="/termos-de-uso" className="text-primary font-medium hover:underline">Termos de Uso</a> e a <a href="/politica-de-privacidade" className="text-primary font-medium hover:underline">Política de Privacidade</a>.
          </p>

          <button
            disabled={showInvalidCpf || buscarLoading}
            onClick={handleSubmit}
            className="mt-4 w-full flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-[17px] sm:text-[19px] font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:shadow-primary/30 hover:brightness-110 active:scale-[0.98] disabled:opacity-35 disabled:cursor-not-allowed disabled:shadow-none">

            {buscarLoading ?
            <><Loader2 className="h-5 w-5 animate-spin" />Consultando...</> :
            <><Search className="h-5 w-5" />Consultar Agora</>
            }
          </button>

          {errorMsg &&
          <p className="mt-3 text-sm text-destructive flex items-center gap-2">
              <AlertCircle className="h-4 w-4" />
              {errorMsg}
            </p>
          }
        </div>
      </div>
    </section>
    </>
  );

};

export default CPFSearchCard;
