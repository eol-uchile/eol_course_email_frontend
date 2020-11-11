import React from 'react';
import { renderWithRouter, screen } from './TestUtils';
import { EmailGrid } from '../components/EmailGrid';
import '@testing-library/jest-dom';
import { getReceivedEmails } from '../helpers/getReceivedEmails';
import { getSendedEmails } from '../helpers/getSendedEmails';
import { useFetchEmails } from '../hooks/useFetchUserData';
jest.mock('../hooks/useFetchUserData');

describe('Testing <EmailGrid /> App Component', () => {

    const courseId = 'foo_id';

    useFetchEmails.mockReturnValue({
        data : [],
        loading : true
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('Load <EmailGrid /> receivedEmails correctly', () => {
        renderWithRouter(<EmailGrid courseId={courseId} getEmails={getReceivedEmails} title="Correos Recibidos" />);
        expect( screen ).toMatchSnapshot();

    });
    
    test('Load <EmailGrid /> sendedEmails correctly', () => {
        renderWithRouter(<EmailGrid courseId={courseId} getEmails={getSendedEmails} title="Correos Enviados" />);
        expect( screen ).toMatchSnapshot();

    });

    test('Show loading spinner ', () => {
        renderWithRouter(<EmailGrid courseId={courseId} getEmails={getSendedEmails} title="Correos Enviados" />);
        expect(screen.getByText((content, element) => 
            element.classList.contains(`spinner-border`) && content == ''
        ));
    })

    test('Show empty component ', () => {
        useFetchEmails.mockReturnValue({
            data : [],
            loading : false
        });
        renderWithRouter(<EmailGrid courseId={courseId} getEmails={getSendedEmails} title="Correos Enviados" />);
        expect(screen.getAllByText(`Al parecer no tienes correos enviados.`));
    })

    test('Show emailitem components ', () => {
        useFetchEmails.mockReturnValue({
            data : [{
                subject : "Subject1 text",
                message : "Message1 text",
                sender  : "Sender1 text",
                date    : "Date1 text"
            },
            {
                subject : "Subject2 text",
                message : "Message2 text",
                sender  : "Sender2 text",
                date    : "Date2 text"
            }],
            loading : false
        });
        renderWithRouter(<EmailGrid courseId={courseId} getEmails={getReceivedEmails} title="Correos Recibidos" />);

        expect( screen.getByText('Subject1 text'));
        expect( screen.getByText('Sender1 text'));
        expect( screen.getByText('Date1 text'));

        expect( screen.getByText('Subject2 text'));
        expect( screen.getByText('Sender2 text'));
        expect( screen.getByText('Date2 text'));
    })
    

})