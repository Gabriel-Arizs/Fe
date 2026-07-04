import type { Activity } from "../types/Inventory";
import Icon from "../../../components/ui/Icon";

export interface ActivityItemProps {
  activity: Activity;
}

export function ActivityItem({ activity }: ActivityItemProps) {
  const isEntry = activity.type === "ENTRADA";
  const iconColor = isEntry ? "text-primary" : "text-error";
  const bgColor = isEntry ? "bg-primary-fixed/50" : "bg-error-container";
  const symbol = isEntry ? "add" : "remove";

  return (
    <div className="flex items-center gap-4 p-4 rounded-2xl border border-outline-variant/20 hover:shadow-md transition-shadow bg-surface-container-lowest">
      <div
        className={`w-10 h-10 ${bgColor} ${iconColor} rounded-xl flex items-center justify-center`}
      >
        <Icon name={symbol} size={16} className="font-bold" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start">
          <p className="text-sm font-bold text-on-surface truncate">
            {activity.product}
          </p>
          <p className={`text-sm font-bold ${iconColor}`}>
            {isEntry ? "+" : "-"}
            {activity.amount}
          </p>
        </div>
        <div className="flex justify-between items-center mt-0.5">
          <p className="text-[10px] font-medium text-on-surface-variant/60 truncate">
            {activity.location}
          </p>
          <p className="text-[10px] font-bold text-on-surface-variant/30">
            {activity.time}
          </p>
        </div>
      </div>
    </div>
  );
}
