/* 
* Async function that calls eol_course_email api 
* It will return a object with users enrolled
*/

export const getUsers = async( courseId ) => {
    const url = `/courses/${ courseId }/course_emails/users`;
    const response = await fetch(url, { credentials: "same-origin" });
    if(response.status == 200) {
        const data = await response.json();
        const users = data.map( u => {
            return {
                username    : u.username,
                name        : u.profile__name.toLowerCase(),
                has_role    : u.has_role
            }
        });
        return users;
    } else {
        return [];
    }
    
};