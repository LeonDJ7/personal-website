import React from 'react'
import config from '../../config'
import 'antd/dist/antd.css'
import { Button, Input, Typography, Alert } from 'antd'
import $ from 'jquery'
import linkedin from '../../images/linkedin_icon.png'
import github from '../../images/github_icon.png'
import instagram from '../../images/instagram_icon.png'

const { TextArea } = Input;

const styles = {

    parent: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: '10%',
        paddingLeft: '20%',
        paddingRight: '20%'
    },
    inputContainer: {
        width: '100%',
        paddingRight: '5%'
    },
    selfDescription: {
    },
    firstName: {
        width: '48%',
        marginRight: '4%'
    },
    lastName: {
        width: '48%'
    },
    email: {
        width: '100%',
        marginTop: '4%'
    },
    message: {
        width: '100%',
        marginTop: '4%'
    },
    sendButton: {
        marginTop: '4%',
        float: 'left'
    },
    descriptionTitle: {
        width: '100%',
        fontFamily: 'Montserrat',
        fontWeight: '600',
        fontSize: '24px'
    },
    descriptionMessage: {
        width: '100%',
        fontFamily: 'Montserrat',
        fontWeight: '400',
    },
    image: {
        width: '32px',
        height: '32px',
        marginRight: '1.5%',
        marginLeft: '1.5%',
    },
    imagesContainer: {
        marginTop: '5%',
        display: 'flex',
        flexDirection: 'row',
    },
    alert: {
        marginBottom: '4%'
    },

}

const Contact = (props) => {

    const redirect = (url) => { window.open(url, '_blank') }

    const InputContainer = (props) => {

        const [firstName, setFirstName] = React.useState('')
        const [lastName, setLastName] = React.useState('')
        const [email, setEmail] = React.useState('')
        const [message, setMessage] = React.useState('')
        const [showErrorAlert, setShowErrorAlert] = React.useState(false)
        const [showSuccessAlert, setShowSuccessAlert] = React.useState(false)
        const [alert, setAlert] = React.useState(false)

        const sendMail = (name, email, message) => {

            window.Email.send({
                Host : "smtp.gmail.com",
                Username : 'leondjust7@gmail.com',
                Password: config.GMAIL_PASSWORD,
                To : 'leondjust7@gmail.com',
                From : 'leondjust7@gmail.com',
                Subject : name + ' sent you a message',
                Body : 'Name: ' + name + ' <br/> Email: ' + email + ' <br> Message: ' + message,
            })
            .then( (message) => {
                setAlert('great! I will get back to you as soon as possible')
                setShowSuccessAlert(true)
                console.log(message)
            }).catch( (err) => {
                setAlert('oops! something went wrong')
                setShowErrorAlert(true)
                console.log(err)
            })
    
        }

        const sendMessage = () => {

            if (firstName.trim() === '') {
                setAlert('must provide first name')
                setShowErrorAlert(true)
                return
            }

            if (lastName.trim() === '') {
                setAlert('must provide last name')
                setShowErrorAlert(true)
                return
            }

            if (email.trim() === '') {
                setAlert('must provide email')
                setShowErrorAlert(true)
                return
            }

            if (message.trim() === '') {
                setAlert('must provide message')
                setShowErrorAlert(true)
                return
            }

            setShowErrorAlert(false)

            sendMail(firstName + ' ' + lastName, email, message)

            /*

            setFirstName('')
            setLastName('')
            setEmail('')
            setMessage('')

            document.getElementById('messageInput').innerHTML = ''
            console.log(document.getElementById('messageInput').innerHTML)
            document.getElementById('emailInput').innerHTML = ''
            document.getElementById('firstNameInput').innerHTML = ''
            document.getElementById('lastNameInput').innerHTML = ''

            */

        }

        return (
            <div style={styles['inputContainer']}>
                { showErrorAlert && <div>
                    <Alert showIcon style={styles['alert']} message={alert} type='error' />
                </div> }
                { showSuccessAlert && <div>
                    <Alert showIcon style={styles['alert']} message={alert} type='success' />
                </div> }
                <div>
                    <Input onChange={(e) => { setFirstName(e.target.value) }} style={styles['firstName']} id='firstNameInput' placeholder='first name'/>
                    <Input onChange={(e) => { setLastName(e.target.value) }} style={styles['lastName']} id='lastNameInput' placeholder='last name'/>
                </div>
                <div>
                    <Input onChange={(e) => { setEmail(e.target.value) }} style={styles['email']} id='emailInput' placeholder='email'/>
                </div>
                <div>
                    <TextArea onChange={(e) => { setMessage(e.target.value) }} autoSize={{ minRows: 4, maxRows: 8 }} style={styles['message']} id='messageInput' placeholder='message'/>
                </div>
                <div>
                    <Button onClick={sendMessage} style={styles['sendButton']} type='primary' danger>send</Button>
                </div>
            </div>
        )

    }

    const SelfDescription = () => {

        return (
            <div style={styles['selfDescription']}>
                <Typography style={styles['descriptionTitle']}>
                    Feel free to reach out, about literally anything
                </Typography>
                <p style={styles['descriptionMessage']}>
                    I'm very open to any projects ideas, internship opportunities, freelance opportunities, etc...
                </p>
                <div style={styles['imagesContainer']}>
                    <input onClick={() => { redirect('https://www.linkedin.com/in/leon-djusberg-53a975194/') }} style={styles['image']} type='image' src={linkedin} alt=''/>
                    <input onClick={() => { redirect('https://github.com/LeonDJ7') }} style={styles['image']} type='image' src={github} alt=''/>
                    <input onClick={() => { redirect('https://www.instagram.com/leon.djusberg/') }} style={styles['image']} type='image' src={instagram} alt=''/>
                </div>
            </div>
        )
    }

    return (
        <div style={styles['parent']}>
            <InputContainer />
            <SelfDescription />
        </div>
    )
}

export default Contact