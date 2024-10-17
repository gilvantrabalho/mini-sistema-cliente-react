import React from 'react';

import Navbar from '../../components/navbar/Navbar';

const DefaultLayout = ({ children }) => {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main>
                {children}
            </main>
        </div>
    );
};

export default DefaultLayout;
