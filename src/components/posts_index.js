import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';
import _ from 'lodash';
import moment from 'moment';
import Header from './header';
import { Row, Col, Panel, Table } from 'react-bootstrap';

class PostsIndex extends Component {
  componentWillMount() {
      this.props.fetchPosts();
  }

  goToPost(postId) {
    this.props.history.push("posts/" + postId)
  }

    render() {
        let {posts} = this.props;
        let currentExamOrders = [];
        let completedExams = [];
        let canceledExams = [];
        _.map(posts,(post, i) => {
          let examDate = moment(new Date(post.examDate)).format("DD/MM/YYYY");
          if(post.examStatus === 'Pending Confirmation' || post.examStatus === 'Scheduling Confirmed'){
            currentExamOrders.push(<tr key={i} onClick={()=>this.goToPost(post.id)} style={{cursor:'pointer'}}>
              <td>{post.firstname} {post.lastName}</td>
              <td>{examDate}</td>
              <td>{post.examTime}</td>
              <td>{post.examStatus}</td>
            </tr>)
          } else if (post.examStatus === 'Completed') {
            completedExams.push(<tr key={i} onClick={()=>this.goToPost(post.id)} style={{cursor:'pointer'}}>
              <td>{post.firstname} {post.lastName}</td>
              <td>{examDate}</td>
              <td>{post.examStatus}</td>
              <td>{post.tracking}</td>
            </tr>)
          } else if (post.examStatus === 'Canceled') {
            canceledExams.push(<tr key={i} onClick={()=>this.goToPost(post.id)} style={{cursor:'pointer'}}>
              <td>{post.firstname} {post.lastName}</td>
              <td>{examDate}</td>
              <td>{post.examStatus}</td>
              <td>{post.examNotes}</td>
            </tr>)
          }
        });
        let noDataFound = <tr><td colSpan={4}><h5 className="text-center">No Data Found</h5></td></tr>;
          if(currentExamOrders.length < 1) {
            currentExamOrders.push(noDataFound);
          }
          if(completedExams.length < 1) {
            completedExams.push(noDataFound);
          }
          if(canceledExams.length < 1) {
            canceledExams.push(noDataFound);
          }
        return (
            <div className="row">
              <Header title="Profile" />
              <div className="col-xs-12">
                <div className="pull-right">
                    <Link exact to="/posts/new" className="btn btn-primary">
                      EXAM REQUEST
                    </Link>
                </div>
                <div className="pull-left">
                  <Link to="/repinfo/">PROFILE</Link>
                </div>
              </div>
              <div className="col-xs-9" >
                <Panel header="Current Exam Orders">
                  <Table responsive striped bordered condensed hover>
                     <thead>
                       <tr>
                         <th>Client Name</th>
                         <th>Exam Date</th>
                         <th>Time</th>
                         <th>Status</th>
                       </tr>
                     </thead>
                     <tbody>
                       {currentExamOrders}
                     </tbody>
                   </Table>
                </Panel>
                <Panel header="Completed Exams">
                  <Table responsive striped bordered condensed hover>
                     <thead>
                       <tr>
                         <th>Client Name</th>
                         <th>Exam Date</th>
                         <th>Status</th>
                         <th>Tracking Number</th>
                       </tr>
                     </thead>
                     <tbody>
                       {completedExams}
                     </tbody>
                   </Table>
                </Panel>
                <Panel header="Canceled Exams">
                  <Table responsive striped bordered condensed hover>
                     <thead>
                       <tr>
                         <th>Client Name</th>
                         <th>Exam Date</th>
                         <th>Status</th>
                         <th>Notes</th>
                       </tr>
                     </thead>
                     <tbody>
                       {canceledExams}
                     </tbody>
                   </Table>
                </Panel>
            </div>
          </div>
        );
    }
}

function mapStateToProps(state) {
    return { posts: state.posts.all }
}

export default connect(mapStateToProps, {fetchPosts: fetchPosts}) (PostsIndex);
