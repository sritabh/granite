import React, { useEffect, useState } from "react";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { registerIntercepts, setAuthHeaders } from "apis/axios";
import { initializeLogger } from "common/logger";
import Dashboard from "components/Dashboard";
import PageLoader from "components/PageLoader";
import { CreateTask, ShowTask, EditTask } from "components/Tasks";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    initializeLogger();
    registerIntercepts();
    setAuthHeaders(setLoading);
  }, []);

  if (loading) {
    return (
      <div className="h-screen">
        <PageLoader />
      </div>
    );
  }

  return (
    <div>
      <ToastContainer />
      <Router>
        <Switch>
          <Route exact component={EditTask} path="/tasks/:slug/edit" />
          <Route exact component={ShowTask} path="/tasks/:slug/show" />
          <Route exact component={CreateTask} path="/tasks/create" />
          <Route exact component={Dashboard} path="/dashboard" />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
