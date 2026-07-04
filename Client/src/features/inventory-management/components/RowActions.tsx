import Icon from '../../../components/ui/Icon'

interface RowActionsProps {
  onEdit?: () => void;
  onDelete?: () => void;
}

export function RowActions({ onEdit, onDelete }: RowActionsProps) {
  return (
    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
      <button
        onClick={onEdit}
        className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-all"
        aria-label="Editar"
      >
        <Icon name="edit" size={20} />
      </button>
      <button
        onClick={onDelete}
        className="p-2 text-error hover:bg-error-container/20 rounded-lg transition-all"
        aria-label="Eliminar"
      >
        <Icon name="delete" size={20} />
      </button>
    </div>
  );
}
