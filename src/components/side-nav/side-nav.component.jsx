import React from 'react';
import { Link } from 'react-router-dom';

import { FaUser } from 'react-icons/fa';
import { FaMountain } from 'react-icons/fa'
import { FaLeaf } from 'react-icons/fa'
import { GiHotMeal } from 'react-icons/gi'
import { FaClipboardList } from 'react-icons/fa'

import './side-nav.styles.scss';

const SideNav = () => (
    <div className='sidenav'>
        <div className='options'>
            <Link className='option' to='/profile'>
                <FaUser className='icon' />
                Profile
            </Link>
            <Link className='option' to='/goal'>
                <FaMountain className='icon' />
                Goal
            </Link>
            <Link className='option' to='/nutrition'>
                <FaLeaf className='icon' />
                Nutrition
            </Link>
            <Link className='option' to='/recipes'>
                <GiHotMeal className='icon' />
                Recipes
            </Link>
            <Link className='option' to='/instructions'>
                <FaClipboardList className='icon' />
                Instructions
            </Link>
        </div>
    </div>
);

export default SideNav;