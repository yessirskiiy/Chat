import React from 'react';
import {Route,Routes,Navigate} from "react-router-dom";
import {authRoutes, publicRoutes} from "../../utils/routes";
import {MAIN_ROUTE} from "../../utils/const/routes";


const  AppRouter = () => {
    const isAuth = false

        return(
            <Routes>
                {isAuth && authRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={<Component/>} exact/>
                )}
                {publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={<Component/>} exact/>
                )}
                <Route path='*' element={<Navigate to={MAIN_ROUTE}/>} />
            </Routes>
        );
};

export default AppRouter