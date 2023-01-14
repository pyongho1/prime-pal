import { Pal } from "../models/pal.js";

function index(req, res) {
  Pal.find({})
    .then((pal) => {
      res.render("pals/index", {
        title: "Pal",
        pal,
      });
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/");
    });
}

function newPal(req, res) {
  res.render("pals/new", {
    title: "Add Post",
  });
}

function create(req, res) {
  Pal.create(req.body)
    .then((pal) => {
      res.redirect("/pals/new");
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/pals/new");
    });
}

export { index, newPal as new, create };
