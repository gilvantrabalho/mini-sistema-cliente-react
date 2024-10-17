import React from "react";

const Container = ({ children }) => {

    return (
        <div className="container bg-white rounded p-4 mt-3 shadow-sm">
            {children}
        </div>
    );

}

export default Container;