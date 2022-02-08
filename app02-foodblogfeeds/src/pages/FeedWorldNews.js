import React from 'react' ;
import * as rssParser from 'react-native-rss-parser' ;
import Moment from 'react-moment';

 
/* ==================================================== */
class MyAppSingleFeed1 extends React.Component {
  constructor() {
    super();
    this.state = {
      showProgressBar: true,
      feedTitle: '',
      feedLength: '',
      lastBuildDate: new Date(),
      feedItems: [], 
    }
  }

  getFeedItemsFromUrl() {
    // const feedurl = 'https://www.mygingergarlickitchen.com/index.xml' ; 
    const feedurl = this.props.feedurl ; 
    console.log('CURRENT_FEED = ' + feedurl) ;
    return fetch(feedurl) ;
  };

  componentDidMount() {
    this.getFeedItemsFromUrl()
    .then((response) => response.text())
    .then((responseData) => rssParser.parse(responseData))
    .then((rss) => {
      //console.log(rss.title);
      //console.log(rss.lastUpdated);
      //console.log(rss.items.length);
      //console.log(rss.items);
      //console.log(rss.items[0].title);
      //console.log(rss.items[0].id);
      //console.log(rss.items[0].published);
      // setting state for all variables
      this.setState({ feedItems: rss.items }) ;
      this.setState({ feedLength: rss.items.length }) ;
      this.setState({ feedTitle: rss.title }) ;
      this.setState({ lastBuildDate: rss.lastUpdated }) ;
      this.setState({ showProgressBar: false }) ;
    }) ;
    return null; 
  }

  printProgressBar() {
    if (this.state.showProgressBar) {
    return <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
    }
  } ;

  printObjectElements(myitems1 = this.state.feedItems) {
    let rows = [] ; 
    let count = 0; 
    for (let x in myitems1){
      count++ ; 
      if (count < 11) {
      //console.log(myitems1[x].id) ;
      //console.log(myitems1[x].links[0].url) ;
      const articleUrl = myitems1[x].links[0].url ;
      const articleTitle = myitems1[x].title ;
      rows.push(<li className='pb-2' key={articleUrl}><a target='_blank' rel='noopener noreferrer' href={articleUrl}>{articleTitle}</a> (<Moment fromNow>{myitems1[x].published}</Moment>)</li>) ;  }
    } 
    return <ul>{rows}</ul> ;
  } ; 
 
  render() {
    const feedTitle = this.state.feedTitle ;
    const feedLength = this.state.feedLength ; 
    const lastBuildDate = this.state.lastBuildDate ; 
    const myitems = this.state.feedItems ;
    const printFullItemList = this.printObjectElements(myitems) ; 
    const printProgressBar = this.printProgressBar() ;
    
    return (
      <div className="col-sm-12 col-xs-12 col-md-6 col-lg-4 col-xl-4">        
        <div className="card text-dark bg-light mb-3">
            <div className="card-header">Feed last updated: <strong><Moment fromNow>{lastBuildDate}</Moment></strong><br />(Feed contains {feedLength} posts)</div>
            <div className="card-body">
                <h5 className="card-title">{feedTitle}</h5>
                <div className="card-text">{printFullItemList}</div>
                {printProgressBar}
            </div>
        </div>
      </div> 
    ) ; 
  }
}
/* ==================================================== */

const MyNewsFeeds = () => {
  return (
    <div className="row">
      <div className="col-12"><h1 className="display-5">Latest News</h1></div>
        <MyAppSingleFeed1 feedurl='https://vps.abhishekpaliwal.com/scripts-html-outputs/data-reactapps/rssfeeds/YLE-English.xml' />
        <MyAppSingleFeed1 feedurl='https://vps.abhishekpaliwal.com/scripts-html-outputs/data-reactapps/rssfeeds/BBC-World.xml' />
        <MyAppSingleFeed1 feedurl='https://vps.abhishekpaliwal.com/scripts-html-outputs/data-reactapps/rssfeeds/NYT-World.xml' />
        <MyAppSingleFeed1 feedurl='https://vps.abhishekpaliwal.com/scripts-html-outputs/data-reactapps/rssfeeds/TOI-World.xml' />
        <MyAppSingleFeed1 feedurl='https://vps.abhishekpaliwal.com/scripts-html-outputs/data-reactapps/rssfeeds/HT-World.xml' />
        <MyAppSingleFeed1 feedurl='https://vps.abhishekpaliwal.com/scripts-html-outputs/data-reactapps/rssfeeds/The-Hindu-World.xml' />

        <MyAppSingleFeed1 feedurl='https://vps.abhishekpaliwal.com/scripts-html-outputs/data-reactapps/rssfeeds/TOI-Top.xml' />
        <MyAppSingleFeed1 feedurl='https://vps.abhishekpaliwal.com/scripts-html-outputs/data-reactapps/rssfeeds/HT-Latest.xml' />
        <MyAppSingleFeed1 feedurl='https://vps.abhishekpaliwal.com/scripts-html-outputs/data-reactapps/rssfeeds/The-Hindu-Top-News.xml' />

        <MyAppSingleFeed1 feedurl='https://vps.abhishekpaliwal.com/scripts-html-outputs/data-reactapps/rssfeeds/BBC-Top.xml' />
        <MyAppSingleFeed1 feedurl='https://vps.abhishekpaliwal.com/scripts-html-outputs/data-reactapps/rssfeeds/NYT-Top.xml' />
        <MyAppSingleFeed1 feedurl='https://vps.abhishekpaliwal.com/scripts-html-outputs/data-reactapps/rssfeeds/NYT-Asia-Pacific.xml' />

        <MyAppSingleFeed1 feedurl='https://vps.abhishekpaliwal.com/scripts-html-outputs/data-reactapps/rssfeeds/BBC-Health.xml' />
        <MyAppSingleFeed1 feedurl='https://vps.abhishekpaliwal.com/scripts-html-outputs/data-reactapps/rssfeeds/BBC-Science.xml' />
        <MyAppSingleFeed1 feedurl='https://vps.abhishekpaliwal.com/scripts-html-outputs/data-reactapps/rssfeeds/NYT-Health.xml' />
        <MyAppSingleFeed1 feedurl='https://vps.abhishekpaliwal.com/scripts-html-outputs/data-reactapps/rssfeeds/NYT-Science.xml' />
      </div>
  )
}

/* ==================================================== */

export default MyNewsFeeds
