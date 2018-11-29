import React, { Component } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './Story.scss';

class Story extends Component {

  createLink(link, title) {
    return (<a href={link} target="_blank" rel="noopener noreferrer">{title}</a>);
  }

  generateAuthorDetails(author) {
    const authorLink = author.split(' ')[0];
    const authorMailTo = `mailto:${authorLink}`;
    const authorName = author.split('"')[1];
    return { authorMailTo, authorName };
  }

  splitDescriptionIntoParagraphs(description) {
    const truncate = (string, max) => string.length > max ? `${string.substring(0, max - 3).trim()}...` : string;
    const div = document.createElement('div');
    div.innerHTML = description;
    const textContent = div.querySelectorAll('p')[2] && div.querySelectorAll('p')[2].textContent;
    return textContent ? truncate(textContent, 150) : null;
  };

  generateTags(tags) {
    return tags.split(' ');
  }

  render() {
    const { title, link, media, description, author, tags } = this.props.data;
    const { authorMailTo, authorName} = this.generateAuthorDetails(author);
    const descriptionParagraph = this.splitDescriptionIntoParagraphs(description);
    const tagsList = this.generateTags(tags);

    return (
      <article className="Story">
        <figure className="Story__figure">
          <a href={link} target="_blank" rel="noopener noreferrer" className="Story__image-link">
            <LazyLoadImage
              className="Story__image"
              alt={title}
              height="100%"
              src={media.m}
              width="100%"
              threshold={200} />
          </a>
          <div className="Story__details">
            <figcaption className="Story__caption">
              {this.createLink(link, title)} by {this.createLink(authorMailTo, authorName)}
            </figcaption>
            <div className="Story__description">
              <p>{descriptionParagraph}</p>
            </div>
          </div>
        </figure>
        <div className="Story__tags">
          {tagsList.map(function(tag){
            return <span className="Story__tag" key={tag}>{tag}</span>
          })}
        </div>
      </article>
    )
  }

}

export default Story;
