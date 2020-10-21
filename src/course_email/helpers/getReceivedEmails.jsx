/* 
* Async function that calls eol_course_email api 
* It will return a object with emails received 
*/

export const getReceivedEmails = async( courseId ) => {
    const url = `/courses/${ courseId }/course_emails/received`;
    const response = await fetch(url, { credentials: "same-origin" });
    if(response.status == 200) {
        const data = await response.json();
        const emails = data.map( e => {
            return {
                subject : e.subject,
                message : e.message,
                sender  : e.sender_user__profile__name,
                date    : (new Date(e.created_at.$date)).toLocaleString()
            }
        });
        return emails;
    } else {
        return [];
    }
    
};