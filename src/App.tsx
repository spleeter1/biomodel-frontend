import './App.css';
import Header from './components/header';
// import Home from './components/main/home';
// import FrameContent from './components/main/frameContent';
import PanelLeft from './components/sidebar/panelLeft';

import listParams from './data/listParams.json';
import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Outlet,
} from 'react-router-dom';
import BeagleParams from './components/main/beaglePramas';
import Minimac4Params from './components/main/minimac4Params';
import HistoryParams from './components/main/historyParams';
import Home from './components/main/home';
import GRUDparams from './components/main/GRUDparams';
import HeartDiseaseParams from './components/main/HeartDiseaseParams';
import PlinkParams from './components/main/PlinkParams';
import Login from './components/login';
import Register from './components/register';
import SkinCancerParams from './components/main/SkinCancerParams';
import VGPdiseasesParams from './components/main/VGPdiseasesParams';
import PRSice2Params from './components/main/PRSice2Params';

const componentMapping: { [key: string]: React.ComponentType<any> } = {
    Beagle: BeagleParams,
    Minimac4: Minimac4Params,
    GRUD: GRUDparams,
    HeartDisease: HeartDiseaseParams,
    Plink: PlinkParams,
    SkinCancer: SkinCancerParams,
    VGPdiseases: VGPdiseasesParams,
    'Prsice-2': PRSice2Params,
};
// console.log(componentMapping);
type Route = {
    path: string;
    element: JSX.Element;
};
const objects = () => {
    let x: Route[] = [];
    Object.entries(listParams).flatMap(([, value]) => {
        Object.entries(value).forEach(([k]) => [
            x.push({
                path: `/${k}`,
                element: React.createElement(componentMapping[k]),
            }),
        ]);
    });
    return x;
};

const router = createBrowserRouter([
    {
        path: '/login',
        element: (
            <div>
                <Login />
                <div style={{ margin: '-8px -7px' }}>
                    <Header />
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <PanelLeft />
                        <Home />

                        <HistoryParams />
                    </div>
                </div>
            </div>
        ),
    },
    {
        path: '/',
        element: (
            <div style={{ margin: '-8px -7px' }}>
                <Header />
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <PanelLeft />
                    <Home />
                    <HistoryParams />
                </div>
            </div>
        ),
    },
    {
        path: '/',
        element: (
            <div style={{ margin: '-8px -7px' }}>
                <Header />
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <PanelLeft />
                    {<Home /> && <Outlet />}
                    <HistoryParams />
                </div>
            </div>
        ),
        children: objects(),
    },
    {
        path: '/register',
        element: (
            <div>
                <Register />
                <div style={{ margin: '-8px -7px' }}>
                    <Header />
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <PanelLeft />
                        <Home />

                        <HistoryParams />
                    </div>
                </div>
            </div>
        ),
    },
]);

function App() {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
