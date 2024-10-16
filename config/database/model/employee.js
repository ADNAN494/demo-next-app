import mongoose from "mongoose";

// Define the schema for the employee
const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  salary: {
    type: String,
  },
});

// Check if the model already exists
const Employee = mongoose.models.employee || mongoose.model('employee', employeeSchema);

// Export the model to use it in other parts of the project
export default Employee;
