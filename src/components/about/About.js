import React from 'react'
import 'antd/dist/antd.css'
import { Button, Typography } from 'antd'
import $ from 'jquery'
import TypeItReact from "typeit-react";


const styles = {

    parent: {
        marginTop: '18vh',
        paddingLeft: '15%',
        paddingRight: '30%'
    },
    title: {
        fontFamily: 'Avenir Black',
        fontSize: '60px',
        marginBottom: '1%'
    },
    description: {
        fontFamily: 'Avenir',
        fontSize: '18px',
        marginBottom: '2%'
    },
    readMore: {
        position: 'fixed'
    },
}

const About = (props) => {

    const [showMore, setShowMore] = React.useState(true)
    const [instance, setInstance] = React.useState(null);
    const [frozen, setFrozen] = React.useState(true);

    const shortDescription = 'I am a web and mobile developer based out of Boston looking for internship or freelance opportunities.'
    const longDescription = 'I have experience working as a Software Engineering Intern developing both the front and back ends of a web application using React, and have been developing iOS apps with Swift since my senior year of high school.'

    //const offset = $('#readMore').offset().top - $('#description').offset().top

    const animate = () => {

        if (showMore) {

            $('#description').animate({
                paddingLeft: '18vh',
            }, 'slow')

            $('#readMore').animate({
                top: $('#description').offset().top
            }, 'linear')

            $('#readMoreButton').html('read less...')

        } else {

            $('#description').animate({
                paddingLeft: '0',
            }, 'slow')

            $('#readMore').animate({
                top: '0'
            }, 'linear')

            $('#readMoreButton').html('read more...')

        }

        setFrozen(false)
        instance.unfreeze()

    }

    return (
        <div id='parent' style={styles['parent']}>
            <Typography id='title' style={styles['title']}> Greetings! </Typography>
            <div id='description' style={styles['description']}>
                <TypeItReact 
                    id='typewriter'
                    options={{
                        strings: [shortDescription, longDescription],
                        speed: 10,
                        breakLines: false,
                        loop: true,
                        afterString: async (step, instance) => {
                            instance.freeze()
                            setFrozen(true)
                            setInstance(instance)
                        } 
                    }}
                />
            </div>
            <div id='readMore' style={styles['readMore']}>
                {instance && frozen && <Button id='readMoreButton' onClick={ () => { setShowMore(!showMore); animate(); }} type='primary' danger> {showMore ? 'read more...' : 'read less...'} </Button>}
                {instance && !frozen && <Button id='readMoreButton' danger> {showMore ? 'read more...' : 'read less...'} </Button>}
                {!instance && <Button id='readMoreButton' danger> {showMore ? 'read more...' : 'read less...'} </Button>}
            </div>
        </div>
    )
}

export default About