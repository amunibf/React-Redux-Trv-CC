import { FETCH_POST, NEW_POST} from './type'

export const fetchPosts = () => dispatch => {
        console.log('fetching')
    // return function(dispatch){
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res=>res.json())
            .then(posts=>
                dispatch({
                    type : FETCH_POST,
                    payload : posts
        }))
    // }
}

export const createPosts = postData => dispatch => {
    console.log('action called')
    fetch('https://jsonplaceholder.typicode.com/posts',
    {
        method : 'POST',
        headers : { 'content-type' : 'application/json'},
        body : JSON.stringify(postData)
    })
    .then(res=>res.json())
    .then(post=>dispatch({
        type : NEW_POST,
        payload : post
    }))
}