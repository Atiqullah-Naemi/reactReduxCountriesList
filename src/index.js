import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Container } from "reactstrap";
import store from "./store";
import CountriesList from "./components/CountriesList";

import "./styles.css";

class App extends Component {
   render() {
      return (
         <Provider store={store}>
            <div className="App">
               <Container>
                  <CountriesList />
               </Container>
            </div>
         </Provider>
      );
   }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
