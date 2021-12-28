import React from 'react'
import { NavLink } from "react-router-dom"
import 'antd/dist/antd.css'
import { Button, Avatar, Dropdown, Menu } from 'antd'
import { UserOutlined, MenuOutlined } from '@ant-design/icons'
import portfolioIcon from '../../images/portfolio_icon.png'
import '../../css/Nav.css'

const Nav = (props) => {

    const [pathname, setPathname] = React.useState(window.location.hash)

    console.log(window.location)

    const NavHeader = (props) => {

        return (
            <div id='header' onClick={() => {setPathname('#/')}}>
                <NavLink to="/">
                    <Avatar src={portfolioIcon} shape='square' size='large' icon={<UserOutlined />}/>
                </NavLink>
                <NavLink to="/">
                    <span id='headerLabel1' > Leon Djusberg </span>
                    <span id='headerLabel2' > LD </span>
                </NavLink>
            </div>
        )
    }

    const NavOptions = (props) => {

        return (
            <span id='options' >

                <NavLink to="/">
                    <Button id='1' onClick={() => {setPathname('#/')}} type='text' size='large' className='optionsButton'>About
                        { pathname === '#/' && <div className='selectedIndicator'></div> }
                    </Button>
                </NavLink>

                <NavLink to="/projects">
                    <Button id='2' onClick={() => {setPathname('#/projects')}} type='text' size='large' className='optionsButton'>Projects
                        { pathname === '#/projects' && <div className='selectedIndicator'></div> }
                    </Button>
                </NavLink>

                <NavLink to="/resume">
                    <Button id='3' onClick={() => {setPathname('#/resume')}} type='text' size='large' className='optionsButton'>Resume
                        { pathname === '#/resume' && <div className='selectedIndicator'></div> }
                    </Button>
                </NavLink>

                <NavLink to="/contact">
                    <Button id='4' onClick={() => {setPathname('#/contact')}} type='text' size='large' className='optionsButton'>Contact
                        { pathname === '#/contact' && <div className='selectedIndicator'></div> }
                    </Button>
                </NavLink>
                
            </span>
        )
    }

    const NavOptionsDropdown = (props) => {

        const DropdownMenu = (props) => {
            
            return (
                <Menu>
                    <Menu.Item {...props} onClick={() => {setPathname('#/')}} key="1" className='menuButton'>
                        <NavLink to="/">about</NavLink>
                    </Menu.Item>
                    
                    <Menu.Item {...props} onClick={() => {setPathname('#/projects')}} key="2" className='menuButton'>
                        <NavLink to="/projects">projects</NavLink>
                    </Menu.Item>
                    
                    
                    <Menu.Item {...props} onClick={() => {setPathname('#/resume')}} key="3" className='menuButton'>
                        <NavLink to="/resume">resume</NavLink>
                    </Menu.Item>

                    
                    <Menu.Item {...props} onClick={() => {setPathname('#/contact')}} key="4" className='menuButton'>
                        <NavLink to="/contact">contact</NavLink>
                    </Menu.Item>
                </Menu>
            )
        }

        return (
            <span id='optionsDropdown' >
                <Dropdown onClick={(e) => { e.preventDefault() }} overlay={DropdownMenu} >
                    <Button icon={<MenuOutlined/>} />
                </Dropdown>
            </span>
        )
    }

    return (
        <div id='navContainer' >
            <NavHeader/>
            <NavOptionsDropdown/>
            <NavOptions/>
        </div>
    )
}

export default Nav