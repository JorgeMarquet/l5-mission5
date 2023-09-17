import React from "react";

export default function ListingDetailsRight() {
  return (
    <div>
      <h1>Interested?</h1>
      <h1>Contact us about this property</h1>
      <form>
        <label for="fname">First name:</label>
        <input type="text" id="fname" name="fname" />
        <div>
          <h1>Last name</h1>
          <input></input>
        </div>
        <div>
          <h1>Phone number</h1>
          <input></input>
        </div>
        <div>
          <h1>Email</h1>
          <input></input>
        </div>
      </form>
    </div>
  );
}
