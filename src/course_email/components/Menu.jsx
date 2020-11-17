import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@edx/paragon';
import { Link } from 'react-router-dom';
import { Spinner } from '@edx/paragon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { useFetchUserEmail } from '../hooks/useFetchUserData';

export default function Menu({ courseId }) {
    const { email, loading } = useFetchUserEmail(courseId);

    return (
        <div className="my-2">
            <div className="d-flex justify-content-center text-muted small">
                { loading && <Spinner animation="border" variant="primary" className="mx-auto mt-2 "/> }
                { !loading && <p>El correo electrónico que tienes registrado en la plataforma es <strong className="text-uppercase">{ email }</strong> <i>(<a href="/account/settings" target="_parent">Actualizar correo</a>)</i></p> }
            </div>
            <div className="d-flex">
                <Link to={`/eol/eol_course_email/static/received/`}>
                    <Button variant="outline-primary shadow-sm" size="sm"><FontAwesomeIcon icon={faArrowDown} className="mr-2" />Recibidos</Button>
                </Link>
                <Link to={`/eol/eol_course_email/static/sended/`} className="mr-auto">
                    <Button variant="outline-primary shadow-sm" size="sm" className="mx-3"><FontAwesomeIcon icon={faArrowUp} className="mr-2" />Enviados</Button>
                </Link>
                <Link to={`/eol/eol_course_email/static/new/`}>
                    <Button variant="primary shadow-sm" size="sm"><FontAwesomeIcon icon={faPaperPlane} className="mr-2" />Nuevo Correo</Button>
                </Link>
            </div>
            
        </div>
        
    )
}

Menu.propTypes = {
    courseId       : PropTypes.string.isRequired
}