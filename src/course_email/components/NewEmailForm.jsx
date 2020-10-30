import React from 'react';
import PropTypes from 'prop-types';
import { useFetchUsers } from '../hooks/useFetchUserData';
import { useForm } from '../hooks/useForm';
import { Spinner, Form, Button, Col } from '@edx/paragon';


export const NewEmailForm = ({ courseId }) => {
    console.log('NewEmailForm loaded');
    const { data, loading } = useFetchUsers( courseId );
    const [values, handleInputChange] = useForm({
        subjectInput    : "",
        messageInput   : "",
        studentsInput: [],
        staffInput: []
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("hola");
    }

    return (
        <div className="border border-info-500 rounded-lg p-3 my-2">
            <h3>Formulario Nuevo Correo</h3>
            <Form onSubmit={handleSubmit}>

                <Form.Group controlId="formGridSubject">
                    <Form.Label className="lead">Asunto</Form.Label>
                    <Form.Control required placeholder="Asunto del correo" aria-describedby="subjectInput" name="subjectInput" onChange={ handleInputChange }/>
                </Form.Group>
                <Form.Group controlId="formGridMessage">
                    <Form.Label className="lead">Mensaje</Form.Label>
                    <Form.Control required as="textarea" placeholder="Mensaje del correo" aria-describedby="messageInput" name="messageInput" onChange={ handleInputChange }/>
                </Form.Group>
                <hr/>
                <Form.Group id="formGridCheckbox">
                </Form.Group>
                <Form.Row>
                    { loading && <Spinner animation="border" variant="primary" /> }
                    <Form.Group as={Col} controlId="formGridReceiverStudent" className="checkbox-group">
                        <Form.Label className="lead">Destinatarios Estudiantes</Form.Label>
                        <div className="checkbox-input">
                            {
                                data
                                .filter( ({has_role}) => !has_role )
                                .map( (user) => (
                                    <Form.Check 
                                        type="checkbox" 
                                        className="pl-0"
                                        name="studentsInput"
                                        id={ user.email }
                                        key={ user.email }
                                        label={ user.name }
                                        onChange={ handleInputChange }
                                    />
                                ))
                            }
                        </div>
                        
                    </Form.Group>
                    
                    <Form.Group as={Col} controlId="formGridReceiverStaff" className="checkbox-group">
                        <Form.Label className="lead">Destinatarios Staff</Form.Label>
                        <div className="checkbox-input">
                            {
                                data
                                .filter( ({has_role}) => has_role )
                                .map( (user) => (
                                    <Form.Check 
                                        type="checkbox" 
                                        className="pl-0"
                                        name="staffInput"
                                        id={ user.email }
                                        key={ user.email }
                                        label={ user.name }
                                        onChange={ handleInputChange }
                                    />
                                ))
                            }
                        </div>
                        
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Button variant="outline-primary" size="lg" type="submit" className="mx-auto">
                        Submit
                    </Button>
                </Form.Row>
            </Form>
        </div>
    )
}

NewEmailForm.propTypes = {
    courseId : PropTypes.string.isRequired,
}