import { useState } from "react"

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

    const handleCheckboxChange = ( target) => {
        let target_values = [...values[target.name]];
        if( target.checked ) {
            setValues({
                ...values,
                [ target.name ]: [...target_values, target.id ]
            });
        } else {
            target_values.splice(target_values.indexOf(target.id),1);
            setValues({
                ...values,
                [ target.name ]: target_values
            });
        }
    }

    return [ values, handleInputChange ];
}