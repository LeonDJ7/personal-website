import React from 'react'
import 'antd/dist/antd.css'
import resume from './resume.pdf'

const Resume = (props) => {

    const styles = {

        root: {
            width: '100%',
            height: '90vh'
        }
    }
    return (
        <div style={styles['root']}>
            <iframe type="application/pdf" src={resume} width="100%" height="100%" />
        </div>
    )
}

export default Resume