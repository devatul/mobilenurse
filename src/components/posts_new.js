import React, { Component, PropTypes  } from 'react';
import { reduxForm, formValueSelector } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';
//List of available services provided
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import momentLocaliser from 'react-widgets/lib/localizers/moment';
import moment from 'moment';
//import 'react-widgets/dist/css/react-widgets.css';

momentLocaliser(moment)


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
        const { fields: {firstName, lastName, examType }, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
              <h3>SCHEDULE AN EXAM</h3>
                    <Link to="/profile/">Back</Link>
                <div className={`'form-group ${firstName.touched && firstName.invalid ? 'has-danger' : ''}`}>
                    <label>FIRSTNAME</label> 
                    <input type="text" className="form-control" {...firstName} />
                    <div className='text-help'>
                        {firstName.touched ? firstName.error: ''}
                    </div> 
                </div> 

                <div className={`'form-group ${lastName.touched && lastName.invalid ? 'has-danger' : ''}`}>
                    <label>LASTNAME</label> 
                    <input type="text" className="form-control" {...lastName} />
                    <div className='text-help'>
                        {lastName.touched ? lastName.error: ''}
                    </div> 
                </div> 
                
                <div className={`'form-group ${examType.touched && examType.invalid ? 'has-danger' : ''}`}>
                    <label>EXAM TYPE</label> <br/>
                    <select>
                        <option className="form-control" value="">SELECT</option>
                        <option className="form-control" value="PBU">PBU</option>
                        <option className="form-control" value="PBUEKG">PBU + EKG</option>
                        {/*<div className='text-help'>
                        </div> */}
                    </select>
                    <br/>
                </div>

                <div> 
                <DateTimePicker/>
                </div> 

                <button type="submit" className="btn btn-primary">SUBMIT</button> 
                <Link to="/profile/" className="btn btn-danger">CANCEL</Link>
                <br></br>
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
    fields: ['firstName' ,'lastName','examType'],
    validate
}, null,{ createPost } ) (PostsNew); 