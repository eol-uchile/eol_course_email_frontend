import React from 'react';
import PropTypes from 'prop-types';
import { useFetchUsers } from '../hooks/useFetchUserData';
import { useForm } from '../hooks/useForm';
import { Spinner, Form, Button, Col } from '@edx/paragon';
import { StatusForm } from './StatusForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';


export const NewEmailForm = ( { courseId } ) => {
    const { users, loading } = useFetchUsers( courseId );
    const [ values, handleInputChange, handleSubmit] = useForm({
        status: "initialized",
        subjectInput    : "",
        messageInput   : "",
        studentsInput: [],
        staffInput: [],
        courseId: courseId
    })
    const { status, subjectInput, messageInput, studentsInput, staffInput } = values;

    return (
        <div className="rounded-lg shadow-lg py-4 px-5 my-2">
            <h3>Formulario Nuevo Correo </h3>
            <Form onSubmit={handleSubmit}>
                <Form.Row className="form-status">
                    <StatusForm status={status} />
                </Form.Row>
                <Form.Group controlId="formGridSubject">
                    <Form.Label className="lead">Asunto</Form.Label>
                    <Form.Control required placeholder="Asunto del correo" aria-describedby="subjectInput" name="subjectInput" onChange={ handleInputChange } value={subjectInput}/>
                </Form.Group>
                <Form.Group controlId="formGridMessage">
                    <Form.Label className="lead">Mensaje</Form.Label>
                    <Form.Control required as="textarea" placeholder="Mensaje del correo" aria-describedby="messageInput" name="messageInput" onChange={ handleInputChange } value={messageInput}/>
                </Form.Group>
                <hr/>
                <Form.Group id="formGridCheckbox">
                </Form.Group>
                <Form.Row>
                    { loading && <Spinner animation="border" variant="primary" className="d-flex mx-auto mt-2 "/> }
                    <Form.Group as={Col} controlId="formGridReceiverStudent" className="checkbox-group">
                        <Form.Label className="lead">Destinatarios 'Estudiantes'</Form.Label>
                        <div className="checkbox-input">
                            {
                                users
                                .filter( ({has_role}) => !has_role )
                                .map( (user) => (
                                    <Form.Check 
                                        type="checkbox" 
                                        className="pl-0"
                                        name="studentsInput"
                                        id={ user.username }
                                        key={ user.username }
                                        label={ user.name }
                                        onChange={ handleInputChange }
                                        checked={ studentsInput.includes(user.username) }
                                    />
                                ))
                            }
                        </div>
                        
                    </Form.Group>
                    
                    <Form.Group as={Col} controlId="formGridReceiverStaff" className="checkbox-group">
                        <Form.Label className="lead">Destinatarios 'Equipo docente'</Form.Label>
                        <div className="checkbox-input">
                            {
                                users
                                .filter( ({has_role}) => has_role )
                                .map( (user) => (
                                    <Form.Check 
                                        type="checkbox" 
                                        className="pl-0"
                                        name="staffInput"
                                        id={ user.username }
                                        key={ user.username }
                                        label={ user.name }
                                        onChange={ handleInputChange }
                                        checked={ staffInput.includes(user.username) }
                                    />
                                ))
                            }
                        </div>
                        
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Button variant="outline-primary shadow-lg" size="lg" type="submit" className="mx-auto" disabled={status=='pending'}>
                        <FontAwesomeIcon icon={faPaperPlane} className="mr-2" /> Enviar Correo
                    </Button>
                </Form.Row>
            </Form>
        </div>
    )
}

NewEmailForm.propTypes = {
    courseId       : PropTypes.string.isRequired
}