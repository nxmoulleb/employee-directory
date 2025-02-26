import { React, useState } from "react";
import data from "./database/data.json";
import Grid from "@mui/material/Grid2";
import { CardContent, CardMedia, Card } from "@mui/material";
import Typography from "@mui/material/Typography";

function CardGrid(props) {
  //  const employees = [
  //     {
  //       name: "Alice Johnson",
  //       role: "Software Engineer",
  //       department: "Engineering",
  //       email: "alice@example.com",
  //       profilePicture: "https://example.com/alice.jpg",
  //       yearsAtCompany: 3,
  //     },
  //     {
  //       name: "Bob Smith",
  //       role: "Product Manager",
  //       department: "Product",
  //       email: "bob@example.com",
  //       profilePicture: "https://example.com/bob.jpg",
  //       yearsAtCompany: 5,
  //     },
  //     {
  //       name: "Charlie Lee",
  //       role: "Designer",
  //       department: "Design",
  //       email: "charlie@example.com",
  //       profilePicture: "https://example.com/charlie.jpg",
  //       yearsAtCompany: 1,
  //     },
  //     {
  //       name: "David Wilson",
  //       role: "Data Scientist",
  //       department: "Analytics",
  //       email: "david@example.com",
  //       profilePicture: "https://example.com/david.jpg",
  //       yearsAtCompany: 4,
  //     },
  //     {
  //       name: "Eva Carter",
  //       role: "HR Specialist",
  //       department: "Human Resources",
  //       email: "eva@example.com",
  //       profilePicture: "https://example.com/eva.jpg",
  //       yearsAtCompany: 2,
  //     },
  //     {
  //       name: "Frank Thompson",
  //       role: "Marketing Coordinator",
  //       department: "Marketing",
  //       email: "frank@example.com",
  //       profilePicture: "https://example.com/frank.jpg",
  //       yearsAtCompany: 3,
  //     },
  //     {
  //       name: "Grace Davis",
  //       role: "UX Researcher",
  //       department: "Design",
  //       email: "grace@example.com",
  //       profilePicture: "https://example.com/grace.jpg",
  //       yearsAtCompany: 2,
  //     },

  //     {
  //       name: "Henry Martinez",
  //       role: "System Administrator",
  //       department: "IT",
  //       email: "henry@example.com",
  //       profilePicture: "https://example.com/henry.jpg",
  //       yearsAtCompany: 6,
  //     },
  //     {
  //       name: "Irene Taylor",
  //       role: "Business Analyst",
  //       department: "Product",
  //       email: "irene@example.com",
  //       profilePicture: "https://example.com/irene.jpg",
  //       yearsAtCompany: 3,
  //     },
  //     {
  //       name: "Jack Wilson",
  //       role: "Front-end Developer",
  //       department: "Engineering",
  //       email: "jack@example.com",
  //       profilePicture: "https://example.com/jack.jpg",
  //       yearsAtCompany: 1,
  //     },
  //   ];

  const filteredData = data.filter((item) => {
    if (props.input === "") {
      return item;
    } else {
      return (
        item.name.toLowerCase().includes(props.input) || item.department.toLowerCase().includes(props.input)
      );
    }
  });

  const junior = { border: "4px solid red" };
  const middle = { border: "4px solid gray" };
  const senior = { border: "4px solid gold" };

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 1, sm: 4, md: 6, lg: 12, xl:15 }}
      sx={{padding: "2rem", paddingLeft: "15%", paddingRight: "15%" }}
    >
      {filteredData.map((item, i) => (
        <Grid key={i} size={{ xs: 1, sm: 2, md: 2, lg: 3, xl: 3}}>
          <Card
            variant="outlined"
            sx={
              item.yearsAtCompany <= 1
                ? junior
                : item.yearsAtCompany >= 5
                ? senior
                : middle
            }
          >
            <CardMedia
              sx={{ height: 200}}
              component='img'
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
