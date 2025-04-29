import React from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import './Footer.css'

function Footer() {
    const navigate = useNavigate();

    return(
        <>
        <footer>
            <div className="links">
                <Link to="/">Inicio</Link>
                <Link to="/Linguagens" style={{marginLeft: "40px"}}>Linguagens</Link>
                <Link to="/" style={{marginLeft: "40px"}}>Projetos</Link>
            </div>
            <div className="github">
                <a 
                href="https://www.linkedin.com/in/raul-gardini-2595712b1/" 
                target="_blank" 
                rel="noopener noreferrer"
                >
                    <FaLinkedin />
                </a>
                <a 
                href="https://github.com/RaulGardini" 
                target="_blank" 
                rel="noopener noreferrer"
                >
                    <AiFillGithub />
                </a>
            </div>
        </footer>
        </>
    )
}

export default Footer;