import React, { useRef, useEffect, useState } from 'react';
import {motion} from 'framer-motion'
import { CgScrollV } from "react-icons/cg";

const About = () => {

    const [isOnScreen, setIsOnScreen] = useState(false);
    const componentRef = useRef(null);
    const animationVariantsLR = {
        visible : {opacity: 0.4, scale: 1, x: 0},
        hidden : {opacity: 0.2, scale: 0.5, x: '-100%'}
    }

    const animationVariantsRL = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: 1 }
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            // If the component is in view
            if (entry.isIntersecting) {
                console.log("About in View")
                setIsOnScreen(true);
            } else {
                // If the component is not in view
                console.log("About out of View")
                setIsOnScreen(false);
            }
            });
        },
        { threshold: 0.3 } // Adjust the threshold as needed
        );

        observer.observe(componentRef.current);

        // Cleanup: Disconnect the observer when the component unmounts
        return () => {
        observer.disconnect();
        };
    }, []);

    return (
        <section id='about' ref={componentRef}>
        
            <motion.h1 className="sliding-text"
                variants={animationVariantsLR}
                initial="hidden"
                animate={isOnScreen ? "visible" : "hidden"}
                transition={{duration: 0.9 }}
            >
                About me
            </motion.h1>

            <motion.p
                variants={animationVariantsRL}
                initial="hidden"
                animate={isOnScreen ? "visible" : "hidden"}
                transition={{duration: 0.9 }}
             >
                I am a Software Engineer for Aerospace-Ground Technology working at <a href='https://www.csgroup.eu/en/' target='_blank'>CS Group</a> in Darmstadt, Germany.
            </motion.p>


            <div className='group-title'>
                <p className='sliding-text'>Work Experience</p>
                <div><CgScrollV size={"2rem"}/></div>
            </div>
            
            
        </section>
  )
}

export default About