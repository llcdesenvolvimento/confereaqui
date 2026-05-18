import { User, Mail, MapPin, Phone, Briefcase, DollarSign, Users } from "lucide-react";

const FieldRow = ({ valueWidth }: { valueWidth: string }) => (
  <div>
    <div className="h-1.5 w-14 rounded-full bg-muted-foreground/30" />
    <div className={`h-2 ${valueWidth} rounded-full bg-foreground mt-1.5`} />
  </div>
);

const FloatingCard = ({
  Icon,
  color,
}: {
  Icon: typeof Mail;
  color: "blue" | "amber" | "emerald" | "violet" | "rose" | "sky";
}) => {
  const colorClasses = {
    blue: { bg: "bg-primary/12", icon: "text-primary" },
    amber: { bg: "bg-amber-500/15", icon: "text-amber-500" },
    emerald: { bg: "bg-emerald-500/15", icon: "text-emerald-500" },
    violet: { bg: "bg-violet-500/15", icon: "text-violet-500" },
    rose: { bg: "bg-rose-500/15", icon: "text-rose-500" },
    sky: { bg: "bg-sky-500/15", icon: "text-sky-500" },
  }[color];

  return (
    <div className="bg-card rounded-2xl shadow-xl shadow-slate-900/10 p-3 flex items-center gap-2.5">
      <div className={`shrink-0 h-9 w-9 rounded-xl ${colorClasses.bg} flex items-center justify-center`}>
        <Icon className={`h-[18px] w-[18px] ${colorClasses.icon}`} strokeWidth={2.4} />
      </div>
      <div className="flex-1 min-w-0 space-y-1.5">
        <div className="h-1.5 w-full rounded-full bg-muted-foreground/30" />
        <div className="h-1.5 w-3/4 rounded-full bg-muted-foreground/20" />
      </div>
    </div>
  );
};

const HeroIllustration = () => (
  <div className="relative w-full max-w-[520px] mx-auto flex flex-col gap-3 sm:gap-4">
    {/* Card principal */}
    <div className="relative bg-card rounded-3xl shadow-2xl shadow-slate-900/15 p-5 sm:p-6">
      <div className="absolute -top-4 -left-6 h-20 w-20 rounded-full bg-primary/10 blur-md -z-10" />
      <div className="absolute -bottom-4 -right-6 h-24 w-24 rounded-full bg-primary/10 blur-md -z-10" />

      {/* Header */}
      <div className="flex items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-3 min-w-0">
          <div className="shrink-0 h-10 w-10 rounded-xl bg-primary/12 flex items-center justify-center">
            <User className="h-5 w-5 text-primary" strokeWidth={2.4} />
          </div>
          <div className="min-w-0">
            <p className="text-[15px] font-extrabold text-foreground leading-tight truncate">Relatório Consolidado</p>
            <div className="h-2 w-20 rounded-full bg-muted-foreground/30 mt-1" />
          </div>
        </div>
      </div>

      <div className="h-px bg-border" />

      {/* Grid de campos */}
      <div className="grid grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-3.5 mt-4">
        <FieldRow valueWidth="w-[85%]" />
        <FieldRow valueWidth="w-[65%]" />
        <FieldRow valueWidth="w-[60%]" />
        <FieldRow valueWidth="w-[45%]" />
        <FieldRow valueWidth="w-[80%]" />
        <FieldRow valueWidth="w-[55%]" />
        <FieldRow valueWidth="w-[70%]" />
        <FieldRow valueWidth="w-[50%]" />
      </div>

      <div className="h-px bg-border mt-4" />

      {/* Contact cards (dentro do card principal) */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-4">
        <FloatingCard Icon={Mail} color="blue" />
        <FloatingCard Icon={MapPin} color="amber" />
        <FloatingCard Icon={Phone} color="emerald" />
        <FloatingCard Icon={Briefcase} color="sky" />
        <FloatingCard Icon={DollarSign} color="rose" />
        <FloatingCard Icon={Users} color="violet" />
      </div>
    </div>
  </div>
);

export default HeroIllustration;
