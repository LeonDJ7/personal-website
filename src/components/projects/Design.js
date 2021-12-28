import React from 'react'
import 'antd/dist/antd.css'
import { Tag, Typography } from 'antd'
import codeArrow from '../../images/code_arrow.png'
import takeToPage from '../../images/take_to_page.png'

const styles = {

    parent: {
        width: '250px',
    },
    name: {
        flexGrow: '1',
        display: 'flex',
        fontSize: '20px',
        fontWeight: 'bold'
    },
    description: {
        flexGrow: 1,
        display: 'flex',
        marginTop: '3%',
        fontSize: '14px'
    },
    infoContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '3%'
    },
    tagContainer: {
        margin: '1rem 0 1rem 0',
    },

}

const Design = (props) => {

    const image = props.image
    const tags = props.tags
    const name = props.name
    const description = props.description

    return (
        <div style={styles['parent']}>
            <img src={image} alt='' style={{
                display: 'block',
                width: '250px',
                maxHeight: '167px',
                height: 'auto',
                objectFit: 'contain'
            }}/>
            <div style={styles['infoContainer']}>
                <Typography style={styles['name']}>{name}</Typography>
                <div style={styles['tagContainer']}>
                    {tags.map((item, i) => <Tag style={styles['tag']} key={i} color={'lime'} > {item} </Tag>)}
                </div>
                <Typography style={styles['description']}>{description}</Typography>
            </div>
        </div>
    )
}

export default Design