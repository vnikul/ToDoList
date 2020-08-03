const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
var items = [];
let workItems = [];

app.get("/", function (req, res) {
	var today = new Date();

	res.render("list", {
		listTitle: today.toLocaleDateString("en-GB", {
			weekday: "long",
			day: "numeric",
			month: "long",
		}),
		newListItems: items,
	});
});

app.post("/", function (req, res) {

	
	console.log(req.body);
	if (req.body.postButton === "work") {
		workItems.push(req.body.newItem);
		res.redirect("/work");
	} else {
		items.push(req.body.newItem);
		res.redirect("/");
	}
	


});

app.get("/work", function(req, res){
	res.render("list", {listTitle:"work", newListItems: workItems});

});
app.post("/work", function(req, res){


});
app.listen(3000, function () {
	console.log("server running on port 3000");
});
