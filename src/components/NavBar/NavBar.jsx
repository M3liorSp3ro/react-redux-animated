import React from 'react'
import { useHistory } from 'react-router-dom'
import { paths } from '../../constants'
import { useDispatch } from 'react-redux'
import { animateAction } from '../../store/animate'

import './style.css'


export const NavBar = () => {

    const history = useHistory()
    const dispatch = useDispatch()

    const handleClickLink = (path) => (e) => {
        e.preventDefault()
        dispatch(animateAction.setStartAnimate(true))

        const animateTimeout = setTimeout(() => {
            dispatch(animateAction.setStartAnimate(false))
            history.push(path)
            clearTimeout(animateTimeout)
        }, 700)
    }
    return (
        <div className="navbar">
            <a className='navbar-link' href="#" onClick={handleClickLink(paths.main)}>Главная</a>
            <a className='navbar-link' href="#" onClick={handleClickLink(paths.about)}>О нас</a>
            <a className='navbar-link' href="#" onClick={handleClickLink(paths.settings)}>Настройки</a>
            <a className='navbar-link' href="#" onClick={handleClickLink(paths.datalist)}>DataList</a>
        </div>
    )
}