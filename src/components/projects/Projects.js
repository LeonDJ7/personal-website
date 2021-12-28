import React from 'react'
import Personal from './Personal.js'
import Freelance from './Freelance'
import 'antd/dist/antd.css'
import { Divider, Input } from 'antd'
import usmntIcon from '../../images/usmnt_fan_hub_icon.png'
import golfIcon from '../../images/golf_stat_caddy_icon.png'
import abIcon from '../../images/absolute_builders_icon.png'
import scIcon from '../../images/sound_county_icon.png'
import revsLogo from '../../images/revs_logo.png'
import phoenixChocolaterieLogo from '../../images/phoenix_chocolaterie.png'
import '../../css/Projects.css'
import Design from './Design.js'

const { Search } = Input

const personalProjects = [
    {
        name: 'USMNT Fan Hub',
        tags: ['UIkit', 'Firebase', 'Swift', 'Google Admob', 'SwiftSoup'],
        links: ['https://apps.apple.com/us/app/usmnt-fan-hub/id1527654710', 'https://github.com/LeonDJ7/usmnt-fan-hub'],
        icon: usmntIcon,
    },
    {
        name: 'Golf Stat Caddy',
        tags: ['UIkit', 'Firebase', 'Swift', 'Google Admob'],
        links: ['https://apps.apple.com/us/app/golf-stat-caddy/id1437417339', 'https://github.com/LeonDJ7/golf-stat-caddy'],
        icon: golfIcon,
    },
    {
        name: 'Sound County',
        tags: ['spotify-web-api-node', 'TypeScript', 'React', 'Chart.js', 'Express.js', 'Node.js', 'Heroku', 'Ant Design', 'HTML', 'CSS', 'Figma', 'SmtpJS'],
        links: ['https://sound-county.herokuapp.com/', 'https://github.com/LeonDJ7/sound-county'],
        icon: scIcon,
    },
]

const freelanceProjects = [
    {
        name: 'Absolute Builders LLC',
        tags: ['TypeScript', 'Angular', 'Mongoose', 'Node.js', 'MongoDB', 'Express.js', 'Heroku', 'AWS S3', 'Angular Material', 'SmtpJS', 'HTML', 'CSS', 'Figma'],
        links: ['https://absolute-builders.herokuapp.com', 'https://github.com/LeonDJ7/absolute-builders-website'],
        icon: abIcon,
    }
]

const designProjects = [
    {
        name: 'NE Revolution Logo Concept',
        tags: ['Inkscape'],
        description: 'My local soccer team recently announced it\'s rebrand and I figured I\'d put my two cents into what it could look like. The team and league have changed a lot in recent years. I wanted the new badge to look more modern than the old, crayon striped one, but I also wanted to give respect to an iconic aspect of the team. My idea with this design is to have the sharper, more modern lines and edges of the upper portion growing out of the crayon text. I made this using the open source design tool Inkscape.',
        image: revsLogo
    },
    {
        name: 'Phoenix Chocolaterie Logo Concept',
        tags: ['Inkscape'],
        description: 'This is a mock logo I made for a randomly generated company situation (Phoenix Chocolaterie, a small, locally owned chocolate shop looking for a new logo). I interpreted Phoenix as referring to the bird, and not the city, and tried to go with a minimalistic, elegant design, as I feel would fit the aesthetic of most chocolate shops. I made this using the open source design tool Inkscape.',
        image: phoenixChocolaterieLogo
    },
]

const styles = {

    parent: {
        marginLeft: '8%',
        marginRight: '8%',
        marginTop: '2rem',
        paddingBottom: '4%',
    },
    sectionTitle: {
        fontFamily: 'Montserrat',
        fontWeight: '600',
        fontSize: '40px'
    },

}

const Projects = (props) => {

    const [tagFilter, setTagFilter] = React.useState('')

    return (
        <div style={styles['parent']}>
            <Search id='projects-search' onChange={ (e) => { setTagFilter(e.target.value) }} placeholder='search by tag...' />
            <Divider orientation="left" style={styles['sectionTitle']}>Personal</Divider>
            <div id='projects-container'>
                { personalProjects.map((item,i) => { if (item.tags.find(tag => tag.toLowerCase().includes(tagFilter.toLowerCase())) ) { return (<Personal key={i} images={item.images} name={item.name} tags={item.tags} links={item.links} icon={item.icon} />)}} )}
            </div>
            <Divider orientation="left" style={styles['sectionTitle']}>Freelance</Divider>
            <div id='projects-container'>
                { freelanceProjects.map((item,i) => { if (item.tags.find(tag => tag.toLowerCase().includes(tagFilter.toLowerCase())) ) { return <Freelance key={i} images={item.images} name={item.name} tags={item.tags} links={item.links} icon={item.icon} /> }} )}
            </div>
            <Divider orientation="left" style={styles['sectionTitle']}>Design</Divider>
            <div id='projects-container'>
                { designProjects.map((item,i) => { if (item.tags.find(tag => tag.toLowerCase().includes(tagFilter.toLowerCase())) ) { return <Design key={i} name={item.name} tags={item.tags} description={item.description} image={item.image} /> }} )}
            </div>
        </div>
    )
}

export default Projects