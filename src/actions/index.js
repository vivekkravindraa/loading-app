import axios from 'axios';
import {
    GET_POSTS,
    GET_USERS
} from './types';

export const getPosts = () => (dispatch) => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
    .then((res) => {
        // console.log('posts', res.data);
        dispatch({ type: GET_POSTS, payload: res.data })
    })
    .catch((err) => {
        console.log(err);
    })
}

export const getUsers = () => (dispatch) => {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then((res) => {
        // console.log('users', res.data);
        dispatch({ type: GET_USERS, payload: res.data })
    })
    .catch((err) => {
        console.log(err);
    })
}
