const express        = require("express"),
      app            = express(),
      bodyParser     = require("body-parser"),
      mongoose       = require("mongoose"),
      Campground     = require("./models/campground"),
      Comment        = require("./models/comment"),
      seedDB         = require("./seeds"),
      passport       = require("passport"),
      localStrategy  = require("passport-local"),
      methodOverride = require("method-override",)
      User           = require("./models/user")

const commentRoutes    = require("./routes/comments"),
      campgroundRoutes = require("./routes/campgrounds"),
      indexRoutes      = require("./routes/index")

mongoose.connect("mongodb://localhost:27017/yelp_camp", {useNewUrlParser: true, useUnifiedTopology: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/public`));
app.use(methodOverride("_method"));
// Commenting out temporarily.
seedDB();

// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "I like to eat tacos and nachos late at night when no one is watching.",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    next();
});

// Routes
app.use(indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);

// Listener
const port = 3000;
app.listen(3000, () => {
    console.log(`We're camped out at port ${port}.`);
});
