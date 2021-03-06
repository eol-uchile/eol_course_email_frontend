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
                    <strong>Has enviado muchos correos, por favor intenta nuevamente en unos minutos.</strong>
                </Alert>
            );
        case "maxsize":
            return(
                <Alert variant="danger" className="mx-4 mt-3 text-center w-100 shadow">
                    <strong>El archivo que intentas enviar excede el tamaño máximo permitido. Para estos casos, te recomendamos compartir un enlace al archivo en Google Drive.</strong>
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