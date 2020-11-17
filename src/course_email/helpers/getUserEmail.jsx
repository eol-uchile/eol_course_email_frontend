/* 
* Async function that calls eol_course_email api 
* It will return a string with user email
*/

export const getUserEmail = async( courseId ) => {
    const url = `/courses/${ courseId }/course_emails/user_email`;
    const response = await fetch(url, { credentials: "same-origin" });
    if(response.status == 200) {
        const data = await response.json();
        return data;
    } else {
        return [];
    }
    
};