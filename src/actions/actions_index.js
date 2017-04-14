import Ratings from '../components/ratings';

export function starSelected(rating, ratingVolume, userlist) {
  // starSelected is the actionCreater,
  // needs to return an action, an object with a type property
  return {
    type: 'STAR_SELECTED',
    payload: [rating, ratingVolume + 1, userlist]
  };
}
