import config from "config";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

const googleClientId = config.get("google.clientID");
const googleClientSecret = config.get("google.clientSecret");
const done = () => {
  console.log("Done");
};

passport.serializeUser((user, done) => {
  console.log("Serialize User");
  // done(null, user.id);
});

passport.deserializeUser((id, done) => {
  console.log("Deserialize User");
  // User.findBtID(id).then(err)=>{
  //   done(err, user);
  // }
});

passport.use(
  "google",
  new GoogleStrategy(
    { clientID: googleClientId, clientSecret: googleClientSecret, callbackURL: "/auth/google/redirect" },
    (accessToken, refreshToken, profile, done) => {
      console.log({ accessToken, refreshToken, profile, done });
      // call done when done()
      // create a new user or find the existing one. with googleID returned from google
    },
  ),
);
export default done;
