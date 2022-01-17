import React from 'react' ;
import * as rssParser from 'react-native-rss-parser' ;
 
class MyApp extends React.Component {
  constructor() {
    super();
    this.state = {
      projectName: [], 
    }
  }

  componentDidMount() {
     this.getProjectName()
    .then((response) => response.text())
    .then((responseData) => rssParser.parse(responseData))
    .then((rss) => {
      console.log(rss.title);
      console.log(rss.items.length);
      console.log(rss.items);
      this.setState({ projectName: rss }) ;
    }) ;
    return null; 
  }

  getProjectName() {
    return fetch('https://www.leelasrecipes.com/index.xml')
  };

  render() {
    const items = this.state.projectName ;
    const titleName= items.title ; 
    const myOutput = Object.entries(items).map(([key, value]) => {
        <p key={key}>{key[0]}</p>
    }) ;

      return (
      <div>
        <div>
          12345asd
        </div>  
        <div>
          {typeof(myOutput)}
          {titleName}
          {myOutput}
        </div>  
      </div> 
    ) ; 
  }
}

export default MyApp

