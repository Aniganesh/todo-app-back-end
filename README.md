# todo-app-back-end
The back end for the Todo App.

Exposes the following api end-points:

- GET: api/tasks/create/?title=task-title - to create a task. 
- GET: api/tasks/ - returns all the tasks.
- DELETE: api/tasks/deleteAll - deletes all tasks
- DELETE: api/tasks/:id - deletes task by id. The id provided needs to be valid.
