import React, { Component, PropTypes  } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Row, Col } from 'react-bootstrap';

export default class InputComponent extends Component {
  render() {
    const { lable, input, placeholder, type, meta } = this.props;
    console.log('this.props, InputComponent', this.props);
    return (
      <div>
        <div className={`'form-group ${meta.touched && meta.invalid ? 'has-danger' : ''}`}>
          <label>{lable}</label>
          <input type={type} placeholder={placeholder} className="form-control"  {...input} />
          <div className='text-help'>
            {meta.touched ? meta.error: ''}
          </div>
        </div>
      </div>
    )
  }
}
