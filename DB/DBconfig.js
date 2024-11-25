const { mongoose } = require("mongoose");

function DBconnect() {
  mongoose
    .connect(
      "mongodb+srv://mern:mern1234@cluster0.6cgb3.mongodb.net/mern?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => {
      console.log("DataBase is connected");
    })
    .catch((error) => {
      console.log("DataBase is not connected", error);
    });
}

module.exports = DBconnect;
