import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Nav extends Component {
    render() {
        return (
            <header class="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
                <nav class="f6 fw6 ttu tracked">
                    <Link to='/home'class="link dim white dib mr3" href="#" title="Home">Home</Link>
                    <Link to='/register'class="link dim white dib mr3" href="#" title="Register">Register</Link>
                    <Link to='/contact'class="link dim white dib" href="#" title="Contact">Contact</Link>
                </nav>
            </header>
        )
    }
}

export default Nav;