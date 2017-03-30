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
                this.context.router.push('/posts/new');
            });
    }


    render() {
        const { fields: {firstName, lastName, comments }, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
              <h3>Request an Exam</h3>
              
                <div className='form-group'>
                    <label>Firstname</label> 
                    <input type="text" className="form-control" {...firstName} />
                    <div className='text-help'>
                        {firstName.touched ? firstName.error: ''}
                    </div> 
                </div> 

                <div className='form-group'>
                    <label>Lastname</label> 
                    <input type="text" className="form-control" {...lastName} />
                    <div className='text-help'>
                        {lastName.touched ? lastName.error: ''}
                    </div> 
                </div> 
                
                <div className='form-group'>
                    <label>Comments</label> 
                    <textarea className="form-control" {...comments}/>
                    <div className='text-help'>
                    </div> 
                </div>

                <button type="submit" className="btn btn-primary">SUBMIT</button> 
                <Link to="/profile/" className="btn btn-danger">CANCEL</Link> 
            </form> 
        );
    }
}


function validate(values) {
    const errors = {};

    if (!values.firstName) {
        errors.firstName = 'Enter client firstname';
    }
    if (!values.lastName) {
        errors.lastName = 'Enter client lastname';
    }
    return errors;
}


//connect first argument is mapStatetoProps, 2nd is mapDipatchToProps
// reduxForm: 1st is form config, 2nd is mapDipatchToProps, 3rd is mapDispatchToProps

export default reduxForm({
    form: "PostsNewForm",
    fields: ['firstName' ,'lastName','comments'],
    validate
}, null,{ createPost } ) (PostsNew); 