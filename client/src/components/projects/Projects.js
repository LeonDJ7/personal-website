import React from 'react'
import ProjectItem from './ProjectItem.js'
import 'antd/dist/antd.css'
import { Button, Avatar } from 'antd'
import usmnt1 from '../../images/usmnt-fan-hub-1.png'
import usmnt2 from '../../images/usmnt-fan-hub-2.png'
import usmnt3 from '../../images/usmnt-fan-hub-3.png'
import golf1 from '../../images/golf-stat-caddy-1.png'
import golf2 from '../../images/golf-stat-caddy-2.png'
import Item from 'antd/lib/list/Item'


const projects = [
    {
        images: [usmnt1, usmnt2, usmnt3],
        title: 'USMNT Fan Hub',
        description: 'USMNT Fan Hub is an iOS app I created to serve as a community for US soccer fans',
        tags: ['UIkit', 'Firebase', 'Swift', 'Admob'],
        type: 'app',
        link: 'https://apps.apple.com/us/app/usmnt-fan-hub/id1527654710',
        githubLink: 'https://github.com/LeonDJ7/usmnt-fan-hub'
    },
    {
        images: [golf1, golf2],
        title: 'Golf Stat Caddy',
        description: 'Golf Stat Caddy is an iOS app I built with swift and UIkit. It takes input from golfers about their round calculates stats relevant to performance from their previous 10 rounds. I use Firebase Authentication and Firestore to save and retrieve data for each user',
        tags: ['UIkit', 'Firebase', 'Swift', 'Admob'],
        type: 'app',
        link: 'https://apps.apple.com/us/app/golf-stat-caddy/id1437417339',
        githubLink: 'https://github.com/LeonDJ7/golf-stat-caddy'
    },
]

const styles = {

    root: {
        
    },

}

const Projects = (props) => {

    return (
        <div>
            { projects.map((item,i) => <ProjectItem key={i} images={item.images} title={item.title} description={item.description} tags={item.tags} type={item.type} link={item.link} githubLink={item.githubLink} reverse={i % 2 === 0}/>) }
        </div>
    )
}

export default Projects