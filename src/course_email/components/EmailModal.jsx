import React from 'react'
import { Modal, Button } from '@edx/paragon';

export const EmailModal = ({ email, modalState, setModalState }) => {

    const resetModalWrapperState = () => {
        setModalState(false);
    }

    const receiver_users_section = () => {
        if( email.receiver_users ) {
          return(
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
          );
        }
    }

    const body = () => (
      <div className="row">
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
        
        { receiver_users_section() }
      </div>
    );

    return (
        <Modal
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
