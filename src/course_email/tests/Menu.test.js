import React from 'react';
import { renderWithRouter, screen } from './TestUtils';
import '@testing-library/jest-dom';
import Menu from '../components/Menu';
import { useFetchUserEmail } from '../hooks/useFetchUserData';
jest.mock('../hooks/useFetchUserData');

describe('Testing <Menu /> App Component', () => {

    const courseId = 'foo_id';

    useFetchUserEmail.mockReturnValue({
        email : "",
        loading : true
    });

    test('Load <Menu /> receivedEmails correctly', () => {
        renderWithRouter(<Menu courseId={ courseId } />);
        expect( screen ).toMatchSnapshot();

    });

    test('Show loading spinner ', () => {
        renderWithRouter(<Menu courseId={ courseId } />);
        expect(screen.getByText((content, element) => 
            element.classList.contains(`spinner-border`) && content == ''
        ));
    })

    test('Show user email message', () => {
        useFetchUserEmail.mockReturnValue({
            email : "EMAIL@TEST.TEST",
            loading : false
        });
        renderWithRouter(<Menu courseId={ courseId } />);

        expect( screen.getByText('EMAIL@TEST.TEST'));
        expect( screen.getByText('Actualizar correo'));
    })

})