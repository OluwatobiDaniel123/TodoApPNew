const { json } = require("express");
const Todos = require("../model/TodoModel");
const { param } = require("../routes/TodoRoute");
const TodoControllers = {
  createTodo: async (req, res) => {
    try {
      const { todo } = req.body;

      const newTodo = await Todos({ todo, postedBy: req.user });

      await newTodo.save();

      return res.status(201).json({ msg: "New Todo added", newTodo });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: error });
    }
  },
  getTodos: async (req, res) => {
    try {
      const todos = await Todos.find().populate("postedBy", "-password");
      res.status(200).json({ msg: "All todos...", todos });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: error });
    }
  },

  getOneTodo: async (req, res) => {
    try {
      const { todoId } = req.params;
      const todo = await Todos.findById(todoId).populate(
        "postedBy",
        "-password"
      );

      if (!todo) return res.status(404).json({ msg: "Todo not found..." });

      await Todos.findOne(todo);
      res.status(200).json({ msg: "One todo...", todo });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: error });
    }
  },

  getMyTodos: async (req, res) => {
    try {
      const todos = await Todos.find({ postedBy: req.user._id }).populate(
        "postedBy",
        "-password"
      );
      return res.status(200).json({ msg: "My todos...", todos });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: error });
    }
  },

  deleteTodo: async (req, res) => {
    try {
      const { id } = req.params;

      const todo = await Todos.findById(id);

      if (!todo) return res.status(400).json({ msg: "Todo does not exist" });

      await Todos.findByIdAndDelete(todo);

      res.status(200).json({ msg: "Todo delete!!!" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: error });
    }
  },

  updateTodo: async (req, res) => {
    try {
      const { id } = req.params;

      const updateTodo = await Todos.findById(id);

      if (!updateTodo)
        return res.status(400).json({ msg: "Todo does not exist" });

      updateTodo.todo = req.body.todo || updateTodo.todo;
      updateTodo.isComplete = !updateTodo.isComplete;

      await updateTodo.save();

      res.status(200).json({ updateTodo });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: error });
    }
  },

  getAllProduct: async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {
      let products;

      if (qNew) {
        products = await Product.find().sort({ createdAt: -1 }).limit(1);
      } else if (qCategory) {
        products = await Product.find({
          categories: {
            $in: [qCategory],
          },
        });
      } else {
        products = await Product.find();
      }

      res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = TodoControllers;
