import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Menu from "./components/Menu";
import { NewEmailForm } from "./components/NewEmailForm";
import { EmailGrid } from "./components/EmailGrid";
import { useResizeIFrame } from "./hooks/useResizeIFrame";
import { getReceivedEmails } from "./helpers/getReceivedEmails";
import { getSendedEmails } from "./helpers/getSendedEmails";

export default function CourseEmailPage() {
  useResizeIFrame(); // Resize Iframe on height changes
  return (
    <div id="content" className="container">
      <Router>
        <div>
          <Menu />
          <Switch>
            <Route exact path="/eol/eol_course_email/static/:courseId">
              <EmailGrid getEmails={getReceivedEmails} title="Correos Recibidos" />
            </Route>
            <Route exact path="/eol/eol_course_email/static/sended/:courseId">
              <EmailGrid getEmails={getSendedEmails} title="Correos Enviados"/>
            </Route>
            <Route exact path="/eol/eol_course_email/static/received/:courseId">
              <EmailGrid getEmails={getReceivedEmails} title="Correos Recibidos" />
            </Route>
            <Route exact path="/eol/eol_course_email/static/new/:courseId">
              <NewEmailForm />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}