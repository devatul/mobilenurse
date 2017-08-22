import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';
import _ from 'lodash';

class PostsIndex extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }

renderPosts() {
    console.log(this.props)
    return !_.isEmpty(this.props.posts) && this.props.posts.map((post) => {
        return (
             <li className="list-group-item" key={post.id}>
                 <Link to={"posts/" + post.id}>
                    <span className="pull-xs-right">{post.examStatus}</span>
                    <strong>CLIENT: {post.firstname} {post.lastName} </strong>
                    <br/>
                    <strong>DATE:</strong>
                 </Link>
            </li>
        );
    });
}



    render() {
        return (

            <div>
                <Link to="/repinfo/">PROFILE</Link>
                <div className="text-xs-right">
                    <Link exact to="/posts/new" className="btn btn-primary">
                      EXAM REQUEST
                    </Link>

                <h4 className="text-xs-left">EXAM ORDERS</h4>
            </div>
                <br/>
                <ul className="list-group">
                    { this.renderPosts() }
                </ul>
                <br/>
                <h4 className="text-xs-left">COMPLETED EXAMS</h4>
                <hr/>
                <br/>
                <h4 className="text-xs-left">CANCELED ORDERS</h4>
                <hr/>
             </div>
        );
    }
}

function mapStateToProps(state) {
    return { posts: state.posts.all }
}

export default connect(mapStateToProps, {fetchPosts: fetchPosts}) (PostsIndex);
