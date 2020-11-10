import React from 'react';
import { render, screen } from './TestUtils';
import { EmptyGrid } from '../components/EmptyGrid';

describe('Testing <EmptyGrid /> App Component', () => {
    const title = "correos recibidos";
    let wrapper = render(<EmptyGrid title={title} />);
    
    // initialization before each test
    beforeEach( () =>  {
        wrapper = render(<EmptyGrid title={title} />);
    });

    test('Load <EmptyGrid /> correctly', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });

    test('Show message correctly', () => {

        expect(screen.getAllByText(`Al parecer no tienes ${title}.`));

    })
    
})