import React from 'react';
import { Route as RouteType, routes } from '../../routes';
import { Route, Routes } from 'react-router-dom';

const createRoute = (route: RouteType, key: number) => {
    const Container = route.container;

    if (route.children && Array.isArray(route.children)) {
        return (
            <Route key={key} path={route.path} index={route.index} element={<Container/>}>
                { route.children.map(createRoute) }
            </Route>
        );
    }

    return (
        <Route key={key} path={route.path} element={<Container/>}/>
    );
};

export const AppRouter: React.FC = () => {
    return (
        <Routes>
            { routes.map(createRoute) }
        </Routes>
    );
};
