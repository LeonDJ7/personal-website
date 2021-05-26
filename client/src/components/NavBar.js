import React from 'react'
import { Link } from "react-router-dom";
import 'antd/dist/antd.css'
import { Button, Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons';
import portfolioIcon from '../images/portfolio_icon.png'

const styles = {

    root: {
        paddingBottom: '2vh',
        height: '10vh'
    },
    header: {
        marginTop: '3vh',
        marginLeft: '5vh',
        display: 'inline-block',
    },
    headerLabel: {
        display: 'inline-block',
        fontSize: '20px',
        fontFamily: 'Avenir Medium',
        marginLeft: '1.5vh',
    },
    options: {
        float: 'right',
        marginTop: '3vh',
        marginRight: '7vh',
    },
    optionsButton: {
        fontFamily: 'Avenir',
        fontSize: '18px',
    }

}

const NavBar = (props) => {

    const NavHeader = (props) => {

        return (
            <div style={styles['header']}>
                <Avatar src={portfolioIcon} shape='square' size='medium' icon={<UserOutlined />}/>
                <span style={styles['headerLabel']}> Leon Djusberg </span>
            </div>
        )
    }

    const NavOptions = (props) => {

        return (
            <span style={styles['options']} >

                <Link to="/">
                    <Button type='text' size='large' style={styles['optionsButton']}>About</Button>
                </Link>

                <Link to="/projects">
                    <Button type='text' size='large' style={styles['optionsButton']}>Projects</Button>
                </Link>

                <Link to="/resume">
                    <Button type='text' size='large' style={styles['optionsButton']}>Resume</Button>
                </Link>

                <Link to="/contact">
                    <Button type='text' size='large' style={styles['optionsButton']}>Contact</Button>
                </Link>

            </span>
        )
    }

    return (
        <div style={styles['root']}>

            <NavHeader/>
            <NavOptions/>

        </div>
    )
}

export default NavBar