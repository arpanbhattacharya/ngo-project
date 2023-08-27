const express = require("express");
const event = express.Router();
const mongo_event = require("../model/mongo_data");
const fs = require("fs");

// event.get("/hello",(req,res)=>{
//     res.send("hello")
// })

event.post("/add", async (req, res) => {
  console.log(req.body);
  let img = req.files.image;
  img.mv("./uploads/" + img.name, async (err) => {
    if (err) {
      throw err;
    } else {
      eventObject = {
        name: req.body.name,
        venue: req.body.venue,
        date: req.body.date,
        image: img.name,
        desc: req.body.desc,
      };

      await mongo_event.create(eventObject);
    }
    res.json({msg:"done"});
  });
});

event.get("/sel", async (req, res) => {
  let showData = await mongo_event.find();
  res.json(showData);
});

event.post("/del", async (req, res) => {
  let findEvent = await mongo_event.findById(req.body.id);
  if (findEvent) {
    await fs.unlinkSync("./uploads/" + findEvent.image);
  }

  await mongo_event.findByIdAndDelete(req.body.id);
});

event.post("/edit", async (req, res) => {
  var find = await mongo_event.findById(req.body.id);
  res.json(find);
});

event.post("/update", async (req, res) => {
  console.log(req.body);
  if (req.files != null) {
    let img = req.files.image;
    img.mv("./uploads/" + img.name, async (err) => {
      if (err) {
        throw err;
      } else {
        eventObject = {
          name: req.body.name,
          venue: req.body.venue,
          date: req.body.date,
          image: img.name,
          desc: req.body.desc,
        };

        await mongo_event.findByIdAndUpdate(req.body.id, eventObject);
      }
    });
    res.json({ msg: "Edited" });
  } else {
    eventObject = {
      name: req.body.name,
      venue: req.body.venue,
      date: req.body.date,
      desc: req.body.desc,
    };

    await mongo_event.findByIdAndUpdate(req.body.id, eventObject);
    res.json({ msg: "Edited" });
  }
});

module.exports = event;
