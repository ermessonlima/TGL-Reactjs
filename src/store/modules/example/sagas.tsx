import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as actions from './actions';
import * as types from '../types';

const requisicao = () => new Promise((resolve:any, reject) => {
    setTimeout(() =>{
        resolve();

    }, 600);
});

function* exempleRequest(){
    try {
        yield call(requisicao);
        yield put(actions.clicaBotaoSuccess());
    } catch {
        toast.error('erro')
        yield put(actions.clicaBotaoFailure());
    }
}

export default all([
    takeLatest(types.BOTAO_CLICADO_REQUEST, exempleRequest),
])
