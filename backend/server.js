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
  tenancylength: Number,
  bond: Number,
  smoking: Boolean,
  googlemap: String,
  image1: String,
  image2: String,
  image3: String,
  image4: String,
  image5: String,
  listingID: Number,
});

const Listing = mongoose.model("Listing", listingSchema, "Properties for rent");

// Test

app.get("/", (req, res) => {
  res.send("Hello from Express server!");
});

// get all listings by ID

app.get("/api/listings", async (req, res) => {
  const page = parseInt(req.query.page) || 1; // By default, start from page 1
  const limit = parseInt(req.query.limit) || 6; // 6 listings per page by default, or whatever you prefer

  const skip = (page - 1) * limit;

  try {
    const listings = await Listing.find().skip(skip).limit(limit);
    const totalListings = await Listing.countDocuments(); // Fetching total number of listings

    res.json({
      totalPages: Math.ceil(totalListings / limit),
      currentPage: page,
      listings
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching listings");
  }
});

// get listings by ID for properties for rent

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
