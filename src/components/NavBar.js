import React from 'react'
import { Link } from "react-router-dom"
import 'antd/dist/antd.css'
import { Button, Avatar, Dropdown, Menu } from 'antd'
import { UserOutlined, MenuOutlined } from '@ant-design/icons'
import portfolioIcon from '../images/portfolio_icon.png'
import './NavBar.css'

const NavBar = (props) => {

    const [pathname, setPathname] = React.useState(window.location.hash.split("#/personal-website")[1])

    const NavHeader = (props) => {

        return (
            <div id='header' onClick={() => {setPathname('/')}}>
                <Link to="/">
                    <Avatar src={portfolioIcon} shape='square' size='large' icon={<UserOutlined />}/>
                </Link>
                <Link to="/">
                    <span id='headerLabel' > Leon Djusberg </span>
                </Link>
            </div>
        )
    }

    const NavOptions = (props) => {

        return (
            <span id='options' >

                <Link to="/">
                    <Button id='1' onClick={() => {setPathname('/')}} type='text' size='large' className='optionsButton'>About
                        { pathname === '/' && <div className='selectedIndicator'></div> }
                    </Button>
                </Link>

                <Link to="/projects">
                    <Button id='2' onClick={() => {setPathname('/projects')}} type='text' size='large' className='optionsButton'>Projects
                        { pathname === '/projects' && <div className='selectedIndicator'></div> }
                    </Button>
                </Link>

                <Link to="/resume">
                    <Button id='3' onClick={() => {setPathname('/resume')}} type='text' size='large' className='optionsButton'>Resume
                        { pathname === '/resume' && <div className='selectedIndicator'></div> }
                    </Button>
                </Link>

                <Link to="/contact">
                    <Button id='4' onClick={() => {setPathname('/contact')}} type='text' size='large' className='optionsButton'>Contact
                        { pathname === '/contact' && <div className='selectedIndicator'></div> }
                    </Button>
                </Link>
                
            </span>
        )
    }

    const NavOptionsDropdown = (props) => {

        const DropdownMenu = (props) => {
            
            return (
                <Menu>
                    <Link to="/personal-website">
                        <Menu.Item {...props} key="1" className='menuButton'>
                            about
                        </Menu.Item>
                    </Link>
                    <Link to="/personal-website/projects">
                        <Menu.Item {...props} key="2" className='menuButton'>
                            projects
                        </Menu.Item>
                    </Link>
                    <Link to="/personal-website/resume">
                        <Menu.Item {...props} key="3" className='menuButton'>
                            resume
                        </Menu.Item>
                    </Link>
                    <Link to="/personal-website/contact">
                        <Menu.Item {...props} key="4" className='menuButton'>
                            contact
                        </Menu.Item>
                    </Link>
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

export default NavBar