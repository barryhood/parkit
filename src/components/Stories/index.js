import React, { Component } from 'react';
import Story from '../Story';
import NoStories from '../NoStories';
import './Stories.scss';

class Stories extends Component {

  renderStoriesContent() {
    const noStories = (<NoStories />);
    const stories = this.props.stories.map((story, i) => (
      <Story key={i} data={story} inc={i} />
    ));
    return !this.props.stories.length ? noStories : stories;
  }

  render() {
    if (this.props.stories) {
      return (
        <div className="Stories">
        {this.renderStoriesContent()}
        </div>
      )
    }
    return null;
  }
}

export default Stories;