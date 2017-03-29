import React, { Component, PropTypes  } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';


class PostsNew extends Component {
    static contextTypes = {
        router: PropTypes.object
    };


    onSubmit(props) {
        this.props.createPost(props)
            .then(() => {
                // blog post has been created, navigate the user to the index
                // we navigate by calling this.context.router.push
                this.context.router.push('/');
            });
    }


    render() {
        const { fields: {title, categories, content }, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
              <h3> Create a New Post</h3>
              
                <div className='form-group'>
                    <label>Title</label> 
                    <input type="text" className="form-control" {...title} />
                    <div className='text-help'>
                        {title.touched ? title.error: ''}
                    </div> 
                </div> 

                <div className='form-group'>
                    <label>Categories</label> 
                    <input type="text" className="form-control" {...categories} />
                    <div className='text-help'>
                        {categories.touched ? categories.error: ''}
                    </div> 
                </div> 
                
                <div className='form-group'>
                    <label>Content</label> 
                    <textarea className="form-control" {...content}/>
                    <div className='text-help'>
                        {content.touched ? content.error: ''}
                    </div> 
                </div>

                <button type="submit" className="btn btn-primary">SUBMIT</button> 
                <Link to="/" className="btn btn-danger">CANCEL</Link> 
            </form> 
        );
    }
}


function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = 'Enter a username';
    }
    if (!values.categories) {
        errors.categories = 'Enter a category';
    }
    if (!values.content) {
        errors.content = 'Enter content'
    }

    return errors;
}


//connect first argument is mapStatetoProps, 2nd is mapDipatchToProps
// reduxForm: 1st is form config, 2nd is mapDipatchToProps, 3rd is mapDispatchToProps

export default reduxForm({
    form: "PostsNewForm",
    fields: ['title' ,'categories','content'],
    validate
}, null,{ createPost } ) (PostsNew); 