import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import CardGrid from "./card-grid";
import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

function Directory() {
  const [inputText, setInputText] = useState("");

  let inputHandler = (e) => {
    setInputText(e.target.value.toLowerCase());
  };

  return (
    <div>
      <Grid
        container
        columns={{ xs:1,sm: 1, md: 12 }}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "white",
          padding: "0 2rem .5rem 2rem",
        }}
      >
        <Grid size={{xs:1, sm: 1, md: 2 }}>
          <Button>
            <AddIcon />
          </Button>
        </Grid>
        <Grid size={{ xs:1,sm: 2, md: 8 }}>
          <h1>Searchable Employee Directory</h1>
        </Grid>
        <Grid size={{xs:1, sm: 1, md: 2 }}>
          <TextField
            id="outlined-basic"
            label="Name or Department"
            variant="outlined"
            onChange={inputHandler}
          />
        </Grid>
      </Grid>
      <CardGrid input={inputText}/>
    </div>
  );
}

export default Directory;
