import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import DefaultLayout from './layouts/default/DefaultLayout';

import ClientList from './pages/client/list/List';
import RegisterClient from './pages/client/register/Register';
import EditClient from './pages/client/edit/Edit';
import RepresentativeRegister from './pages/representative/register/Register';
import RepresentativeList from './pages/representative/list/List';

function App() {
    return (
        <Router>
            <DefaultLayout>
                <Routes>
                    <Route exact path="/" element={<ClientList />} />
                    <Route exact path="/client-register" element={<RegisterClient />} />
                    <Route exact path="/edit-client/:id" element={<EditClient />} />

                    <Route exact path="/representative-list" element={<RepresentativeList />} />
                    <Route exact path="/representative-register" element={<RepresentativeRegister />} />

                </Routes>
            </DefaultLayout>
        </Router>
    );
}

export default App;
