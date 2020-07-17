module.exports = mongoose => {
	const schema = mongoose.Schema(
		mongoose.Schema({
			title: String
		}, { timestamps: true })
	);
	
	// Do not substitute a fat arrow function instead of function(). 
	// It will cause an error due to fat arrow functions not being objects causing this.toObject() to fail.
	schema.method("toJSON", function(){
		const {__v, _id, ...object} = this.toObject();
		object.id  = _id;
		return object;
	});

	const Task = mongoose.model("tasks", schema);
	return Task;
}