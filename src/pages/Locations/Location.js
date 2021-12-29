import React, { useState, useEffect } from "react";
import LocationCard from "./components/LocationCard";
import Grid from "@mui/material/Grid";
import MyPagination from "../../UI/Pagination";
import Search from "../../UI/Search";
import FilterType from "./components/FilterType";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import FilterDimension from "./components/FilterDimension";

const Location = () => {
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [type, updateType] = useState("");
  let [dimension, updateDimension] = useState("");
  let [fetchedData, updateFetchedData] = useState([]);
  let api = `https://rickandmortyapi.com/api/location/?page=${pageNumber}&name=${search}&type=${type}&dimension=${dimension}`;
  let { info, results } = fetchedData;

  let clear = () => {
    updateType("");
    updateDimension("");
    setPageNumber(1);
  };

  const useStyles = makeStyles((theme) => ({
    clearButton: {
      cursor: "pointer",
    },
  }));
  const classes = useStyles();

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <Grid container spacing={2} justifyContent="center" sx={{ mt: "60px" }}>
      <Grid
        item
        md={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Search setSearch={setSearch} />
      </Grid>
      <Grid
        item
        md={3}
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyItems: "center",
        }}
      >
        <Typography sx={{ textAlign: "center" }} variant="h6">
          Filters
        </Typography>
        <Box>
          <Typography
            sx={{
              textAlign: "center",
              textDecorationLine: "underline",
              color: "#1976D2",
            }}
            onClick={clear}
            className={classes.clearButton}
          >
            Clear filters{" "}
          </Typography>
        </Box>
        <FilterType
          updateType={updateType}
          type={type}
          setPageNumber={setPageNumber}
          updateDimension={updateDimension}
        />
        <FilterDimension
          sx={{
            display: "flex",
            justifyContent: "center",
            justifyItems: "center",
          }}
          dimension={dimension}
          updateDimension={updateDimension}
          setPageNumber={setPageNumber}
          updateType={updateType}
        />
      </Grid>

      <Grid container item md={9} justifyContent="center">
        <LocationCard results={results} />
      </Grid>

      <Grid item md={12}>
        <MyPagination info={info} setPageNumber={setPageNumber} />
      </Grid>
    </Grid>
  );
};

export default Location;
