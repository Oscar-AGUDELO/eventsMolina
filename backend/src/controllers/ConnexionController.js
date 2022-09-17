class ConnexionController {
  static async login(req, res) {
    try {
      const data = req.body;
      if (
        data.name === "Admin" &&
        data.lastname === "ADMIN" &&
        data.email === "admin@admin.com" &&
        data.phone === "0123456789Admin"
      ) {
        res.status(200).json({
          status: "success",
          message: "User is logged",
          userAdmin07: "AdminIsHere",
        });
      }
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
    return null;
  }
}

module.exports = ConnexionController;
