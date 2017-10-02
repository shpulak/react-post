import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=DRAGON_234'
export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`); //ES6 Syntax
    return {
        type: FETCH_POSTS,
        payload: request
    };
}