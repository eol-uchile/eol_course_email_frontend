import React from 'react';
import PropTypes from 'prop-types';
import { useFetchReceivedEmails } from '../hooks/getUserData';
import { EmailItem } from './EmailItem';

export const ReceivedEmails = ({ courseId }) => {
    const { data, loading } = useFetchReceivedEmails( courseId );
    return (
        <>
            <h1>Emails Recibidos</h1>
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

ReceivedEmails.propTypes = {
    courseId : PropTypes.string.isRequired,
}