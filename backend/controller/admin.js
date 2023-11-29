// controllers/adminController.js

const Admin = require('../modal/Admin.js'); // Replace with your Admin model
const bcrypt = require('bcryptjs');

exports.adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Find the admin by email
    const admin = await Admin.findOne({ email });

    // If admin doesn't exist
    if (!admin) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, admin.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Passwords match, login successful
    res.status(200).json({ message: 'Login successful', admin });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if admin with the same email exists
    const existingAdmin = await Admin.findOne({ email });

    if (existingAdmin) {
      return res.status(400).json({ message: 'Admin already exists with this email' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new admin
    const newAdmin = new Admin({ email, password: hashedPassword });
    await newAdmin.save();

    res.status(201).json({ message: 'Admin created successfully', admin: newAdmin });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
