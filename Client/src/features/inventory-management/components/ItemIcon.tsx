import Icon from '../../../components/ui/Icon'
import type { InventoryCategory } from "../types/inventory";
import { CATEGORY_STYLES, ACCENT_CLASSES } from "../data/inventoryStyles";

interface ItemIconProps {
  icon: string;
  category: InventoryCategory;
}

export function ItemIcon({ icon, category }: ItemIconProps) {
  const style = CATEGORY_STYLES[category];
  const accent = ACCENT_CLASSES[style.accentColor];

  return (
    <div
      className={`w-12 h-12 rounded-xl flex items-center justify-center ${style.iconBg} ${accent.text}`}
    >
      <Icon name={icon} size={24} />
    </div>
  );
}
