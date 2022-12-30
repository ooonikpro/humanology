import React, { Suspense, useEffect } from 'react';
import { Route as RouteType, routes } from '../../routes';
import { Route, Routes, useLocation } from 'react-router-dom';
import { EVENT } from '../../constants/events';

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
    const location = useLocation();

    useEffect(() => window.top?.postMessage(JSON.stringify({
        eventName: EVENT.LOCATION_SYNC,
        data: location.pathname
    })), [location]);

    return (
        <Routes>
            { routes.map(createRoute) }
        </Routes>
    );
};
