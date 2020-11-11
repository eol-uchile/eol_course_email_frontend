import React from 'react';
import PropTypes from 'prop-types';
import { EmailItem } from './EmailItem';
import { EmptyGrid } from './EmptyGrid';
import { Spinner } from '@edx/paragon';
import { useFetchEmails } from '../hooks/useFetchUserData';

export const EmailGrid = ( { getEmails, title, courseId } ) => {
    console.log(`${title} loaded`);

    const { data, loading } = useFetchEmails( courseId, getEmails );
    
    const gridContent = () => {
        if (data.length == 0) {
            return (
                <EmptyGrid title={ title } />
            );
        }
        return (
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
                            email= { email }
                        />
                    ))
                }
            </div>
        )
    }


    return (
        <div className="rounded-lg shadow-lg py-4 px-5 my-2">
            <h3>{title}</h3>
            { loading && <Spinner animation="border" variant="primary" className="d-flex mx-auto mt-2 "/> }
            { !loading && gridContent() }
        </div>
    )
}

EmailGrid.propTypes = {
    getEmails   : PropTypes.func.isRequired,
    title       : PropTypes.string.isRequired,
    courseId       : PropTypes.string.isRequired
}