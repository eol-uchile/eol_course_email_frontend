import React from 'react';
import { Container } from '@edx/paragon';
import Menu from './components/Menu';
import { NewEmailForm } from './components/NewEmailForm';
import { ReceivedEmails } from './components/ReceivedEmails';
import { SendedEmails } from './components/SendedEmails';
import { getCourseId } from './helpers/getCourseInfo';

export default function CourseEmailPage() {

  const courseId = getCourseId();

  return (
      <>
        <h1>Course Email Page { courseId }</h1>
        <Menu />
        <Container>
          <NewEmailForm courseId={ courseId }/>
          <ReceivedEmails courseId={ courseId } />
          <SendedEmails courseId={ courseId } />
        </Container>
      </>
  );
}
