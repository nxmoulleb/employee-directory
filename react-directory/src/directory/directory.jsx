import TextField from "@mui/material/TextField";
import CardGrid from "./card-grid";
import Grid from "@mui/material/Grid2";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

function Directory() {
  return (
    <div>
      <Grid
        container
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: 'white',
          padding: '0 2rem 0 2rem'
        }}
      >
        <Grid size={2}>
            <Button><AddIcon/></Button>
        </Grid>
        <Grid size={8}>
          <h1>Searchable Employee Directory</h1>
        </Grid>
        <Grid size={2}>
          <TextField
            id="outlined-basic"
            label="Name or Department"
            variant="outlined"
          />
        </Grid>
      </Grid>
      <CardGrid/>
    </div>
  );
}

export default Directory;
