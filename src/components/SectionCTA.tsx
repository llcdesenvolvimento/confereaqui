import { Link } from "react-router-dom";

const SectionCTA = () => (
  <div className="mt-10 sm:mt-12 flex justify-center px-3 sm:px-4">
    <Link
      to="/consultar"
      className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-primary px-7 sm:px-14 py-4 text-[18px] sm:text-[20px] font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:shadow-primary/30 hover:brightness-110 active:scale-[0.98]"
    >
      Consultar Agora
    </Link>
  </div>
);

export default SectionCTA;
