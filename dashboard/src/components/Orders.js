import React, { useState, useEffect } from "react";

// import { Link } from "react-router-dom";
import axios from "axios";
import { MultiAxisChart } from "./MultiAxisChart";

const Orders = () => {




  //  for connect data with interface/dashboard
    const [allOrders, setAllOrders] = useState([]);
  
    useEffect(() => {
      
      axios
      .get(`${process.env.REACT_APP_API_URL}/newOrders`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` },
    })
    .then((res) => {
        // console.log(res.data);
        setAllOrders(res.data);
      })
      .catch((err)=>console.log(err));
    }, []);
  

    // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const labels = allOrders.map((subArray) => subArray["name"]);


 const data = {
  labels,
  datasets: [
    {
      label: 'BUY',
      data: allOrders.map((order) => order.qty),
      borderColor: 'green',
      backgroundColor: 'green',
      // text:'Qunatity',
      yAxisID: 'y',
    },
    {
      label: 'SELL',
      data: allOrders.map((order) => order.price),
      borderColor: 'red',
      backgroundColor: 'red',
      // text:'Pice',
      yAxisID: 'y1',
    },
  ],
};




  return (
    <>
      <h3 className="title">Orders ({allOrders.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            
            <th>Name</th>
            <th>Quatity</th>
            <th>Price</th>
            <th>Stock Value</th>
            <th>Mode</th>
           
          </tr>

          {allOrders.map((order, index) => {
            console.log(allOrders);
        
            return (
              <tr key={order._id}>
              
                <td>{order.name}</td>
                <td>{order.qty}</td>
                <td>{order.price}</td>
                <td>{order.qty *order.price}</td>
                <td style={{color:order.mode==='BUY'?"green":"red"}}>{order.mode}</td>
          
              </tr>
            );
          })}
        </table>
      </div>
<MultiAxisChart data={data}/>

    </>
  );


  // return (
  //   <div className="orders" >
  //     <div className="no-orders">
  //       <p>You haven't placed any orders today{(allOrders)}</p>

  //       <Link to={"http://localhost:3002/newOrder"} className="btn">
  //         Get started
  //       </Link>
  //     </div>
  //   </div>
  // );





};

export default Orders;