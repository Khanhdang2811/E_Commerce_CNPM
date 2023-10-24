import Button from "@mui/material/Button";
import { Grid, Link, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      {/* Phần chân trang */}
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Company
          </Typography>
          <div className="flex flex-col">
            {/* Các nút liên quan đến thông tin về công ty */}
            <Button className="pb-5" variant="contained,h6,h6">
              About
            </Button>
            <Button className="pb-5" variant="contained,h6">
              Blog
            </Button>
            <Button className="pb-5" variant="contained,h6">
              Press
            </Button>
            <Button className="pb-5" variant="contained,h6">
              Jobs
            </Button>
            <Button className="pb-5" variant="contained,h6">
              Partners
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Solutions
          </Typography>
          <div className="flex flex-col">
            {/* Các nút liên quan đến thông tin về giải pháp */}
            <Button className="pb-5" variant="contained,h6">
              Marketing
            </Button>
            <Button className="pb-5" variant="contained,h6">
              Analytics
            </Button>
            <Button className="pb-5" variant="contained,h6">
              Commerce
            </Button>
            <Button className="pb-5" variant="contained,h6">
              Insights
            </Button>
            <Button className="pb-5" variant="contained,h6">
              Support
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Documentation
          </Typography>
          <div className="flex flex-col">
            {/* Các nút liên quan đến tài liệu hướng dẫn */}
            <Button className="pb-5" variant="contained,h6">
              Guides
            </Button>
            <Button className="pb-5" variant="contained,h6">
              API Status
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Legal
          </Typography>
          <div className="flex flex-col">
            {/* Các nút liên quan đến thông tin pháp lý */}
            <Button className="pb-5" variant="contained,h6">
              Claim
            </Button>
            <Button className="pb-5" variant="contained,h6">
              Privacy
            </Button>
            <Button className="pb-5" variant="contained,h6">
              Terms
            </Button>
          </div>
        </Grid>
      </Grid>
      <Grid className="pt-20 bg-black text-white" item xs={12}>
        {/* Thông tin bản quyền và liên kết */}
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
