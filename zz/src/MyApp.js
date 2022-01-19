import React from 'react' ;
import * as rssParser from 'react-native-rss-parser' ;
 
/* ==================================================== */
class MyAppSingleFeed extends React.Component {
  constructor() {
    super();
    this.state = {
      feedTitle: '',
      feedLength: '',
      feedItems: [], 
    }
  }

  getFeedItemsFromUrl() {
    // const feedurl = 'https://www.leelasrecipes.com/index.xml' ; 
    const feedurl = this.props.feedurl ; 
    console.log('MYFEED = ' + feedurl) ;
    return fetch(feedurl) ;
  };

  componentDidMount() {
    this.getFeedItemsFromUrl()
    .then((response) => response.text())
    .then((responseData) => rssParser.parse(responseData))
    .then((rss) => {
      console.log(rss.title);
      console.log(rss.items.length);
      console.log(rss.items);
      console.log(rss.items[0].title);
      console.log(rss.items[0].id);
      console.log(rss.items[0].published);
      // setting state for all variables
      this.setState({ feedItems: rss.items }) ;
      this.setState({ feedLength: rss.items.length }) ;
      this.setState({ feedTitle: rss.title }) ;
    }) ;
    return null; 
  }

  printObjectElements(myitems1 = this.state.feedItems) {
    let rows = [] ; 
    let count = 0; 
    for (let x in myitems1){
      count++ ; 
      if (count < 11) {
      rows.push(<li key={myitems1[x].id}>(Published: {myitems1[x].published})<br /><a target='_blank' href={myitems1[x].id}>{myitems1[x].title}</a></li>) ;  }
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
        <h2>{feedTitle} = (Feed has {feedLength} posts)</h2>
        <div>{printFullItemList}</div>
      </div> 
    ) ; 
  }
}
/* ==================================================== */

const MyApp = () => {
  return (
    <div>
      <h1>Latest RSS Posts from Food Blogs</h1>
      <MyAppSingleFeed feedurl='https://www.cookwithmanali.com/feed/' />
      <MyAppSingleFeed feedurl='https://www.vegrecipesofindia.com/feed/' />
      <MyAppSingleFeed feedurl='https://hebbarskitchen.com/feed/' />
      <MyAppSingleFeed feedurl='https://www.indianhealthyrecipes.com/feed/' />
      <MyAppSingleFeed feedurl='https://www.whiskaffair.com/feed/' />
      <MyAppSingleFeed feedurl='https://www.halfbakedharvest.com/feed/' />
      <MyAppSingleFeed feedurl='https://www.leelasrecipes.com/index.xml' />
      <MyAppSingleFeed feedurl='https://www.mygingergarlickitchen.com/index.xml' />
    </div>
  )
}

/* ==================================================== */

export default MyApp
