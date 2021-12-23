import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Filters from "./components/filters/filters";
import Cards from "./components/cards";
import MyPagination from "../../UI/Pagination";
import Search from "../../UI/Search";

function Characters() {
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [status, updateStatus] = useState("");
  let [gender, updateGender] = useState("");
  let [species, updateSpecies] = useState("");
  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div>
      <Grid container spacing={2} justifyContent="center" sx={{ mt: "55px" }}>
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
        <Grid item md={3}>
          <Filters
            sx={{ display: "flex", flexDirection: "column" }}
            pageNumber={pageNumber}
            updateStatus={updateStatus}
            updateGender={updateGender}
            updateSpecies={updateSpecies}
            setPageNumber={setPageNumber}
          />
        </Grid>

        <Grid
          sx={{ pr: "10px" }}
          container
          item
          md={9}
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Cards page="/home" results={results} />
        </Grid>

        <Grid item md={12}>
          <MyPagination info={info} setPageNumber={setPageNumber} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Characters;
