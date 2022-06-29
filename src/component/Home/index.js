import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import LogoTitle from '../../assets/images/logo-s.png';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import './index.scss';
import Loader from 'react-loaders';


const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ', 'F', 'u', 'l', 'l', '-', 'S', 't', 'a', 'c', 'k']
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
            console.log("TIMER", timer);
        }, 4000)
    }, [])
    
    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>

                    <br></br>
                    
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m </span>


                    <AnimatedLetters letterClass={letterClass}
                        strArray={nameArray}
                        idx={15} />
                    <br/>
                    
                    <AnimatedLetters letterClass={letterClass}
                        strArray={jobArray}
                        idx={25} />
                    
                    {/* <img src={LogoTitle} alt='developer'></img> */}
                    <br/>
                </h1>

                <br />
                <br />

                <h2>
                    Full-Stack developer who makes web and phone apps
                </h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo/>
        </div>
        <Loader type='pacman' />
        </>
    );
}

export default Home;