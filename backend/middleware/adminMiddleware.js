const adminMiddleware = async (req, res, next) => {
  try {

    if (!req.user) {
      return res.json({
        success: false,
        msg: "Unauthorized: user not found",
        status: 400,
        body: {},
      });
    }

    if (req.user.role !== "admin") {
      return res.json({
        success: false,
        msg: "Access denied: Admins only",
        status: 403,
        body: {},
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error, "error in adminMiddleware");
    return res.json({
      success: false,
      msg: "Something went wrong in adminMiddleware",
      status: 500,
      body: {},
    });
  }
};

export default adminMiddleware;
