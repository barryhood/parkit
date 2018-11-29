import React, { Component } from 'react';
import Story from '../Story';
import NoStories from '../NoStories';
import './Stories.scss';

class Stories extends Component {

  renderStoriesContent() {
    const noStories = (<NoStories />);
    const stories = this.props.stories.map((story, i) => (
      <Story key={i} data={story} searchTerm={this.props.searchTerm} inc={i} />
    ));
    return !this.props.stories.length ? noStories : stories;
  }

  render() {
    return this.props.stories ? (
      <div className="Stories" role="region" id="Stories" aria-live="polite">
      {this.renderStoriesContent()}
      </div>
    ) : null;
  }
}

export default Stories;