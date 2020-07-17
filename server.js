const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./app/models');

const app = express();

const corsOptions = {
	origin: "http://localhost:8080",
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

db.mongoose.connect(
	db.url, {
	useNewUrlParser: true,
	useUnifiedTopology: true
}
).then(
	() => {
		console.log("Connected to MongoDB");
	}
).catch(err => {
	console.log("Cannot connect to database", err);
	process.exit();
});

app.get("/", (req, res) => {
	res.json({ message: "Todo app" });
});

const PORT = process.env.PORT || 8080;

require("./app/routes/todo.routes")(app);

app.listen(PORT, () => console.log("Todo app listening on port " + PORT));