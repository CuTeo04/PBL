import React, { Component } from 'react';
import {
    createBrowserRouter,
    RouterProvider,
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import { Admin, CalenderTable, DoctorProfilePanel, FindDoctorPanel, Login, Register } from './module';
import { NavBar } from './component';
import styled from 'styled-components';
import path from 'path';

const NavbarContainer = styled.div`
    --navbar-height: 52px;
    height:  var(--navbar-height);
`;

const RouteContainer = styled.div`
    --navbar-height: 52px;
    height:  calc(100% - var(--navbar-height));
`;

const routers = [
    {
        path: "/",
        Component: FindDoctorPanel
    },
    {
        path: '/sign-in',
        Component: Login
    },
    {
        path: '/sign-up',
        Component: Register
    },
    {
        path: '/doctor-profile',
        Component: DoctorProfilePanel
    },
    {
        path: '/dashboard',
        Component: CalenderTable
    },
    {
        path: '/admin',
        Component: Admin
    }

];

export default function App() {
    return (
        <BrowserRouter >
            <NavbarContainer>
                <NavBar />
            </NavbarContainer>
            <RouteContainer className='p-5'>
                <Routes>
                    {routers.map(router =>
                        <Route {...router} key={router.path} />
                    )}
                </Routes>
            </RouteContainer>
        </BrowserRouter>
    );
}


