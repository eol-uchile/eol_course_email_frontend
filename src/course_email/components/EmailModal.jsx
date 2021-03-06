import React, { useLayoutEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from '@edx/paragon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export const EmailModal = ({ email, modalState, setModalState }) => {

    const resetModalWrapperState = () => setModalState(false);

    const modalRef = useRef(null)
    // IFrame modal is stuck at the top so we have to scroll page. 
    useLayoutEffect(() => window.parent.scrollTo(0, modalRef.current.modalBodyRef.current.offsetTop), [ ]);

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
        <div className="col col-9 py-2 text-capitalize">
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
          email.files_list?.length > 0
          &&
          (
            <>
              <div className="font-weight-bold col col-3 py-2">
                Archivos adjuntos
              </div>
              <div className="text-justify col col-9 py-2">
                {
                  email.files_list.map((file, index) => (
                    <a 
                      key={ index }
                      target="_blank"
                      href={ file.url }>
                        <Button 
                          variant="outline-primary"
                          size="sm"
                        > <FontAwesomeIcon icon={faDownload} className="mr-2" /> { file.name }
                        </Button>
                    </a>
                    
                  ))
                }
              </div>
            </>
          )
        }
        
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
                        <li key={ user } className="text-capitalize">
                          { user.toLowerCase() }
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