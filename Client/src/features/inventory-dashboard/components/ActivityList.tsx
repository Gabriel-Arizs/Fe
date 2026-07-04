import type { Activity } from "../types/Inventory";
import Icon from "../../../components/ui/Icon";
import { ActivityItem } from "./ActivityItem";

export interface ActivityListProps {
  activities: Activity[];
}

export function ActivityList({ activities }: ActivityListProps) {
  const reversed = [...activities].reverse();

  return (
    <div className="bg-surface-container-lowest rounded-[2.5rem] p-8 md:p-10 shadow-[0_20px_60px_rgba(124,58,237,0.04)] border border-outline-variant/30">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-lg font-bold text-primary">Historial</h3>
        <Icon name="history" className="text-primary/30" />
      </div>
      <div className="space-y-4 max-h-[320px] overflow-y-auto no-scrollbar">
        {reversed.map((activity) => (
          <ActivityItem key={activity.id} activity={activity} />
        ))}
      </div>
    </div>
  );
}
