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
                // exams post has been created, navigate the user to the index
                // we navigate by calling this.context.router.push
                this.context.router.push('/profile/');
            });
    }


    render() {
        const { fields: {firstName, lastName, comments }, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
              <h3>Request an Exam</h3>
                    <Link to="/profile/">Back</Link>
                <div className={`'form-group ${firstName.touched && firstName.invalid ? 'has-danger' : ''}`}>
                    <label>Firstname</label> 
                    <input type="text" className="form-control" {...firstName} />
                    <div className='text-help'>
                        {firstName.touched ? firstName.error: ''}
                    </div> 
                </div> 

                <div className={`'form-group ${lastName.touched && lastName.invalid ? 'has-danger' : ''}`}>
                    <label>Lastname</label> 
                    <input type="text" className="form-control" {...lastName} />
                    <div className='text-help'>
                        {lastName.touched ? lastName.error: ''}
                    </div> 
                </div> 
                
                <div className='form-group'>
                    <label>Test</label> 
                    <textarea className="form-control" {...comments}/>
                    <div className='text-help'>
                    </div> 
                </div>

                <button type="submit" className="btn btn-primary">SUBMIT</button> 
                <Link to="/profile/" className="btn btn-danger">CANCEL</Link>
                <br></br>
            </form> 
        );
    }
}


function validate(values) {
    const errors = {};

    if (!values.firstName) {
        errors.firstName = 'Enter client Firstname';
    }
    if (!values.lastName) {
        errors.lastName = 'Enter client Lastname';
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