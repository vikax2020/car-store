import React, { useEffect, useState } from "react";
import cookie from "js-cookie";
import API from "./BackendRouting.js";
import axios from "axios";
import { toast } from "react-toastify"; 
import { useNavigate } from "react-router-dom";
const UserTable = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate()
  const getCookie = cookie.get("userInfo");
  const usertokenn = getCookie ? JSON.parse(getCookie) : null;
  const getData = async () => {
    try {
      const userData = await axios.get(API.FINDALL.url, {
        headers: {
          Authorization: `Bearer ${usertokenn.token}`,
        },
      });
      setData(userData.data.body);
      // console.log(userData,"userrdataa")
    } catch (error) {
      console.log(error, "error in getData");
    }

  };

  const deleteId= async(id)=>{
    try {
    const dataaa= await axios.delete(`${API.DELETE.url}/${id}`);
    console.log(dataaa.data,"data deleted")
    if(dataaa.data.status===200){
        toast.success(dataaa.data.message)
      

    getData()
    
    }
  
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    getData();
  }, []);



  const getId = (id) =>{
    navigate(`/view/${id}`)
  }
  return (
    <div style={{ padding: "20px" }}>
      <h2>User Table</h2>
      <table
        border="1"
        cellPadding="10"
        style={{ borderCollapse: "collapse", width: "100%" }}
      >
        <thead>
          <tr>
            <th>S.no</th>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Phone</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {console.log(data, "daa")}
          {data.map((e, index) => (
            <tr>

              {console.log(e, "Eeeee")}

              <td>{index + 1}</td>
              <td>{e._id}</td>
              <td>{e.name}</td>
              <td>{e.email}</td>
              <td>{e.password}</td>
              <td>{e.phone}</td>
              <td>
                <img src={e?.pic} alt="" />
              </td>
              <td>
                <button onClick={()=>{getId(e?._id)}}>view</button>
                <button onClick={()=>{deleteId(e?._id)}}>delete</button>
              </td>
              {/* <td>q79807</td>
            <td>dfsa</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable ;