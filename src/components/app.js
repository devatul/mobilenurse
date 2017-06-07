import React, { Component } from 'react';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

export default class App extends Component {
  render() {
    return (
      <LocaleProvider locale={enUS}>
      <div>
         {this.props.children}
      </div>
      </LocaleProvider>
    );
  }
}
