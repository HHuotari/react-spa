import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <nav id="nav" class="navbar navbar-expand-md navbar dark bg-dark mb-4">
            <div class="container-fluid">
                <Link classname='navbar-brand' to='/'>SPA example</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contactus">Contact us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}