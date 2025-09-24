import React, { useEffect, useState } from "react";
import axios from "axios";
import API from "./BackendRouting";
import cookie from "js-cookie";
import { toast } from "react-toastify";

function Cart() {
  const [data, setData] = useState([]);

  const getCookie = cookie.get("userInfo");
  const tokenn = getCookie ? JSON.parse(getCookie) : null;

  const fetchCart = async () => {
    try {
      const response = await axios.get(`${API.GET_CART.url}`, {
        headers: { Authorization: `Bearer ${tokenn.token}` },
      });
      setData(response.data.body);
    } catch (error) {
      console.log(error, "error in fetching cart");
      toast.error("Failed to fetch cart items");
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const total = data.reduce(
    (sum, item) => sum + (item.product?.price || 0) * item.quantity,
    0
  );

  const incFunction = async (id, quant) => {
    try {
      await axios.put(
        `${API.UPDATE_CART_QUANTITY.url}/${id}`,
        { quantity: quant + 1},
        { headers: { Authorization: `Bearer ${tokenn.token}` } }
      );
      fetchCart();
    } catch (error) {
      console.log(error);
      toast.error("Failed to increase quantity");
    }
  };

  const decFunction = async (id, quant) => {
    if (quant <= 1) return; 
    try {
      await axios.put(
        `${API.UPDATE_CART_QUANTITY.url}/${id}`,
        { quantity: quant - 1 },
        { headers: { Authorization: `Bearer ${tokenn.token}` } }
      );
      fetchCart();
    } catch (error) {
      console.log(error);
      toast.error("Failed to decrease quantity");
    }
  };

  const deleteCartItem = async (id) => {
    try {
      const deleteItem = await axios.delete(
        `${API.DELETE_SINGLE_ITEM.url}/${id}`,
        { headers: { Authorization: `Bearer ${tokenn.token}` } }
      );
      if (deleteItem.data.status === 200) {
        toast.success(deleteItem.data.msg);
        fetchCart();
      } else {
        toast.error(deleteItem.data.msg);
      }
    } catch (error) {
      console.log(error, '"areee');
      toast.error("Delete cartItem error");
    }
  };

  if (!data || data.length === 0) {
    return (
      <h3 style={{ textAlign: "center", marginTop: "40px" }}>
        Your cart is empty
      </h3>
    );
  }

  return (
    <section
      className="py-5"
      style={{ background: "#F9F3EC", minHeight: "100vh" }}
    >
      <div className="container">
        <h1 className="display-5 mt-5 fw-bold mb-4 text-center">My Cart</h1>
        <div className="table-responsive mb-5">
          <table className="table table-bordered table-hover align-middle bg-white rounded-4 shadow">
            <thead className="table-primary">
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Product Name</th>
                <th>Unit Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={item?._id || index}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={
                        item?.product?.image
                          ? `http://localhost:4567/Images/productImages/${item.product.image}`
                          : "https://via.placeholder.com/80"
                      }
                      alt={item?.product?.name || "Product"}
                      style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                  </td>
                  <td>{item?.product?.name || "N/A"}</td>
                  <td>₹{item?.product?.price || 0}</td>
                  <td>{item.quantity}</td>
                  <td>₹{(item?.product?.price || 0) * item.quantity}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-success me-1"
                      onClick={() => incFunction(item._id, item.quantity)}
                    >
                      +
                    </button>
                    <button
                      className="btn btn-sm btn-warning me-1"
                      onClick={() => decFunction(item._id, item.quantity)}
                    >
                      -
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => deleteCartItem(item._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="5" className="text-end fw-bold">
                  Total
                </td>
                <td className="fw-bold">₹{total}</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Cart;
