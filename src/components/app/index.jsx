import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { HomePage } from 'src/pages/home';
import { NewsPage } from 'src/pages/news';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/news" element={<NewsPage />} />
  </Routes>
);

const App = () => (
  <Router>
    <AppRoutes />
  </Router>
);

export { AppRoutes };

export default App;
