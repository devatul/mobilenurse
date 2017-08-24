import React, { Component, PropTypes  } from 'react';
import { connect } from 'react-redux';
import { Form, reduxForm, formValueSelector, Field } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';
import { Select, Button, DatePicker, TimePicker } from 'antd';
import moment from 'moment';
import Header from './header';
import { isValidDOB, isValidPhoneNumber, isValidState, isValidZip, isValidExamDate } from '../helpers';
import PhoneNumber from './form_components/phone_number.js';
import InputComponent from './form_components/input_components.js';
import AntdComponent from './form_components/antd_components.js';
import ModalComponent from './modal';

class PostsNew extends Component {
    static contextTypes = {
        router: PropTypes.object
    };
    constructor(props) {
        super(props);
        this.state = {
          confirmSubmit: false,
          formData: {}
        }
        this.closeModal = this.closeModal.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onConfirm = this.onConfirm.bind(this);
    }
    onSubmit(props) {
        this.props.createPost(props)
            .then(() => {
                // exams post has been created, navigate the user to the index
                // we navigate by calling this.context.router.push
                this.context.router.push('/profile/');
            });
    }
    onConfirm(props){
      this.setState({
        confirmSubmit: true,
        formData: props
      })
    }
    closeModal(){
      this.setState({
        confirmSubmit:false,
        formData: {}
      })
    }
    render() {
      const {handleSubmit} = this.props;
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
              <Form onSubmit={handleSubmit(this.onConfirm.bind(this))}>
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
                  type="DatePicker"
                  lable="DATE OF BIRTH"
                  dateFormat="DD/MM/YYYY"
                  inputclassname="form-control client-dob "
                  component={AntdComponent}
                  placeholder="DOB"
                />
                <Field
                  name="clientPhone"
                  type="TEL"
                  lable="Phone Number"
                  classname="col-lg-6"
                  component={PhoneNumber}
                  placeholder="XXX-XXX-XXXX"
                />
                <Field
                  name="examStreetAddress"
                  type="ADDRESS"
                  lable="STREET ADDRESS"
                  classname="col-lg-6"
                  component={InputComponent}
                  placeholder="street address"
                />
                <Field
                  name="examCity"
                  type="text"
                  lable="CITY"
                  classname="col-md-4"
                  component={InputComponent}
                  placeholder="city"
                />
                <Field
                  name="examState"
                  type="text"
                  lable="STATE"
                  classname="col-md-4"
                  component={InputComponent}
                  placeholder="state"
                />
                <Field
                  name="examZipCode"
                  type="number"
                  lable="ZIP"
                  classname="col-lg-6"
                  component={InputComponent}
                  placeholder="zip"
                />
                <Field
                  name="policyAmount"
                  type="text"
                  lable="POLICY AMOUNT"
                  classname="col-lg-6"
                  component={InputComponent}
                  placeholder="policy amount"
                />
                <Field
                  name="examDate"
                  type="DatePicker"
                  lable="EXAM DATE"
                  classname="col-sm-6"
                  component={AntdComponent}
                  placeholder="Select Date"
                />
                <Field
                  name="examTime"
                  type="TimePicker"
                  lable="EXAM TIME"
                  classname="col-sm-6"
                  component={AntdComponent}
                  placeholder="SELECT"
                />
                <Field
                  name="examType"
                  type="examType"
                  lable="EXAM TYPE"
                  classname="col-sm-6"
                  component={AntdComponent}
                />
                <Field
                  name="gender"
                  type="gender"
                  lable="GENDER"
                  classname="col-sm-6"
                  component={AntdComponent}
                />
                <Field
                  name="examNotes"
                  type="textarea"
                  lable="COMMENTS"
                  component={InputComponent}
                  placeholder="special instructions"
                />
                <div className="col-xs-12 form-buttons" >
                  <button type="submit" className="btn btn-primary">SUBMIT</button>
                  <Link to="/profile/" className="btn btn-danger">CANCEL</Link>
                </div>
              </Form>
              <ModalComponent
                formData={this.state.formData}
                openModal={this.state.confirmSubmit}
                closeModal={this.closeModal}
                onSubmit={this.onSubmit}
              />
            </div>
          </div>
        );
    }
}


function validate(values) {
    const errors = {};

    if (!values.firstname) {
      errors.firstname = 'Invalid firstname';
    }
    if (!values.lastName) {
      errors.lastName = 'Invalid lastname';
    }
    if (!values.clientDOB || values.clientDOB === null) {
      errors.clientDOB = 'client date of birth';
    }
    if (!values.examStreetAddress) {
      errors.examStreetAddress = 'street address of exam';
    }
    let examStateErr = isValidState(values.examState)
    if (examStateErr) {
      errors.examState = examStateErr;
    }
    if (!values.examCity) {
      errors.examCity = 'city of exam';
    }
    let zipErr = isValidZip(values.examZipCode);
    if (zipErr) {
      errors.examZipCode = zipErr;
    }
    let examDateErr = isValidExamDate(values.examDate);
    if (!examDateErr) {
      errors.examDate = examDateErr;
    }
    if (!values.examTime) {
      errors.examTime = 'Select exam time';
    }
    if (!values.examType) {
      errors.examType = 'Please​ select exam type';
    }
    if (!values.gender) {
      errors.gender = 'Please​ select​ client​ ​ender';
    }

    if (!values.policyAmount) {
      errors.policyAmount = 'policy amount';
    }
    if (!values.clientPhone) {
      errors.clientPhone = 'Empty client phone number';
    } else if (!isValidPhoneNumber(values.clientPhone)){
      errors.clientPhone = 'Invalid client phone number' ;
    }
    return errors;
}

const mapStateToProps = (state) => ({
    // ...
});

const mapDispatchToProps = (dispatch)  => ({
    createPost: (props) => { return dispatch(createPost(props)) }
});

export default reduxForm({
  form: "PostsNewForm",
  validate
})(connect(mapStateToProps, mapDispatchToProps)(PostsNew));
