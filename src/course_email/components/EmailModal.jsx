import React, { useLayoutEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from '@edx/paragon';

export const EmailModal = ({ email, modalState, setModalState }) => {

    console.log('EmailModal loaded');

    const resetModalWrapperState = () => setModalState(false);

    const modalRef = useRef(null)
    // IFrame modal is stuck at the top so we have to scroll page. 
    useLayoutEffect(() => window.parent.parent.scrollTo(0, modalRef.current.modalBodyRef.current.offsetTop), [ ]);

    const body = () => (
      <div className="row px-2">
        <div className="font-weight-bold col col-3 py-2">
          Fecha
        </div>
        <div className="col col-9 py-2">
          { email.date }
        </div>  

        <div className="font-weight-bold col col-3 py-2">
          Enviado por
        </div>
        <div className="col col-9 py-2">
          { email.sender }
        </div> 

        <div className="font-weight-bold col col-3 py-2">
          Asunto
        </div>
        <div className="col col-9 py-2">
          { email.subject }
        </div> 

        <div className="font-weight-bold col col-3 py-2">
          Contenido
        </div>
        <div className="text-justify col col-9 py-2">
          { email.message }
        </div>
        
        { 
          email.receiver_users
          &&
          (
            <>
              <div className="font-weight-bold col col-3 py-2">
                Destinatarios ({ email.receiver_users.length })
              </div>
              <div className="text-justify col col-9 py-2">
                <ol>
                  {
                    email.receiver_users.map((user) => {
                      return(
                        <li key={ user }>
                          { user }
                        </li>
                      )
                    })
                  }
                </ol>
              </div>
            </>
          )
        }
      </div>
    );

    return (
        <Modal
          ref={ modalRef }
          open={ modalState }
          title="Detalle del correo"
          body={ body() }
          onClose={ resetModalWrapperState }
          buttons={[
              <Button variant="primary" onClick={ resetModalWrapperState } data-autofocus >Cerrar</Button>
          ]}
          renderDefaultCloseButton={false}
          dialogClassName="modal-lg"
        />
    )
}

EmailModal.propTypes = {
  email         : PropTypes.object.isRequired,
  modalState    : PropTypes.bool.isRequired,
  setModalState : PropTypes.func.isRequired
}