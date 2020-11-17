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
            return status == 201;
        })
        .catch(error => {
            console.log(error);
            return false;
        });
    return response;
};