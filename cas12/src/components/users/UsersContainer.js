import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { UsersComponent } from "./UsersComponent";
import { usersOperations } from "./duck";

export default function UserContainer() {

    const dispatch = useDispatch();
    const users = useSelector(state => state.usersReducer.users);
    const message = useSelector(state => state.usersReducer.message);
    const [activeEdit, setActiveEdit] = useState(false)
    const [user, setUser] = useState({});

    useEffect(() => {
        dispatch(usersOperations.fetchUsers())
    }, [dispatch])

    function deleteUser(id) {
        dispatch(usersOperations.deleteUser(id));
    }

    function editUser(user) {
        setUser(user)
        setActiveEdit(true);
    }

    function saveUser() {
        dispatch(usersOperations.editUser(user));
        setActiveEdit(false);
        setUser({})
    }

    return (
        <div>{activeEdit &&
            <>
                <input type="text" value={user.name} onChange={e => setUser({ ...user, name: e.target.value })} />
                <br />
                <br />
                <input type="text" value={user.email} onChange={e => setUser({ ...user, email: e.target.value })} />
                <button onClick={saveUser}>Save</button>
                <button onClick={()=>{setActiveEdit(false); setUser({})}}>&times;</button>
            </>}
            <UsersComponent
                listOfUsers={users}
                message={message}
                deleteUser={deleteUser}
                editUser={editUser} />
        </div>
    )
}