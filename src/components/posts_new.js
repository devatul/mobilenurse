import React, { Component, PropTypes  } from 'react';
import { reduxForm, formValueSelector } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';
import { Select, Button, DatePicker, TimePicker } from 'antd';
import moment from 'moment';


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
        const { fields: {firstName, 
                        lastName,
                        clientDOB,
                        clientPhone,
                        examType,
                        examStreetAdress,
                        examCity,
                        examState,
                        examZipCode, policyAmount }, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
              <h3>SCHEDULE AN EXAM</h3>
              <hr/> 
              <br/>
              
                <div className="text-xs-right">
                    <Link to="/profile/">BACK</Link>
                </div>

                <div>
                    <div className={`'form-group ${firstName.touched && firstName.invalid ? 'has-danger' : ''}`}>
                        <label>FIRSTNAME</label> 
                        <input type="text" placeholder="firstname" className="form-control" {...firstName} />
                        <div className='text-help'>
                            {firstName.touched ? firstName.error: ''}
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

                <div className={`'form-group ${clientDOB.touched && clientDOB.invalid ? 'has-danger' : ''}`}>
                    <label>DATE OF BIRTH</label> 
                    <input type="DATE" placeholder="DOB" format="YYYY-MM-DD" className="col-lg-6 form-control" {...clientDOB} />
                    <div className='text-help'>
                    {clientDOB.touched ? clientDOB.error: ''}
                    </div> 
                </div> 

                <div className={`'form-group ${clientPhone.touched && clientPhone.invalid ? 'has-danger' : ''}`}>
                    <label>PHONE NUMBER</label> 
                    <input type="number" placeholder="ex. 8478675309" className="col-lg-6 form-control" {...clientPhone} />
                    <div className='text-help'>
                    {clientPhone.touched ? clientPhone.error: ''}
                    </div> 
                </div> 

                <div className={`'form-group ${examStreetAdress.touched && examStreetAdress.invalid ? 'has-danger' : ''}`}>
                    <label>STREET ADDRESS</label> 
                    <input type="ADDRESS" placeholder="street address" className="form-control" {...examStreetAdress} />
                    <div className='text-help'>
                    {examStreetAdress.touched ? examStreetAdress.error: ''}
                    </div> 
                </div> 

                <div className={`'form-group ${examCity.touched && examCity.invalid ? 'has-danger' : ''}`}>
                    <label>CITY</label> 
                    <input type="CITY" placeholder="city" className="form-control col-md-4" {...examCity} />
                    <div className='text-help'>
                    {examCity.touched ? examCity.error: ''}
                    </div> 
                </div> 

                <div className={`form-group ${examState.touched && examState.invalid ? 'has-danger' : ''}`}>
                    <label>STATE</label> 
                    <input type="text" placeholder="state" className="form-control col-md-4" {...examState} />
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

                <div className='form-group col-sm-4'>
                    <label>EXAM DATE</label> <br/>
                    <DatePicker placeholder='SELECT'/>
                </div>

                <div className='form-group col-sm-4 '>
                    <label>EXAM TIME</label> <br/>
                    <TimePicker 
                        placeholder='SELECT'
                        format='hh:mm a'/>
                </div>

                <div className="col-sm-4">
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

    if (!values.firstName) {
        errors.firstName = 'client firstname';
    }
    if (!values.lastName) {
        errors.lastName = 'client lastname';
    }
    if (!values.clientDOB) {
        errors.clientDOB = 'client date of birth';
    }
    if (!values.examStreetAdress) {
        errors.examStreetAdress = 'street address of exam';
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
    return errors;
}


//connect first argument is mapStatetoProps, 2nd is mapDipatchToProps
// reduxForm: 1st is form config, 2nd is mapDipatchToProps, 3rd is mapDispatchToProps

export default reduxForm({
    form: "PostsNewForm",
    fields: ['firstName',
            'lastName',
            'examType',
            'examStreetAdress',
            'examCity',
            'examState',
            'examZipCode',
            'policyAmount',
            'clientDOB',
            'clientPhone'],
    validate
}, null,{ createPost } ) (PostsNew); 