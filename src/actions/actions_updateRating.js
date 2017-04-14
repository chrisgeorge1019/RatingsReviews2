import Ratings from '../components/ratings';

export function updateRating(rating) {
  // needs to return an action, an object with a type property
  return {
    type: 'UPDATE_RATING',
    payload: rating
  };
}
