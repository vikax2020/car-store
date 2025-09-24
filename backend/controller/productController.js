import productModel from "../models/productModel.js";
import imageUploader from "../Helper/imageUploader.js";
import Token from "../Token/TokenGen.js";


export const createProduct = async (req, res) => {
  try {
    console.log(req.files, "product files");

    if (req.files?.image?.name) {
      req.body.image = imageUploader(req.files.image, "productImages");
    }

    const product = new productModel(req.body);
    console.log(product, "product");

    await product.save();

    const tokenCall = await Token(product._id);
    product.token = tokenCall.tokenGen;
    await product.save();

    return res.json({
      success: true,
      status: 200,
      message: "Product add successfully",
      body: product
    });

  } catch (error) {
    console.log(error, "createProduct error");
    return res.json({
      success: false,
      status: 400,
      message: "Failed to add product",
      body: {}
    });
  }
};


// get product

export const getProducts = async (req, res) => {
  try {
    const products = await productModel.find();

    const allProducts = products.map((p)=>({
       ...p.toObject(),
       image:`http://localhost:4567/Images/productImages/${p?.image|| "p.image"}`,

    }));


    return res.json({
        success: true,
          status: 200,
          message: "get all product",
          body:allProducts
    })
  } catch (error) {
    return res.json({
          success: false,
          status: 400,
          message: "failed",
          body:{}
    })
  }
};








































