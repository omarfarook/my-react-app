import axios from 'axios';

export const authStart = () => {
    return {
        type: 'AUTH_START'
    };
};

export const authSuccess = (token, userId) => {
    return {
        type: 'AUTH_SUCCESS'
    };
};

export const setAuthRedirectPath = (path) => {
    return {
        type: 'SET_AUTH_REDIRECT_PATH',
        path: path
    };
};

export const auth = () => {
    return dispatch => {
        dispatch(authStart());
        const url = 'https://jsonplaceholder.typicode.com/todos/1';

        axios.get(url).then(response => {
            console.log(response);
            dispatch(authSuccess());
        })
        .catch(error => {
            dispatch(authSuccess);
        })
    }
}