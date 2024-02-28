import useStyles from "./Contact.style";

const Contact = () => {
  const classes = useStyles();
  return (
    <div>
      <h1>Contact</h1>
      <h2 className={classes.myH2}>Hi</h2>
      <h2 className={classes.myH2}>Please Contact Us</h2>
      <h2 className={classes.anotherH2}>This is an example of CSS in JS</h2>
      <h2>Or JSS</h2>
    </div>
  );
};

export default Contact;
