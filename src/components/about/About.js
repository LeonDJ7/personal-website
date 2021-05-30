import React from 'react'
import 'antd/dist/antd.css'
import { Button, Typography } from 'antd'
import $ from 'jquery'
import TypeIt from "typeit-react";
import anime from 'animejs'


const styles = {

    parent: {
        marginTop: '18vh',
        paddingLeft: '15%',
        paddingRight: '25%'
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
        position: 'fixed',
        display: 'inline-block'
    },
}

const About = (props) => {

    const [showMore, setShowMore] = React.useState(true)
    const [instance, setInstance] = React.useState(null)
    const [frozen, setFrozen] = React.useState(true)
    const [readMoreNeighborTop, setReadMoreNeighborTop] = React.useState(null)

    const shortDescription = 'I am a web and mobile developer based out of Boston looking for internship or freelance opportunities.'
    const longDescription = 'I have experience working as a Software Engineering Intern developing both the front and back ends of a web application using React, and have been developing iOS apps with Swift since my senior year of high school.'


    const animate = () => {

        setFrozen(false)
        instance.unfreeze()

        if (!readMoreNeighborTop) { setReadMoreNeighborTop($('#readMoreNeighbor').offset().top)}

        if (showMore) {

            anime({
                targets: '#description',
                paddingLeft: '18vh',
            })

            anime({
                targets: '#readMore',
                top: $('#description').offset().top
            })

            $('#readMoreButton').html('read less...')

        } else {

            const attemptAnime = () => {
                setTimeout( () => {

                    if (!$('#description').html().includes('experience')) {
                        console.log()
                        anime({
                            targets: '#description',
                            paddingLeft: '0',
                        })
            
                        anime({
                            targets: '#readMore',
                            top: readMoreNeighborTop - 1/2 * $('#readMore').height()
                        })
                    } else {
                        attemptAnime()
                    }
    
                }, 100)
            }

            attemptAnime()

            $('#readMoreButton').html('read more...')

        }

    }

    return (
        <div id='parent' style={styles['parent']}>
            <Typography id='title' style={styles['title']}> Greetings! </Typography>
            <div id='description' style={styles['description']}>
                <TypeIt
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
            <div id='readMoreNeighbor' style={{display: 'inline-block'}}/>
            
        </div>
    )
}

export default About