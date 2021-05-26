import React from 'react'
import 'antd/dist/antd.css'
import { Button, Typography } from 'antd'

const styles = {

    root: {
        textAlign: 'center',
        marginTop: '20vh',
    },
    title: {
        fontFamily: 'Avenir Medium',
        fontSize: '40px',
    },
    shortDescription: {
        display: 'inline-block',
        fontFamily: 'Avenir',
        fontSize: '18px',
        width: '70vh',
    },
    readMoreButton: {
        marginTop: '1vh'
    }
}

const About = (props) => {

    return (
        <div style={styles['root']}>
            <Typography style={styles['title']}> Greetings! </Typography>
            <p style={styles['shortDescription']}> I am a web and mobile developer based out of Boston looking for internship or freelance opportunities </p>
            <div style={styles['readMoreButton']}>
                <Button type='primary' danger> read more... </Button>
            </div>
        </div>
    )
}

export default About