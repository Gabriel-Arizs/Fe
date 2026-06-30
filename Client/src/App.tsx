import { Suspense, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router'
import AppLayout from './components/layout/AppLayout'

const DashboardPage = lazy(() => import('./pages/DashboardPage'))
const InventoryPage = lazy(() => import('./pages/InventoryPage'))
const ActivityPage = lazy(() => import('./pages/ActivityPage'))
const AlertsPage = lazy(() => import('./pages/AlertsPage'))

function LoadingScreen() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        <span className="text-label-lg text-on-surface-variant">Cargando...</span>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route
          path="dashboard"
          element={
            <Suspense fallback={<LoadingScreen />}>
              <DashboardPage />
            </Suspense>
          }
        />
        <Route
          path="inventory"
          element={
            <Suspense fallback={<LoadingScreen />}>
              <InventoryPage />
            </Suspense>
          }
        />
        <Route
          path="activity"
          element={
            <Suspense fallback={<LoadingScreen />}>
              <ActivityPage />
            </Suspense>
          }
        />
        <Route
          path="alerts"
          element={
            <Suspense fallback={<LoadingScreen />}>
              <AlertsPage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  )
}
