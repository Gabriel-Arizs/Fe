import { NavLink } from 'react-router'
import Icon from '../ui/Icon'

const navLinks = [
  { to: '/dashboard', icon: 'grid_view', label: 'Dashboard' },
  { to: '/inventory', icon: 'inventory_2', label: 'Inventory' },
  { to: '/activity', icon: 'history', label: 'Activity' },
  { to: '/alerts', icon: 'warning', label: 'Alerts' },
]

export default function Navbar() {
  return (
    <>
      {/* Desktop Navbar */}
      <header className="bg-surface-bright border-b border-outline-variant sticky top-0 z-50">
        <div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <span className="text-headline-md text-primary font-bold tracking-tight">ReliefFlow</span>
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-4 py-2 rounded-8 text-label-lg font-semibold transition-colors ${
                      isActive
                        ? 'bg-primary-container text-on-primary-container'
                        : 'text-on-surface-variant hover:bg-secondary-container hover:text-on-surface'
                    }`
                  }
                >
                  <Icon name={link.icon} size={20} />
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-8 hover:bg-secondary-container transition-colors">
              <Icon name="notifications" size={24} className="text-on-surface-variant" />
            </button>
            <button className="p-2 rounded-8 hover:bg-secondary-container transition-colors">
              <Icon name="account_circle" size={24} className="text-on-surface-variant" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-surface-bright border-t border-outline-variant z-50">
        <div className="flex items-center justify-around h-16 px-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-8 transition-colors ${
                  isActive ? 'text-primary' : 'text-on-surface-variant'
                }`
              }
            >
              <Icon name={link.icon} size={24} />
              <span className="text-[10px] font-semibold leading-tight">{link.label}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  )
}
