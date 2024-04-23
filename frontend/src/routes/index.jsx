import { Suspense } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { AppLoader, Layout } from '~/components';
import { useApp } from '~/providers';
import { publicRoutes } from './data';


const AppRoutes = () => {
  const { App } = useApp();


  if (App.loading) return <AppLoader />;
  return (
    <Suspense fallback={<AppLoader />}>
      <Routes>

        
        <Route element={  <Layout> <Outlet/> </Layout>}> 
          {publicRoutes.map(({ path, RouteComponent }, index) => (
            <Route key={path} exact element={<RouteComponent />} path={path} />
          ))}
        </Route>

      </Routes>

    </Suspense>
  );
};

export default AppRoutes;
