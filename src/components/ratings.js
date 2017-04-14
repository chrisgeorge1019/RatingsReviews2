import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { starSelected } from '../actions/actions_index';
import { updateRating } from '../actions/actions_updateRating';
import { bindActionCreators } from 'redux';

class Ratings extends Component {

  renderStars(rating, fullStar = "../Images/StarImage.jpg", blankStar = "../Images/BlankStar.jpg"){
    // let userlist = this.props.userlist;
    // if (!userlist) {
    //   userlist = [];
    // };
    //
    // userlist.push(newUser);
    let maxRating = this.props.maxRating;
    let results = [];
    for (let i = 1; i <= maxRating; i++) {
      results.push( <img src={(i<=rating)?fullStar:blankStar} alt="Star Image"
          width="40" height="40" value="one" key={i} />);
    }
    return results;
  }
  //{this.renderStars(this.props.maxRating, this.props.rating, "chris george")}
  renderSubmitButton() {
    document.getElementById('hiddenSubmit').setAttribute("id","showSubmit");
    document.getElementById('showRateIt').setAttribute("id","hiddenRateIt");
  }

  renderReviewSubmitted() {
    document.getElementById('showSubmit').setAttribute("id","hiddenSubmit");
    this.renderStars(this.props.rating);
    document.getElementById('hiddenThankYou').setAttribute("id","showThankYou");
  }

  render() {
    return (
      <div>
        <p id="showRateIt" onClick={() => this.renderSubmitButton()}>Rate It!</p>
        <div id="hiddenSubmit">
          <select id="selectedRating" onChange={() => this.props.updateRating(document.getElementById("selectedRating").value)}>
            <option value="0" className="hidden">0 Stars</option>
            <option value="1">1 Star</option>
            <option value="2">2 Stars</option>
            <option value="3">3 Stars</option>
            <option value="4">4 Stars</option>
            <option value="5">5 Stars</option>
          </select>
          <button onClick={() => this.props.starSelected(this.props.rating, this.props.ratingVolume, null) & this.renderReviewSubmitted()}>Submit Rating</button>
        </div>
        {this.renderStars(this.props.rating)}
        <p className="ratingVolume">{this.props.ratingVolume} reviews.</p>
        <h4 id="hiddenThankYou">You have given a rating of {this.props.rating}. Thank you for your review.</h4>
        <div id="hiddenMetrics">
          <h3>Current Rating:</h3>
          {this.props.rating} stars.
          {this.props.userlist} have all given reviews.
        </div>
      </div>
    );
  }
}


//anything returned from this function will end up as props on Ratings
function mapStateToProps(state) {
  const maxRating = 5;

  return {
    rating: state.rating,
    maxRating: maxRating,
    ratingVolume: state.ratingVolume,
    userlist: state.userlist
//    averageRating: state.averageRating
  };
}

//anything returned from this function will end up as props on Ratings
function mapDispatchToProps(dispatch) {
  //whenever starSelected is called, result will be passed to all reducers
  return bindActionCreators({ starSelected: starSelected, updateRating: updateRating}, dispatch); //this.props.starSelected
}

// promote ratings from a component to container
export default connect(mapStateToProps, mapDispatchToProps)(Ratings);
