import React from 'react'
import Personal from './Personal.js'
import Freelance from './Freelance'
import 'antd/dist/antd.css'
import { Divider, Input } from 'antd'
import usmntIcon from '../../images/usmnt_fan_hub_icon.png'
import golfIcon from '../../images/golf_stat_caddy_icon.png'
import abIcon from '../../images/absolute_builders_icon.png'
import scIcon from '../../images/sound_county_icon.png'
import './Projects.css'

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

const styles = {

    parent: {
        marginLeft: '8%',
        marginRight: '8%',
        marginTop: '3%',
        paddingBottom: '4%',
    },
    sectionTitle: {
        fontFamily: 'Montserrat',
        fontWeight: '600',
        fontSize: '40px'
    },
    projectsContainer: {
        marginTop: '2%',
        marginBottom: '3%',
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'row',
    },

}

const Projects = (props) => {

    const [tagFilter, setTagFilter] = React.useState('')

    return (
        <div style={styles['parent']}>
            <Search id='projects-search' onChange={ (e) => { setTagFilter(e.target.value) }} placeholder='search by tag...' />
            <Divider orientation="left" style={styles['sectionTitle']}>Personal</Divider>
            <div style={styles['projectsContainer']}>
                { personalProjects.map((item,i) => { if (item.tags.find(tag => tag.toLowerCase().includes(tagFilter.toLowerCase())) ) { return (<Personal key={i} images={item.images} name={item.name} tags={item.tags} links={item.links} icon={item.icon} />)}} )}
            </div>
            <Divider orientation="left" style={styles['sectionTitle']}>Freelance</Divider>
            <div style={styles['projectsContainer']}>
                { freelanceProjects.map((item,i) => { if (item.tags.find(tag => tag.toLowerCase().includes(tagFilter.toLowerCase())) ) { return <Freelance key={i} images={item.images} name={item.name} tags={item.tags} links={item.links} icon={item.icon} /> }} )}
            </div>
        </div>
    )
}

export default Projects