import {updateObject} from '../utility';

const initialState = {
    loading: false,
    authRedirectPath : '/'
};

const setAuthRedirectPath = (state, action) => {
    return updateObject(state, { authRedirectPath: action.path })
};

const authStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const authSuccess = (state, action) => {
    return updateObject( state, { 
        loading: false
     } );
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'AUTH_START': return authStart(state, action);
        case 'AUTH_SUCCESS': return authSuccess(state, action);
        case 'SET_AUTH_REDIRECT_PATH': return setAuthRedirectPath(state,action);
        default:
            return state;

    }

}

export default reducer;