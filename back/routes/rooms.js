const express = require("express");
const router = express.Router();
const Room = require("../model/room");
// TODO: add rest of the necassary imports

module.exports = router;

// temporary rooms
let rooms = [];

//Get all the rooms
router.get("/all", (req, res) => {
  // TODO: you have to check the database to only return the rooms that the user is in
  res.send(rooms);
});

router.post("/create", async (req, res) => {
  let name = req.body.roomName;

  const existingRoom = await Room.findOne({ name: name });
  if (existingRoom) {
    return res.json({ message: "Room exists", status: false });
  } else if (!name) {
    return res.json({ message: "Invalid room name", status: false });
  } else {
    rooms.push(name);
    return res.json({ message: `${name} room created`, status: true });
  }
});

router.post("/join", (req, res) => {
  // TODO: write necassary codes to join a new room
});

router.delete("/leave", (req, res) => {
  // TODO: write necassary codes to delete a room
  // when doing this, delete the specified room from "rooms array" for each user (found in user.js)
});
