import React from 'react';
import {Container, Jumbotron, Row, Col} from 'react-bootstrap'
import Blockbutton from '../../components/button/Blockbutton.js'
import styles from './about.css'
import axios from 'axios'
import {  Link } from 'react-router-dom'

function About() {


return (<Container>
            <Jumbotron>
                <div className='title'>
                    <h1> About ERA: </h1>
                    <Link to="/" className="btn btn-secondary btn-lg ml-auto">Go Back</Link>
                </div>
                <hr/>
                <p>ERA is an online directory of local resources available as alternatives to calling the police or 911.
                We seek to provide easy access get support in non-emergency situations. Our goal is to focus on resources
                that provide the necessary service to best target the type of immediate concern. ERA provides listings for
                resources that provide emergency or crisis services related to homelessness, mental health, domestic violence,
                sexual assault, substance abuse, and child abuse.</p>
                <p> Based on the user&apos;s location, ERA gives a list of police alternative resources for specific
                categories such as domestic violence, mental health, homelessness, and more.</p>
            </Jumbotron>


        </Container>)


}

export default About;