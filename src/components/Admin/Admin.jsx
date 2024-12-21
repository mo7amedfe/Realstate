import React, { useContext, useState, useEffect } from 'react';
import styles from './Admin.module.css';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { TokenContext } from '../../Context/TokenContext';
import AllAdds from '../AllAdds/AllAdds';
import { Link } from 'react-router-dom';
import image from './../../assets/Spiderman Neon Edition.jpg'
import Footer from '../Footer/footer';


export default function Agents() {
  const { Token } = useContext(TokenContext);
  const [Users, setUsers] = useState([]);
  const [Adds, setAdds] = useState([])
  let { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey: ["AllUssers"],
    queryFn: getUsers,
  });

  useEffect(() => {
    getAdds()
    setUsers(data?.data);
    console.log(Users); // You can remove this if it's not necessary
  }, [data?.data]);

  function getUsers() {
    return axios.get("http://localhost:5000/api/users/users", {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    });
  }

  async function deleteUser(id, index) {
    try {
      await axios.delete(`http://localhost:5000/api/users/users/${id}`, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });

      // Create a new array without the deleted user (copy the array first)
      const updatedUsers = [...Users];
      updatedUsers.splice(index, 1);
      setUsers(updatedUsers); // Update the state with the new array

      console.log("User deleted:", id);
    } catch (e) {
      console.log("Error deleting user:", e);
    }
  }
  function getAdds() {
    return axios.get("http://localhost:5000/api/properties/Properties").then(res => {
      setAdds(res.data)

    }).catch(e => {
      console.log(e);

    })
  }

  async function deletePost(id, index) {
    return await axios.delete(`http://localhost:5000/api/properties/Properties/${id}`, {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    }).then(res => {
      const updatedAdds = [...Adds];
      updatedAdds.splice(index, 1);
      setAdds(updatedAdds)
      console.log(res);

    }).catch(e => {
      console.log(e);

    })

  }

  return (<>



    <div className="container">
      <div className={styles.tableContainer}>
        <table className={styles.responsiveTable}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Role</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {Users?.map((user, index) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.role}</td>
                <td>
                  <button onClick={() => { deleteUser(user._id, index); }} className='btn btn-red'>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    <div className="container">
      <div className="mt-4">
        <div className={styles.allAds}>
          <h2>All Adds</h2>
          {Adds?.map((add, index) =>
            <div key={add._id} className={styles.addCard}>
              <Link to={`/specificadd/${add._id}`}>

                <div className={styles.imgContainer}>
                  <img src={`http://localhost:5000/api/images/image/${add._id}`} alt="" />
                </div>
                <div className={styles.addDesc}>
                  <h3>{add.title}</h3>
                  <p><span><i className="fa-solid text-yellow fa-location-dot"></i></span> <span>{add.location}</span></p>

                  <p><span className='text-blue'>Type:</span>  <span>{add.type}</span> </p>
                  <p ><span className='text-blue'> price: </span>{add.price} {add.negotiationable ? <span className='text-red'>Negotiationable</span> : <></>}</p>
                </div>
              </Link>
              <button onClick={() => { deletePost(add._id, index) }} className='btn btn-red'>Delete</button>
            </div>

          )

          }
        </div>
      </div >
    </div>
    <Footer />
  </>

  );
}
