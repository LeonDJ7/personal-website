import React from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios'
import config from '../../config'
import 'antd/dist/antd.css'
import { Button, Input, Typography, Alert } from 'antd'
import linkedin from '../../images/linkedin_icon.png'
import github from '../../images/github_icon.png'
import instagram from '../../images/instagram_icon.png'

const { TextArea } = Input;

const styles = {

    root: {
        width: '60%',
        textAlign: 'center',
        margin: 'auto auto',
        marginTop: '20vh',
    },
    emailInputs: {
        width: '55%',
        float: 'left'
    },
    selfDescription: {
        width: '40%',
        float: 'right'
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
        fontFamily: 'Avenir Medium',
        fontSize: '28px'
    },
    descriptionMessage: {
        width: '100%',
        fontFamily: 'Avenir'
    },
    image: {
        width: '32px',
        marginRight: '1%',
    },
    imageContainer: {
        position: 'absolute',
        bottom: '20%',
        left: '0',
        right: '0',
        margin: 'auto',
    },
    alert: {
        marginBottom: '4%'
    }

}

const Contact = (props) => {

    const redirect = (url) => { window.open(url, '_blank') }

    const EmailInputs = (props) => {

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

            setFirstName('')
            setLastName('')
            setEmail('')
            setMessage('')

        }

        return (
            <span style={styles['emailInputs']}>
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
            </span>
        )

    }

    const SelfDescription = () => {

        return (
            <span style={styles['selfDescription']}>
                <Typography style={styles['descriptionTitle']}>
                    Feel free to reach out, about literally anything
                </Typography>
                <p style={styles['descriptionMessage']}>
                    I'm very open to any projects ideas, internship opportunities, freelance opportunities, etc...
                </p>
            </span>
        )
    }

    return (
        <div style={styles['root']}>
            <EmailInputs />
            <SelfDescription />
            <div style={styles['imageContainer']}>
                <input onClick={() => { redirect('https://www.linkedin.com/in/leon-djusberg-53a975194/') }} style={styles['image']} type='image' src={linkedin}/>
                <input onClick={() => { redirect('https://github.com/LeonDJ7') }} style={styles['image']} type='image' src={github}/>
                <input onClick={() => { redirect('https://www.instagram.com/leon.djusberg/') }} style={styles['image']} type='image' src={instagram}/>
            </div>
        </div>
    )
}

export default Contact