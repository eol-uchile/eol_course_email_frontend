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

var users_cache = [];

export const useFetchUsers = ( courseId ) =>  {
    const [state, setState] = useState({
        users: [],
        loading: true
    })

    useEffect( () => {
        if ( users_cache.length != 0 ) {
            console.log('users cache loaded');
            setState({
                users: users_cache,
                loading: false
            });
        } else {
            getUsers( courseId )
            .then( users => {
                console.log('useFetchUsers loaded');
                users_cache = users;
                setState({
                    users: users,
                    loading: false
                });
            }) 
        }
    }, [ ]);

    return state;
}