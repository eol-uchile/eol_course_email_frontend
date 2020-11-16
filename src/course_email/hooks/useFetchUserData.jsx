import { useState, useEffect } from "react";
import { getUserEmail } from "../helpers/getUserEmail";
import { getUsers } from '../helpers/getUsers';

export const useFetchUserEmail = ( courseId ) =>  {
    /*
        Fetch user email
    */
    const [state, setState] = useState({
        email: "",
        loading: true
    })

    useEffect( () => {
        getUserEmail( courseId )
        .then( email => {
            console.log('useFetchUserEmail loaded');
            setState({
                email: email,
                loading: false
            });
        }) 
    }, [ ]);

    return state;
}

export const useFetchEmails = ( courseId, getEmails ) =>  {
    /*
        Fetch received/sended emails
    */
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect( () => {
        setState({
            data: [],
            loading: true
        });
        getEmails( courseId )
            .then( emails => {
                console.log('emails loaded');
                setState({
                    data: emails,
                    loading: false
                });
            }) 
    }, [ getEmails ]);

    return state;
}


var users_cache = [];

export const useFetchUsers = ( courseId ) =>  {
    /*
        Fetch users enrolled
    */
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