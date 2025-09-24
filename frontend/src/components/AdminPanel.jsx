// AdminPanel
import React, { useState } from "react";
import cookie from "js-cookie";
import UserTable from "./userTable";
import CreateProduct from "./CreateProduct";

function AdminPanel() {
  const getCookie = cookie.get("userInfo");
  const usertokenn = getCookie ? JSON.parse(getCookie) : null;
  const [showUserTable, setShowUserTable] = useState(false);
  const [showCreateProduct, setShowCreateProduct] = useState(false); 

  if (!usertokenn || usertokenn.role !== "admin") {
    return (
      <div className="container my-5">
        <div className="alert alert-danger text-center">
          Access Denied: Admins Only
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5 " style={{backgroundColor: ""}}>
      <h1 className="text mb-4">Admin Panel</h1>
      <h1 className="text mb-4">Welcome, {usertokenn.name}</h1>

      <div className="row">
        {/* Left vertical menu */}
        <div className="col-md-3 mb-3">
          <div className="list-group">
            <button className="list-group-item list-group-item-action"
            onClick={()=>setShowCreateProduct(!showCreateProduct)}>
              {showCreateProduct? "hide create product":"crete product"}
            
            </button>
            <button className="list-group-item list-group-item-action">
              Manage Users
            </button>
            <button className="list-group-item list-group-item-action">
              See Orders
            </button>
            <button
              className="list-group-item list-group-item-primary"
              onClick={() => setShowUserTable(!showUserTable)}
            >
              {showUserTable ? "Hide Users" : "Show Users"}
            </button>
          </div>
        </div>

        {/* Right content area */}
        <div className="col-md-9">
          {showUserTable && (
            <div className="table-responsive border p-3 shadow-sm">
              <UserTable />
            </div>
          )}

          {showCreateProduct && (
        <div className="p-3 border shadow-sm">
       <CreateProduct />
  </div>
)}
 


        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
