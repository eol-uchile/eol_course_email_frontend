/* 
* This hook will get course id from URL 
*   e.g: https://example.com/eol/eol_course_email/static/course-v1:eol+prueba03+2020
*   course id will be course-v1:eol+prueba03+2020
*/

export const getCourseId = ( ) =>  window.location.pathname.split(/[\/]+/).pop();