import React from 'react';
import { useFetchSendedEmails } from '../hooks/useFetchUserData';
import { EmailItem } from './EmailItem';
import { Spinner } from '@edx/paragon';
import { useParams } from 'react-router';

export const SendedEmails = () => {
    const { courseId } = useParams();
    console.log('SendedEmails loaded');
    const { data, loading } = useFetchSendedEmails( courseId );
    return (
        <div className="rounded-lg shadow-lg py-4 px-5 my-2">
            <h3>Correos Enviados</h3>
            { loading && <Spinner animation="border" variant="primary" className="d-flex mx-auto mt-2 "/> }
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
        </div>
    )
}