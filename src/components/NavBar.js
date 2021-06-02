import React from 'react'
import { Link } from "react-router-dom"
import 'antd/dist/antd.css'
import { Button, Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import portfolioIcon from '../images/portfolio_icon.png'
import FlipMove from 'react-flip-move'
import $ from 'jquery'

const styles = {

    parent: {
        //paddingBottom: '3vh',
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
    },
    selectedIndicator: {
        height: '5px',
        backgroundColor: 'white',
        position: 'absolute',
        left: '0',
        right: '0',
        bottom: '-6px'
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

        const [option, setOption] = React.useState('about')

        return (
            <span style={styles['options']} >

                <Link to="/personal-website">
                    <Button id='1' onClick={() => { setOption('about'); console.log($('#1').width()) }} type='text' size='large' style={styles['optionsButton']}>About
                        { option == 'about' && <div style={styles['selectedIndicator']}></div> }
                    </Button>
                    
                </Link>

                <Link to="/personal-website/projects">
                    <Button id='2' onClick={() => { setOption('projects'); console.log($('#2').width()) }} type='text' size='large' style={styles['optionsButton']}>Projects
                        { option == 'projects' && <div style={styles['selectedIndicator']}></div> }
                    </Button>
                </Link>

                <Link to="/personal-website/resume">
                    <Button id='3' onClick={() => { setOption('resume'); console.log($('#3').width()) }} type='text' size='large' style={styles['optionsButton']}>Resume
                        { option == 'resume' && <div style={styles['selectedIndicator']}></div> }
                    </Button>
                </Link>

                <Link to="/personal-website/contact">
                    <Button id='4' onClick={() => { setOption('contact'); console.log($('#4').width()) }} type='text' size='large' style={styles['optionsButton']}>Contact
                        { option == 'contact' && <div style={styles['selectedIndicator']}></div> }
                    </Button>
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