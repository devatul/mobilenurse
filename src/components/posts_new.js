import React, { Component, PropTypes  } from 'react';
import { connect } from 'react-redux';
import { Form, reduxForm, formValueSelector, Field } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';
import { Select, Button, DatePicker, TimePicker } from 'antd';
import moment from 'moment';
import Header from './header';
import { isValidDOB, isValidPhoneNumber } from '../helpers';
import PhoneNumber from './form_components/phone_number.js';
import InputComponent from './form_components/input_components.js';
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
            examDate:null,
            // clientPhone: this.props.fields.clientPhone
        }
        this.handleExamTypeChange = this.handleExamTypeChange.bind(this);
        this.phoneNumber = this.phoneNumber.bind(this);
        this.formatPhoneNumber = this.formatPhoneNumber.bind(this);
    }
    componentWillReceiveProps(props) {
        // this.setState({
        //   clientPhone:props.fields.clientPhone
        // })
    }
    onSubmit(props) {
      console.log('submit');
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
formatPhoneNumber(e) {
  let seprator = '-';
  let clientPhone = this.state.clientPhone;
  let val = e.target.value;
  if(val.length === 10 && isValidPhoneNumber(val)) {
    val = '(' +val.slice(0, 3)+') '+val.slice(3, 6)+seprator+val.slice(6, val.length);
  }
  clientPhone.value = val;
  this.setState({
    clientPhone
  })
}
phoneNumber(e) {
  let seprator = '-';
  let clientPhone = this.state.clientPhone;
  let val = e.target.value;
  if(val.length > 3 && val[3] !== seprator ) {
    val = val.slice(0, 3)+seprator+val.slice(3, val.length);
  }
  if(val.length > 7 && val[7] !== seprator ) {
    val = val.slice(0, 7)+seprator+val.slice(7, val.length);
  }
  if(val.length > 12) {
    val = val.slice(0, 12);
  }
  console.log(e.target.value, val.length);

  clientPhone.value = val;
  this.setState({
    clientPhone
  })
}

  //Form Validator for only Letters and spaces
  letters_spaces(e) {
    const re =/^[a-zA-Z\s]*$/;
    if(!re.test(e.key)) {
        e.preventDefault();
    }
  }


    render() {
      console.log(' this.props=====',  this.props);
      const {handleSubmit, asyncValidate} = this.props;
        // const { fields: {firstname,
                        // lastName,
                        // clientDOB,
                        // clientPhone,
                        // examStreetAddress,
                        // examCity,
                        // examState,
                        // examZipCode,
                        // policyAmount,
                        // examDate,
                        // examTime,
                        // examType,
                        // gender,
                        // examNotes }, handleSubmit } = this.props;
                        // const {clientPhone} = this.state;
        return (
            <div className="row">
              <Header title="SCHEDULE AN EXAM" />
              <div className="col-xs-12">
                <div className="pull-right">
                  <Link to="/profile/">BACK</Link>
                </div>
                <div className="pull-left">
                  <Link to="/repinfo/">PROFILE</Link>
                </div>
              </div>
            <div className="col-xs-9 form-wrapper">
              <Form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                  name="firstname"
                  type="text"
                  lable="FIRSTNAME"
                  component={InputComponent}
                  placeholder="firstname"
                />
                <Field
                  name="lastName"
                  type="text"
                  lable="LASTNAME"
                  component={InputComponent}
                  placeholder="lastname"
                />
                <Field
                  name="clientDOB"
                  type="DATE"
                  lable="DATE OF BIRTH"
                  component={InputComponent}
                  placeholder="DOB"
                />
                <Field
                  name="clientPhone"
                  type="TEL"
                  lable="Phone Number"
                  blurP = {this.state.b}
                  onBlur={asyncValidate}
                  component={PhoneNumber}
                  placeholder="XXX-XXX-XXXX"
                />
                <Field
                  name="examStreetAddress"
                  type="ADDRESS"
                  lable="STREET ADDRESS"
                  component={InputComponent}
                  placeholder="street address"
                />
                <Field
                  name="examCity"
                  type="CITY"
                  lable="CITY"
                  component={InputComponent}
                  placeholder="city"
                />
                <div className="col-xs-12" >
                  <button type="submit" className="btn btn-primary">SUBMIT</button>
                  <Link to="/profile/" className="btn btn-danger">CANCEL</Link>
                  <br></br>
                  <br></br>
                </div>
              </Form>
            </div>
          </div>
        );
    }
}


function validate(values) {
    const errors = {};
console.log('validate', values);
    if (!values.firstname) {
        errors.firstname = 'client firstname';
    }
    if (!values.lastName) {
        errors.lastName = 'client lastname';
    }
    if (!values.clientDOB) {
        errors.clientDOB = 'client date of birth';
    } else if (!isValidDOB(values.clientDOB)) {
      errors.clientDOB = 'Invalid date of birth';
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
    errors.clientPhone = 'Invalid client phone number';
  }else if (!isValidPhoneNumber(values.clientPhone)){
    errors.clientPhone= 'asyncValidate client phone number' ;
  }
    return errors;
}
// const sleep = ms => new Promise((resolve, reject) => setTimeout(resolve, ms))
//
// const asyncValidate = (values) => {
//   // console.log('name, values', name, values);
//   let a = isValidPhoneNumber(values.clientPhone);
//   console.log('aaaaa',a);
//   return sleep(100).then(() => {
//     // simulate server latency
//     if (!a) {
//       throw { clientPhone: 'asyncValidate client phone number' }
//     }
//   })
// }
//connect first argument is mapStatetoProps, 2nd is mapDipatchToProps
// reduxForm: 1st is form config, 2nd is mapDipatchToProps, 3rd is mapDispatchToProps

// fields: ['firstname',
// 'lastName',
// 'examType',
// 'examStreetAddress',
// 'examCity',
// 'examState',
// 'examZipCode',
// 'policyAmount',
// 'clientDOB',
// 'clientPhone',
// 'examDate',
// 'examTime',
// 'examType',
// 'gender',
// 'examNotes'],

const mapStateToProps = (state) => ({
    // ...
});

const mapDispatchToProps = (dispatch)  => ({
    createPost: (props) => { return dispatch(createPost(props)) }
});

PostsNew = connect(
    mapStateToProps,
    mapDispatchToProps
)(PostsNew);

export default reduxForm({
  form: "PostsNewForm",
    validate,
    // asyncValidate
}) (PostsNew);
