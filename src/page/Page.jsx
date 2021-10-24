import React, { useState, useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";
import "./page.scss";
import Button from '@material-ui/core/Button';
import { ButtonGroup } from "@material-ui/core";
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckBox from '@material-ui/core/CheckBox';
import { FormControlLabel } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';

import { makeStyles, ThemeProvider, createTheme } from "@material-ui/core/styles";
import { orange, green } from "@material-ui/core/colors";
import 'fontsource-roboto';
import { Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { AppBar, Toolbar, IconButton} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
    border: 0,
    borderRadius: 15,
    color: 'white',
    padding: '5px 30px',
  }
})

const theme = createTheme({
  typography: {
    h2: {
      fontSize: "3rem",
      marginBottom: "1rem",
    },
  },
  palette: {
    primary: {
      main: orange[400],
    },
  secondary: {
    main: green[400],
  }

  }
});

const ButtonStyled = () => {
  const classes = useStyles();
  return (<Button className={classes.root}>TEST</Button>)
}

const CheckBoxExample = () => {

  const [checked, setChecked] = useState(true);

  return (
    <FormControlLabel
    control={<CheckBox 
      checked={checked}
      onChange={() => setChecked(!checked)}
      color="primary"
      inputProps={{ 'aria-label': 'primary checkbox' }}
      />}
      label="Checkbox"
    />    
  );
}


export const Page = () => {
  useEffect(() => {
    aos.init();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs">
        <div style={{marginTop:"10rem"}}>
          <AppBar>
            <Toolbar>
              <IconButton>
                <MenuIcon />
                </IconButton>
                <Typography>
                  MUI Themeing
                </Typography>
                <Button>Login</Button>
              </Toolbar> 
          </AppBar>
        <Typography variant="h2" component="div">Welcome to my Blog</Typography>
        <Typography variant="subtitle1">Get to Know Me</Typography>
          <div className="grid">
            
            <ButtonGroup>
              <Button href="/" startIcon={<SaveIcon />} size="large" variant="contained" color="primary">save</Button>
              <Button href="/" startIcon={<DeleteIcon />} size="large" variant="contained" color="secondary">delete</Button>
            </ButtonGroup>
          </div>

          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={3} sm={6} lg={12}>
              <Paper style={{ height: 75, width: '100%', }} />
            </Grid>
            <Grid item xs={3} sm={6} lg={12}>
              <Paper style={{ height: 75, width: '100%', }} />
            </Grid>
            <Grid item xs={3} sm={6} lg={12}>
              <Paper style={{ height: 75, width: '100%', }} />
            </Grid>
          </Grid>


          <div className="grid">
            <ButtonStyled />
              <TextField 
              variant="outlined"
              margin="normal"
              required
              id="email"
              label="Email Address"
              name="email"
              placeholder="test@test.com"
              autoComplete="email"
              color="secondary"
              />
          </div>
          <div className="grid">
            <CheckBoxExample />
          </div>
          <div className="grid">
            <div
              data-aos="fade-up-right"
              data-aos-anchor-placement="top-center"
              data-aos-duration="2000"
              className="box"
            >
            </div>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              data-aos-duration="2000"
              className="box"
            >
            </div>
            <div
              data-aos="fade-up-left"
              data-aos-anchor-placement="top-center"
              data-aos-duration="2000"
              className="box"
            >
            </div>
          </div>
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default Page;
