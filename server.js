const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
// Serve up static assets (usually on heroku)

// Send every request to the React app
// Define any API routes before this runs





if (process.env.NODE_ENV === "production") {
  console.log("This Works")
  app.use(express.static("client/build"));
  
  //app.use('/static', express.static(path.join(__dirname, '/client/build')));
}


app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});



app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
