import React from 'react';
import { renderWithRouter, screen } from './TestUtils';
import '@testing-library/jest-dom';
import Menu from '../components/Menu';

describe('Testing <Menu /> App Component', () => {

    const mock_router_path = {
        params: {
            courseId: 'foo_id',
        },
    };


    test('Load <Menu /> receivedEmails correctly', () => {
        renderWithRouter(<Menu match={mock_router_path} />);
        expect( screen ).toMatchSnapshot();

    });

})