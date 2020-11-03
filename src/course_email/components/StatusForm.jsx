import React from 'react';
import { Spinner, Alert} from '@edx/paragon';

export const StatusForm = ({status}) => {
    switch (status) {
        case "pending":
            return(
                <Spinner animation="border" variant="primary" className="mx-auto mt-2 "/>
            );
        case "fail":
            return(
                <Alert variant="danger" className="mx-4 mt-2 text-center w-100">
                    Error al enviar correo. Intentar nuevamente.
                </Alert>
            );
        case "success":
            return(
                <Alert variant="success" className="mx-4 mt-2 text-center w-100">
                    Correo enviado.
                </Alert>
            );
    
        default:
            return(
                <>
                </>
            );
    }
}
