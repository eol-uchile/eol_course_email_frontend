import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Menu from "./components/Menu";
import { NewEmailForm } from "./components/NewEmailForm";
import { ReceivedEmails } from "./components/ReceivedEmails";
import { SendedEmails } from "./components/SendedEmails";
import { useResizeIFrame } from "./hooks/useResizeIFrame";

export default function CourseEmailPage() {
  const state = useResizeIFrame();
  return (
    <div id="content" className="container">
      <Router>
        <div>
          <Menu />
          <Switch>
            <Route exact path="/eol/eol_course_email/static/:courseId">
              <ReceivedEmails />
            </Route>
            <Route exact path="/eol/eol_course_email/static/sended/:courseId">
              <SendedEmails />
            </Route>
            <Route exact path="/eol/eol_course_email/static/received/:courseId">
              <ReceivedEmails />
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