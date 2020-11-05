import { useState } from "react"
import { postSendEmail } from "../helpers/postSendEmail";
// import { useFetchSendEmail } from "./useFetchSendEmail";

export const useForm = ( initialState = {} ) => {
    const [values, setValues] = useState(initialState);

    const handleInputChange = ( { target } ) => {
        /*
            Handle Input changes
        */
        console.log("handleInputChange");
        if( target.name === 'studentsInput' || target.name ===  'staffInput' ){
            handleCheckboxChange(target);
        } else {
            setValues({
                ...values,
                [ target.name ]: target.value 
            })
        }
        
    }

    const handleCheckboxChange = ( target ) => {
        /*
            Handle Checkbox Change
            Add/remove users from State list
        */
        let target_values = [...values[target.name]];
        if( target.checked ) {
            setValues({
                ...values,
                [ target.name ]: [...target_values, target.id ]
            });
        } else {
            target_values.splice(target_values.indexOf(target.id),1); // Remove user from list
            setValues({
                ...values,
                [ target.name ]: target_values
            });
        }
    }

    const handleSubmit = (e) => {
        /*
            Handle form submit and send Email
        */
        e.preventDefault();
        setValues({
            ...values,
            status: "pending"
        });
        postSendEmail( values )
        .then( status => {
            if (status) {
                resetForm('success');
            } else {
                setValues({
                    ...values,
                    status: 'fail'
                });
            }
        }); 
    }

    const resetForm = (status='initialized') => {
        /*
            Clear form
        */
        setValues({
            ...initialState,
            status: status
        });
    }

    return [ values, handleInputChange, handleSubmit ];
}