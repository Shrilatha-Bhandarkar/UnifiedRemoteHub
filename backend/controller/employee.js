// controllers/adminController.js

const Employee = require('../modal/Employee.js'); // Replace with your Admin model
const bcrypt = require('bcryptjs');

exports.employeeLogin = async (req, res) => {
  try {
    const {userId, email, password } = req.body;
    
    // Find the admin by email
    const employee = await Employee.findOne({ email });

    // If admin doesn't exist
    if (!employee) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, employee.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Passwords match, login successful
    res.status(200).json({ message: 'Login successful', employee });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createemployee = async (req, res) => {
  try {
    const {name, email, password } = req.body;

    const existingEmployee = await Employee.findOne({ email });

    if (existingEmployee) {
      return res.status(400).json({ message: 'Employee already exists with this email' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new admin
    const newEmployee = new Employee({name, email, password: hashedPassword });
    await newEmployee.save();

    res.status(201).json({ message: 'Employee created successfully', employee: newEmployee });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUserProfile = async (req, res) => {
    const userId = req.params.id; // Assuming the user ID is passed as a parameter
  
    try {
      // Fetch user data from the database based on the ID
      const user = await Employee.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Return the user profile data
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  };