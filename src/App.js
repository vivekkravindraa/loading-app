import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPosts, getUsers } from './actions';

import { css } from "@emotion/core";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import SyncLoader from "react-spinners/SyncLoader";

const override = css`
  display: block;
  border-color: #00401A;
`;

class App extends React.Component {
  componentDidMount() {
    Promise.allSettled([
      setTimeout(() => {
        this.props.getPostsAPI();
      }, 5000),
      setTimeout(() => {
        this.props.getUsersAPI();
      }, 3000) 
    ])
  }

  render() {
    const { users, posts } = this.props;
    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 6fr)', margin: 60 }}>
        <div>
          <h1>Users</h1>
          {users && users.map((user, index) => {
            return <p key={index}>{user.name.toUpperCase()}</p>;
          })}
          {!users.length && <div>
            <ClimbingBoxLoader
              css={override}
              size={15}
              color={"#00401A"}
            />
          </div>}
        </div>
        <div>
          <h1>Posts</h1>
          {posts && posts.slice(0,10).map((post, index) => {
            return <p key={index} style={{ textTransform: 'capitalize' }}>{post.title}</p>;
          })}
          {!posts.length && <div>
            <SyncLoader
              css={override}
              size={15}
              color={"#00401A"}
            />
          </div>}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
    posts: state.posts
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getPostsAPI: getPosts,
    getUsersAPI: getUsers
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);