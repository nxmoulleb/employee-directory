import TextField from "@mui/material/TextField";
import CardGrid from "./card-grid";

function Directory() {
  return (
    <div>
      <h1>Searchable Employee Directory</h1>
      <TextField
        id="outlined-basic"
        label="Name or Department"
        variant="outlined"
      />
      <CardGrid/>
    </div>
  );
}

export default Directory;
