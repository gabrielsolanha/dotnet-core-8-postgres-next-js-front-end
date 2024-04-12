import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import PriceCheckOutlinedIcon from "@mui/icons-material/PriceCheckOutlined";
import { Card, CardActionArea, CardContent } from "@mui/material";
import "./GridCardHome.css";

export default function GridCardHome() {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      direction="column"
    >
      <div className="row m-5">
        <div className="col-md-6 mb-3">
          <Card sx={{ width: 345 }}>
            <CardActionArea>
              <Grid item xs={100} className="icon-card-grid-1">
                <DashboardIcon className="icon-card" />
              </Grid>

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Dashboard
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="col-md-6 mb-3">
          <Card sx={{ width: 345 }}>
            <CardActionArea>
              <Grid item xs={100} className="icon-card-grid-2">
                <ManageSearchIcon className="icon-card" />
              </Grid>

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Sobre nós
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
    </Grid>
  );
}
