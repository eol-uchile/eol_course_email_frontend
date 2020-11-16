import React from "react";
import {
  Switch,
  Route,
  HashRouter
} from "react-router-dom";
import Menu from "./components/Menu";
import { NewEmailForm } from "./components/NewEmailForm";
import { EmailGrid } from "./components/EmailGrid";
import { useResizeIFrame } from "./hooks/useResizeIFrame";
import { getReceivedEmails } from "./helpers/getReceivedEmails";
import { getSendedEmails } from "./helpers/getSendedEmails";
import { getCourseId } from "./helpers/getCourseInfo";

export default function CourseEmailPage() {
  useResizeIFrame(); // Resize Iframe on height changes
  const courseId = getCourseId();
  return (
    <div id="content" className="container">
      <HashRouter>
        <div>
          <Menu courseId={courseId}/>
          <Switch>
            <Route exact path="/eol/eol_course_email/static/sended/">
              <EmailGrid getEmails={getSendedEmails} title="Correos Enviados" courseId={ courseId }/>
            </Route>
            <Route exact path="/eol/eol_course_email/static/received/">
              <EmailGrid getEmails={getReceivedEmails} title="Correos Recibidos" courseId={ courseId }/>
            </Route>
            <Route exact path="/eol/eol_course_email/static/new/">
              <NewEmailForm courseId={ courseId }/>
            </Route>
            <Route exact path="/eol/eol_course_email/static/:courseId/">
              <EmailGrid getEmails={getReceivedEmails} title="Correos Recibidos" courseId={ courseId }/>
            </Route>
          </Switch>
        </div>
      </HashRouter>
    </div>
  );
}