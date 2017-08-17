import React, { Component, PropTypes  } from 'react';
import { reduxForm, formValueSelector } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';
import { Select, Button, DatePicker, TimePicker } from 'antd';
import moment from 'moment';
// require('react-datetime');

// import {Datetime} from 'react-widgets';

class PostsNew extends Component {
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
  
  

  //Form Validator for only Letters and spaces
  letters_spaces(e) {
    const re =/^[a-zA-Z\s]*$/;
    if(!re.test(e.key)) {
        e.preventDefault();
    }
}


    render() {
        const { fields: {firstname, 
                        lastName,
                        clientDOB,
                        clientPhone,
                        examStreetAddress,
                        examCity,
                        examState,
                        examZipCode,
                        policyAmount,
                        examDate,
                        examTime,
                        examType,
                        gender,
                        examNotes }, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
              <h3>SCHEDULE AN EXAM</h3>
              <hr/> 
              <br/>

                <div className="text-xs-right">
                    <Link to="/profile/">BACK</Link>
                </div>

                <div className="text-xs-left">
                    <Link to="/repinfo/">PROFILE</Link>
                </div>

                <div>
                    <div className={`'form-group ${firstname.touched && firstname.invalid ? 'has-danger' : ''}`}>
                        <label>FIRSTNAME</label> 
                        <input ref="letters_spaces" onKeyPress={(e) => this.letters_spaces(e)} 
                            type="text" placeholder="firstname" className="form-control" {...firstname} />
                        <div className='text-help'>
                            {firstname.touched ? firstname.error: ''}
                        </div> 
                    </div> 
                </div> 

                <div className={`'form-group ${lastName.touched && lastName.invalid ? 'has-danger' : ''}`}>
                    <label>LASTNAME</label> 
                    <input ref="letters_spaces" onKeyPress={(e) => this.letters_spaces(e)} 
                         type="text" placeholder="lastname" className="form-control" {...lastName} />
                    <div className='text-help'>
                        {lastName.touched ? lastName.error: ''}
                    </div> 
                </div> 

                <div className={`'form-group ${clientDOB.touched && clientDOB.invalid ? 'has-danger' : ''}`}>
                    <label>DATE OF BIRTH</label> 
                    <input type="DATE" placeholder="DOB" format="YYYY-MM-DD" className="col-lg-6 form-control" {...clientDOB} />
                    <div className='text-help'>
                    {clientDOB.touched ? clientDOB.error: ''}
                    </div> 
                </div> 

                <div className={`'form-group ${clientPhone.touched && clientPhone.invalid ? 'has-danger' : ''}`}>
                    <label>PHONE NUMBER</label> 
                    <input type="TEL" placeholder="XXX-XXX-XXXX" className="col-lg-6 form-control" {...clientPhone} />
                    <div className='text-help'>
                    {clientPhone.touched ? clientPhone.error: ''}
                    </div> 
                </div> 

                <div className={`'form-group ${examStreetAddress.touched && examStreetAddress.invalid ? 'has-danger' : ''}`}>
                    <label>STREET ADDRESS</label> 
                    <input type="ADDRESS" placeholder="street address" className="form-control" {...examStreetAddress} />
                    <div className='text-help'>
                    {examStreetAddress.touched ? examStreetAddress.error: ''}
                    </div> 
                </div> 

                <div className={`'form-group ${examCity.touched && examCity.invalid ? 'has-danger' : ''}`}>
                    <label>CITY</label> 
                    <input ref="letters_spaces" onKeyPress={(e) => this.letters_spaces(e)} 
                        type="CITY" placeholder="city" className="form-control col-md-4" {...examCity} />
                    <div className='text-help'>
                    {examCity.touched ? examCity.error: ''}
                    </div> 
                </div> 

                <div className={`form-group ${examState.touched && examState.invalid ? 'has-danger' : ''}`}>
                    <label>STATE</label> 
                    <input ref="letters_spaces" onKeyPress={(e) => this.letters_spaces(e)} 
                        type="text" placeholder="state" className="form-control col-md-4" {...examState} />
                    <div className='text-help'>
                    {examState.touched ? examState.error: ''}
                    </div> 
                </div> 

                <div className={`'form-group ${examZipCode.touched && examZipCode.invalid ? 'has-danger' : ''}`}>
                    <label>ZIP</label> 
                    <input type="number" placeholder="zip" className="col-lg-6 form-control" {...examZipCode} />
                    <div className='text-help'>
                    {examZipCode.touched ? examZipCode.error: ''}
                    </div> 
                </div> 

                <div className={`'form-group ${policyAmount.touched && policyAmount.invalid ? 'has-danger' : ''}`}>
                    <label>POLICY AMOUNT</label> 
                    <input type="number" placeholder="policy amount" className="col-lg-6 form-control" {...policyAmount} />
                    <div className='text-help'>
                    {policyAmount.touched ? policyAmount.error: ''}
                    </div> 
                </div> 

                <div className='form-group col-sm-6'>
                    <label>EXAM DATE</label> <br/>
                    <DatePicker
                         {...examDate}
                         value={this.state.examDate}
                        onChange={(newValMoment, newValString) =>
                            this.handleUpdateDate(newValMoment, newValString)}
                        />
                </div>

                <div className='form-group col-sm-6'>
                    <label>EXAM TIME</label> <br/>               
                    <TimePicker 
                        placeholder='SELECT'
                        format='hh:mm a'
                        {...examTime}
                        currentValue={this.state.examTime}
                        onChange={(newValMoment, newValString) =>
                            this.handleUpdateTime(newValMoment, newValString)}
                            />
                </div>

                <div className="col-sm-6">
                    <div className={`'form-group ${examType.touched && examType.invalid ? 'has-danger' : ''}`}>
                        <label>EXAM TYPE</label> <br/>
                        <select style={{ width: 180 }} onChange={this.handleExamTypeChange} {...examType}>
                            <option className="form-control" value="">SELECT</option>
                            <option className="form-control" value="PBU">PBU</option>
                            <option className="form-control" value="PBU + EKG">PBU + EKG</option>
                            <option className="form-control" value="EKG">EKG</option>
                            <option className="form-control" value="BLOOD">BLOOD ONLY</option>
                            <option className="form-control" value="URINE">URINE ONLY</option>
                            <option className="form-control" value="PHYSICAL MEASUREMENTS">PHYSICAL MEASUREMENTS</option>
                            <option className="form-control" value="BLOOD PRESSURE">BLOOD PRESSURE</option>
                            <option className="form-control" value="SPECIAL">SPECIAL ORDER</option>

                            {/*<div className='text-help'>
                            </div> */}
                        </select>
                        <br/>
                    </div>
                </div>


                <div className="col-sm-6">
                    <div className={`'form-group ${gender.touched && gender.invalid ? 'has-danger' : ''}`}>
                        <label>GENDER</label><br/>
                        <select style={{width: 180 }} onChange={this.handleGenderUpdate} {...gender}>
                            <option className="form-control" value="">SELECT</option>
                            <option className="form-control" value="MALE">MALE</option>
                            <option className="form-control" value="FEMALE">FEMALE</option>
                        </select>
                        <br/>
                    </div>
                </div> 
               
                <div className='form-group text-xs-left'>
                     <br/><br/>
                    <label className="text-xs-left">COMMENTS</label> <br/>
                    <textarea placeholder="special instructions" className="form-control" {...examNotes}/>
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
    if (!values.clientDOB) {
        errors.clientDOB = 'client date of birth';
    }
    if (!values.examStreetAddress) {
        errors.examStreetAddress = 'street address of exam';
    }
    if (!values.examState) {
    errors.examState = 'state of exam';
    }
    if (!values.examCity) {
    errors.examCity = 'city of exam';
    }
    if (!values.examZipCode) {
    errors.examZipCode = 'zipcode of exam';
    }
    if (!values.policyAmount) {
    errors.policyAmount = 'policy amount';
   }
    if (!values.clientPhone) {
    errors.clientPhone = 'client phone number';
    }
    return errors;
}

//connect first argument is mapStatetoProps, 2nd is mapDipatchToProps
// reduxForm: 1st is form config, 2nd is mapDipatchToProps, 3rd is mapDispatchToProps

export default reduxForm({
    form: "PostsNewForm",
    fields: ['firstname',
            'lastName',
            'examType',
            'examStreetAddress',
            'examCity',
            'examState',
            'examZipCode',
            'policyAmount',
            'clientDOB',
            'clientPhone',
            'examDate',
            'examTime',
            'examType',
            'gender',
            'examNotes'],
    validate
}, null,{ createPost } ) (PostsNew); 