import React, { useEffect, useRef } from 'react'
import GIT_LOGO from '../images/git.png'
import MyCV from '../files/CV_PrakharRathi.pdf'
import { IoIosArrowForward } from "react-icons/io";
import { FaRegFolder } from "react-icons/fa6";
import { IoIosArrowDown } from 'react-icons/io';
import { GoDot, GoDotFill } from "react-icons/go";
import { LuText } from "react-icons/lu";
import { GiOfficeChair } from "react-icons/gi";
import { IoCalendarClearOutline } from "react-icons/io5";
import { PiDatabase } from "react-icons/pi";
import { VscJson } from "react-icons/vsc";
import { FaJava } from "react-icons/fa";
import { SiApachegroovy, SiPythonanywhere, SiReact } from "react-icons/si";
import { DiDocker } from "react-icons/di";
import { SiApache } from "react-icons/si";
import { PiQueueLight } from "react-icons/pi";
import { SiApachekafka } from "react-icons/si";
import { SiGrafana } from "react-icons/si";
import { PiGitlabLogoLight } from "react-icons/pi";
import { SiApachemaven } from "react-icons/si";
import { GoPerson } from "react-icons/go";
import { CiHome } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
import { PiPhoneCallLight } from "react-icons/pi";
import { CiLinkedin } from "react-icons/ci";
import { DiPostgresql } from "react-icons/di";
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiAiohttp } from "react-icons/si";
import { IoAppsOutline } from "react-icons/io5";
import { DiMysql } from "react-icons/di";
import { SiThymeleaf } from "react-icons/si";
import { LiaHtml5 } from "react-icons/lia";
import { PiTerminalLight } from "react-icons/pi";
import { TbBrandMongodb, TbBrandPython } from "react-icons/tb";
import { TbBrandJavascript } from "react-icons/tb";
import { AiOutlineAndroid } from "react-icons/ai";
import { LiaUniversitySolid } from "react-icons/lia";
import { SiJupyter } from "react-icons/si";
import { SiLatex } from "react-icons/si";
import { TbUsersGroup } from "react-icons/tb";
import { BiLogoUnity } from "react-icons/bi";
import { SiCsharp } from "react-icons/si";
import { TbLego } from "react-icons/tb";


const IDE = () => {
    const [parentExpanded, setParentExpanded] = React.useState(true)
    const [databaseExpanded, setDatabaseExpanded] = React.useState(true)
    const [experienceExpanded, setExperienceExpanded] = React.useState(false)
    const [educationExpanded, setEducationExpanded] = React.useState(false)
    const [projectExpanded, setProjectExpanded] = React.useState(false)
    const [selectedSection, setSelectedSection] = React.useState("Curriculum Vitae")
    const [initialContent] = React.useState(`visitor@Prakhars-Portfolio  ${selectedSection}  %  `);
    const [command, setCommand] = React.useState(initialContent)
    const textareaRef = useRef(null)

    const toggleParentExpanded = () => {
        setParentExpanded(!parentExpanded)
    }

    const toggleDatabaseExpanded = () => {
        setDatabaseExpanded(!databaseExpanded)
    }

    const toggleExperienceExpanded = () => {
        setExperienceExpanded(!experienceExpanded)
    }

    const toggleEducationExpanded = () => {
        setEducationExpanded(!educationExpanded)
    }

    const toggleProjectExpanded = () => {
        setProjectExpanded(!projectExpanded)
    }

    const updateSelectedSection = (section) => {
        console.log("calling selected section " + section)
        setSelectedSection(section)

        if (section === 'Software Engineer' || section === 'Research Assistant' || section === 'Project Engineer') {
            setParentExpanded(true)
            setExperienceExpanded(true)
        }

        if (section === 'MSC' || section === 'BTECH' || section === 'Trainings') {
            setParentExpanded(true)
            setEducationExpanded(true)
        }

        if (section == 'VARobot' || section === 'Sentiment Analysis' || section === 'Student Service') {
            setParentExpanded(true)
            setProjectExpanded(true)
        }
    }

    const updateCommand = (event) => {
        setCommand(event.target.value)
    }

    const handleInput = (event) => {

        const txtarea = textareaRef.current;
        txtarea.style.height = 'auto'
        txtarea.style.height = `${txtarea.scrollHeight}px`

        const { value } = event.target;
        const startsWithInitialContent = value.startsWith(initialContent);
        if (!startsWithInitialContent) {
            setCommand(initialContent + value.slice(initialContent.length));
        } else {
            setCommand(value);
        }
    }

    const handleKeydown = (event) => {
        const key = event.key
        if (key === 'Enter') {
        }
    }


    return (
        <div id='content'>
            <nav className='nav'>
                <div className='nav-left'>
                    <div className='nav-item'>
                        <p id='nav-name-logo'>PR</p>
                        <p>Prakhar Rathi</p>
                    </div>

                    <div className='nav-item'>
                        <img src={GIT_LOGO} alt='Version Control Icon' width={20} height={20}></img>
                        <p>dev</p>
                    </div>
                </div>

                <a href={MyCV} download={'CV_PrakharRathi.pdf'} target='_blank'>
                    <button type='button' className='btn btn-warning fw-bold'>
                        Download CV
                    </button>
                </a>

            </nav>

            <section className='editor'>
                <div class="row">
                    <div class="col sidebar">
                        <div className='project-name' onDoubleClick={()=>updateSelectedSection('Curriculum Vitae')}>
                            {parentExpanded ? <IoIosArrowDown onClick={toggleParentExpanded} /> : <IoIosArrowForward onClick={toggleParentExpanded}/>}
                            <FaRegFolder />
                            <span>Curriculum Vitae</span>
                        </div>

                        <div className="scrollable-column">

                        {
                            (parentExpanded)
                            ? <div className='project-name one-level-section' onDoubleClick={()=>updateSelectedSection('Skills')}>
                                <LuText/>
                                <span>Skills</span>
                            </div>                            
                            : <div></div>
                        }


                        {
                            (parentExpanded)
                            ? <div className='project-name one-level-section-expanded' onDoubleClick={()=>updateSelectedSection('Experience')}>
                                {experienceExpanded ? <IoIosArrowDown onClick={toggleExperienceExpanded} /> : <IoIosArrowForward onClick={toggleExperienceExpanded}/>}
                                <FaRegFolder/>
                                <span>Work Experience</span>
                            </div>
                            : <div></div>
                        }
                        
                        {
                            (parentExpanded && experienceExpanded)
                            ? <div className='project-name two-level-section' onDoubleClick={()=>updateSelectedSection('Software Engineer')}>
                                <LuText/>
                                <span>Software Engineer</span>
                            </div>
                            : <div></div>
                        }

                        {
                            (parentExpanded && experienceExpanded)
                            ? <div className='project-name two-level-section' onDoubleClick={()=>updateSelectedSection('Research Assistant')}>
                                <LuText/>
                                <span>Research Assistant</span>
                            </div>
                            : <div></div>
                        }

                        {
                            (parentExpanded && experienceExpanded)
                            ? <div className='project-name two-level-section' onDoubleClick={()=>updateSelectedSection('Project Engineer')}>
                                <LuText/>
                                <span>Project Engineer</span>
                            </div>
                            : <div></div>
                        }

                        {
                            (parentExpanded)
                            ? <div className='project-name one-level-section-expanded' onDoubleClick={()=>updateSelectedSection('Education')}>
                                {educationExpanded ? <IoIosArrowDown onClick={toggleEducationExpanded} /> : <IoIosArrowForward onClick={toggleEducationExpanded}/>}
                                <FaRegFolder/>
                                <span>Education and Training</span>
                            </div>
                            : <div></div>
                        }

                        {
                            (parentExpanded && educationExpanded)
                            ? <div className='project-name two-level-section' onDoubleClick={()=>updateSelectedSection('MSC')}>
                                <LuText/>
                                <span>M.Sc.</span>
                            </div>
                            : <div></div>
                        }

                        {
                            (parentExpanded && educationExpanded)
                            ? <div className='project-name two-level-section' onDoubleClick={()=>updateSelectedSection('BTECH')}>
                                <LuText/>
                                <span>B.Tech.</span>
                            </div>
                            : <div></div>
                        }

                        {
                            (parentExpanded && educationExpanded)
                            ? <div className='project-name two-level-section' onDoubleClick={()=>updateSelectedSection('Trainings')}>
                                <LuText/>
                                <span>Trainings</span>
                            </div>
                            : <div></div>
                        }

                        {
                            (parentExpanded)
                            ? <div className='project-name one-level-section-expanded' onDoubleClick={()=>updateSelectedSection('Projects')}>
                                {projectExpanded ? <IoIosArrowDown onClick={toggleProjectExpanded} /> : <IoIosArrowForward onClick={toggleProjectExpanded}/>}
                                <FaRegFolder/>
                                <span>Projects</span>
                            </div>
                            : <div></div>
                        }

                        {
                            (parentExpanded && projectExpanded)
                            ? <div className='project-name two-level-section' onDoubleClick={()=>updateSelectedSection('VARobot')}>
                                <LuText/>
                                <span>VARobot</span>
                            </div>
                            : <div></div>
                        }

                        {
                            (parentExpanded && projectExpanded)
                            ? <div className='project-name two-level-section' onDoubleClick={()=>updateSelectedSection('Student Service')}>
                                <LuText/>
                                <span>Student Service</span>
                            </div>
                            : <div></div>
                        }

                        {
                            (parentExpanded && projectExpanded)
                            ? <div className='project-name two-level-section' onDoubleClick={()=>updateSelectedSection('Sentiment Analysis')}>
                                <LuText/>
                                <span>Sentiment Analysis</span>
                            </div>
                            : <div></div>
                        }

                        {
                            (parentExpanded)
                            ? <div className='project-name one-level-section' onDoubleClick={()=>updateSelectedSection('Languages')}>
                                <LuText/>
                                <span>Languages</span>
                            </div>                            
                            : <div></div>
                        }
                        </div>
                    <div>

                </div>

                </div>

                {/* Column 2 */}
                    <div class="col-7">
                        {/* Curriculum Vitae */}
                        {(selectedSection === 'Curriculum Vitae') 
                        ? <div className='scrollable-column'>
                            <h3>Prakhar Rathi</h3>  
                            <div className="role-details">
                                <p><GoDotFill/> Technology-driven Software Engineer with an M.Sc. in Computer Science and over 3 years of professional experience working productively in dynamic environments.</p>
                                <p><GoDotFill/> Programming in Java for almost 9 years to develop software, REST APIs, and full-stack web applications.</p>
                                <p><GoDotFill/> Proven ability to learn new technologies quickly through various projects from Ground Station Monitoring and Control 
                                    software for European Space Agency's Ground Stations and Augmented Reality Android Applicationto Sentiment Analysis of Consumer Reviews on eCommerce websites.</p>
                                <p><GoDotFill/> Enthusiastic team player focused on achieveing project objectives with speed and accuracy.</p>
                                <p><GoDotFill/> Interested in backend development, microservices, and cloud such as AWS.</p>
                            </div>
                            
                        </div> 
                        : <div></div>}

                        {/* SKILLS */}
                        {(selectedSection === 'Skills') 
                        ? <div className='scrollable-column'>
                            <h3>My Skills</h3>  
                            <div className="role-details">
                                    <p><GoDotFill/> <span className='bullet-heading'>Programming :</span> Java, OOPS, JDBC, JPA, Hibernate, Python, Groovy, Flutter, Shell scripting.</p>
                                    <p><GoDotFill/> <span className='bullet-heading'>Software Development :</span> Java Spring Boot, Java OSGi, REST APIs, Java Spring Cloud for microservices.</p>
                                    <p><GoDotFill/> <span className='bullet-heading'>Database :</span> MySQL, PostgreSQL, Firebase, MongoDB.</p>
                                    <p><GoDotFill/> <span className='bullet-heading'>Web development :</span> HTML, CSS, JavaScript, ReactJS.</p>
                                    <p><GoDotFill/> <span className='bullet-heading'>Testing :</span> JUnit, Mockito.</p>           
                                    <p><GoDotFill/> <span className='bullet-heading'>Deployment :</span> Git, GitLab CI, Docker, Kubernetes.</p>     
                                    <p><GoDotFill/> <span className='bullet-heading'>Cloud :</span> AWS.</p>                            
                            </div>
                        </div> 
                        : <div></div>}

                        {/* WORK EXPERIENCE */}
                        {(selectedSection === 'Experience') 
                        ? <div className='scrollable-column'>
                            <h3>Work Experience</h3>  
                            <div className="role-details">
                                    <p><GoDotFill/><span className='bullet-heading'> Software Engineer</span> for Aerospace-Ground Technology. <button type='button' className='btn btn-secondary ide-btn' onClick={()=>updateSelectedSection('Software Engineer')}>Read more</button></p>
                                    <p><GoDotFill/><span className='bullet-heading'> Research Assistant (Software Developer)</span> for Secure Java Software Development. <button type='button' className='btn btn-secondary ide-btn' onClick={()=>updateSelectedSection('Research Assistant')}>Read more</button></p>
                                    <p><GoDotFill/><span className='bullet-heading'> Project Engineer</span> for Software Engineering projects. <button type='button' className='btn btn-secondary ide-btn' onClick={()=>updateSelectedSection('Project Engineer')}>Read more</button></p>                      
                            </div>
                        </div> 
                        : <div></div>}

                         {/* SOFTWARE ENGINEER */}
                         {(selectedSection === 'Software Engineer') 
                        ? <div className='scrollable-column'>
                            <h3>Software Engineer</h3>  
                            <div className="role-details">
                                <p>
                                    <GiOfficeChair/> &nbsp;
                                    <a className='link-offset-2' href='https://www.csgroup.eu/en/' target='_blank'>CS Group, Darmstadt, Germany</a>
                                    &nbsp; &nbsp;
                                    <IoCalendarClearOutline/>&nbsp;
                                    05/2022 - Present
                                </p>

                                <p><a className='link-offset-2' href='https://www.csgroup.eu/en/news/cs-group-awarded-with-the-next-generation-of-ground-station-monitoring-and-control-systems-for-estrack/' target='_blank'>GSMC-CC: Ground Station Monitoring & Control</a></p>
                                <p><GoDotFill/> Developed GSMC-CC for European Space Agency's ground-stations (ESTRACK) to replace the existing monitoring and control software.</p>
                                <p><GoDotFill/> Designed, programmed, and documented various Java OSGi modules on top of <a className='link-offset-2' href='http://www.egscc.esa.int' target='_blank'>EGS-CC</a>.</p>
                                <p><GoDotFill/> Implemented synchronized deployment of GSMC-CC on multiple ESTRACK ground-stations across the world.</p>
                                <p><GoDotFill/> Designed and developed a standalone application to control GSMC-CC on any ESTRACK ground-station on the globe.</p>
                                <p><GoDotFill/> Communicated directly with the clients, formulated user requirements, and maintained respective software design documents.</p>
                                <p><GoDotFill/> Supported a team member during training in their probation period.</p>
                           
                                <p><a className='link-offset-2' href='https://rosa.ro/t709-601gs-service-oriented-ground-stations-network-configuration-and-resource-allocation-3/' target='_blank'>SOGRA: Service-Oriented Ground Statins Network Configuration and Resource Allocation</a></p>
                                <p><GoDotFill/> Designing and documenting software implementation design based on the study report.</p>
                                <p><GoDotFill/> Implementing an API for allowed users, restricted software, to communicate with GSMC-CC and fetch relevant information using <a className='link-offset-2' href='https://public.ccsds.org/review/CCSDS%20901.3-R-1/901x3r1.pdf' target='_blank'>Functional Resource Model</a>.</p>
                            </div>
                        </div> 
                        : <div></div>}


                        {(selectedSection === 'Research Assistant') 
                        ? <div className='scrollable-column'>
                            <h3>Research Assistant (Software Developer)</h3>  
                            <div className="role-details">
                                <p>
                                    <GiOfficeChair/> &nbsp;
                                    <a className='link-offset-2' href='https://www.iem.fraunhofer.de' target='_blank'>Fraunhofer IEM, Paderborn, Germany</a>
                                    &nbsp; &nbsp;
                                    <IoCalendarClearOutline/>&nbsp;
                                    05/2021 - 03/2022
                                </p>

                                <p className='project-title'>Highly Vulnerable Full-Stack Web Application</p>
                                <p><GoDotFill/> Developed a user-centric full-stack web application with the team and containerized the application
                                along with the MySQL database.</p>
                                <p><GoDotFill/> Generalized the deployment process for generating multiple application repositories, cutting down
                                the process to a single stage in the Continuous Integration (CI) pipeline.</p>
                                <p><GoDotFill/> Designed, modified, and programmed vulnerabilities in the code and implemented unit tests.</p>
                                <p><GoDotFill/> Adhered to microservice architecture for development.</p>
                                <p><GoDotFill/> Coordinated software documentation of implemented features and vulnerabilities.</p>
                            </div>
                        </div> 
                        : <div></div>}

                        
                        {(selectedSection === 'Project Engineer') 
                        ? <div className='scrollable-column'>
                            <h3>Project Engineer</h3>  
                            <div className="role-details">
                                <p>
                                    <GiOfficeChair/> &nbsp;
                                    <a className='link-offset-2' href='https://www.wipro.com' target='_blank'>Wipro Ltd., Bengaluru, India</a>
                                    &nbsp; &nbsp;
                                    <IoCalendarClearOutline/>&nbsp;
                                    07/2018 - 02/2019
                                </p>

                                <p className='project-title'>SOAP to REST API Migration</p>
                                <p><GoDotFill/> Modularized and updated old code bases to modern development standards with clean code that is 
                                easy to understand, operate, and test.</p>
                                <p><GoDotFill/> Performed periodic regression testing to ensure product quality.</p>
                                <p><GoDotFill/> Assisted senior developers in designing and documenting software design and requirements.</p>
                               
                                <p className='project-title'>Android Based Automotive Infotainment System</p>
                                <p><GoDotFill/> Developed a proof-of-concept automotive infotainment system using android with the team.</p>
                                <p><GoDotFill/> Programmed automatic initialization of system configuration via face detection of the driver.</p>
                                <p><GoDotFill/> Implemented distraction alerts for the driver based on sensor data.</p>
                               </div>
                        </div> 
                        : <div></div>}

                        {/* Education */}
                        {(selectedSection === 'Education') 
                        ? <div className='scrollable-column'>
                            <h3>Education and Training</h3>  
                            <div className="role-details">
                                    <p><GoDotFill/><span className='bullet-heading'> M.Sc. in Computer Science</span> from University of Paderborn. <button type='button' className='btn btn-secondary ide-btn' onClick={()=>updateSelectedSection('MSC')}>Read more</button></p>
                                    <p><GoDotFill/><span className='bullet-heading'> B.Tech. in Computer Science and Engineering</span> from Dr. A.P.J Abdul Kalam Technical University. <button type='button' className='btn btn-secondary ide-btn' onClick={()=>updateSelectedSection('BTECH')}>Read more</button></p>
                                    <p><GoDotFill/><span className='bullet-heading'> Industrial Training</span> in Java-EE from Aptron Solutions. <button type='button' className='btn btn-secondary ide-btn' onClick={()=>updateSelectedSection('Trainings')}>Read more</button></p>                      
                                    <p><GoDotFill/><span className='bullet-heading'> Training in Java-J2EE</span> from Ducat Noida. <button type='button' className='btn btn-secondary ide-btn' onClick={()=>updateSelectedSection('Trainings')}>Read more</button></p>
                            </div>
                        </div> 
                        : <div></div>}

                        {/* MSC */}
                        {(selectedSection === 'MSC') 
                        ? <div className='scrollable-column'>
                            <h3>M.Sc. - Computer Science</h3>  
                            <div className="role-details">
                                <p>
                                    <LiaUniversitySolid/> &nbsp;
                                    <a className='link-offset-2' href='https://cs.uni-paderborn.de/en/studies/degree-programs/computer-science' target='_blank'>University of Paderborn, Paderborn, Germany</a>
                                    &nbsp; &nbsp;
                                    <IoCalendarClearOutline/>&nbsp;
                                    10/2019 - 03/2022
                                </p>

                                <p><strong className='project-title'>Specialization:</strong>&nbsp;Software Engineering</p>

                                <p><strong className='project-title'>Thesis:</strong>&nbsp;<a className='link-offset-2' href='https://github.com/secure-software-engineering/HeaderGen' target='_blank'>HeaderGen - Automated Cell Header Generation for Machine Learning Jupyter Notebooks at Heinz Nixdorf Institute, Paderborn</a></p>
                                <p><GoDotFill/> Extended PyCG, a Python static analyzer, to generate call graphs with cell-sensitive call site identification 
                                for Jupyter notebooks, line-sensitive call site identification for Python source files, and external
                                library calls.</p>
                                <p><GoDotFill/> Developed HeaderGen, unique software to annotate input Jupyter notebooks code cells with corresponding Machine Learning phases as headers in preceding markdown cells.</p>
                                <p><GoDotFill/> Established a benchmark suite with over 120 Python programs to test the extended static analyzer.</p>
                                <p><GoDotFill/> Fetched Jupyter notebooks from Kaggle programmatically and created another benchmark to assess software performance on real-life notebooks.</p>
                                <p><GoDotFill/> Implemented evaluation of HeaderGen on classical metrics i.e. precision and recall.</p>
                            
                                <p><strong className='project-title'>Seminars:</strong></p>
                                <p><GoDotFill/> Learning to Sort (Machine Learning)</p>
                                <p><GoDotFill/> ERNIE: A Continual Pre-training Framework for Enhanced Language Representation (Recent Advances in Natural Language Processing)</p>
                            </div>
                        </div> 
                        : <div></div>}

                        {/* BTECH */}
                        {(selectedSection === 'BTECH') 
                        ? <div className='scrollable-column'>
                            <h3>B.Tech. - Computer Science and Engineering</h3>  
                            <div className="role-details">
                                <p>
                                    <LiaUniversitySolid/> &nbsp;
                                    <a className='link-offset-2' href='https://jssaten.ac.in' target='_blank'>Dr. A.P.J Abdul Kalam Technical University, India</a>
                                    &nbsp; &nbsp;
                                    <IoCalendarClearOutline/>&nbsp;
                                    08/2014 - 06/2018
                                </p>

                                <p><GoDotFill/> Built strong fundamentals in Data Structures, Principles of Programming Languages, Relational
                                Database Management Systems, Design and Analysis of Algorithms, etc.</p>
                                <p><GoDotFill/> Participated in IT clubs and contributed to various programming tasks and projects.</p>
                                <p><GoDotFill/> Volunteered for maintaining security with a team during inter-college techno-cultural events held in the institute.</p>
                            </div>
                        </div> 
                        : <div></div>}

                         {/* Trainings */}
                         {(selectedSection === 'Trainings') 
                        ? <div className='scrollable-column'>
                            <h3>Trainings</h3>  
                            <div className="role-details">
                                <p className='project-title'>Industrial Training in Java-J2EE</p>
                                <p>
                                    <LiaUniversitySolid/> &nbsp;
                                    <a className='link-offset-2' href='https://aptronsolutions.com' target='_blank'>Aptron Solutions Private Ltd., Noida, India</a>
                                    &nbsp; &nbsp;
                                    <IoCalendarClearOutline/>&nbsp;
                                    07/2017 - 10/2017
                                </p>

                                <p><GoDotFill/> Got trained on Java-J2EE software development.</p>
                                <p><GoDotFill/> Developed several projects such as hospital management system using Java Swing.</p>
                            
                                <p className='project-title'>Training in Java-J2EE</p>
                                <p>
                                    <LiaUniversitySolid/> &nbsp;
                                    <a className='link-offset-2' href='https://www.ducatindia.com' target='_blank'>Ducat, Noida, India</a>
                                    &nbsp; &nbsp;
                                    <IoCalendarClearOutline/>&nbsp;
                                    12/2016 - 04/2017
                                </p>

                                <p><GoDotFill/> Received in-depth training in object-oriented programming (OOPS).</p>
                                <p><GoDotFill/> Contributed to Java projects.</p>
                               

                            </div>
                        </div> 
                        : <div></div>}


                        {/* Projects */}
                        {(selectedSection === 'Projects') 
                        ? <div className='scrollable-column'>
                            <h3>Projects</h3>  
                            <div className="role-details">
                                    <p><GoDotFill/><span className='bullet-heading'> VARobot: </span> Virtual and Augmented Reality Assisted Robot Programming . <button type='button' className='btn btn-secondary ide-btn' onClick={()=>updateSelectedSection('VARobot')}>Read more</button></p>
                                    <p><GoDotFill/><span className='bullet-heading'> Student Service: </span> Full-Stack Web Application. <button type='button' className='btn btn-secondary ide-btn' onClick={()=>updateSelectedSection('Student Service')}>Read more</button></p>
                                    <p><GoDotFill/><span className='bullet-heading'> Sentiment Analysis </span> of Scraped Consumer Reviews. <button type='button' className='btn btn-secondary ide-btn' onClick={()=>updateSelectedSection('Sentiment Analysis')}>Read more</button></p>                      
                            </div>
                        </div> 
                        : <div></div>}


                        {/* VARobot */}
                        {(selectedSection === 'VARobot') 
                        ? <div className='scrollable-column'>
                            <h3>VARobot: Virtual and Augmented Reality Assisted Robot Programming</h3>  
                            <div className="role-details">
                                <p>
                                    <LiaUniversitySolid/> &nbsp;
                                    <a className='link-offset-2' href='https://www.sicp.de' target='_blank'>Software Innovation Campus Paderborn, Paderborn, Germany</a>
                                    &nbsp; &nbsp;
                                    <IoCalendarClearOutline/>&nbsp;
                                    03/2020 - 03/2021
                                </p>

                                <p><TbUsersGroup/> Master's Group Project</p>
                                <p><GoDotFill/> Programmed an Android app for Robot Programming in AR with the team.</p>
                                <p><GoDotFill/> Conceptualized and deployed single-handedly a unique approach of programming a Lego NXT Mindstorm robot by programming an Android plugin for Unity using Java for LeJOS and Android Studio as the backend with high accuracy.</p>
                                <p><GoDotFill/>Contributed to the website development: <a className='link-offset-2' href='https://varobot-pg.github.io/' target='_blank'>https://varobot-pg.github.io/</a></p>
                          
                                <p className='project-title'><strong>Seminar:</strong></p>
                                <p><GoDotFill/> Introduction to Robot Operating System (ROS): Main Concepts and Application Scenarios.</p>
                            </div>
                        </div> 
                        : <div></div>}

                        {/* Student Service */}
                        {(selectedSection === 'Student Service') 
                        ? <div className='scrollable-column'>
                            <h3>Student Service: Full-Stack Web Application</h3>  
                            <div className="role-details">
                                <p>
                                    <IoCalendarClearOutline/>&nbsp;
                                    12/2020 - 12/2020
                                </p>
                                <p><GoDotFill/> Programmed a full-stack web application to store and retrieve students' data in a MySQL database.</p>
                                <p><GoDotFill/> Built a responsive UI and the RESTful API and set up communication between the components.</p>
                                <p><GoDotFill/> Enabled CRUD operations on the databse via REST API over http.</p>
                            </div>
                        </div> 
                        : <div></div>}

                        {/* Sentiment Analysis */}
                        {(selectedSection === 'Sentiment Analysis') 
                        ? <div className='scrollable-column'>
                            <h3>Sentiment Analysis of Scraped Consumer Reviews</h3>  
                            <div className="role-details">
                                <p>
                                    <LiaUniversitySolid/> &nbsp;
                                    <a className='link-offset-2' href='https://jssaten.ac.in' target='_blank'>Dr. A.P.J Abdul Kalam Technical University, India</a>
                                    &nbsp; &nbsp;
                                    <IoCalendarClearOutline/>&nbsp;
                                    04/2017 - 03/2018
                                </p>
                                
                                <p><TbUsersGroup/> Bachelor's Group Project</p>
                                <p><GoDotFill/> Scraped the data related to the searched item from 3 giant e-commerce websites.</p>
                                <p><GoDotFill/> Programmed sentiment analysis script and arranged reviews into 3 categories.</p>
                                <p><GoDotFill/> Contributed to the UI and REST API development.</p>
                                <p><GoDotFill/> Documented and presented the approach and results.</p>
                            </div>
                        </div> 
                        : <div></div>}

                        {/* Languages */}
                        {(selectedSection === 'Languages') 
                        ? <div className='scrollable-column'>
                            <h3>Languages</h3>  
                            <div className="role-details">
                                <p><GoDotFill/> <span className='bullet-heading'>English :</span> Business Fluent - C1.</p>
                                <p><GoDotFill/> <span className='bullet-heading'>German :</span> Intermediate - B1.</p>
                                <p><GoDotFill/> <span className='bullet-heading'>Hindi :</span> Native.</p>
                            </div>
                        </div> 
                        : <div></div>}

                    </div>

                    {/* Column 3 */}
                    <div class="col sidebar">
                        <p className='project-name database'><PiDatabase/> Database</p>  

                        {/* PERSONAL DETAILS */}
                        {(selectedSection === 'Curriculum Vitae' || selectedSection == 'Skills' || selectedSection === 'Experience' || selectedSection === 'Education' || selectedSection === 'Projects' || selectedSection === 'Languages' || selectedSection === 'Contact') 
                        ? <div className='scrollable-column database-tech-stack'>
                            <p className='project-name'>
                                    {databaseExpanded ? <IoIosArrowDown onClick={toggleDatabaseExpanded} /> : <IoIosArrowForward onClick={toggleDatabaseExpanded}/>}
                                    <VscJson/>
                                    <span>personalInfo@localhost</span>
                            </p>
                            
                            { (databaseExpanded)
                            ? <div className='tech-stack'>
                                <p><GoPerson/> Prakhar Rathi</p>
                                <p><CiHome/> Ferdinandstraße 51a, 33102 Paderborn</p>
                                <p><HiOutlineMail/> rathi.prakhar@outlook.com</p>
                                <p><PiPhoneCallLight/> 0176-56949714</p>
                                <p><CiLinkedin/> <a className='link-offset-2' href='https://www.linkedin.com/in/rathiprakhar/' target='_blank'>linkedin.com/in/rathiprakhar/</a></p>
                            </div>
                            : <div></div>

                            }

                        </div> 
                        : <div></div>}

                         {/* SOFTWARE ENGINEER */}
                         {(selectedSection === 'Software Engineer') 
                        ? <div className='scrollable-column database-tech-stack'>
                            <p className='project-name'>
                                    {databaseExpanded ? <IoIosArrowDown onClick={toggleDatabaseExpanded} /> : <IoIosArrowForward onClick={toggleDatabaseExpanded}/>}
                                    <VscJson/>
                                    <span>techStack@cs</span>
                            </p>
                            
                            { (databaseExpanded)
                            ? <div className='tech-stack'>
                                <p><FaJava/> Java</p>
                                <p><FaJava/> Java OSGi</p>
                                <p><FaJava/> JavaFX</p>
                                <p><SiApachemaven/> Maven</p>
                                <p><SiApachegroovy/> Groovy</p>
                                <p><DiDocker/> Docker</p>
                                <p><DiPostgresql/> PostgreSQL</p>
                                <p><SiApache/> Apache Karaf</p>
                                <p><PiQueueLight/> ActiveMQ</p>
                                <p><SiApachekafka/> Kafka</p>
                                <p><SiApache/> Zookeeper</p>
                                <p><SiGrafana/> Grafana</p>
                                <p><PiGitlabLogoLight/> GitLab CI</p>
                                <p><PiTerminalLight/> Shell Scripts</p>
                            </div>
                            : <div></div>

                            }

                        </div> 
                        : <div></div>}

                        {/* RESEARCH ASSISTANT */}
                        {(selectedSection === 'Research Assistant') 
                        ? <div className='scrollable-column database-tech-stack'>
                            <p className='project-name'>
                                    {databaseExpanded ? <IoIosArrowDown onClick={toggleDatabaseExpanded} /> : <IoIosArrowForward onClick={toggleDatabaseExpanded}/>}
                                    <VscJson/>
                                    <span>techStack@fraunhofer</span>
                            </p>
                            
                            { (databaseExpanded)
                            ? <div className='tech-stack'>
                                <p><FaJava/> Java</p>
                                <p><TbBrandPython/> Python</p>
                                <p><BiLogoSpringBoot/> Spring Boot</p>
                                <p><FaJava/> JPA</p>
                                <p><FaJava/> Hibernate</p>
                                <p><FaJava/> JDBC</p>
                                <p><SiAiohttp/> REST API</p>
                                <p><IoAppsOutline/> Microservices</p>
                                <p><SiApachemaven/> Maven</p>
                                <p><DiDocker/> Docker</p>
                                <p><DiMysql/> MySQL</p>
                                <p><SiThymeleaf/> Thymeleaf</p>
                                <p><LiaHtml5/> HTML CSS</p>
                                <p><PiGitlabLogoLight/> GitLab CI</p>
                                <p><PiTerminalLight/> Shell Scripts</p>
                            </div>
                            : <div></div>

                            }

                        </div> 
                        : <div></div>}

                        {/* Project Engineer */}
                        {(selectedSection === 'Project Engineer') 
                        ? <div className='scrollable-column database-tech-stack'>
                            <p className='project-name'>
                                    {databaseExpanded ? <IoIosArrowDown onClick={toggleDatabaseExpanded} /> : <IoIosArrowForward onClick={toggleDatabaseExpanded}/>}
                                    <VscJson/>
                                    <span>techStack@wipro</span>
                            </p>
                            
                            { (databaseExpanded)
                            ? <div className='tech-stack'>
                                <p><FaJava/> Java</p>
                                <p><TbBrandPython/> Python</p>
                                <p><BiLogoSpringBoot/> Spring Boot</p>
                                <p><FaJava/> JPA</p>
                                <p><FaJava/> Hibernate</p>
                                <p><FaJava/> JDBC</p>
                                <p><SiAiohttp/> REST API</p>
                                <p><SiApachemaven/> Maven</p>
                                <p><DiDocker/> Docker</p>
                                <p><DiMysql/> MySQL</p>
                                <p><LiaHtml5/> HTML CSS</p>
                                <p><TbBrandJavascript/> Javascript</p>
                                <p><AiOutlineAndroid/> Android</p>
                            </div>
                            : <div></div>
                        }

                        </div> 
                        : <div></div>}

                        {/* MSC */}
                        {(selectedSection === 'MSC') 
                        ? <div className='scrollable-column database-tech-stack'>
                            <p className='project-name'>
                                    {databaseExpanded ? <IoIosArrowDown onClick={toggleDatabaseExpanded} /> : <IoIosArrowForward onClick={toggleDatabaseExpanded}/>}
                                    <VscJson/>
                                    <span>techStack@thesis</span>
                            </p>
                            
                            { (databaseExpanded)
                            ? <div className='tech-stack'>
                                <p><TbBrandPython/> Python</p>
                                <p><SiJupyter/> Jupyter Notebooks</p>
                                <p><SiLatex/> LaTex</p>
                                <p></p>
                            </div>
                            : <div></div>
                            }

                        </div> 
                        : <div></div>}

                        {/* BTECH */}
                        {(selectedSection === 'BTECH') 
                        ? <div className='scrollable-column database-tech-stack'>
                            <p className='project-name'>
                                    {databaseExpanded ? <IoIosArrowDown onClick={toggleDatabaseExpanded} /> : <IoIosArrowForward onClick={toggleDatabaseExpanded}/>}
                                    <VscJson/>
                                    <span>techStack@btech</span>
                            </p>
                            
                            { (databaseExpanded)
                            ? <div className='tech-stack'>
                                <p><TbBrandPython/> Java</p>
                                <p><SiJupyter/> JDBC</p>
                                <p><SiLatex/> MySQL</p>
                                <p></p>
                            </div>
                            : <div></div>
                            }

                            
                        </div> 
                        : <div></div>}


                        {/* Trainings */}
                        {(selectedSection === 'Trainings') 
                        ? <div className='scrollable-column database-tech-stack'>
                            <p className='project-name'>
                                    {databaseExpanded ? <IoIosArrowDown onClick={toggleDatabaseExpanded} /> : <IoIosArrowForward onClick={toggleDatabaseExpanded}/>}
                                    <VscJson/>
                                    <span>techStack@trainings</span>
                            </p>
                            
                            { (databaseExpanded)
                            ? <div className='tech-stack'>
                                <p><FaJava/> Java</p>
                                <p><FaJava/> Java Swing</p>
                                <p><FaJava/> JDBC</p>
                                <p><FaJava/> JavaEE</p>
                                <p></p>
                            </div>
                            : <div></div>
                            }

                        </div> 
                        : <div></div>}

                        {/* VARobot */}
                        {(selectedSection === 'VARobot') 
                        ? <div className='scrollable-column database-tech-stack'>
                            <p className='project-name'>
                                    {databaseExpanded ? <IoIosArrowDown onClick={toggleDatabaseExpanded} /> : <IoIosArrowForward onClick={toggleDatabaseExpanded}/>}
                                    <VscJson/>
                                    <span>techStack@varobot</span>
                            </p>
                            
                            { (databaseExpanded)
                            ? <div className='tech-stack'>
                                <p><FaJava/> Java</p>
                                <p><TbBrandPython/> Python</p>
                                <p><AiOutlineAndroid/> Android</p>
                                <p><BiLogoUnity/> Unity 3d</p>
                                <p><SiCsharp/> C#</p>
                                <p><TbLego/> LeJOS</p>
                                <p><LiaHtml5/> HTML CSS</p>
                            </div>
                            : <div></div>
                            }

                        </div> 
                        : <div></div>}

                        {/* Student Service */}
                        {(selectedSection === 'Student Service') 
                        ? <div className='scrollable-column database-tech-stack'>
                            <p className='project-name'>
                                    {databaseExpanded ? <IoIosArrowDown onClick={toggleDatabaseExpanded} /> : <IoIosArrowForward onClick={toggleDatabaseExpanded}/>}
                                    <VscJson/>
                                    <span>techStack@studentservice</span>
                            </p>
                            
                            { (databaseExpanded)
                            ? <div className='tech-stack'>
                                <p><FaJava/> Java</p>
                                <p><BiLogoSpringBoot/> Spring Boot</p>
                                <p><FaJava/> JPA</p>
                                <p><FaJava/> Hibernate</p>
                                <p><FaJava/> JDBC</p>
                                <p><SiAiohttp/> REST API</p>
                                <p><SiApachemaven/> Maven</p>
                                <p><DiMysql/> MySQL</p>
                                <p><LiaHtml5/> HTML CSS</p>
                                <p><TbBrandJavascript/> Javascript</p>
                                <p><SiReact/> ReactJS</p>
                            </div>
                            : <div></div>

                            }

                        </div> 
                        : <div></div>}

                        {/* Sentiment Analysis */}
                        {(selectedSection === 'Sentiment Analysis') 
                        ? <div className='scrollable-column database-tech-stack'>
                            <p className='project-name'>
                                    {databaseExpanded ? <IoIosArrowDown onClick={toggleDatabaseExpanded} /> : <IoIosArrowForward onClick={toggleDatabaseExpanded}/>}
                                    <VscJson/>
                                    <span>techStack@sanalysis</span>
                            </p>
                            
                            { (databaseExpanded)
                            ? <div className='tech-stack'>
                                <p><TbBrandPython/> Python</p>
                                <p><LiaHtml5/> HTML CSS</p>
                                <p><SiPythonanywhere/> Scrapy</p>
                                <p><SiPythonanywhere/> Beautiful Soup</p>
                                <p><TbBrandMongodb/> MongoDB</p>
                            </div>
                            : <div></div>
                            }

                        </div> 
                        : <div></div>}
                        
                    </div>
                </div>
            </section>

            <div className='footer-nav'>
                    <p>Terminal</p>
                    <p className='terminal-name'>Local</p>
            </div>
            <footer>
        
                <div className='terminal'>
                    <textarea 
                        spellCheck={false}
                        ref={textareaRef}
                        rows={1} 
                        value={command}
                        onChange={handleInput} 
                        onKeyDown={handleKeydown}
                        name='command' 
                        id='command'
                    />
                </div>
            </footer>
        </div>
    )
}

export default IDE