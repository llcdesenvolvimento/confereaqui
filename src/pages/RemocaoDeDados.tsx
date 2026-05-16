import { useState, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import usePageMeta from "@/hooks/usePageMeta";
import { ShieldCheck, CheckCircle2, Loader2, AlertCircle } from "lucide-react";

const formatarCpf = (value: string): string => {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `${digits.slice(0, 3)}.${digits.slice(3)}`;
  if (digits.length <= 9) return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6)}`;
  return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9)}`;
};

const cpfValido = (cpf: string): boolean => {
  const digits = cpf.replace(/\D/g, "");
  if (digits.length !== 11) return false;
  if (/^(\d)\1{10}$/.test(digits)) return false;
  let sum = 0;
  for (let i = 0; i < 9; i++) sum += parseInt(digits[i]) * (10 - i);
  let rest = (sum * 10) % 11;
  if (rest === 10) rest = 0;
  if (rest !== parseInt(digits[9])) return false;
  sum = 0;
  for (let i = 0; i < 10; i++) sum += parseInt(digits[i]) * (11 - i);
  rest = (sum * 10) % 11;
  if (rest === 10) rest = 0;
  return rest === parseInt(digits[10]);
};

const emailValido = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

const RemocaoDeDados = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  usePageMeta({
    title: "Confere Aqui - Solicitar Remoção de Dados",
    description: "Exerça seu direito de exclusão de dados pessoais conforme a LGPD (Lei nº 13.709/2018). Solicite a remoção das suas informações da Confere Aqui.",
    canonical: "https://confereaqui.com/remocao-de-dados",
  });
  const [cpf, setCpf] = useState("");
  const [confirmOwner, setConfirmOwner] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const cpfValid = cpfValido(cpf);
  const canSubmit =
    nome.trim().length >= 3 &&
    emailValido(email) &&
    cpfValid &&
    confirmOwner &&
    !loading;

  const handleCpfChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setCpf(formatarCpf(e.target.value));
  }, []);

  const handleSubmit = async () => {
    if (!canSubmit) return;
    setLoading(true);
    setSubmitError(null);

    try {
      const { data, error } = await supabase.functions.invoke("descadastrar-cpf", {
        body: {
          nome: nome.trim(),
          cpf: cpf.replace(/\D/g, ""),
          email: email.trim(),
          confirmacaoTitular: true,
          confirmacaoExclusao: true,
        },
      });

      if (error || !data?.success) {
        const message = data?.error || error?.message || "Erro ao solicitar remoção";
        setSubmitError(message);
        setLoading(false);
        return;
      }

      setSuccess(true);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Erro ao solicitar remoção";
      setSubmitError(message);
    } finally {
      setLoading(false);
    }
  };

  const cpfDigits = cpf.replace(/\D/g, "");
  const cpfFilled = cpfDigits.length === 11;

  return (
    <>

      <main className="flex-1 py-8 md:py-14 px-3 sm:px-4">
        <div className="mx-auto max-w-xl">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2 leading-tight tracking-tight">
              Solicitar Remoção de Dados
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Respeitamos integralmente os seus direitos como titular. Conforme a <strong className="text-foreground">Lei Geral de Proteção de Dados (LGPD)</strong>, você pode solicitar a exclusão dos seus dados pessoais da nossa plataforma a qualquer momento, sem custo e sem necessidade de justificativa.
            </p>
          </div>

          {success ? (
            <div
              className="bg-card rounded-2xl shadow-xl border border-success/30 p-6 sm:p-8 text-center"
              style={{ animation: "fade-scale-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)" }}
            >
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-success/15 mb-4">
                <CheckCircle2 className="h-8 w-8 text-success" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                Solicitação Enviada!
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto mb-4">
                Em até <strong className="text-foreground">24 horas</strong>, seus dados pessoais deixarão de estar disponíveis para consulta em nossa plataforma.
              </p>
              <div className="bg-muted/50 rounded-xl p-4 text-left text-xs text-muted-foreground leading-relaxed">
                <p className="font-semibold text-foreground mb-1">Direitos garantidos pela LGPD:</p>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Confirmação da exclusão dos dados</li>
                  <li>Informação sobre o tratamento realizado</li>
                  <li>Possibilidade de revogar o consentimento a qualquer momento</li>
                </ul>
              </div>
              <button
                onClick={() => (window.location.href = "/")}
                className="mt-5 w-full flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-base sm:text-lg font-bold text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:brightness-110 transition-all active:scale-[0.98]"
              >
                Voltar ao Início
              </button>
            </div>
          ) : (
            <div className="bg-card rounded-2xl border border-border p-5 sm:p-7">
              {/* Nome */}
              <div className="mb-4">
                <label htmlFor="nome" className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Nome Completo
                </label>
                <input
                  id="nome"
                  type="text"
                  placeholder="Informe seu nome completo"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  disabled={loading}
                  className="w-full rounded-xl border border-input bg-background px-4 py-3.5 text-base font-medium text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all disabled:opacity-50"
                />
              </div>

              {/* Email */}
              <div className="mb-4">
                <label htmlFor="email-remocao" className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  E-mail
                </label>
                <input
                  id="email-remocao"
                  type="email"
                  placeholder="Informe seu e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                  className="w-full rounded-xl border border-input bg-background px-4 py-3.5 text-base font-medium text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all disabled:opacity-50"
                />
              </div>

              {/* CPF */}
              <div className="mb-4">
                <label htmlFor="cpf-remocao" className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  CPF
                </label>
                <div className="relative">
                  <input
                    id="cpf-remocao"
                    type="text"
                    inputMode="numeric"
                    placeholder="000.000.000-00"
                    value={cpf}
                    onChange={handleCpfChange}
                    disabled={loading}
                    maxLength={14}
                    className="w-full rounded-xl border border-input bg-background px-4 py-3.5 text-base font-semibold text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all disabled:opacity-50"
                  />
                  {cpfFilled && (
                    <span className="absolute right-3.5 top-1/2 -translate-y-1/2">
                      {cpfValid ? (
                        <CheckCircle2 className="h-5 w-5 text-success" />
                      ) : (
                        <AlertCircle className="h-5 w-5 text-destructive" />
                      )}
                    </span>
                  )}
                </div>
                {cpfFilled && !cpfValid && (
                  <p className="mt-2 text-xs text-destructive flex items-center gap-1">
                    <AlertCircle className="h-3.5 w-3.5" />
                    Informe um CPF válido
                  </p>
                )}
              </div>

              {/* Checkbox */}
              <label className="flex items-start gap-2.5 mt-4 cursor-pointer">
                <input
                  type="checkbox"
                  checked={confirmOwner}
                  onChange={(e) => setConfirmOwner(e.target.checked)}
                  disabled={loading}
                  className="mt-0.5 h-4 w-4 rounded border-input accent-primary"
                />
                <span className="text-xs text-muted-foreground leading-relaxed">
                  Confirmo que sou o <strong className="text-foreground">titular do CPF informado</strong> e desejo exercer meus direitos sobre os meus dados pessoais.
                </span>
              </label>

              {/* Submit */}
              <button
                disabled={!canSubmit}
                onClick={handleSubmit}
                className="mt-5 w-full flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-base sm:text-lg font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:shadow-primary/30 hover:brightness-110 active:scale-[0.98] disabled:opacity-35 disabled:cursor-not-allowed disabled:shadow-none"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <ShieldCheck className="h-5 w-5" />
                    Solicitar Remoção
                  </>
                )}
              </button>

              {submitError && (
                <p className="mt-3 text-center text-xs text-destructive flex items-center justify-center gap-1">
                  <AlertCircle className="h-3.5 w-3.5" />
                  {submitError}
                </p>
              )}
            </div>
          )}
        </div>
      </main>


      <style>{`
        @keyframes fade-scale-in {
          0% { opacity: 0; transform: scale(0.95) translateY(20px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </>
  );
};

export default RemocaoDeDados;