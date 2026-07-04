export interface QuantityStepperProps {
  value: number;
  onChange: (value: number) => void;
}

import Icon from "../../../components/ui/Icon";

export function QuantityStepper({ value, onChange }: QuantityStepperProps) {
  function adjust(delta: number) {
    onChange(Math.max(1, value + delta));
  }

  return (
    <div className="space-y-2">
      <label className="text-xs font-bold text-on-surface-variant/40 uppercase tracking-widest px-2">
        Cantidad
      </label>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => adjust(-1)}
          className="w-16 h-16 shrink-0 flex items-center justify-center bg-surface-container-low rounded-2xl text-primary hover:bg-primary-fixed/30 transition-colors"
        >
          <Icon name="remove" />
        </button>
        <input
          className="flex-1 min-w-0 h-16 bg-surface-container-low border-none rounded-2xl focus:ring-2 focus:ring-primary/20 font-bold text-2xl text-center [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          min={1}
          required
          type="number"
          value={value}
          onChange={(e) =>
            onChange(Math.max(1, parseInt(e.target.value, 10) || 1))
          }
        />
        <button
          type="button"
          onClick={() => adjust(1)}
          className="w-16 h-16 shrink-0 flex items-center justify-center bg-surface-container-low rounded-2xl text-primary hover:bg-primary-fixed/30 transition-colors"
        >
          <Icon name="add" />
        </button>
      </div>
    </div>
  );
}
