import React from 'react';
import { Button } from '@edx/paragon';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

export default function Menu() {

    console.log('Menu loaded');

    return (
        <div>
            <div className="d-flex my-2">
                <Link to={`/eol/eol_course_email/static/received/`}>
                    <Button variant="outline-primary shadow-lg" size="sm"><FontAwesomeIcon icon={faArrowDown} className="mr-2" />Recibidos</Button>
                </Link>
                <Link to={`/eol/eol_course_email/static/sended/`} className="mr-auto">
                    <Button variant="outline-primary shadow-lg" size="sm" className="mx-3"><FontAwesomeIcon icon={faArrowUp} className="mr-2" />Enviados</Button>
                </Link>
                <Link to={`/eol/eol_course_email/static/new/`}>
                    <Button variant="primary shadow-lg" size="sm"><FontAwesomeIcon icon={faPaperPlane} className="mr-2" />Nuevo Correo</Button>
                </Link>
            </div>
            
        </div>
        
    )
}
