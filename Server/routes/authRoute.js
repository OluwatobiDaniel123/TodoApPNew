const router = require("express").Router();

const authController = require("../controllers/authsControllers");
const auth = require("../middleware/auth");

router
  .post("/register", authController.register)
  .post("/login", authController.login);

router.get("/users", authController.getAllUsers);

router.delete("/users/delete/:id", authController.deleteUser);

router.get("/users/:userId", auth, authController.getOneUser);

module.exports = router;
