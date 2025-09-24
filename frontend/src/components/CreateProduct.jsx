import React, { useState } from "react";
import API from "./BackendRouting.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import cookie from "js-cookie";

function CreateProduct() {
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });

  const getCookie = cookie.get("userInfo");
  const tokenn = getCookie ? JSON.parse(getCookie) : null;

  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setData({ ...data, [e.target.name]: e.target.files[0] });
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("price", data.price);
      formData.append("image", data.image);

      const dataa = await axios.post(API.CREATE_PRODUCT.url, formData, {
        headers: {
          authorization: `Bearer ${tokenn.token}`,
        },
      });

      console.log(dataa, "create product response");

      setData(dataa.data.body);

      if (dataa.data.status === 200) {
        toast.success(dataa.data.message);
        navigate("/ProductData");
      } else {
        toast.error(dataa.data.message);
      }
    } catch (error) {
      console.log(error, "error creating product");
      toast.error("Something went wrong!");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3>Create Product</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Product Name</label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            name="description"
            value={data.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <label>Price</label>
          <input
            type="number"
            name="price"
            value={data.price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Image</label>
          <input
            type="file"
            name="image"
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default CreateProduct;
