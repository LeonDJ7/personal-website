import React from 'react'
import 'antd/dist/antd.css'
import { Image, Tag, Typography } from 'antd'
import { SpaceContext } from 'antd/lib/space'
import codeArrow from '../../images/code_arrow.png'
import takeToPage from '../../images/take_to_page.png'

const styles = {

    root: {
        justifyContent: 'center',
        display: 'flex',
        marginTop: '2%',
    },
    imageContainer: {
        width: '45%',
        display: 'inline-block',
        textAlign: 'center'
    },
    infoContainer: {
        width: '45%',
        height: '0%',
        textAlign: 'center',
        backgroundColor: 'papayawhip',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'center',
        borderRadius: '20px',
        paddingTop: '3%',
        paddingBottom: '2%',
        paddingLeft: '4%',
        paddingRight: '4%',
    },
    appImage: {
        height: '0%'
    },
    websiteImage: {

    },
    title: {
        fontFamily: 'Avenir Medium',
        fontSize: '24px',
        marginBottom: '3%'
    },
    description: {
        fontFamily: 'Avenir',
        fontSize: '16px',
        marginBottom: '0'
    },
    link: {
        float: 'left',
    },
    tagContainer: {
        width: '70%',
        margin: 'auto',
        marginTop: '3%',
        marginBottom: '5%',
    }

}

const ProjectItem = (props) => {

    const title = props.title
    const description = props.description
    const images = props.images
    const tags = props.tags
    const type = props.type
    const link = props.link
    const githubLink = props.githubLink
    const reverse = props.reverse

    const redirect = (url) => { window.open(url, '_blank') }

    const ImageContainer = (props) => {
        return (
        <div id='imageContainer' style={styles['imageContainer']}>
            { type === 'app' && images.map((item,i) => <div id={'image' + i} key={i} style={{
                background: 'url(' + item + ')', 
                textAlign: 'center', 
                backgroundSize: '100%', 
                height: '80%', 
                width: '25%', 
                display: 'inline-block', 
                marginTop: '5%', marginLeft: '1%', 
                marginRight: '0.1%'
            }} />) }
            { type === 'website' && images.map((item,i) => <Image id='image' key={i} src={item} />) }
        </div>
        )
    }

    const InfoContainer = (props) => {
        return (
            <div id='infoContainer' style={styles['infoContainer']}>
                <Typography style={styles['title']}> {title} </Typography>
                <p style={styles['description']}> {description} </p>
                <div style={styles['tagContainer']}>
                    {type === 'app' && tags.map((item, i) => <Tag key={i} color='volcano' > {item} </Tag>)}
                    {type === 'website' && tags.map((item, i) => <Tag key={i} color='gold' > {item} </Tag>)}
                </div>
                <div>
                    <input onClick={() => { redirect(githubLink) }} src={codeArrow} style={styles['link']} type='image' />
                    <input onClick={() => { redirect(link) }} src={takeToPage} style={styles['link']} type='image' />
                </div>
            </div>
        )
    }

    return (
        <React.Fragment>
            {reverse && 
            <span style={styles['root']}>
                <ImageContainer />
                <InfoContainer />
            </span>
            }
            {!reverse && 
            <span style={styles['root']}>
                <InfoContainer />
                <ImageContainer />
            </span>
            }
        </React.Fragment>
            
        
    )
}

export default ProjectItem