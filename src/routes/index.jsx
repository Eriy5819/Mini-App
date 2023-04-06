import { Navigate, Route, Routes } from 'react-router-dom';

import { DashboardRoutes } from './DashboardRoutes';
import { MovieRoutes } from './MovieRoutes';

export function AppRoutes() {
  return (
    <Routes>
      <Route path='dashboard/*' element={<DashboardRoutes />} />
      <Route path='movie/*' element={<MovieRoutes />} />
      <Route path='' element={<Navigate to='/dashboard' replace={true} />} />
    </Routes>
  );
}
