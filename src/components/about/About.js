import React from 'react'
import 'antd/dist/antd.css'
import { Button, Typography } from 'antd'
import $ from 'jquery'
import TypeIt from "typeit-react";
import anime from 'animejs'


const styles = {

    parent: {
        paddingTop: '8%',
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

    const shortDescription = 'I\'m a full stack developer based out of Boston, passionate about building clean, beautiful web and mobile applications.'
    const longDescription = 'Currently, I attend the University of Massachusetts Amherst with a major in computer science and minor in psychology. <br><br> I have some professional experience as a software engineer intern, where I was tasked with working on both front and back end features of a task management web application. Apart from this, the majority of my experience comes from personal projects... and YouTube.<br><br>Outside of programming, soccer has always been my passion both as a player and a fan. As of now I play semi professionally in Boston and, of course, support the New England Revolution. I have also always loved video games (League of Legends at the moment), and recently began making <a href=\"https://soundcloud.com/leondotwav\">lo-fi music</a>. Occasionally, I play a lot of golf in a really short amount of time.'


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
                        speed: 5,
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