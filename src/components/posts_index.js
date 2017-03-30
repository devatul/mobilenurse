import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {
    componentWillMount() {
        this.props.fetchPosts(); 
    }

renderPosts() {
    console.log(this.props.posts)
    return this.props.posts.map((post) => {
        return (
             <li className="list-group-item" key={post.id}>
                 <Link to={"posts/" + post.id}> 
                    <span className="pull-xs-right">{post.comments}</span>
                    <strong>{post.firstName}</strong> 
                 </Link> 
            </li>
        );
    });
}



    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link to="/posts/new" className="btn btn-primary">
                      EXAM REQUEST
                    </Link>
                </div>         
                <h4>EXAMS</h4> 
                <ul className="list-group">
                    { this.renderPosts() }
                </ul>
             </div> 
        );
    }
}

function mapStateToProps(state) {
    return { posts: state.posts.all }
}

export default connect(mapStateToProps, {fetchPosts: fetchPosts}) (PostsIndex);