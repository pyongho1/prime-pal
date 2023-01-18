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

function create(req, res) {
  req.body.owner = req.user.profile._id;
  req.body.availability = !!req.body.availability;
  if (req.body.availDate === "") delete req.body.availDate;
  if (req.body.availability === ) delete req.body.availability;
  Availabilty.create(req.body)
    .then((avail) => {
      res.redirect("/availabilities");
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/");
    });
}

export { index, create };