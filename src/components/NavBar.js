import React from 'react'
import { Link } from "react-router-dom";
import 'antd/dist/antd.css'
import { Button, Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons';
import portfolioIcon from '../images/portfolio_icon.png'

const styles = {

    parent: {
        paddingBottom: '3vh',
        borderBottom: '5px solid lightcoral',
        display: 'flex'

    },
    header: {
        marginTop: '3vh',
        marginLeft: '5vh',
        display: 'flex',
        flexGrow: '1',
        alignItems: 'center',
        alignContent: 'center',
    },
    headerLabel: {
        display: 'inline-block',
        fontSize: '20px',
        fontFamily: 'Montserrat',
        fontWeight: '600',
        marginLeft: '1.5vh',
        color: 'rosybrown'
    },
    options: {
        float: 'right',
        marginTop: '3vh',
        marginRight: '7vh',
    },
    optionsButton: {
        fontFamily: 'Montserrat',
        fontWeight: '600',
        fontSize: '20px',
        color: 'dimgrey'
    }

}

const NavBar = (props) => {

    const NavHeader = (props) => {

        return (
            <div style={styles['header']}>
                <Link to="/personal-website">
                    <Avatar src={portfolioIcon} shape='square' size='large' icon={<UserOutlined />}/>
                </Link>
                <Link to="/personal-website">
                    <span style={styles['headerLabel']}> Leon Djusberg </span>
                </Link>
            </div>
        )
    }

    const NavOptions = (props) => {

        return (
            <span style={styles['options']} >

                <Link to="/personal-website">
                    <Button type='text' size='large' style={styles['optionsButton']}>About</Button>
                </Link>

                <Link to="/personal-website/projects">
                    <Button type='text' size='large' style={styles['optionsButton']}>Projects</Button>
                </Link>

                <Link to="/personal-website/resume">
                    <Button type='text' size='large' style={styles['optionsButton']}>Resume</Button>
                </Link>

                <Link to="/personal-website/contact">
                    <Button type='text' size='large' style={styles['optionsButton']}>Contact</Button>
                </Link>

            </span>
        )
    }

    return (
        <div style={styles['parent']}>
            <NavHeader/>
            <NavOptions/>
        </div>
    )
}

export default NavBar