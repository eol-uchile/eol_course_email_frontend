import React from 'react';
import Menu from './components/Menu';
import { NewEmailForm } from './components/NewEmailForm';
import { ReceivedEmails } from './components/ReceivedEmails';
import { SendedEmails } from './components/SendedEmails';
import { getCourseId } from './hooks/getCourseInfo';

export default function CourseEmailPage() {

  const courseId = getCourseId();

  return (
    <>
      <div className="container-fluid">
        <h1>Course Email Page { courseId }</h1>
        <Menu />
        <NewEmailForm courseId={ courseId }/>
        <ReceivedEmails courseId={ courseId } />
        <SendedEmails courseId={ courseId } />
      </div>
    </>
  );
}
