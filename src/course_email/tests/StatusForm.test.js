import React from 'react';
import { render, screen } from './TestUtils';
import { StatusForm } from '../components/StatusForm';
import '@testing-library/jest-dom';

describe('Testing <StatusForm /> App Component', () => {

    test('Load <StatusForm /> correctly', () => {
        let wrapper = render(<StatusForm status="" />);
        expect( wrapper ).toMatchSnapshot();

    });

    test('Show pending spinner correctly', () => {
        render(<StatusForm status="pending" />);
        expect(screen.getByText((content, element) => 
            element.classList.contains(`spinner-border`) && content == ''
        ));

    })

    test('Show fail message correctly', () => {
        render(<StatusForm status="fail" />);
        expect(screen.getByText('Error al enviar correo. Intentar nuevamente.')).toBeInTheDocument();

    })

    test('Show success message correctly', () => {
        render(<StatusForm status="success" />);
        expect(screen.getByText('Tu mensaje fue procesado con éxito para ser enviado')).toBeInTheDocument();

    })

    test('Show empty-list message correctly', () => {
        render(<StatusForm status="empty-list" />);
        expect(screen.getByText(`Debes seleccionar al menos un destinatario.`)).toBeInTheDocument();

    })
    
})