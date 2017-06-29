import React from "react";
import ReactDom from "react-dom";

class Layout extends React.Component {
  render() {
    return (
      <h1>It's working!</h1>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);
