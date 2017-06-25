import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';
export const CREATE_REP_INFO = 'CREATE_REP_INFO';

const ROOT_URL = '/api';
const API_KEY = "?Key=Tonto";

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

 return {
    type: FETCH_POSTS,
    payload: request
  } 
}

export function createPost (props) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);

  return {
    type: CREATE_POST,
    payload: request

  };
}

export function createRepInfo (props) {
  const request = axios.post(`${ROOT_URL}/repinfo${API_KEY}`, props);

  return {
    type: CREATE_REP_INFO,
    payload: request

  };
}

export function fetchPost (id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}

export function deletePost(id) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}`);

  return {
    type: DELETE_POST,
    payload: request
  };
}

