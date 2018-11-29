import {loadServices} from "../../_services/home.services";
import {statusConstant} from "../../_constant/home-actions-types.constant"

export const loadActions = {
    displayData
}

function displayData(){

    return dispatch => {
        // Request fetch
        dispatch(fetchData());
        // Execute
        loadServices.fetchRemoteSource().then((response) =>{
            !response.error ? dispatch(fetchDataSuccess(response.data)) : dispatch(fetchDataFailure(response.data))
        })
    }

    function fetchData(){
        return {
            type: statusConstant.FETCH_DATA_SUCCESS
        };
    }

    function fetchDataSuccess(data){
        return {
            type: statusConstant.FETCH_DATA_SUCCESS,
            payload: data
        };
    }

    function fetchDataFailure(error){
        return {
            type: statusConstant.FETCH_DATA_FAILURE,
            payload: error
        };
    }

}