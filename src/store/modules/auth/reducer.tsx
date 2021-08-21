import * as types from '../types';
import axios from '../../../services/axios';
import { any } from 'prop-types';

const initialState = {
    isLoggedIn: false,
    token:false,
    user: {
        username: any
    },
    isLoading: false,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {

    console.log(action.type)
    switch (action.type) {
        case types.LOGIN_SUCCESS: {
            console.log(action.payload)
            const newState = {...state };
            newState.isLoggedIn = true;
            newState.token = action.payload.token;
            newState.user = action.payload.user;
            return newState;
        }

        case types.LOGIN_FAILURE:{
            console.log('login f')
            delete axios.defaults.headers.Authorization;
            const newState = {...initialState}
            return newState;
        }

        case types.REGISTER_SUCCESS:{
            console.log(action.payload)
            const newState = {...state};
            newState.user.username = action.payload.username;
            return newState;
        }

            
        default:{
            return state;
        }
    }
};