import React from 'react';
import { useState } from "react";
import {
  TextField,
  Button,
  GlobalStyles,
  Typography,
  Modal,
} from "@mui/material";
import CardGrid from "./card-grid";
import Grid from "@mui/material/Grid2";
import AddIcon from "@mui/icons-material/Add";
import AddModalBody from "./add-modal";
import employees from "./database/data.json";

/**
 * The main component for displaying a searchable employee directory.
 * It includes a search bar, an "Add Employee" button, and a grid of employee cards.
 */
function Directory() {
  const [inputText, setInputText] = useState("");
  const [open, setOpen] = useState(false);
  const addHandle = () => setOpen(true);
  const handleClose = () => setOpen(false);

  /**
   * Updates the inputText state with the value from the search bar.
   * @param {Event} e - The event object from the TextField.
   */
  let inputHandler = (e) => {
    setInputText(e.target.value.toLowerCase());
  };

  return (
    <div>
      <GlobalStyles
        styles={{
          svg: { color: "dimgray" },
          button: { color: "dimgray" },
          h1: { color: "dimgray" },
          h5: { color: "dimgray" },
          h6: { color: "gray" },
          p: { color: "lightslategray" },
        }}
      />
      <Grid
        container
        columns={{ xs: 1, sm: 1, md: 12 }}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "white",
          padding: ".5rem 2rem .5rem 2rem",
        }}
      >
        {/* Add Employee Button */}
        <Grid size={{ xs: 1, sm: 1, md: 2 }}>
          <Button variant="outlined" onClick={addHandle}>
            <AddIcon />
            <Typography variant="body1">Add Employee</Typography>
          </Button>
        </Grid>

        {/* Title of page */}
        <Grid size={{ xs: 1, sm: 2, md: 8 }}>
          <Typography variant="h3" component="h1">
            Searchable Employee Directory
          </Typography>
        </Grid>

        {/* Search Bar*/}
        <Grid size={{ xs: 1, sm: 1, md: 2 }}>
          <TextField
            id="outlined-basic"
            label="Name or Department"
            variant="outlined"
            onChange={inputHandler}
          />
        </Grid>
      </Grid>

        {/* The CardGrid that displays all the employees information */}
      <CardGrid employees={employees} input={inputText} />

      {/* Add employee pop up */}
      <Modal open={open} onClose={handleClose}>
        <AddModalBody />
      </Modal>
    </div>
  );
}

export default Directory;