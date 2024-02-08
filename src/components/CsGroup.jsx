import React from 'react';
import { FaRegCalendarAlt } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { GiOfficeChair } from "react-icons/gi";
import GSMC_IMAGE from '../images/gsmc-cc.png';

const CsGroup = () => {

    return (
        <section id='csgroup'>
            <h2>01</h2>

            <div className="job-details">
                <div className="intro">
                    <h1 className='job-title'>Software Engineer</h1>
                    <p>
                        <GiOfficeChair className='icon'/>
                        <a 
                            href='https://www.csgroup.eu/en/'
                            target='_blank'
                        >
                            CS Group, Darmstadt, Germany
                        </a>
                    </p>
                    {/* <GoDotFill className='icon'/> */}
                    <p>
                        <FaRegCalendarAlt  className='icon'/>
                        Since May/2022   
                    </p>
                </div>
                <div className="tasks">
                    <p align="justify">
                        Developing <a href='https://www.csgroup.eu/en/news/cs-group-awarded-with-the-next-generation-of-ground-station-monitoring-and-control-systems-for-estrack/' target='_blank'>GSMC-CC</a> for European Space Agency Tracking Network (ESTRACK) ground stations.
                    </p>
                    
                    <p align="justify">
                        Java OSGi, JavaFX, Groovy, Docker, MySQL, PostgreSQL, Apache Karaf, Kafka, ActiveMQ, GitLab CI/CD, JAXB, XML/XSD, Shell Scripts, Grafana, In-house tools and languages.
                    </p>
                </div>

            </div>
            

            <div>
                <img src={GSMC_IMAGE} className='gsmc-main-image'></img>
                <p className="reference">GSMC-CC UI (<a href='https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjxvd_YlvSDAxUphP0HHQdGDGAQFnoECA0QAQ&url=https%3A%2F%2Fstar.spaceops.org%2Fuser_manudownload.php%3Fdoc%3D164__jekgwh6v.pdf&usg=AOvVaw24Y_556a524wlvJq9Aoo6H&opi=89978449' target='_blank'>Source</a>)</p>
            </div>

            {/* <div className="gsmc-images">
                <img src={ESTRACK_IMAGE} className="gsmc-bg-image" height={300} width={450}></img>
                    {/* <figcaption>Source: <a href='https://live.staticflickr.com/4310/35201834714_31b23a753f_b.jpg' target='_blank'>Flickr, created by ESA_events.</a> </figcaption>
                </figure> */}

                {/* <figure> */}
                    {/* <figcaption>Source:  </figcaption>
                </figure> */}
            {/* </div> */}
        
             {/* <p className="reference">LHS: , RHS: ESOC Mission Control Room (<a href='https://live.staticflickr.com/4310/35201834714_31b23a753f_b.jpg' target='_blank'>Source</a>)</p> */}
             {/* } */}

            
                {/* /* <p className='reference'> the paper presented in the 17th International Conference on Space Operations, Dubai (2023).</p> */
            /* <h3 className="bottom-sticky">Software Development Life Cycle</h3> */ }

        </section>
    )
}

export default CsGroup