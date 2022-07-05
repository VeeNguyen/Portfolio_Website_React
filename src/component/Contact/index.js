import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'

const Contact = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef();
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
            console.log("TIMER", timer);
        }, 2000)
    }, [])

    const sendEmail = (e) => {
        // e.preventDedault();
        alert("SUBMIT SEND EMAIL");

        emailjs.sendForm(
            'service_pkpifeg',
            'template_swdxboe',
            refForm.current,
            '6-wgS9Qgzj22cIQwL'
        )
            .then(
                (result) => {
                    console.log("RESULT", result.text);
                    alert("MESSAGE SUCCESSFULLY SENT!");
                    window.location.reload(false);
                },
                (error) => {
                    console.log("ERROR", error.text);
                    alert("MESSAGE SUCCESSFULLY FAILED!");
                }
    
        )
    }
    
    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}
                            letterClass = {letterClass}
                        />
                    </h1>

                    <p>Contact me just to say hello and connect!</p>
                
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half-row'>
                                    <input type='text' name='name' placeholder='Name' required />
                                </li>

                                 <li className='half-row'>
                                    <input type='email' name='email' placeholder='Email' required />
                                </li>

                                 <li>
                                    <input type='text' name='subject' placeholder='Subject' required />
                                </li>

                                 <li>
                                    <textarea name='message' placeholder='Message' required/>
                                </li>

                                 <li>
                                    <input type='submit' className='flat-button' value='SEND' />
                                </li>
                            </ul>
                        </form>
                    </div>

                </div>

                <div className='info-map'>
                    Vy Nguyen,
                    <br />
                    Richmond, VA
                    <br />
                    (804)-898-6999
                    <br />
                    <span>
                    tuongvy00999@gmail.com
                    </span>

                </div>

                <div className='map-wrap'>
                    <MapContainer center={[	37.541290, 	-77.434769]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <Marker position={[	37.541290, 	-77.434769]}>
                            {/* <Popup>_V lives here! Come over for coffee and connect!</Popup> */}
                        </Marker>
                    </MapContainer>
                </div>

            </div>

            <Loader type='pacman'/>
        </>
    )
}


export default Contact;