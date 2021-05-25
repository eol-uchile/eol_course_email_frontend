/* 
* Async function that calls eol_course_email api 
* It will send the email to all destinataries
*/
import { getAuthenticatedHttpClient } from '@edx/frontend-platform/auth';

export const postSendEmail = async( data ) => {
    var formData = new FormData();
    formData.append('courseId', data.courseId);
    formData.append('fileInput', data.fileInput);
    formData.append('messageInput', data.messageInput);
    formData.append('staffInput', data.staffInput);
    formData.append('status', data.status);
    formData.append('studentsInput', data.studentsInput);
    formData.append('subjectInput', data.subjectInput);

    const url = `/courses/${ data.courseId }/course_emails/send`;
    const response = await getAuthenticatedHttpClient()
        .post(url, formData, 'multipart/form-data')
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