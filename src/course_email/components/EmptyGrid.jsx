import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons';

export const EmptyGrid = ( {title}) => {
    return (
        <div className="text-center">
            <FontAwesomeIcon icon={faFrown} className="h1" />
            <p>Al parecer no tienes { title.toLowerCase() }.</p>
        </div>
    )
}

EmptyGrid.propTypes = {
    title       : PropTypes.string.isRequired
}