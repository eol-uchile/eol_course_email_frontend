/* 
* Async function that calls eol_course_email api 
* It will send the email to all destinataries
*/
import { getAuthenticatedHttpClient } from '@edx/frontend-platform/auth';

export const postSendEmail = async( formData ) => {
    const url = `/courses/${ formData.courseId }/course_emails/send`;
    const response = await getAuthenticatedHttpClient()
        .post(url, formData, 'json')
        .then(({status}) => {
            return {
                "status"    : status == 201,
                "status_text"   : "success"
            }
        })
        .catch( (error) => {
            return {
                "status"    : false,
                "status_text"   : ERROR_MESSAGES(error.customAttributes?.httpErrorStatus),
            }
        });
    return response;
};

const ERROR_MESSAGES = (code=400) => {
    switch (code) {
        case 403:
            return "ratelimit";
        default:
            return "fail";
    }
}