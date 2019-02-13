import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Learner from "./components/Learner";
import ITProfessional from "./components/ITProfessional";
import Rest from "./components/Rest";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Nav />
        </header>
        <section>
          <Learner />
        </section>
        <section>
          <ITProfessional />
        </section>
        <section>
          <Rest />
        </section>
      </div>
    );
  }
}

export default App;
