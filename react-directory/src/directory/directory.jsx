import { useState } from "react";
import { TextField, Button, GlobalStyles, Typography, Modal } from "@mui/material";
import CardGrid from "./card-grid";
import Grid from "@mui/material/Grid2";
import AddIcon from "@mui/icons-material/Add";
import AddModalBody from "./add-modal";

function Directory() {
  const [inputText, setInputText] = useState("");
  const [open, setOpen] = useState(false);
  const addHandle = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let inputHandler = (e) => {
    setInputText(e.target.value.toLowerCase());
  };

  return (
    <div>
      <GlobalStyles
        styles={{
          svg: { color: "dimgray" },
          button: {color: "dimgray"},
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
        <Grid size={{ xs: 1, sm: 1, md: 2 }}>
          <Button
            variant="outlined"
            onClick={addHandle}
          >
            <AddIcon/>
            <Typography variant="body1">Add Employee</Typography>
          </Button>
        </Grid>

        <Grid size={{ xs: 1, sm: 2, md: 8 }}>
          <Typography variant="h3" component="h1">
            Searchable Employee Directory
          </Typography>
        </Grid>

        <Grid size={{ xs: 1, sm: 1, md: 2 }}>
          <TextField
            id="outlined-basic"
            label="Name or Department"
            variant="outlined"
            onChange={inputHandler}
          />
        </Grid>
      </Grid>

      <CardGrid input={inputText} />
      <Modal open={open} onClose={handleClose}>
        <AddModalBody />
      </Modal>
    </div>
  );
}

export default Directory;
