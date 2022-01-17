import React from 'react' ;

import * as rssParser from 'react-native-rss-parser' ;
 
class App extends React.component {
  constructor() {
    super();
    this.state = {
      projectName: ''
    }
  }

  componentDidMount() {
     this.getProjectName()
    .then((response) => response.text())
    .then((responseData) => rssParser.parse(responseData))
    .then((rss) => {
      console.log(rss.title);
      console.log(rss.items.length);
      console.log(rss.authors[0].name);
      this.setState({ projectName: rss.title}) ;
    })
  }

  getProjectName() {
    return fetch('http://www.nasa.gov/rss/dyn/breaking_news.rss')
  };

  render() {
    return (
      <div>
        123
      </div>     
    ) ;
  }
}

export default App
