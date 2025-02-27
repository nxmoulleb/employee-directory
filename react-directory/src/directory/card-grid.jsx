import employees from "./database/data.json";
import Grid from "@mui/material/Grid2";
import { CardContent, CardMedia, Card, Typography } from "@mui/material";

function pickOutline(years) {
  const junior = { border: "2px solid orangered" };
  const middle = { border: "2px solid gray" };
  const senior = { border: "2px solid goldenrod" };

  if (years <= 1) {
    return junior;
  } else if (years >= 5) {
    return senior;
  } else {
    return middle;
  }
}

function CardGrid({input}) {
  const filtered = employees.filter((item) => {
    if (input == "") {
      return item;
    } else {
      return (
        item.name.toLowerCase().includes(input) ||
        item.department.toLowerCase().includes(input)
      );
    }
  });

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 1, sm: 4, md: 6, lg: 12, xl: 15 }}
      sx={{ padding: "2rem", paddingLeft: "15%", paddingRight: "15%" }}
    >
      {filtered.map((item, i) => (
        <Grid key={i} size={{ xs: 1, sm: 2, md: 2, lg: 3, xl: 3 }}>
          <Card
            sx={{
              ...pickOutline(item.yearsAtCompany),
              transition: "all .25s ease",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "5px 5px 0 rgba(0, 0, 0, .5)",
              },
            }}
          >
            <CardMedia
              sx={{ height: 200 }}
              component="img"
              image={item.profilePicture}
              title={item.name + " Headshot"}
            />
            <CardContent sx={{ backgroundColor: "white" }}>
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
