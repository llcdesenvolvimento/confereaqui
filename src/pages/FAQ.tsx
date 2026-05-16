import FAQ from "@/components/FAQ";
import usePageMeta from "@/hooks/usePageMeta";

const FAQPage = () => {
  usePageMeta({
    title: "Confere Aqui - FAQ",
    description: "Tire suas dúvidas sobre a consulta de CPF da Confere Aqui: como funciona, formas de pagamento, prazo, suporte e finalidades permitidas pela LGPD.",
    canonical: "https://confereaqui.com/faq",
  });

  return (
    <main className="flex-1">
      <FAQ />
    </main>
  );
};

export default FAQPage;
