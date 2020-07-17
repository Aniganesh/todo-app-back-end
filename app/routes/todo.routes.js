module.exports = app => {
	const tasks = require("../controllers/task.controller.js");

	const router = require("express").Router();

	router.get("/create", tasks.create);

	router.get("/", tasks.findAll);

	router.delete("/deleteAll", tasks.deleteAllTasks);
	
	router.delete("/:id", tasks.delete);

	app.use("/api/tasks", router);
}