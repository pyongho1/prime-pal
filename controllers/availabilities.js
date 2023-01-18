import { Availabilty } from "../models/availability.js";

function index(req, res) {
  // req.body.owner = req.user.profile._id;
  Availabilty.find({})
    .populate("owner")
    .then((avail) => {
      res.render("availabilities/index", {
        avail,
        title: "Availability",
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
  if (req.body.availability === "") delete req.body.availability;
  Availabilty.create(req.body)
    .then((avail) => {
      res.redirect("/availabilities");
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/");
    });
}

function deleteAvail(req, res) {
  Availabilty.findById(req.params.id)
    .then((avail) => {
      if (avail.owner.equals(req.user.profile._id)) {
        avail.delete().then(() => {
          res.redirect("/availabilities");
        });
      } else {
        throw new Error("Not Authorized");
      }
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/");
    });
}

export { index, create, deleteAvail as delete };
