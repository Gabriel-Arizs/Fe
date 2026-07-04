import Icon from '../../../components/ui/Icon'

interface InventoryHeaderProps {
  onExport?: () => void;
  onNewItem?: () => void;
}

export function InventoryHeader({ onExport, onNewItem }: InventoryHeaderProps) {
  return (
    <header className="mb-stack-lg flex flex-col md:flex-row md:items-end justify-between gap-stack-lg">
      <div>
        <h1 className="font-display-lg text-display-lg text-on-surface">
          Gestión de Inventario
        </h1>
        <p className="text-on-surface-variant font-body-md text-body-md mt-1">
          Monitoreo y control de suministros humanitarios en tiempo real.
        </p>
      </div>
      <div className="flex items-center gap-stack-md">
        <button
          onClick={onExport}
          className="flex items-center gap-2 px-6 py-3 bg-surface-container-low text-primary font-bold rounded-xl active:scale-95 transition-all border border-primary/20"
        >
          <Icon name="download" size={20} />
          <span>Exportar</span>
        </button>
        <button
          onClick={onNewItem}
          className="flex items-center gap-2 px-6 py-3 bg-primary text-on-primary font-bold rounded-xl shadow-lg shadow-primary/20 active:scale-95 transition-all"
        >
          <Icon name="add" size={20} />
          <span>Nuevo Item</span>
        </button>
      </div>
    </header>
  );
}
