// import React, { useEffect, useState } from "react";
// import API from "./BackendRouting";
// import axios from "axios";
// import cookie from "js-cookie";
// import { toast } from "react-toastify";

// const ProductData = () => {
//   const [data, setData] = useState([]);
//   const getCookie = cookie.get("userInfo");
//   const userToken = getCookie ? JSON.parse(getCookie).token : null;
//   // Fetch products
//   const getData = async () => {
//     try {
//       const res = await axios.get(API.GET_PRODUCTS.url, {
//         headers: { Authorization: `Bearer ${userToken}` },
//       });

//       setData(res.data.body);
//       console.log(res.data.body, "ressssssssssss data");
//     } catch (error) {
//       console.log(error, "error fetching products");
//       toast.error("Failed to fetch products!");
//     }
//   };

//   // Add to cart
//   const addToCart = async (id) => {
//     try {
//       const res = await axios.post(
//         API.ADD_TO_CART.url,
//         { product: id },
//         {
//           headers: {
//             Authorization: `Bearer ${userToken}`,
//           },
//         }
//       );

//       console.log(res.data, "Product added to cart");
//       toast.success("Product added to cart!");
//     } catch (error) {
//       console.log(error, "error adding to cart");
//       toast.error("Failed to add product!");
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, []);



//   return (
//     <div style={{ padding: "0 10px", textAlign: "center" }}>
//       <h2>All Products</h2>
//       <div
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           justifyContent: "center",
//         }}
//       >
//         {data.map((p) => (
//           <div
//             key={p._id}
//             style={{
//               width: "14.28%",
//               boxSizing: "border-box",
//               padding: "5px",
//               margin: "0",
//             }}
//           >
//             <div className="card">
//               <img
//                 src={p.image}
//                 alt={p.product}
//                 style={{
//                   width: "100%",
//                   height: "120px",
//                   objectFit: "cover",
//                 }}
//               />
//               <div className="card-body d-flex flex-column">
//                 <h6
//                   className="card-title"
//                   style={{ fontWeight: "bold", fontSize: "16px" }}
//                 >
//                   {p.name}
//                 </h6>

//                 <p className="card-text mb-2">₹{p.price}</p>
//                 <p className="card-text mb-2">{p.description}</p>

//                 <button
//                   className="btn btn-primary btn-sm mt-auto"
//                   onClick={() => addToCart(p._id)}
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductData;


import React, { useEffect, useState } from "react";
import API from "./BackendRouting";
import axios from "axios";
import cookie from "js-cookie";
import { toast } from "react-toastify";

const ProductData = () => {
  const [data, setData] = useState([]);
  const getCookie = cookie.get("userInfo");
  const userToken = getCookie ? JSON.parse(getCookie).token : null;

  // Fetch products
  const getData = async () => {
    try {
      const res = await axios.get(API.GET_PRODUCTS.url, {
        headers: { Authorization: `Bearer ${userToken}` },
      });
      setData(res.data.body);
    } catch (error) {
      console.log(error, "error fetching products");
      toast.error("Failed to fetch products!");
    }
  };

  // Add or update item in cart
  const addToCart = async (id) => {
    try {
      // Fetch current cart
      const finditem = await axios.get(API.GET_CART.url, {
        headers: { Authorization: `Bearer ${userToken}` },
      });

      const findAndCompare = finditem.data.body.find((item) => {
       return item.product._id === id
      })
      console.log(findAndCompare,"findandcompare")

      if (!findAndCompare) {
        // Add new product to cart
        const res = await axios.post(
          API.ADD_TO_CART.url,
          { product: id },
          { headers: { Authorization: `Bearer ${userToken}` } }
        );
        console.log(res.data, "added to cart");
        toast.success("Item added successfully!");
      } else {
        // Update quantity if already exists
        const res = await axios.put(`${API.UPDATE_CART_QUANTITY.url}/${findAndCompare._id}`,
          { quantity: findAndCompare.quantity + 1 },
          { headers: { Authorization: `Bearer ${userToken}` } }
        );
        console.log(res.data, "updated cart item");
        toast.success("Item quantity updated!");
      }
    } catch (error) {
      console.log(error, "add/update cart error");
      toast.error("Failed to add/update cart item!");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={{ padding: "0 10px", textAlign: "center" }}>
      <h2>All Products</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {data.map((p) => (
          <div
            key={p._id}
            style={{
              width: "14.28%",
              boxSizing: "border-box",
              padding: "5px",
              margin: "0",
            }}
          >
            <div className="card">
              <img
                src={p.image}
                alt={p.name}
                style={{ width: "100%", height: "120px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h6
                  className="card-title"
                  style={{ fontWeight: "bold", fontSize: "16px" }}
                >
                  {p.name}
                </h6>
                <p className="card-text mb-2">₹{p.price}</p>
                <p className="card-text mb-2">{p.description}</p>
                <button
                  className="btn btn-primary btn-sm mt-auto"
                  onClick={() => addToCart(p._id)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductData;
