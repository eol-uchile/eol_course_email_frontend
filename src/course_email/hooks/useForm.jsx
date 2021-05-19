import { useState } from "react"
import { postSendEmail } from "../helpers/postSendEmail";

export const useForm = ( initialState = {} ) => {
    const [values, setValues] = useState(initialState);

    const handleInputChange = ( { target } ) => {
        /*
            Handle Input changes
        */
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
        window.parent.scrollTo(0, 150); // Scroll to top (status info)
        if( validateInputs() ) {
            setValues({
                ...values,
                status: "pending"
            });
            postSendEmail( values )
                .then( ({ status, status_text }) => {
                    if (status) {
                        resetForm(status_text);
                    } else {
                        setValues({
                            ...values,
                            status: status_text
                        });
                    }
            }); 

        }
        
        
    }

    const validateInputs = () => {
        /*
            Validate list length
        */
        const { studentsInput, staffInput } = values;
        if(studentsInput.length + staffInput.length == 0) {
            setValues({
                ...values,
                status: "empty-list"
            });
            return false;
        }
        return true;
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