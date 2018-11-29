const URL_PATH = 'https://api.flickr.com/services/feeds/photos_public.gne';
const URL_PARAMS = [
  'format=json',
  'tags=safe'
];

export const FEED_URL = `${URL_PATH}?${URL_PARAMS.join('&')}`;
