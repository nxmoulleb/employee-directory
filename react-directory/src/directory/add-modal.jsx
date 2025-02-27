import { useState } from "react";
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
    const [employeeData, setEmployeeData] = useState({
        name: "",
        role: "",
        department: "",
        email: "",
        profilePicture: "",
        yearsAtCompany: "",
      });
      
      const handleChange = (e) => {
        setEmployeeData({
          ...employeeData,
          [e.target.name]: e.target.value,
        });
      };
      
  const [error, setError] = useState(false);

  const addEmployee = () => {
    // make a call to a db to add the data

    if (Object.values(employeeData).every((field) => field !== "")) {
        setError(false);

        setEmployeeData({
          name: "",
          role: "",
          department: "",
          email: "",
          profilePicture: "",
          yearsAtCompany: "",
        });
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
          name="name"
          variant="outlined"
          onChange={(e) => handleChange(e)}
          value={employeeData.name}
        ></TextField>
        <TextField
          id="outlined-basic"
          label="Role"
          name="role"
          variant="outlined"
          onChange={(e) => handleChange(e)}
          value={employeeData.role}
        ></TextField>
        <TextField
          id="outlined-basic"
          label="Department"
          name="department"
          variant="outlined"
          onChange={(e) => handleChange(e)}
          value={employeeData.department}
        ></TextField>
        <TextField
          id="outlined-basic"
          label="Email"
          name="email"
          variant="outlined"
          onChange={(e) => handleChange(e)}
          value={employeeData.email}
        ></TextField>
        <TextField
          id="outlined-basic"
          label="Image URL"
          name="profilePicture"
          variant="outlined"
          onChange={(e) => handleChange(e)}
          value={employeeData.profilePicture}
        ></TextField>
        <TextField
          id="outlined-basic"
          label="Years at company"
          name="yearsAtCompany"
          variant="outlined"
          onChange={(e) => handleChange(e)}
          value={employeeData.yearsAtCompany}
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
