import InventoryManagementPanel from '../features/inventory-management/InventoryManagementPanel'
import type { InventoryItem } from '../features/inventory-management/types'

const mockItems: InventoryItem[] = [
  { id: '1', name: 'Amoxicilina 500mg', sku: 'MED-AX-992', category: 'MEDICINA', currentStock: 120, maxStock: 1500, expirationDate: '12 Oct 2024', status: 'critico', icon: 'medical_services' },
  { id: '2', name: 'Arroz Fortificado', sku: 'FOD-RZ-441', category: 'ALIMENTOS', currentStock: 4500, maxStock: 5000, expirationDate: '20 Ene 2026', status: 'optimo', icon: 'restaurant' },
  { id: '3', name: 'Agua Mineral 5L', sku: 'WTR-BT-002', category: 'AGUA', currentStock: 600, maxStock: 2000, expirationDate: null, status: 'bajo', icon: 'water_drop' },
  { id: '4', name: 'Kit de Rescate', sku: 'TLS-KT-119', category: 'HERRAMIENTAS', currentStock: 50, maxStock: 50, expirationDate: null, status: 'optimo', icon: 'construction' },
  { id: '5', name: 'Mantas Térmicas XL', sku: 'THR-MT-332', category: 'LOGÍSTICA', currentStock: 1200, maxStock: 3000, expirationDate: null, status: 'bajo', icon: 'bed' },
  { id: '6', name: 'Vendas Estériles', sku: 'MED-VE-554', category: 'MEDICINA', currentStock: 80, maxStock: 500, expirationDate: '15 Mar 2025', status: 'critico', icon: 'medical_services' },
  { id: '7', name: 'Kits de Higiene Familiar', sku: 'HYG-KH-221', category: 'HIGIENE', currentStock: 340, maxStock: 800, expirationDate: null, status: 'bajo', icon: 'soap' },
  { id: '8', name: 'Suero Oral', sku: 'MED-SO-778', category: 'MEDICINA', currentStock: 2000, maxStock: 2500, expirationDate: '30 Jun 2025', status: 'optimo', icon: 'medical_services' },
  { id: '9', name: 'Carpa Familiar 4P', sku: 'SHEL-CP-009', category: 'HERRAMIENTAS', currentStock: 45, maxStock: 100, expirationDate: null, status: 'bajo', icon: 'tent' },
  { id: '10', name: 'Pastillas Potabilizadoras', sku: 'WTR-PP-100', category: 'AGUA', currentStock: 5000, maxStock: 10000, expirationDate: '08 Nov 2025', status: 'bajo', icon: 'water_drop' },
  { id: '11', name: 'Guantes Quirúrgicos', sku: 'MED-GQ-666', category: 'MEDICINA', currentStock: 40, maxStock: 300, expirationDate: '22 Feb 2025', status: 'critico', icon: 'medical_services' },
  { id: '12', name: 'Lámparas Solares', sku: 'ENE-LS-001', category: 'HERRAMIENTAS', currentStock: 120, maxStock: 150, expirationDate: null, status: 'optimo', icon: 'light' },
]

export default function InventoryPage() {
  return (
    <InventoryManagementPanel
      items={mockItems}
      categories={['ALIMENTOS', 'MEDICINA', 'AGUA', 'HERRAMIENTAS', 'HIGIENE', 'LOGÍSTICA']}
      onAddItem={() => console.log('Add item')}
      onExport={() => console.log('Export')}
      onEdit={(item) => console.log('Edit:', item)}
      onDelete={(item) => console.log('Delete:', item)}
    />
  )
}
