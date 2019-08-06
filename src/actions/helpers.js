
export const clearForm = (actionType) => {


    return (dispatch) => {
        dispatch({
            type: actionType,
            payload: null
        })
    }

}