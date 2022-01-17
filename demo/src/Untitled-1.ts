import React, { useState } from "react";

export default function App() {
  const [rssUrl, setRssUrl] = useState("");
  const [items, setItems] = useState([]);

  /* ============================================= */
  const getRss = async (e) => {
    e.preventDefault();
    const urlRegex = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
    if (!urlRegex.test(rssUrl)) {
      return;
    }
    const res = await fetch(`https://api.allorigins.win/get?url=${rssUrl}`);
    const { contents } = await res.json();
    const feed = new window.DOMParser().parseFromString(contents, "text/xml");
    const items = feed.querySelectorAll("item");
    const feedItems = [...items].map((el) => ({
      link: el.querySelector("link").innerHTML,
      // author: el.querySelector("author").innerHTML,
      pubDate: el.querySelector("pubDate").innerHTML,
      title: el.querySelector("title").innerHTML
    }));
    setItems(feedItems);
  };

  /* ============================================= */
  return (
    <div className="App">
      <form onSubmit={getRss}>
        <div>
          <label> rss url</label>
          <br />
          <input onChange={(e) => setRssUrl(e.target.value)} value={rssUrl} />
        </div>
        <input type="submit" />
      </form>
      {items.map((item) => {
        return (
          <div key={item.link}>
            <h3><a href={item.link}>{item.title}</a></h3>
            <p>{item.pubDate}</p>
            <hr />           
          </div>
        );
      })}
    </div>
  );
}