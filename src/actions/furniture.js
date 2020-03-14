import axios from 'axios';
import { FURNITURE } from './actionTypes';
import config from './../config';

function fetchSuccess(data) {
    return {
        type: FURNITURE.FETCH_SUCCESS,
        payload: { data }
    }
}

function fetchFailed(data) {
    return {
        type: FURNITURE.FETCH_FAILED,
        payload: { data }
    }
}

export function fetchFurniture() {
    return (dispatch) => {
        axios.get(`${config.apiBaseUrl}/v2/5c9105cb330000112b649af8`).then((res) => {
            console.log(res);
            if (res.status === 200) {
                const response = res.data;
                dispatch(fetchSuccess(response));
            } else {
                dispatch(fetchFailed());
            }
        })
    }
}