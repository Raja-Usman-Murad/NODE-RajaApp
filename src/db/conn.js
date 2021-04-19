const mongoose = require("mongoose");
mongoose

  .connect(
    "mongodb+srv://usman:abc123@%23@cluster0.vrxgw.mongodb.net/mernstack?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => {
    console.log("connection with database is successfull");
  })
  .catch((e) => {
    console.log("connection with database is not connected", e);
  });
