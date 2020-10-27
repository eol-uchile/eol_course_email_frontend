import React from 'react';
import PropTypes from 'prop-types';
import { useFetchReceivedEmails } from '../hooks/useFetchUserData';
import { EmailItem } from './EmailItem';
import { Spinner } from '@edx/paragon';

export const ReceivedEmails = ({ courseId }) => {
    const { data, loading } = useFetchReceivedEmails( courseId );
    return (
        <>
            <h1>Emails Recibidos</h1>
            { loading && <Spinner animation="border" variant="primary" /> }
            <div className="email-grid">
                <div className="row font-weight-bold border-bottom py-2">
                    <div className="col col-3">
                        Fecha
                    </div>
                    <div className="col col-3">
                        Enviado por
                    </div>
                        
                    <div className="col col-5">
                        Asunto
                    </div>
                        
                    <div className="col col-1 text-center">
                        Detalle
                    </div> 
                </div>
                {
                    data.map( (email, index) => (
                        <EmailItem 
                            key={ index }
                            { ...email }
                        />
                    ))
                }
            </div>
        </>
    )
}

ReceivedEmails.propTypes = {
    courseId : PropTypes.string.isRequired,
}