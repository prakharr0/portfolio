import React, { useEffect, useRef } from 'react'
import GIT_LOGO from '../images/git.png'
import { IoIosArrowForward } from "react-icons/io";
import { FaRegFolder } from "react-icons/fa6";
import { IoIosArrowDown } from 'react-icons/io';

const IDE = () => {

    const [projectExpanded, setprojectExpanded] = React.useState(false);
    const [selectedSection, setSelectedSection] = React.useState("Curriculum Vitae")
    const [initialContent] = React.useState(`visitor@Prakhars-Portfolio  ${selectedSection}  %  `);
    const [command, setCommand] = React.useState(initialContent)
    const textareaRef = useRef(null)

    const toggleProjectExpanded = () => {
            setprojectExpanded(!projectExpanded)
    }

    const updateSelectedSection = (section) => {
        setSelectedSection(section)
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
    };

    return (
        <div id='content'>
            <nav className='nav'>
                <div className='nav-item'>
                    <p id='nav-name-logo'>PR</p>
                    <p>Prakhar Rathi</p>
                </div>

                <div className='nav-item'>
                    <img src={GIT_LOGO} alt='Version Control Icon' width={20} height={20}></img>
                    <p>dev</p>
                </div>
            </nav>

            <section className='editor'>
                <div class="row">
                    <div class="col sidebar">
                        <div className='project-name section-name'>
                            {projectExpanded ? <IoIosArrowDown onClick={toggleProjectExpanded} /> : <IoIosArrowForward onClick={toggleProjectExpanded}/>}
                            <FaRegFolder />
                            <span>Curriculum Vitae</span>
                        </div>

                        <div>

                        </div>

                    </div>
                    <div class="col-7">
                    </div>
                    <div class="col sidebar">
                    </div>
                </div>
            </section>

            <footer>
                <div className='footer-nav'>
                    <p>Terminal</p>
                    <p className='terminal-name'>Local</p>
                </div>

                <div className='terminal'>
                    <textarea 
                    spellCheck={false}
                    ref={textareaRef}
                    rows={1} 
                    value={command}
                    onChange={handleInput} 
                    name='command' 
                    id='command'
                />
                </div>
            </footer>
        </div>
    )
}

export default IDE