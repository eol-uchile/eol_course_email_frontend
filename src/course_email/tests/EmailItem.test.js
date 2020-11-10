import React from 'react';
import userEvent from '@testing-library/user-event';
import { renderWithRouter, screen } from './TestUtils';
import { EmailItem } from '../components/EmailItem';
import '@testing-library/jest-dom';

describe('Testing <EmailItem /> App Component', () => {

    const email = {
        subject : "Subject text",
        message : "Message text",
        sender  : "Sender text",
        date    : "Date text",
        receiver_users : ["user name 1", "user name 2"]
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('Load <EmailItem /> correctly', () => {
        renderWithRouter(<EmailItem email={email} />);
        expect( screen ).toMatchSnapshot();

    });

    test('Show data correctly', () => {
        renderWithRouter(<EmailItem email={email} />);
        expect( screen.getByText('Subject text'));
        expect( screen.getByText('Sender text'));
        expect( screen.getByText('Date text'));
    });

    test('Open Modal', () => {
        renderWithRouter(<EmailItem email={email} />);
        expect( screen.getByRole('button'));
        expect( screen.queryByText('Message text')).not.toBeInTheDocument();
        userEvent.click(screen.getByRole('button')); // Open modal
        expect( screen.queryByText('Message text')).toBeInTheDocument();
        
    })
    
    
})