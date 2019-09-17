import React from 'react';
import Choice from "./components/Choice";
import { Container, Header, Button, } from "semantic-ui-react";

class App extends React.Component{
  state = {
    choices: [
      { id: 1, name: "Rock", },
      { id: 2, name: "Paper", },
      { id: 3, name: "Scissors", },
    ]
  };
  
  render() {
    return(
      <Container textAlign="center">
        <Header as="h1" color="blue">Rock Paper Scissors</Header>
        <br />
        <br />
        <Choice 
          choice={this.state.choice}
        />
        {/* <Button icon="hand rock" onClick={this.rock} />
        <Button icon="hand paper" onClick={this.paper} />
        <Button icon="hand scissors" onClick={this.scissors} /> */}
      </Container>
    )
  };
};

const styles = {
  container: {
    marginTop: "25px",
  },
};

export default App;
