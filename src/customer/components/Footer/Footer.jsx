import Button from "@mui/material/Button";
import { Grid, Link, Typography } from "@mui/material";
import React from "react";
const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5 " variant="h6">
            Company
          </Typography>
          <div className="flex flex-col">
            <Button className="pb-5 " variant='h6 ,contained"'>
              About
            </Button>
            <Button className="pb-5 " variant='h6 ,contained"'>
              Blog
            </Button>
            <Button className="pb-5 " variant='h6 ,contained"'>
              press
            </Button>
            <Button className="pb-5 " variant='h6 ,contained"'>
              Jobs
            </Button>
            <Button className="pb-5 " variant='h6 ,contained"'>
              Partners
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5 " variant="h6">
            Solutions
          </Typography>
          <div className="flex flex-col">
            <Button className="pb-5 " variant='h6 ,contained"'>
              Marketing
            </Button>
            <Button className="pb-5 " variant='h6 ,contained"'>
              Analytics
            </Button>
            <Button className="pb-5 " variant='h6 ,contained"'>
              Comerce
            </Button>
            <Button className="pb-5 " variant='h6 ,contained"'>
              Insights
            </Button>
            <Button className="pb-5 " variant='h6 ,contained"'>
              Supports
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5 " variant="h6">
            Documentation
          </Typography>
          <div className="flex flex-col">
            <Button className="pb-5 " variant='h6 ,contained"'>
              Guides
            </Button>
            <Button className="pb-5 " variant='h6 ,contained"'>
              API Status
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5 " variant="h6">
            Legal
          </Typography>
          <div className="flex flex-col">
            <Button className="pb-5 " variant='h6 ,contained"'>
              Claim
            </Button>
            <Button className="pb-5 " variant='h6 ,contained"'>
              Privacy
            </Button>
            <Button className="pb-5 " variant='h6 ,contained"'>
              Terms
            </Button>
          </div>
        </Grid>
      </Grid>
      <Grid className="pt-20 bg-black text-white" item xs={12}>
        <Typography variant="body2" component="p" align="center">
          &copy; 2023 My Company. All rights reserved.
        </Typography>
        <Typography variant="body2" component="p" align="center">
          Made with love by Me.
        </Typography>
        <Typography variant="body2" component="p" align="center">
          Icons made by{" "}
          <Link
            href="https://www.freepik.com"
            color="inherit"
            underline="always"
          >
            Freepik
          </Link>{" "}
          from{" "}
          <Link
            href="https://www.flaticon.com/"
            color="inherit"
            underline="always"
          >
            www.flaticon.com
          </Link>
        </Typography>
      </Grid>
    </div>
  );
};

export default Footer;
