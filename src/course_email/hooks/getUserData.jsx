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
                setState({
                    data: emails,
                    loading: false
                });
            }) 
    }, [ courseId ]);

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
                setState({
                    data: emails,
                    loading: false
                });
            }) 
    }, [ courseId ]);

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
                setState({
                    data: users,
                    loading: false
                });
            }) 
    }, [ courseId ]);

    return state;
}