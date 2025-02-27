import React from "react";
import Grid from "@mui/material/Grid2";
import { CardContent, CardMedia, Card, Typography } from "@mui/material";

/**
 * Determines the border style of the card based on the number of years the employee has been at the company.
 * @param {number} years - The number of years the employee has been at the company.
 * @returns {Object} An object containing the CSS border style.
 */
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

/**
 * Filters the list of employees based on the search input and renders a grid of employee cards.
 * @param {Object} props - The component props.
 * @param {string} props.input - The search input text used to filter the employee list.
 * @returns {JSX.Element} A JSX element containing the grid of employee cards.
 */
function CardGrid({ input, employees }) {
  let filtered = {}
  if(employees.length > 0) {
  filtered = employees.filter((item) => {
    if (input == "") {
      return item;
    } else {
      return (
        item.name.toLowerCase().includes(input) ||
        item.department.toLowerCase().includes(input)
      );
    }
  });
}

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 1, sm: 4, md: 6, lg: 12, xl: 15 }}
      sx={{ padding: "2rem", paddingLeft: "15%", paddingRight: "15%" }}
    >
      {filtered.length > 0 &&
        filtered.map((item, i) => (
          <Grid key={i} size={{ xs: 1, sm: 2, md: 2, lg: 3, xl: 3 }}>
            <Card
              data-testid="employee"
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
