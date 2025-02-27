import { useState } from "react";
import { Box, Stack, Typography, TextField, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

/**
 * Defines the style for the modal box.
 */
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "2px solid dimgray",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
};

/**
 * A component that renders the modal body for adding an employee.
 * @returns {JSX.Element} A React element containing the modal body for adding an employee.
 */
function AddModalBody() {
    const [employeeData, setEmployeeData] = useState({
        name: "",
        role: "",
        department: "",
        email: "",
        profilePicture: "",
        yearsAtCompany: "",
      });
      
       /**
   * Handles input changes and updates the employee state.
   * @param {Object} e - The event containing the input field data.
   */
      const handleChange = (e) => {
        setEmployeeData({
          ...employeeData,
          [e.target.name]: e.target.value,
        });
      };
      
  const [error, setError] = useState(false);

  /**
   * Adds a new employee and clears all fields if all fields are filled out.
   * Handles error state if any fields are empty.
   */
  const addEmployee = () => {
    // TODO: make a call to a db to add the data

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
        {/* Input field for employee name */}
        <TextField
          id="outlined-basic"
          label="Name"
          name="name"
          variant="outlined"
          onChange={(e) => handleChange(e)}
          value={employeeData.name}
        ></TextField>
        {/* Input field for employee role */}
        <TextField
          id="outlined-basic"
          label="Role"
          name="role"
          variant="outlined"
          onChange={(e) => handleChange(e)}
          value={employeeData.role}
        ></TextField>
        {/* Input field for employee department */}
        <TextField
          id="outlined-basic"
          label="Department"
          name="department"
          variant="outlined"
          onChange={(e) => handleChange(e)}
          value={employeeData.department}
        ></TextField>
        {/* Input field for employee email */}
        <TextField
          id="outlined-basic"
          label="Email"
          name="email"
          variant="outlined"
          onChange={(e) => handleChange(e)}
          value={employeeData.email}
        ></TextField>
        {/* Input field for employee picture */}
        <TextField
          id="outlined-basic"
          label="Image URL"
          name="profilePicture"
          variant="outlined"
          onChange={(e) => handleChange(e)}
          value={employeeData.profilePicture}
        ></TextField>
        {/* Input field for years the emplouyee has worked for the company */}
        <TextField
          id="outlined-basic"
          label="Years at company"
          name="yearsAtCompany"
          variant="outlined"
          onChange={(e) => handleChange(e)}
          value={employeeData.yearsAtCompany}
        ></TextField>
        {/* Error field */}
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
