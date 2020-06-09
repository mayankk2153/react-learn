import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import AboutPage from "./Components/About/AboutPage";
import HomePage from "./Components/Home/HomePage";
import Header from "./Components/CommonComponents/NavBar";
import ErrorPage from "./ErrorPage";
import CoursePage from "./Components/Course/CoursePage";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/course" component={CoursePage} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
