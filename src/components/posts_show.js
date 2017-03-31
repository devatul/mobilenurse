import React, { Component, PropTypes  } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router';


class PostsShow extends Component {
    static contextTypes = {
        router: PropTypes.object
    };


    componentWillMount() {
        this.props.fetchPost(this.props.params.id);
    }

    onDeleteClick() {
        this.props.deletePost(this.props.params.id)
        .then(() => {
            this.context.router.push('/profile/');
        });
    }


    render() {
        const { post } = this.props;

        if(!post) {
            return <div>Loading..</div>;
        }
        return (
            <div>
                <Link to="/profile/">Back</Link>
                <button 
                    className="btn btn-danger pull-xs-right"
                    onClick={this.onDeleteClick.bind(this)}>
                    CANCEL EXAM
                </button> 
                <h3>Firstname: {post.firstName}</h3>
                <h6>Lastname: {post.lastName}</h6>
                <p>{post.comments} </p>   
             </div>
        );
    }
}


function mapStateToProps(state) {
    return { post: state.posts.post };
}



export default connect(mapStateToProps, {fetchPost, deletePost}) (PostsShow); 