import { useState } from "react"
import { postSendEmail } from "../helpers/postSendEmail";
// import { useFetchSendEmail } from "./useFetchSendEmail";

export const useForm = ( initialState = {} ) => {
    const [values, setValues] = useState(initialState);

    const handleInputChange = ( { target } ) => {
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
        let target_values = [...values[target.name]];
        if( target.checked ) {
            setValues({
                ...values,
                [ target.name ]: [...target_values, target.id ]
            });
        } else {
            target_values.splice(target_values.indexOf(target.id),1); // Remove email from list
            setValues({
                ...values,
                [ target.name ]: target_values
            });
        }
    }

    const handleSubmit = (e, formRef) => {
        e.preventDefault();
        console.log(e);
        setValues({
            ...values,
            status: "pending"
        });
        postSendEmail( values )
        .then( status => {
            if (status) {
                resetForm(formRef, 'success');
            } else {
                setValues({
                    ...values,
                    status: 'fail'
                });
            }
        }); 
    }

    const resetForm = (formRef, status='initialized') => {
        setValues({
            ...initialState,
            status: status
        });
        formRef.reset();
    }

    return [ values, handleInputChange, handleSubmit ];
}