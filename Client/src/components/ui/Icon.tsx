import {
  AlertTriangle, ArrowDown, ArrowUp, BadgeCheck, BedDouble, Bell, Building,
  CalendarDays, ChevronLeft, ChevronRight, Download, Droplets, Edit3, Filter,
  Heart, HeartPulse, History, Home, Hospital, Info, LayoutGrid,
  Lightbulb, Minus, MinusCircle, MoreVertical, Package, Plus, PlusCircle, Search,
  RefreshCw, Settings, Shield, ShoppingCart, Snowflake, Sparkles, Tent, Trash2,
  TrendingDown, TrendingUp, Truck, User, UserCircle, Users, Utensils,
  Warehouse, Wifi, Wrench,
  type LucideIcon,
} from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  grid_view: LayoutGrid,
  inventory_2: Package,
  history: History,
  warning: AlertTriangle,
  notifications: Bell,
  account_circle: UserCircle,
  chevron_left: ChevronLeft,
  chevron_right: ChevronRight,
  search: Search,
  add_circle: PlusCircle,
  remove_circle: MinusCircle,
  add: Plus,
  remove: Minus,
  download: Download,
  filter_list: Filter,
  shopping_cart: ShoppingCart,
  person: User,
  calendar_month: CalendarDays,
  local_shipping: Truck,
  emergency: AlertTriangle,
  info: Info,
  trending_up: TrendingUp,
  trending_down: TrendingDown,
  arrow_downward: ArrowDown,
  arrow_upward: ArrowUp,
  move_up: ArrowUp,
  ac_unit: Snowflake,
  wifi: Wifi,
  sync: RefreshCw,
  water_drop: Droplets,
  masks: Shield,
  medical_services: HeartPulse,
  restaurant: Utensils,
  construction: Wrench,
  bed: BedDouble,
  soap: Sparkles,
  tent: Tent,
  light: Lightbulb,
  volunteer_activism: Heart,
  cottage: Home,
  corporate_fare: Building,
  local_hospital: Hospital,
  community: Users,
  badge: BadgeCheck,
  LOGISTICS_HQ: Warehouse,
  edit: Edit3,
  delete: Trash2,
  add_box: Plus,
  package_2: Package,
  emergency_home: AlertTriangle,
  more_vert: MoreVertical,
  settings: Settings,
}

interface IconProps {
  name: string
  className?: string
  size?: number
}

export default function Icon({ name, className, size = 20 }: IconProps) {
  const LucideIcon = iconMap[name]
  if (!LucideIcon) return null
  return <LucideIcon className={className} size={size} />
}
