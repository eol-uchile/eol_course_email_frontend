import React, { useRef } from 'react';
import { useFetchUsers } from '../hooks/useFetchUserData';
import { useForm } from '../hooks/useForm';
import { Spinner, Form, Button, Col } from '@edx/paragon';
import { StatusForm } from './StatusForm';
import { useParams } from 'react-router';


export const NewEmailForm = () => {
    const { courseId } = useParams();
    console.log('NewEmailForm loaded');
    const { users, loading } = useFetchUsers( courseId );
    const [ values, handleInputChange, handleSubmit] = useForm({
        status: "initialized",
        subjectInput    : "",
        messageInput   : "",
        studentsInput: [],
        staffInput: [],
        courseId: courseId
    })
    const { status } = values;
    const formRef = useRef(null)

    return (
        <div className="rounded-lg shadow-lg py-4 px-5 my-2">
            <h3>Formulario Nuevo Correo </h3>
            <Form ref={formRef} onSubmit={(e)=>handleSubmit(e, formRef.current)}>

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
                    { loading && <Spinner animation="border" variant="primary" className="d-flex mx-auto mt-2 "/> }
                    <Form.Group as={Col} controlId="formGridReceiverStudent" className="checkbox-group">
                        <Form.Label className="lead">Destinatarios Estudiantes</Form.Label>
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
                                    />
                                ))
                            }
                        </div>
                        
                    </Form.Group>
                    
                    <Form.Group as={Col} controlId="formGridReceiverStaff" className="checkbox-group">
                        <Form.Label className="lead">Destinatarios Staff</Form.Label>
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
                <Form.Row className="form-status">
                    <StatusForm status={status} />
                </Form.Row>
            </Form>
        </div>
    )
}