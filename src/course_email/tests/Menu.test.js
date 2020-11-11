import React from 'react';
import { renderWithRouter, screen } from './TestUtils';
import '@testing-library/jest-dom';
import Menu from '../components/Menu';

describe('Testing <Menu /> App Component', () => {


    test('Load <Menu /> receivedEmails correctly', () => {
        renderWithRouter(<Menu />);
        expect( screen ).toMatchSnapshot();

    });

})