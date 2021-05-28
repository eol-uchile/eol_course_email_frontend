import React from 'react';
import userEvent from '@testing-library/user-event';
import { renderWithRouter, screen } from './TestUtils';
import { EmailModal } from '../components/EmailModal';
import '@testing-library/jest-dom';

describe('Testing <EmailModal /> App Component', () => {

    const email = {
        subject : "Subject text",
        message : "Message text",
        sender  : "Sender text",
        date    : "Date text",
        receiver_users  : ["user name 1", "user name 2"],
        files_list      : [
            {
                name: 'file1',
                url : 'url1'
            },
            {
                name: 'file2',
                url : 'url2'
            },
        ]
    };
    const modalState = true;
    const setModalState = jest.fn();
    global.scrollTo = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('Load <EmailModal /> correctly', () => {
        renderWithRouter(<EmailModal email={email} modalState={modalState} setModalState={setModalState}/>);
        expect( screen ).toMatchSnapshot();

    });

    test('Show data correctly', () => {
        renderWithRouter(<EmailModal email={email} modalState={modalState} setModalState={setModalState}/>);
        expect( screen.getByText('Subject text'));
        expect( screen.getByText('Message text'));
        expect( screen.getByText('Sender text'));
        expect( screen.getByText('Date text'));
        expect( screen.getByText('user name 1'));
        expect( screen.getByText('user name 2'));
        expect( screen.getByText('file1'));
        expect( screen.getByText('file2'));
    });

    test('Close modal', () => {
        renderWithRouter(<EmailModal email={email} modalState={modalState} setModalState={setModalState}/>);
        userEvent.click(screen.getByText('Cerrar')); // Button in the modal footer
        expect( setModalState ).toHaveBeenCalled();
        expect( setModalState ).toHaveBeenCalledTimes(1);
        userEvent.click(screen.getByText('Close')); // Button icon in the top side
        expect( setModalState ).toHaveBeenCalledTimes(2);
    });
    
})