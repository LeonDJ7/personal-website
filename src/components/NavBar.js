import React from 'react'
import { Link } from "react-router-dom"
import 'antd/dist/antd.css'
import { Button, Avatar, Dropdown, Menu } from 'antd'
import { UserOutlined, MenuOutlined } from '@ant-design/icons'
import portfolioIcon from '../images/portfolio_icon.png'
import $ from 'jquery'
import './NavBar.css'

const NavBar = (props) => {

    const NavHeader = (props) => {

        return (
            <div id='header' >
                <Link to="/personal-website">
                    <Avatar src={portfolioIcon} shape='square' size='large' icon={<UserOutlined />}/>
                </Link>
                <Link to="/personal-website">
                    <span id='headerLabel' > Leon Djusberg </span>
                </Link>
            </div>
        )
    }

    const NavOptions = (props) => {

        const [option, setOption] = React.useState('about')

        return (
            <span id='options' >

                <Link to="/personal-website">
                    <Button id='1' onClick={() => { setOption('about'); console.log($('#1').width()) }} type='text' size='large' className='optionsButton'>About
                        { option === 'about' && <div className='selectedIndicator'></div> }
                    </Button>
                    
                </Link>

                <Link to="/personal-website/projects">
                    <Button id='2' onClick={() => { setOption('projects'); console.log($('#2').width()) }} type='text' size='large' className='optionsButton'>Projects
                        { option === 'projects' && <div className='selectedIndicator'></div> }
                    </Button>
                </Link>

                <Link to="/personal-website/resume">
                    <Button id='3' onClick={() => { setOption('resume'); console.log($('#3').width()) }} type='text' size='large' className='optionsButton'>Resume
                        { option === 'resume' && <div className='selectedIndicator'></div> }
                    </Button>
                </Link>

                <Link to="/personal-website/contact">
                    <Button id='4' onClick={() => { setOption('contact'); console.log($('#4').width()) }} type='text' size='large' className='optionsButton'>Contact
                        { option === 'contact' && <div className='selectedIndicator'></div> }
                    </Button>
                </Link>
                
            </span>
        )
    }

    const NavOptionsDropdown = (props) => {

        const DropdownMenu = (props) => {
            
            return (
                <Menu >
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
                <Dropdown overlay={DropdownMenu} >
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