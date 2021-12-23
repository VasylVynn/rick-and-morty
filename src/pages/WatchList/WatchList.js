import {
  Grid,
  Typography,
  TextField,
  FormControl,
  Button,
  Checkbox,
  Card,
  Paper,
} from "@mui/material";
import { Box, alpha } from "@mui/system";
import React, { useState, useEffect } from "react";
import { v4 } from "uuid";

function WatchList() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const newItem = () => {
    if (item.trim() !== "") {
      const newItem = {
        id: v4(),
        item: item,
        checked: false,
      };
      setItems((items) => [...items, newItem]);
      setItem("");
    } else {
      alert("Please add the episode");
    }
  };

  const deleteNode = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };
  const completeNode = (id) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return { ...item, checked: !item.checked };
        }
        return item;
      })
    );
  };

  return (
    <Grid container spacing={2} justifyContent="center" sx={{ mt: "60px" }}>
      <Grid
        item
        md={4}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <FormControl fullWidth>
          <Paper
            elevation={3}
            sx={{
              background: alpha("#D3D3D3", 0.2),
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              borderRadius: "10px",
              p: "10px",
            }}
          >
            <Typography sx={{ fontSize: 24, fontWeight: "bold", mb: "10px" }}>
              My watchlist
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "90%",
              }}
            >
              <TextField
                id="outlined-basic"
                label="Enter episode to watch"
                variant="outlined"
                value={item}
                onChange={(event) => setItem(event.target.value)}
              />
              <Button variant="outlined" onClick={newItem} sx={{ ml: "10px" }}>
                Add
              </Button>
            </Box>
            {items.map((item, index) => {
              return (
                <Card
                  key={index}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "90%",
                    p: "5px",
                    my: "5px",
                  }}
                >
                  <Checkbox
                    checked={item.checked}
                    onClick={() => completeNode(item.id)}
                  />
                  <Typography>{`${item.item}`}</Typography>
                  <Button
                    sx={{ color: "#FF0000" }}
                    onClick={() => deleteNode(item.id)}
                  >
                    X
                  </Button>
                </Card>
              );
            })}
          </Paper>
        </FormControl>
      </Grid>
    </Grid>
  );
}

export default WatchList;
