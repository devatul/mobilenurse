import React, { Component, PropTypes  } from 'react';
import TimePicker from 'react-bootstrap-time-picker';
import { Link } from 'react-router';
import { Row, Col } from 'react-bootstrap';
import _ from 'lodash';
import { convertAmtToPlainNumber } from '../../helpers';
import $ from 'timepicker';
export default class TimePickerComponent extends Component {
  constructor(props) {
      super(props);
      this.state = {
          time: 0
      }
      this.handleChange = this.handleChange.bind(this);
  }
  componentWillMount(){
    $(document).ready(function(){
      $('#example').timepicker();
    });
  }
  handleBlur(e){
    const { input, meta, lable } = this.props;
    let val = e.target.value;
    if(!meta.invalid){
      if(lable === 'STATE') {
        val = e.target.value.toUpperCase();
      } else if (input.name === 'policyAmount') {
        val = parseInt(val);
        val = val.toLocaleString('en-us');
        val = val.toString();
      }
    }
    input.onBlur(val);
  }
  handleChange(time){
    console.log(time);
    this.setState({ time });
    // const { input, meta, lable } = this.props;
    // let val = e.target.value;
    // if(lable === 'ZIP' && val.length > 5) {
    //   val = val.slice(0, 5);
    // }
    // input.onChange(val);
  }
  handleFocus(e) {
    let val = e.target.value;
    const { input, meta  } = this.props;
    if(input.name === 'policyAmount'){
      val = convertAmtToPlainNumber(val);
    }
    input.onChange(val);
  }
  render() {
    // <input {...input} type={type} placeholder={placeholder} className={"form-control "+ classname}
    // onBlur={(e)=>this.handleBlur(e)}
    // onChange={(e)=>this.handleChange(e)}
    // onFocus={(e)=>this.handleFocus(e)}
    // />
    console.log('this.props', this.props);
    const { lable, input, placeholder, type, meta, classname } = this.props;
    return (
      <div className={classname}>
        <div className={`'form-group ${meta.touched && meta.invalid ? 'has-danger' : ''}`}>
          <label>{lable}</label>
          <input type="text" id="example" />
          <TimePicker format={12} step={30} onChange={(e)=>this.handleChange(e)} value={this.state.time} />
          <div className='text-help'>
            {meta.touched ? meta.error: ''}
          </div>
        </div>
      </div>
    )
  }
}
