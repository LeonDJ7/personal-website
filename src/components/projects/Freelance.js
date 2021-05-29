import React from 'react'
import 'antd/dist/antd.css'
import { Tag, Typography } from 'antd'
import codeArrow from '../../images/code_arrow.png'
import takeToPage from '../../images/take_to_page.png'

const styles = {

    parent: {
        width: '250px',
    },
    tag: {
        marginTop: '3%'
    },
    name: {
        fontFamily: 'Avenir',
        fontSize: '16px',
        flexGrow: '1',
        display: 'flex',
        alignItems: 'center',
    },
    tagContainer: {
        textAlign: 'center'
    },
    linkContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    nameLinksContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '3%'
    }

}

const Freelance = (props) => {

    const icon = props.icon
    const name = props.name
    const tags = props.tags
    const links = props.links

    const redirect = (url) => { window.open(url, '_blank') }


    return (
        <div style={styles['parent']}>
            <img src={icon} alt='' style={{
                display: 'block',
                maxWidth: '250px',
                maxHeight: '167px',
                width: 'auto',
                height: 'auto',
            }}/>
            <div style={styles['nameLinksContainer']}>
                <Typography style={styles['name']}>{name}</Typography>
            </div>
            <div style={styles['tagContainer']}>
                {tags.map((item, i) => <Tag style={styles['tag']} key={i} color='gold' > {item} </Tag>)}
            </div>
        </div>
    )
}

export default Freelance