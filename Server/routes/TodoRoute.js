const router = require("express").Router();

const TodoControllers = require("../controllers/TodoControllers");

const auth = require("../middleware/auth");

router.post("/create", auth, TodoControllers.createTodo);

// router.get("/", TodoControllers.getTodos);

router.get("/", TodoControllers.getAllProduct);

router.get("/one-todo/:todoId", TodoControllers.getOneTodo);

router.get("/my-todos", auth, TodoControllers.getMyTodos);

router.delete("/delete/:id", auth, TodoControllers.deleteTodo);

router.put("/update/:id", auth, TodoControllers.updateTodo);

module.exports = router;
