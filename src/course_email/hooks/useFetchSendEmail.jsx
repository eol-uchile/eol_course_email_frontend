import { useState } from "react";
import { postSendEmail } from "../helpers/postSendEmail";


export const useFetchSendEmail = ( formData ) =>  {
    const [state, setState] = useState({
        sended: false,
        loading: true
    })

    

    return state;
}
