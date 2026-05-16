import { ArrowLeft } from "lucide-react";
import { type ReactNode } from "react";

interface LegalPageLayoutProps {
  eyebrow: string;
  title: string;
  updatedAt?: string;
  subtitle?: string;
  slug: string;
  children: ReactNode;
  contactEmail?: string;
}

const LegalPageLayout = ({
  title,
  updatedAt,
  subtitle,
  children,
  contactEmail = "suporte@confereaqui.com",
}: LegalPageLayoutProps) => {
  return (
    <main className="flex-1 py-8 md:py-14 px-3 sm:px-4">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-2xl border border-border bg-card overflow-hidden">
          {/* Hero */}
          <div className="px-6 sm:px-10 pt-7 pb-8">
            <a
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline mb-6"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Voltar para o site
            </a>
            <h1
              className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-[1.1] mb-2"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {title}
            </h1>
            {updatedAt && (
              <p className="text-sm text-muted-foreground">Atualizado em {updatedAt}</p>
            )}
            {!updatedAt && subtitle && (
              <p className="text-sm text-muted-foreground">{subtitle}</p>
            )}
          </div>

          {/* Content */}
          <div className="px-6 sm:px-10 pt-2 pb-8 [&_h2]:mt-7 [&_h2]:mb-3 [&_h2]:pt-7 [&_h2]:border-t [&_h2]:border-border [&_h2:first-of-type]:border-t-0 [&_h2:first-of-type]:pt-2 [&_h2:first-of-type]:mt-0 [&_h3]:mt-5 [&_h3]:mb-2">
            {children}

            <div className="mt-10 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Confere Aqui</strong>
                <br />
                Contato:{" "}
                <a href={`mailto:${contactEmail}`} className="text-primary hover:underline">
                  {contactEmail}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LegalPageLayout;
