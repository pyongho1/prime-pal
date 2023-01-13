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

export { index };
