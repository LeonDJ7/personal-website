import React from 'react'
import 'antd/dist/antd.css'
import { Button, Typography } from 'antd'
import $ from 'jquery'
import TypeIt from "typeit-react";
import FlipMove from 'react-flip-move';
import '../../css/About.css'


const styles = {

    parent: {
        paddingTop: '8%',
        paddingLeft: '15%',
        paddingRight: '15%'
    },
    description: {
        paddingBottom: '1rem',
    },
    read: {
        marginBottom: '1rem'
    },
    flip: {
        paddingBottom: '10%'
    }
}

const About = (props) => {

    const [showMore, setShowMore] = React.useState(true)

    const shortDescription = 'I am a full stack developer based out of Boston, passionate about building clean, beautiful web and mobile applications.'
    const longDescription = 'Currently, I attend the University of Massachusetts Amherst with a major in computer science and minor in psychology. <br><br> I have professional experience as a software engineer intern, where I was tasked with working on both front and back end features of a task management web application. Apart from this, the majority of my knowleadge and experience comes from personal projects... and YouTube.<br><br>Outside of programming, soccer has always been my passion both as a player and a fan. As of now I play amateur in Boston and, of course, support the New England Revolution. I have always loved video games (League of Legends at the moment), and have more recently begun learning to make <a href="https://soundcloud.com/leondotwav">beats </a> and graphic designs. Occasionally, I play a lot of golf in a really short amount of time.'


    const update = () => {

        if (showMore) { 
            $('#readMoreButton').html('read less...') 
            $('#description').css('padding-bottom', '20%') 
        } else { 
            $('#readMoreButton').html('read more...') 
            $('#description').css('padding-bottom', '2%') 
        }

    }

    return (
        <div id='parent' style={styles['parent']}>
            <Typography id='title'> Hello! </Typography>

            <FlipMove style={styles['flip']}>

                { showMore && <div id='description' style={styles['description']}>
                    <TypeIt
                        id='typewriter'
                        options={{
                            strings: [shortDescription],
                            speed: 5,
                        }}
                    />
                </div> }

                <div id='read' style={styles['read']}>
                    <Button id='readMoreButton' onClick={ () => { setShowMore(!showMore); update(); }} type='primary' danger> {showMore ? 'read more...' : 'read less...'} </Button>
                </div>

                { !showMore && <div id='description' style={styles['description']}>
                    <TypeIt
                        id='typewriter'
                        options={{
                            strings: [longDescription],
                            speed: 5,
                        }}
                    />
                </div> }

            </FlipMove>
            
            
        </div>
    )
}

export default About