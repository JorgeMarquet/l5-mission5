const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(cors());

const MONGODB_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

const listingSchema = new mongoose.Schema({
  address: String,
  price: Number,
  description: String,
  bedrooms: Number,
  bathrooms: Number,
  parking: Number,
  longterm: Boolean,
  tenancylength: Number,
  bond: Number,
  smoking: Boolean,
  latitude: String,
  longitude: String,
  image1: String,
  image2: String,
  image3: String,
  image4: String,
  image5: String,
  listingID: Number,
});

const Listing = mongoose.model("test", listingSchema, "test");

app.get("/api/listing/:Id", async (req, res) => {
  const { Id } = req.params;
  console.log("Received request for listingID:", Id);

  try {
    const listing = await Listing.findOne({ listingID: parseInt(Id) });

    console.log("Listing data:", listing);

    if (!listing) {
      return res.status(404).json({ message: "Listing not found" });
    }

    res.json(listing);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
