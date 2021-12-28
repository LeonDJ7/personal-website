import React from 'react'
import resume from '../../documents/resume.pdf'

const Resume = (props) => {

    const styles = {

        parent: {
            width: '100%',
            height: '90vh'
        }
    }
    return (
        <div style={styles['parent']}>
            <iframe type='application/pdf' src={resume} width="100%" height='100%' title='resume' />
        </div>
    )
}

export default Resume