import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
            console.log("TIMER", timer);
        }, 2000)
    }, [])

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray = {['A', 'b', 'o', 'u', 't', ' ','m', 'e']}
                        idx={15}
                    />
                </h1>
                
                <p>Vy (V) Nguyen (He/She/They)
                </p>

                <p>
                    Virginia Commonwealth University | Computer Science | JavaScript | Python | Seeking Full-time Job on OPT
                </p>

                <p>
                    I'm a Computer Science graduate passionate about building and implementing new software. I am currently looking for a Summer Internship in 2022 in companies that are leading towards innovation, hoping to expand my technical knowledge and professional network.
                </p>

                <div className='flat-button'>
                    <a href='https://github.com/VeeNguyen/Portfolio_Website_React/blob/main/Vy.Nguyen.Resume.2022.docx%20(new).pdf'>Resume</a>
                </div>


            </div>

            <div className='stage-cube-cont'>
                <div className='cube-spinner'>
                    <div className='face-1'>
                        <FontAwesomeIcon icon={faAngular} color="#DD0031"/>
                    </div>

                    <div className='face-2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                    </div>

                    <div className='face-3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                    </div>

                    <div className='face-4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                    </div>

                    <div className='face-5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                    </div>

                    <div className='face-6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
                    </div>

                </div>
            </div>

            

            </div>
            
            <Loader type='pacman' />
        </>
    )
}



export default About;