const mongoose = require("mongoose");

const MONGODB_URI = "mongodb+srv://byrontosh:sistemas@cluster0.6e8zntc.mongodb.net/test";

connection = async () => {
	try {
		await mongoose.connect(MONGODB_URI, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
		});
		console.log("Database is connected");
	} catch (error) {
		console.log(error);
	}
};

module.exports = connection;



const {DBUSER,DBPASSWORD,DBNAME} = process.env

