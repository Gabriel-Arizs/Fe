import type { ReactNode } from "react";
import Icon from "../../../components/ui/Icon";

export interface StatCardProps {
  icon: string;
  iconWrapperClassName: string;
  label: string;
  value: ReactNode;
  hint: string;
  valueClassName?: string;
  hintClassName?: string;
}

export function StatCard({
  icon,
  iconWrapperClassName,
  label,
  value,
  hint,
  valueClassName = "text-primary",
  hintClassName = "text-primary/80",
}: StatCardProps) {
  return (
    <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-[0_10px_40px_rgba(124,58,237,0.04)] border border-outline-variant/30 flex flex-col gap-4">
      <div
        className={`w-12 h-12 rounded-2xl flex items-center justify-center ${iconWrapperClassName}`}
      >
        <Icon name={icon} size={24} />
      </div>
      <div>
        <p className="text-xs font-bold text-on-surface-variant/60 uppercase tracking-widest">
          {label}
        </p>
        <div className="flex items-baseline gap-2">
          <span className={`text-3xl font-bold ${valueClassName}`}>
            {value}
          </span>
          <span className={`text-xs font-bold ${hintClassName}`}>{hint}</span>
        </div>
      </div>
    </div>
  );
}
