import actions from "./actions"
import { changeUser, getUsers, removeUser } from "../../../api/usersApi"

const fetchUsers = (requestParams) => {
    return dispatch => {
        dispatch(actions.fetchUsersRequest(requestParams))
        return getUsers()
            .then(result => {
                dispatch(actions.fetchUsersSucces(result))
                return result;
            })
            .catch(err => {
                dispatch(actions.fetchUsersFail(err));
                return err;
            })
    }
}

const deleteUser = (requestParams) => {
    return dispatch => {
        dispatch(actions.deleteUsersRequest(requestParams))
        return removeUser(requestParams)
            .then(result => {
                dispatch(actions.deleteUsersSucces(result))
                return result;
            })
            .catch(err => {
                dispatch(actions.deleteUsersFail(err))
                return err;
            })
    }
}

const editUser = (requestParams) => {
    return dispatch => {
        dispatch(actions.editUsersRequest(requestParams))
        return changeUser(requestParams)
        .then(result=> {
            dispatch(actions.editUsersSucces(result));
            return result
        })
        .catch(err => {
            dispatch(actions.editUsersFail(err));
            return err;
        })
    }
}



export default {
    fetchUsers,
    deleteUser,
    editUser

}