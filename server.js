const app = require("./app");

const server = app.listen(process.env.MONGODB_URI, function() {
  console.log(`Listening on port ${server.address().port}...`);
});

if (process.env.NODE_ENV !== "production") {
  require("dotenv").load();
}