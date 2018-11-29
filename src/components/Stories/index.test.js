import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Stories from '../Stories';
import { mount } from 'enzyme';

const createStories = (num) => {
  let storyObject = [];
  for (let i = 1; i <= num; i++) {
    storyObject.push({
      title: `Story title ${i}`,
      link: `https://story/url/${i}`,
      media: {
        m: `https://story/url/${i}`
      },
      description: `<p></p><p></p><p>Description ${i}</p>`,
      author: "nobody@flickr.com (\"author\")",
      tags: `tag${i}`
    })
  }
  return storyObject;
}
const stories = createStories(3);

describe('when the Stories component is called with stories data', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = mount(<Stories stories={stories}/>);
  });

  it('renders the Stories component', () => {
    expect(wrapper.find('.Stories').length).toEqual(1);
  });

  it('creates a separate Story component for each story', () => {
    expect(wrapper.find('.Story').length).toEqual(3);
  });

  it('populates each created story with its own story content', () => {
    expect(wrapper.find('.Story').at(0).find('.Story__description').text()).toEqual('Description 1')
    expect(wrapper.find('.Story').at(1).find('.Story__description').text()).toEqual('Description 2')
    expect(wrapper.find('.Story').at(2).find('.Story__description').text()).toEqual('Description 3')
  });

});
