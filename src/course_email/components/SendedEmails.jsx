import React from 'react';
import PropTypes from 'prop-types';
import { useFetchSendedEmails } from '../hooks/getUserData';
import { EmailItem } from './EmailItem';

export const SendedEmails = ({ courseId }) => {
    const { data, loading } = useFetchSendedEmails( courseId );
    return (
        <>
            <h1>Emails Enviados:</h1>
            { loading && <p>Cargando...</p> }
            <div className="email-grid">
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

SendedEmails.propTypes = {
    courseId : PropTypes.string.isRequired,
}