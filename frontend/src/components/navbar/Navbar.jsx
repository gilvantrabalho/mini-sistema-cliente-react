import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo/logo.jpg';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <div className="container bg-white rounded p-3 shadow-sm">
                <Link to='/' className="navbar-brand" href="#">
                    <img src={logo} alt="" width={80} />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-dark fw-bold" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Cliente
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/">Lista</Link></li>
                                <li><Link className="dropdown-item" to="/client-register">Cadastrar</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-dark fw-bold" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Representante
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/representative-list">Lista</Link></li>
                                <li>
                                    <Link className="dropdown-item" to="/representative-register">Cadastrar</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
}