import { useState, useEffect } from "react";
import { getReceivedEmails } from '../helpers/getReceivedEmails';
import { getSendedEmails } from '../helpers/getSendedEmails';
import { getUsers } from '../helpers/getUsers';


export const useFetchReceivedEmails = ( courseId ) =>  {
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect( () => {
        getReceivedEmails( courseId )
            .then( emails => {
                console.log('useFetchReceivedEmails loaded');
                setState({
                    data: emails,
                    loading: false
                });
            }) 
    }, [ ]);

    return state;
}

export const useFetchSendedEmails = ( courseId ) =>  {
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect( () => {
        getSendedEmails( courseId )
            .then( emails => {
                console.log('useFetchSendedEmails loaded');
                setState({
                    data: emails,
                    loading: false
                });
            }) 
    }, [ ]);

    return state;
}

export const useFetchUsers = ( courseId ) =>  {
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect( () => {
        getUsers( courseId )
            .then( users => {
                console.log('useFetchUsers loaded');
                setState({
                    data: users,
                    loading: false
                });
            }) 
    }, [ ]);

    return state;
}