import React from 'react'
import Logo from '../images/logo.png'
import Menu from '../images/menu.svg'

const Header = () => {
  return (
    <header className='header'>
        <nav className='header-nav'>
            <a href="http://sch2.glusk.edu.by/ru/main.aspx"><img className='logo-img' src={Logo} alt="Лого" width="82" height="101"/></a>
            <ul className='nav-links'>
                <li className='nav-item'><a href='/'>ГЛАВНОЕ</a></li>
                <li className='nav-item'><a href='/info'>ИНФОРМАЦИЯ</a></li>
                <li className='nav-item'><a href='/about'>О НАС</a></li>
            </ul>
            <button className='menu_btn'>
                <img className='menu-img' src={Menu} alt='меню' width="52" height="25"/>
            </button>
            <div className='menu_wrapper'>
                <ul>
                    {/* <li><a href='#'>Глусский район в годы ВОВ</a></li> */}
                    <li><a href='/memory'>Память о погибших</a></li>
                    {/* <li><a href='#'>Партизанское движение</a></li>
                    <li><a href='#'>Герои - земляки</a></li> */}
                    <li><a href='/monuments'>Памятники и мемориалы</a></li>
                    <li><a href='/child-memory'>Детские Воспоминания</a></li>
                    <li><a href='/holocost'>Глусский Холокост</a></li>
                    <li><a href='/teachers'>Учителя - Фронтовики</a></li>
                    {/* <li><a href='#'>Глусские о войне</a></li> */}
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Header