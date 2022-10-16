import React, { Suspense } from 'react';
import { Route as RouteType, routes } from '../../routes';
import { Route, Routes } from 'react-router-dom';

const createRoute = (route: RouteType, key: number) => {
    const Container = React.lazy(route.container);
    const element = <Suspense><Container/></Suspense>;

    if (route.children && Array.isArray(route.children)) {
        return (
            <Route key={key} path={route.path} index={route.index} element={element}>
                { route.children.map(createRoute) }
            </Route>
        );
    }

    return (
        <Route key={key} path={route.path} element={element}/>
    );
};

export const AppRouter: React.FC = () => {
    return (
        <Routes>
            { routes.map(createRoute) }
        </Routes>
    );
};
