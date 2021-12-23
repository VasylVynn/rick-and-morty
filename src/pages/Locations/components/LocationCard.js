import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";

function LocationCard({ results }) {
  let display;

  if (results) {
    display = results.map((x) => {
      let { id, name, type, dimension } = x;
      return (
        <Grid key={id} item md={3} xs={8}>
          <Card sx={{ maxWidth: "250px", mb: "10px", height: "200px" }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Location {id}
              </Typography>
              <Typography variant="h5" component="div">
                {name}
              </Typography>
              <Typography variant="body1">Type: {type}</Typography>
              <Typography variant="body2">Dimension: {dimension}</Typography>
            </CardContent>
          </Card>
        </Grid>
      );
    });
  } else {
    display = "No Characters Found :(";
  }
  return <>{display}</>;
}

export default LocationCard;
