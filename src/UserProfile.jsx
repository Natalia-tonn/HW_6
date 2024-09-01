import styles from "./UserProfile.module.css"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"

function UserProfile(){

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

async function fetchUser(){
  try{
    const response = await axios.get("https://randomuser.me/api/");
    setUser(response.data.results[0]);
    setLoading(false)
  }
  catch(error)
   {console.error("Error", error)
   setLoading(false)
  }
};

    useEffect(() => {
       fetchUser()
    }, [])

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className={styles.profileContainer}>
        <img
          src={user.picture.large}
          alt={`${user.name.first} ${user.name.last}`}
        />
        <h1>
          {user.name.first} {user.name.last}
        </h1>
        <p>Email: {user.email}</p>
        <p>
          Location: {user.location.city}, {user.location.country}
        </p>
        <button onClick={fetchUser}>Load New User</button>
      </div>
    );
  };




export default UserProfile