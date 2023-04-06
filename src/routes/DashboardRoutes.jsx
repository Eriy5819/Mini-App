import { Route, Routes } from 'react-router-dom';

import Dashboard from '../pages/dashboard';

export function DashboardRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
    </Routes>
  );
}
