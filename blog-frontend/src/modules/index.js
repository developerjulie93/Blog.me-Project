//reducer combine
import {combineReducers} from 'redux';
import auth,{authSaga} from './auth';
import loading from './loading';
import {all} from 'redux-saga/effects';
import user,{userSaga } from './user';
import write,{writeSaga} from './write';

const rootReducer = combineReducers({
    auth,
    loading,
    user,
    write,
});

export function* rootSaga(){
    yield all([authSaga(),userSaga(),writeSaga()]);
}

export default rootReducer;
