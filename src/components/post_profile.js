import React, { Component, PropTypes  } from 'react';
import { reduxForm, formValueSelector } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';
import { Select, Button, DatePicker, TimePicker } from 'antd';
import moment from 'moment';

class PostProfile extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    constructor(props) {
        super(props);
        this.state = {
            examTime:null,
            examDate:null
        }
        this.handleExamTypeChange = this.handleExamTypeChange.bind(this);
    }

    onSubmit(props) {
        this.props.createPost(props)
            .then(() => {
                // exams post has been created, navigate the user to the index
                // we navigate by calling this.context.router.push
                this.context.router.push('/profile/');
            });
    }

  handleUpdateDate(newValMoment, newValString) {
    this.setState({
      examDate: newValMoment
    });
  }

  handleUpdateTime(newValMoment, newValString) {
      console.log("Just called handle update time with new value " + newValString);
    this.setState({
      examTime: newValString
    });
  }

  handleExamTypeChange(event) {
    console.log("New updated exam type is " + event.target.value);
      this.setState({examType : event.target.value});
  }

handleGenderUpdate(event) {
    this.setState({gender: event.target.gender});
}
  

    render() {
        const { fields: {firstname, 
                        lastName,
                        officeAddress,
                        repCity,
                        repState,
                        repZipCode,
                        repOfficePhone,
                        repCellPhone,
                        repEmail,
                        repAssistantEmail,
                        }, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
              <h3>PROFILE</h3>
              <hr/> 
              <br/>

                <div className="text-xs-right">
                    <Link to="/repinfo/">BACK</Link>
                </div>

                <div>
                    <div className={`'form-group ${firstname.touched && firstname.invalid ? 'has-danger' : ''}`}>
                        <label>FIRSTNAME</label> 
                        <input type="text" placeholder="firstname" className="form-control" {...firstname} />
                        <div className='text-help'>
                            {firstname.touched ? firstname.error: ''}
                        </div> 
                    </div> 
                </div> 

                <div className={`'form-group ${lastName.touched && lastName.invalid ? 'has-danger' : ''}`}>
                    <label>LASTNAME</label> 
                    <input type="text" placeholder="lastname" className="form-control" {...lastName} />
                    <div className='text-help'>
                        {lastName.touched ? lastName.error: ''}
                    </div> 
                </div> 


                <div className={`'form-group ${repOfficePhone.touched && repOfficePhone.invalid ? 'has-danger' : ''}`}>
                    <label>OFFICE NUMBER</label> 
                    <input type="TEXT" placeholder="ex. 8478675309" className="col-lg-6 form-control" {...repOfficePhone} />
                    <div className='text-help'>
                    {repOfficePhone.touched ? repOfficePhone.error: ''}
                    </div> 
                </div>

                <div className={`'form-group ${repCellPhone.touched && repCellPhone.invalid ? 'has-danger' : ''}`}>
                    <label>MOBILE NUMBER</label> 
                    <input type="TEXT" placeholder="ex. 8478675309" className="col-lg-6 form-control" {...repCellPhone} />
                    <div className='text-help'>
                    {repCellPhone.touched ? repCellPhone.error: ''}
                    </div> 
                </div>  

                <div className={`'form-group ${officeAddress.touched && officeAddress.invalid ? 'has-danger' : ''}`}>
                    <label>OFFICE ADDRESS</label> 
                    <input type="ADDRESS" placeholder="street address" className="form-control" {...officeAddress} />
                    <div className='text-help'>
                    {officeAddress.touched ? officeAddress.error: ''}
                    </div> 
                </div> 

                <div className={`'form-group ${repCity.touched && repCity.invalid ? 'has-danger' : ''}`}>
                    <label>CITY</label> 
                    <input type="CITY" placeholder="city" className="form-control col-md-4" {...repCity} />
                    <div className='text-help'>
                    {repCity.touched ? repCity.error: ''}
                    </div> 
                </div> 

                <div className={`form-group ${repState.touched && repState.invalid ? 'has-danger' : ''}`}>
                    <label>STATE</label> 
                    <input type="text" placeholder="state" className="form-control col-md-4" {...repState} />
                    <div className='text-help'>
                    {repState.touched ? repState.error: ''}
                    </div> 
                </div> 

                <div className={`'form-group ${repZipCode.touched && repZipCode.invalid ? 'has-danger' : ''}`}>
                    <label>ZIP</label> 
                    <input type="number" placeholder="zip" className="col-lg-6 form-control" {...repZipCode} />
                    <div className='text-help'>
                    {repZipCode.touched ? repZipCode.error: ''}
                    </div> 
                </div>

                <div className={`'form-group ${repEmail.touched && repEmail.invalid ? 'has-danger' : ''}`}>
                    <label>EMAIL</label> 
                    <input type="TEXT" placeholder="EMAIL" className="col-lg-6 form-control" {...repEmail} />
                    <div className='text-help'>
                    {repEmail.touched ? repEmail.error: ''}
                    </div> 
                </div>
                <div className={`'form-group ${repAssistantEmail.touched && repAssistantEmail.invalid ? 'has-danger' : ''}`}>
                    <label>ASSISTANT EMAIL</label> 
                    <input type="TEXT" placeholder="EMAIL" className="col-lg-6 form-control" {...repAssistantEmail} />
                    <div className='text-help'>
                    {repAssistantEmail.touched ? repAssistantEmail.error: ''}
                    </div> 
                </div>

                <div className="col-xs-12" >
                    <button type="submit" className="btn btn-primary">SUBMIT</button> 
                    <Link to="/profile/" className="btn btn-danger">CANCEL</Link>
                    <br></br>
                    <br></br>
                </div> 
            </form> 
        );
    }
}


function validate(values) {
    const errors = {};

    if (!values.firstname) {
        errors.firstname = 'client firstname';
    }
    if (!values.lastName) {
        errors.lastName = 'client lastname';
    }
    return errors;
}

//connect first argument is mapStatetoProps, 2nd is mapDipatchToProps
// reduxForm: 1st is form config, 2nd is mapDipatchToProps, 3rd is mapDispatchToProps

export default reduxForm({
    form: "PostsNewForm",
    fields: ['firstname',
            'lastName',
            'officeAddress',
            'repCity',
            'repState',
            'repZipCode',
            'repOfficePhone',
            'repCellPhone',
            'repEmail',
            'repAssistantEmail'],
  //  validate
}, null,{ createPost } ) (PostProfile); 