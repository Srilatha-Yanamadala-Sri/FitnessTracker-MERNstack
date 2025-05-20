import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import axios from "axios";

const backgroundImageUrl =
  "https://img.freepik.com/free-vector/company-receptionist-looking-after-customer-background_23-2147988442.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "100vh",
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  button: {
    marginTop: theme.spacing(3),
  },
  message: {
    marginTop: theme.spacing(2),
  },
  errorText: {
    color: theme.palette.error.main,
  },
  successText: {
    color: theme.palette.success.main,
  },
}));

export default function User({ onUserAdded }) {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    setIsError(false);

    axios.get("http://localhost:5000/users")
      .then(res => {
        const userExists = res.data.some(user => user.username === username);
        if (userExists) {
          setIsError(true);
          setMessage("Username already exists. Please choose a different one.");
          return null; // stop here
        }
        return axios.post("http://localhost:5000/users/add", { username });
      })
      .then(res => {
        if (res) {
          setIsError(false);
          setMessage("User added successfully!");
          setUsername("");
          if (onUserAdded) onUserAdded();
        }
      })
      .catch(err => {
        setIsError(true);
        setMessage("Error adding user.");
        console.error(err);
      });
  };

  function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://material-ui.com/">
          DriveFit
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  return (
    <div className={classes.root}>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h6" gutterBottom>
            Create User
          </Typography>
          <form onSubmit={onSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  required
                  id="username"
                  name="username"
                  label="Enter username"
                  fullWidth
                  value={username}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  type="submit"
                  color="secondary"
                  className={classes.button}
                >
                  Create User
                </Button>
              </Grid>
              {message && (
                <Grid item xs={12} className={classes.message}>
                  <Typography
                    className={isError ? classes.errorText : classes.successText}
                    variant="body1"
                  >
                    {message}
                  </Typography>
                </Grid>
              )}
            </Grid>
          </form>
        </Paper>
        <Copyright />
      </main>
    </div>
  );
}
