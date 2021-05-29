import React from 'react'
import { Link } from "react-router-dom";
import 'antd/dist/antd.css'
import { Button, Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons';
import portfolioIcon from '../images/portfolio_icon.png'

const styles = {

    root: {
        paddingBottom: '3vh',
        borderBottom: '5px solid papayawhip',
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
        fontFamily: 'Avenir Black',
        marginLeft: '1.5vh',
        color: 'rosybrown'
    },
    options: {
        float: 'right',
        marginTop: '3vh',
        marginRight: '7vh',
    },
    optionsButton: {
        fontFamily: 'Avenir Medium',
        fontSize: '20px',
        color: 'dimgrey'
    }

}

const NavBar = (props) => {

    const NavHeader = (props) => {

        return (
            <div style={styles['header']}>
                <Link to="/">
                    <Avatar src={portfolioIcon} shape='square' size='large' icon={<UserOutlined />}/>
                </Link>
                <Link to="/">
                    <span style={styles['headerLabel']}> Leon Djusberg </span>
                </Link>
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