import React from 'react' ;
import * as rssParser from 'react-native-rss-parser' ;
 
/* ==================================================== */
class MyApp extends React.Component {
  constructor() {
    super();
    this.state = {
      feedTitle: '',
      feedLength: '',
      feedItems: [], 
    }
  }

  getFeedItemsFromUrl() {
    return fetch('https://www.leelasrecipes.com/index.xml')
  };

  componentDidMount() {
    this.getFeedItemsFromUrl()
    .then((response) => response.text())
    .then((responseData) => rssParser.parse(responseData))
    .then((rss) => {
      console.log(rss.title);
      console.log(rss.items.length);
      console.log(rss.items);
      console.log(rss.items[10].title);
      console.log(rss.items[11].id);
      this.setState({ feedItems: rss.items }) ;
      this.setState({ feedLength: rss.items.length }) ;
      this.setState({ feedTitle: rss.title }) ;
    }) ;
    return null; 
  }

  printObjectElements(myitems1 = this.state.feedItems) {
    let rows = [] ; 
    for (let x in myitems1){
      rows.push(<li key={myitems1[x].id}><a target='_blank' href={myitems1[x].id}>{myitems1[x].title}</a></li>) ;  
    } 
    return <ul>{rows}</ul> ;
  } ; 
 
  render() {
    const feedTitle = this.state.feedTitle ;
    const feedLength = this.state.feedLength ; 
    const myitems = this.state.feedItems ;
    const printFullItemList = this.printObjectElements(myitems) ; 
    
    return (
      <div>
        <div>{typeof(myOutput)}</div>
        <div>{feedTitle} = {feedLength} posts</div>
      <div>{printFullItemList}</div>
      </div> 
    ) ; 
  }
}
/* ==================================================== */

export default MyApp




