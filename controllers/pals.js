import { Pal } from "../models/pal.js";

function index(req, res) {
  Pal.find({})
    .sort({ createdAt: -1 })
    .populate("owner")
    .then((pals) => {
      res.render("pals/index", {
        title: "Show Posts",
        pals,
      });
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/");
    });
}

function newPal(req, res) {
  res.render("pals/new", {
    title: "Create Post",
  });
}

function create(req, res) {
  req.body.owner = req.user.profile._id;
  Pal.create(req.body)
    .then((pal) => {
      res.redirect("/pals");
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/pals");
    });
}

function show(req, res) {
  Pal.findById(req.params.id)
    .populate("owner")
    .then((pal) => {
      res.render("pals/show", {
        pal,
        title: "Show Post",
      });
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/pals");
    });
}

function deletePost(req, res) {
  Pal.findById(req.params.id)
    .then((pal) => {
      if (pal.owner.equals(req.user.profile._id)) {
        pal.delete().then(() => {
          res.redirect("/pals");
        });
      } else {
        throw new Error("Not authorized");
      }
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/pals");
    });
}

function edit(req, res) {
  Pal.findById(req.params.id)
    .then((pal) => {
      res.render("pals/edit", {
        pal,
        title: "Edit Post",
      });
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/pals");
    });
}

function update(req, res) {
  Pal.findById(req.params.id)
    .then((pal) => {
      if (pal.owner.equals(req.user.profile._id)) {
        pal.updateOne(req.body).then(() => {
          res.redirect(`/pals/${pal._id}`);
        });
      } else {
        throw new Error("Not authorized!");
      }
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/pals");
    });
}

function addComment(req, res) {
  Pal.findById(req.params.id)
    .then((pal) => {
      req.body.commenter = req.user.profile._id;
      pal.comments.push(req.body);
      pal
        .save()
        .then(() => {
          res.redirect(`/pals/${pal._id}`);
        })
        .catch((err) => {
          console.log(err);
          res.redirect("/pals");
        });
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/pals");
    });
}

export {
  index,
  newPal as new,
  create,
  show,
  deletePost as delete,
  edit,
  update,
  addComment,
};
