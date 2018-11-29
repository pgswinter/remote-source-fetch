import {statusConstant} from "../../_constant/home-actions-types.constant"

const initialState = {
    _data: {},
    error: null,
    loading: true
}

export default function(state = initialState, action){
    let error;
    switch(action.type){
        case(statusConstant.FETCH_DATA_REQUEST):
            return {
                ...state,
                _data: {},
                error: null,
                loading: true
            }
        case(statusConstant.FETCH_DATA_SUCCESS):
            return {
                ...state,
                _data: action.payload,
                error: null,
                loading: false
            }
        case(statusConstant.FETCH_DATA_FAILURE): error = action.payload || {message: action.payload.message};
            return {
                ...state,
                _data: {},
                error: error,
                loading: false
            }
        default:
            return state
    }
}