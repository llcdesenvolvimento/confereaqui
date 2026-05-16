import { Search } from "lucide-react";

const CTABanner = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById("cpf-search")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="py-4 px-3 sm:px-4">
      <div className="mx-auto max-w-xl">
        <a
          href="#lookup-form"
          onClick={handleClick}
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-[17px] sm:text-[19px] font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:shadow-primary/30 hover:brightness-110 active:scale-[0.98]"
        >
          <Search className="h-5 w-5" />
          Consultar Agora
        </a>
      </div>
    </div>
  );
};

export default CTABanner;
