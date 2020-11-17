import React from 'react';
import PropTypes from 'prop-types';
import { Spinner, Alert} from '@edx/paragon';

export const StatusForm = ({status}) => {
    switch (status) {
        case "pending":
            return(
                <Spinner animation="border" variant="primary" className="d-flex mx-auto mt-2 "/>
            );
        case "ratelimit":
            return(
                <Alert variant="danger" className="mx-4 mt-3 text-center w-100 shadow">
                    Error al enviar correo. <strong>Has superado el límite de correos por minuto y deberás esperar un momento para volver enviar correos.</strong>
                </Alert>
            );
        case "fail":
            return(
                <Alert variant="danger" className="mx-4 mt-3 text-center w-100 shadow">
                    Error al enviar correo. Intentar nuevamente.
                </Alert>
            );
        case "success":
            return(
                <Alert variant="success" className="mx-4 mt-3 text-center w-100 shadow">
                    <strong>Tu mensaje fue procesado con éxito para ser enviado</strong>.<br/>Los destinatarios comenzarán a recibir el correo en los próximos minutos.
                </Alert>
            );
        case "empty-list":
            return(
                <Alert variant="warning" className="mx-4 mt-3 text-center w-100 shadow">
                    <strong>Debes seleccionar al menos un destinatario.</strong>
                </Alert>
            );
    
        default:
            return(
                <>
                </>
            );
    }
}

StatusForm.propTypes = {
    status       : PropTypes.string.isRequired
}