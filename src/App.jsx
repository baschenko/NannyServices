import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx';
// import NanniesFeatures from './components/NanniesFeatures/NanniesFeatures.jsx';
// import NanniesReviews from './components/NanniesReviews/NanniesReviews.jsx';
import { Toaster } from 'react-hot-toast';
import FavoritePage from './pages/FavoritePage/FavoritePage.jsx';

const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const NanniesPage = lazy(() => import('./pages/NanniesPage/NanniesPage.jsx'));
const NanniesCardsPage = lazy(() =>
  import('./pages/NanniesCardsPage/NanniesCardsPage.jsx')
);

export default function App() {
  return (
    <>
      {/* <Layout> */}
      <Suspense
        fallback={
          <Toaster
            position="top-center"
            toastOptions={{
              duration: 5000,
              style: {
                background: 'var(--white)',
                color: 'var(--text)',
              },
            }}
          />
        }
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />

            <Route path="/nannies" element={<NanniesPage />} />
            <Route path="/nannies/:nannieId" element={<NanniesCardsPage />} />
            <Route path="/favorite" element={<FavoritePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
      {/* </Layout> */}
    </>
  );
}
