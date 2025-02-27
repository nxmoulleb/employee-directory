import { React, useState } from "react";
import { Box, Stack, Typography, TextField, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid dimgray",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
};

function AddModalBody() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [dept, setDept] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const [years, setYears] = useState("");
  const [error, setError] = useState(false);

  const addEmployee = () => {
    // make a call to a db to add the data
    if (name && role && dept && email && url && years) {
      let data = {
        name: name,
        role: role,
        department: dept,
        email: email,
        profilePicture: url,
        yearsAtCompany: years,
      };
      setError(false);
      setName("");
      setRole("");
      setDept("");
      setEmail("");
      setUrl("");
      setYears("");
    } else {
      setError(true);
    }
  };

  return (
    <Box sx={style}>
      <Stack spacing={1}>
        <Typography variant="h5">Add Employee</Typography>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          onChange={(e) => setName(e.target.value)}
          value={name}
        ></TextField>
        <TextField
          id="outlined-basic"
          label="Role"
          variant="outlined"
          onChange={(e) => setRole(e.target.value)}
          value={role}
        ></TextField>
        <TextField
          id="outlined-basic"
          label="Department"
          variant="outlined"
          onChange={(e) => setDept(e.target.value)}
          value={dept}
        ></TextField>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        ></TextField>
        <TextField
          id="outlined-basic"
          label="Image URL"
          variant="outlined"
          onChange={(e) => setUrl(e.target.value)}
          value={url}
        ></TextField>
        <TextField
          id="outlined-basic"
          label="Years at company"
          variant="outlined"
          onChange={(e) => setYears(e.target.value)}
          value={years}
        ></TextField>
        {error && (
          <Typography variant="body2" color="error">
            Please make sure all fields are filled out
          </Typography>
        )}
        <Button variant="outlined" onClick={addEmployee}>
          <AddIcon />
          <Typography variant="body1">Add Employee</Typography>
        </Button>
      </Stack>
    </Box>
  );
}

export default AddModalBody;
