import Icon from "../../../components/ui/Icon";

export function MobileNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-8 h-24 md:hidden bg-surface-container/80 backdrop-blur-lg border-t border-outline-variant/30">
      <button className="flex flex-col items-center justify-center text-primary">
        <Icon name="grid_view" size={24} />
        <span className="text-[10px] font-bold mt-1">Panel</span>
      </button>
      <button className="flex flex-col items-center justify-center text-on-surface-variant/40">
        <Icon name="inventory_2" size={24} />
        <span className="text-[10px] font-bold mt-1">Inventario</span>
      </button>
      <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-on-primary -translate-y-4 shadow-lg shadow-primary/30">
        <Icon name="add" size={24} />
      </div>
      <button className="flex flex-col items-center justify-center text-on-surface-variant/40">
        <Icon name="history" size={24} />
        <span className="text-[10px] font-bold mt-1">Historial</span>
      </button>
      <button className="flex flex-col items-center justify-center text-on-surface-variant/40">
        <Icon name="settings" size={24} />
        <span className="text-[10px] font-bold mt-1">Ajustes</span>
      </button>
    </nav>
  );
}
