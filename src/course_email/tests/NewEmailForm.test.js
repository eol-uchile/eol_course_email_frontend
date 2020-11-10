import React from 'react';
import { renderWithRouter, screen } from './TestUtils';
import { NewEmailForm } from '../components/NewEmailForm';
import '@testing-library/jest-dom';
import { useFetchUsers } from '../hooks/useFetchUserData';
jest.mock('../hooks/useFetchUserData');

describe('Testing <NewEmailForm /> App Component', () => {

    const mock_router_path = {
        params: {
            courseId: 'foo_id',
        },
    };

    useFetchUsers.mockReturnValue({
        users : [],
        loading : false
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('Load <NewEmailForm /> correctly', () => {
        renderWithRouter(<NewEmailForm match={mock_router_path} />);
        expect( screen ).toMatchSnapshot();

    });

    test('Show loading spinner ', () => {
        useFetchUsers.mockReturnValue({
            users : [],
            loading : true
        });
        renderWithRouter(<NewEmailForm match={mock_router_path} />);
        expect(screen.getByText((content, element) => 
            element.classList.contains(`spinner-border`) && content == ''
        ));
    })

    test('Load user lists correctly', () => {

        const users = [{
            username    : "USERNAME_1",
            name        : "USER PROFILE NAME 1",
            has_role    : false,
            email       : "USER1_MAIL@MAIL.COM"
        },
        {
            username    : "USERNAME_2",
            name        : "USER PROFILE NAME 2",
            has_role    : false,
            email       : "USER2_MAIL@MAIL.COM"
        },
        {
            username    : "USERNAME_3",
            name        : "USER PROFILE NAME 3",
            has_role    : true,
            email       : "USER3_MAIL@MAIL.COM"
        }];

        useFetchUsers.mockReturnValue({
            users : users,
            loading : false
        });

        renderWithRouter(<NewEmailForm match={mock_router_path} />);
        expect( screen.getByText('USER PROFILE NAME 1'));
        expect( screen.getByText('USER PROFILE NAME 2'));
        expect( screen.getByText('USER PROFILE NAME 3') );

    });
    
})