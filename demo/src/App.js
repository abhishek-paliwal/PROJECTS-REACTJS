import React, { Component } from "react";
import ReactDOM from "react-dom";


class App extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  async componentDidMount() {

    const rssUrl = "https://www.leelasrecipes.com/index.xml" ;
 
    const res = await fetch(`https://api.allorigins.win/get?url=${rssUrl}`);
    const { contents } = await res.json();
    const feed = new window.DOMParser().parseFromString(contents, "text/xml");
    const items = feed.querySelectorAll("item");
    
    this.setState({ data: items });
  }

  /* ============================================= */

 
  /* ============================================= */
  render() {

  return (
    <div className="App">
      {""}

      {this.state.data.map((item) => {
          <div key={item.link}>
            <h3><a href={item.link}>{item.title}</a></h3>
            <p>{item.pubDate}</p>
            <hr />           
          </div>
      })}

    </div>
  );
}

}

export default App ;