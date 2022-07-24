import React from 'react'

import { NavLink } from 'react-router-dom'

import './Navigation.css'

const Navigaton = () => {
    return (
        <header>
            <link rel="stylesheet" href="https://use.typekit.net/tru2emh.css"></link>
            <div className='heading'>
                <div className='menuItem'>
                    <NavLink className='menuItemText' to='/luke_lind'>
                        projects
                    </NavLink>
                </div>
                <div className='menuItem'>
                    <NavLink className='menuItemText' to='/music'>
                        music
                    </NavLink>
                </div>
                <div className='menuItem'>
                    <NavLink className='menuItemText' to='/about'>
                        about me
                    </NavLink>
                </div>
            </div>

        </header>
    );
}

export default Navigaton
