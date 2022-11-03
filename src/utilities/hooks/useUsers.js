import { useEffect, useState } from "react";


function useUsers(){
    let [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch('userDb.json')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])
    return [users, setUsers];
}

export default useUsers;