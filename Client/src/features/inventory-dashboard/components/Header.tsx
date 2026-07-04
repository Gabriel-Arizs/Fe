import Icon from "../../../components/ui/Icon";

export function Header() {
  return (
    <header className="bg-background/80 backdrop-blur-md sticky top-0 z-50 w-full px-margin-mobile md:px-margin-desktop py-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="text-2xl md:text-3xl font-bold text-primary tracking-tight">
            Inventario de Emergencia
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-8">
            <a
              className="text-primary font-bold border-b-2 border-primary pb-1"
              href="#"
            >
              Panel
            </a>
            <a
              className="text-on-surface-variant font-medium hover:text-primary transition-colors"
              href="#"
            >
              Inventario
            </a>
            <a
              className="text-on-surface-variant font-medium hover:text-primary transition-colors"
              href="#"
            >
              Actividad
            </a>
            <a
              className="text-on-surface-variant font-medium hover:text-primary transition-colors"
              href="#"
            >
              Alertas
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="w-12 h-12 flex items-center justify-center bg-surface-container rounded-2xl text-primary hover:scale-105 transition-transform">
              <Icon name="notifications" />
            </button>
            <button className="w-12 h-12 flex items-center justify-center bg-primary rounded-2xl text-on-primary hover:scale-105 transition-transform shadow-lg shadow-primary/20">
              <Icon name="person" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
