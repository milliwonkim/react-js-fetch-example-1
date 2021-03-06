import React, { Component } from "react";
import Posts from './components/Posts';
import PostsForm from './components/PostsForm';
import "./styles.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PostsForm />
        <Posts />
      </div>
    );
  }
}

export default App;