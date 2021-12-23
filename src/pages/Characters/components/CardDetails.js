import {
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const CardDetails = () => {
  let history = useNavigate();
  let { id } = useParams();
  let [fetchedData, updateFetchedData] = useState([]);
  let { name, image, origin, location, gender, species, status } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/${id}`;
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);
  return (
    <Grid container spacing={2} sx={{ mt: "100px" }}>
      <Grid item md={1}>
        <Button
          sx={{ ml: "20px", mb: "10px" }}
          variant="contained"
          onClick={() => history("/home")}
        >
          Go back
        </Button>
      </Grid>
      <Grid
        item
        xs={12}
        md={11}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Card sx={{ maxWidth: 350, minheight: "550px" }}>
          <CardMedia
            component="img"
            height="350"
            image={image}
            alt={name}
          ></CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="h6" color="text.primary">
              Status: {status}
            </Typography>
            <Typography variant="body1" color="text.primary">
              Gender: {gender}
            </Typography>
            <Typography variant="body1" color="text.primary">
              Location: {location?.name}
            </Typography>
            <Typography variant="body1" color="text.primary">
              Origin: {origin?.name}
            </Typography>
            <Typography variant="body2" color="text.primary">
              Species: {species}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default CardDetails;
