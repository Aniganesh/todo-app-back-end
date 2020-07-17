const db = require("../models");
const Task = db.tasks;

//Adding a task.
exports.create = (req, res) => {
	if (!req.query.title) {
		console.log(req);
		res.status(400).send({ message: "Title is required. The title received is: " + JSON.stringify(req.query.title) });
		return;
	}

	const task = new Task({ title: req.query.title });
	task.save(task)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send(
				{ message: err.message || "some error occurred while adding task" });
		});
}

// Return all tasks
exports.findAll = (req, res) => {

	Task.find({})
		.then(results => {
			res.send(results);
		})
		.catch(err => res.status(500).send({ message: err.message || "some error occurred" }));
}

// Delete task using id
exports.delete = (req, res) => {
	const id = req.params.id;
	if (!id) {
		res.status(400).send({ message: "Id is required to delete tasks" });
	}

	Task.findByIdAndRemove(id).then(data => {
		if (!data) {
			res.status(404).send({ message: `Cannot delete task with id=${id}. Maybe the task was never created?` });
		} else {
			res.send({ message: "Task deleted successfully" })
		}
	}).catch(err => {
		res.status(500).send({ message: err.message || "Internal Server Error" });
	})
}

// Delete all tasks from database.
exports.deleteAllTasks = (req, res) => {
	Task.deleteMany({}).then(data => {
		res.send({ message: `${data.deletedCount} tasks were deleted successfully` });
	}).catch(err => { res.status(500).send({ message: err.message || "Internal server error. No tasks were deleted" }) });
}