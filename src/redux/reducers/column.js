import * as actionTypes from "../actions/actionTypes";

const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {


        case actionTypes.SET_AUTH_REDIRECT_PATH:
            return {
                ...state,
                authRedirectPath: action.path
            };

        default:
            return state;
    }
};

export default reducer;