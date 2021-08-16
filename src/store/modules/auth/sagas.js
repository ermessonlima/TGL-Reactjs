import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';
import history from '../../../services/history';
import { get } from 'lodash';


function* loginRequest({payload}){
    try {
        const response = yield call(axios.post, '/sessions', payload);
        yield put(actions.loginSuccess({...response.data}))

        toast.success('Você fez login');

        console.log(response.data.token.token)

        axios.defaults.headers.Authorization = `Bearer ${response.data.token.token}`;

        history.push('/home')
    } catch (e) {
        toast.error('Invalid username or password.')

        yield put(actions.loginFailure());
    }
}
  

function persistRehydrate({payload}) {
    const token = get(payload, 'auth.token');
    console.log(token.token)
    if(!token) return null;
    axios.defaults.headers.Authorization = `Bearer ${token.token}`;

}

function* registerRequest({ payload }){
    const { usernameNew, password, id} = payload;

    try {
        yield call(axios.put, '/users', {
            username: usernameNew, 
            password: password || undefined,  
        });

        toast.success('Alterado com sucesso')
        yield put(actions.registerSuccess({username: usernameNew}))

    } catch (e) {
        const errors = get(e, 'response.data',[]);
        const status = get(e, 'response.status',0);

      
       
        console.log(errors)
        console.log(status)
        if( errors.length > 0 ) {
            errors.map(error => toast.error(error.message) )
        }else{
            toast.error('Erro desconhecido')
        }
        console.log(e)

        yield put(actions.registerFailure)
    }


}


export default all([
    takeLatest(types.LOGIN_REQUEST, loginRequest),
    takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
    takeLatest(types.REGISTER_REQUEST, registerRequest),
])
