import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions/actionCreators';
import Main from './Main.js';

function mapStateToProps(state) {
  return {
    searchResults: state.searchResults,
    guesses: state.guesses,
    views: state.views
  };
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const ReduxConnect = connect(mapStateToProps, mapDispachToProps)(Main);

export default ReduxConnect;
