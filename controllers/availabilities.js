import { Availabilty } from "../models/availability.js";

function index(req, res) {
  Availabilty.find({})
    .then((avail) => {
      res.render("availabilities/index", {
        avail,
        title: "Availabilty",
      });
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/");
    });
}

export { index };
