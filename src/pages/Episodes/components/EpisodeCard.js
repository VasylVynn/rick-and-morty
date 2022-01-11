import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";

function EpisodeCard({ results, page }) {
  let display;

  if (results) {
    display = results.map(({id, name, air_date}) => {
      return (
        <Grid key={id} item md={3} xs={8}>
          <Card sx={{ maxWidth: "300px", mb: "10px", height: "160px" }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Episode {id}
              </Typography>
              <Typography variant="h5" component="div">
                {name}
              </Typography>
              <Typography variant="body2">Air date: {air_date}</Typography>
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

export default EpisodeCard;
