import React from 'react';
import PropTypes from 'prop-types';
import { useFetchUsers } from '../hooks/getUserData';

export const NewEmailForm = ({ courseId }) => {
    const { data, loading } = useFetchUsers( courseId );
    return (
        <>
            <h1>Formulario Nuevo Correo</h1>
            <h3>Usuarios </h3>
            { loading && <p>Cargando...</p> }
            <ul>
                {
                    data.map( (user) => (
                        <li key={ user.username }>
                            { user.has_role && <span>**STAFF** </span> }
                            { user.name } - { user.email } 
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

NewEmailForm.propTypes = {
    courseId : PropTypes.string.isRequired,
}