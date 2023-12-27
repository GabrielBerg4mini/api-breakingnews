import mongoose from "mongoose"

const connectDatabase = () => {
  console.log("Wait connecting to the database")

  mongoose
    .connect(
      "mongodb+srv://gabrielbergamini:licomemo12@cluster0.ms8ibdp.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => console.log("MongoDB Atlas Connected"))
    .catch((error) => console.log(error))
}

export default connectDatabase
