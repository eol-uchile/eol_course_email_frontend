import React from 'react';
import { Button } from '@edx/paragon';
import { Link } from 'react-router-dom';
import { getCourseId } from '../helpers/getCourseInfo';

export default function Menu() {
    const courseId = getCourseId();

    console.log('Menu loaded');

    return (
        <div>
            <Link to={`/eol/eol_course_email/static/received/${courseId}`}>
                <Button className="my-2">Ver Correos Recibidos</Button>
            </Link>
            <Link to={`/eol/eol_course_email/static/sended/${courseId}`}>
                <Button className="my-2 mx-2">Ver Correos Enviados</Button>
            </Link>
            <Link to={`/eol/eol_course_email/static/new/${courseId}`}>
                <Button className="my-2">Enviar Nuevo Correo</Button>
            </Link>
        </div>
        
    )
}
