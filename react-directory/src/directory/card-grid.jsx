import * as React from "react";
import data from "./database/data.json";
import Grid from "@mui/material/Grid2";
import { CardContent, CardMedia, Card } from "@mui/material";
import Typography from "@mui/material/Typography";

function CardGrid() {
    const junior = { border: '2px solid red' }
    const middle = { border: '2px solid gray' }
    const senior = { border: '2px solid gold' }

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 2, sm: 8, md: 12 }}
    >
      {data.map((item, i) => (
        <Grid key={i} size={{ xs: 2, sm: 4, md: 4 }}>
          <Card variant="outlined" sx={(item.yearsAtCompany <= 1) ? junior : ((item.yearsAtCompany >= 5) ? senior : middle)}>
            <CardMedia image={item.profilePicture} title={item.name} />
            <CardContent>
              <Typography variant="h5">{item.name}</Typography>
              <Typography variant="subtitle1">{item.role}</Typography>
              <Typography variant="subtitle1">{item.department}</Typography>
              <Typography variant="body2"> {item.email}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default CardGrid;
