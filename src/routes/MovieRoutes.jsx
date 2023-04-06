import { Route, Routes } from 'react-router-dom';

import Movie from '../pages/movie';

export function MovieRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Movie />} />
    </Routes>
  );
}
