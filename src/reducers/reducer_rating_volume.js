//state argument is not application state, only the state this reducer is for
export default function(state = null, action) {
  switch(action.type) {
    case 'STAR_SELECTED':
      return action.payload[1];
  }

  return state;
}
