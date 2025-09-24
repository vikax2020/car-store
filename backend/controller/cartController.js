import cartModel from "../models/cartModel.js";

export const addToCart = async (req, res) => {
  try {
    console.log("req.user:", req.user);
    console.log("req.body:", req.body);

    const dataa = await cartModel.create({
      user: req.user._id,
      product: req.body.product,
      quantity: 1,
    });
    console.log(req.body.product , "productt ye product id hai")
    return res.json({
      status: 200,
      success: true,
      message: "item added",
      body: dataa,
    });
  } catch (error) {
    console.log("AddToCart error:", error);
  }
};


export const getCart = async (req, res) => {
  try {
    const userId = req.user._id;

    const cartData = await cartModel
      .find({ user: userId }).populate("user").populate("product");

    return res.json({
      success: true,
      msg: "Cart fetched successfully",
      status: 200,
      body: cartData,
    });
  } catch (error) {
    console.log(error, "error in getCart");
    return res.status(500).json({
      success: false,
      msg: "Something went wrong",
      status: 500,
      body: {},
    });
  }
};



export const updateCartQuantity = async (req, res) => {
  try {
    const dataa = await cartModel.findByIdAndUpdate(
      { _id: req.params.id },
      { ...req.body },
      { new: true }
    );
    return res.json({
      success: 200,
      status: true,
      message: "quantity update successfully",
      body: dataa,
    });
  } catch (error) {
    console.log(error);
  }
};


export const deleteSingleCartItem = async (req, res) => {
  try {
    const dataa = await cartModel.findByIdAndDelete({ _id: req.params.id });
    return res.json({
      success: 200,
      status: true,
      message: "item delete successfully",
      body: {},
    });
  } catch (error) {}
};

export const deleteAllItems = async (req, res) => {
  try {
    const dataa = await cartModel.deleteMany({ _id: req.params.id });
    return res.json({
      success: 200,
      status: true, 
      message: "all delete",
      body: {},
    });
  } catch (error) {}
};
