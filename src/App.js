import React, { Component } from 'react';
import Header from './components/Header';
import Stories from './components/Stories';
import Loader from './components/Loader';
import ErrorMsg from './components/ErrorMsg';
import { FEED_URL } from './config/constants.js';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      initialStories: [],
      stories: [],
      searchTerm: ''
    };
    this.loadData();
  }

  loadData() {
    if(!window.jsonFlickrFeed) {
      window.jsonFlickrFeed = (data) => this.parseData(data);
      const script = document.createElement('script');
      script.src = FEED_URL;
      script.async = true;
      script.onerror = () => this.setState({ error: 'Script failed to load', loading: false });;
      document.body.appendChild(script);
    }
  }

  parseData(data) {
    const initialStories = data.items.map((story) =>  story);
    this.setState({
      initialStories,
      stories: initialStories,
      loading: false
    });
  }

  filterTags = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    let updatedStories = this.state.initialStories;
    updatedStories = updatedStories.filter((story) => {
      return story.tags.includes(searchTerm);
    });
    this.setState({
      searchTerm,
      stories: updatedStories
    });
  }

  renderStories() {
    if(this.state.initialStories.length) {
      return (
        <React.Fragment>
          <Header onChange={this.filterTags} />
          <Stories stories={this.state.stories} searchTerm={this.state.searchTerm} />
        </React.Fragment>
      );
    }
  }

  renderErrorMsg() {
    if(this.state.error) return (<ErrorMsg errorMsg={this.state.error} />);
  }

  render() {
    return (
      <div className="App">
        {this.state.loading && <Loader />}
        {this.renderStories()}
        {this.renderErrorMsg()}
      </div>
    );
  }

}

export default App;
