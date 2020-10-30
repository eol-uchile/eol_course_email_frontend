import React, { useState } from 'react';
import { IconButton } from '@edx/paragon';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { EmailModal } from './EmailModal'
export const EmailItem = ( email ) => {

    console.log('EmailItem loaded');

    const [modalState, setModalState] = useState(false);

    const openModal = () => {
        setModalState(true);
    }

    return (
        <div className="row border-bottom">
            <div className="col col-3 pt-2">
                { email.date }
            </div>
                
            <div className="col col-3 pt-2">
                { email.sender }
            </div>
                
            <div className="col col-5 pt-2">
                { email.subject }
            </div>
                
            <div className="col col-1">
                <IconButton icon={ faInfo } alt='Ver mayor información del correo' onClick={ openModal } variant="primary"/>
            </div> 

            <EmailModal email={email} modalState={modalState} setModalState={setModalState}/>

        </div>
    )
}
