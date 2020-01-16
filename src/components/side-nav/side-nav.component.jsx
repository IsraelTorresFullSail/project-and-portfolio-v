import React from 'react';
import { Link } from 'react-router-dom';

import RandomUser from '../random-user/random-user.component';
import Help from '../help/help.component'

import { FaUser } from 'react-icons/fa';
import { GiStairsGoal } from 'react-icons/gi'
import { IoIosLeaf } from 'react-icons/io'
import { GiHotMeal } from 'react-icons/gi'
import { FaClipboardList } from 'react-icons/fa'

import './side-nav.styles.scss';

const SideNav = () => (
    <div className='sidenav'>
        <RandomUser />
        <div className='options'>
            <Link className='option' to='/profile'>
                <FaUser className='icon' />
                Profile
            </Link>
            <Link className='option' to='/goal'>
                <GiStairsGoal className='icon' />
                Goal
            </Link>
            <Link className='option' to='/nutrition'>
                <IoIosLeaf className='icon' />
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
        <Help />
    </div>
);

export default SideNav;