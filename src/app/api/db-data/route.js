import mongoose from "mongoose";
import Employee from "../../../../config/database/model/employee";
import { connection } from "../../../../config/database/db_config";
import { NextResponse } from "next/server";

// Database connection handler
const connectToDatabase = async () => {
  // Check if the MongoDB connection is already established
  if (mongoose.connection.readyState !== 1) {
    try {
      // Attempt to connect to the database if not connected
      await mongoose.connect(connection, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000,
        ssl: true,
        tlsAllowInvalidCertificates: false,
      });
      console.log('Database connected successfully');
    } catch (error) {
      console.error('Error connecting to the MongoDB server:', error.message);
      throw new Error('Failed to connect to the database');
    }
  } else {
    console.log('Already connected to the database');
  }
};

export const GET = async () => {
  try {
    await connectToDatabase();
    const empData = await Employee.find();
    
    // Log the fetched data
    console.log('Fetched employee data:', empData);

    return NextResponse.json({
      result: 'Fetched employee data',
      data: empData,
      success: true
    });
  } catch (error) {
    console.error('Error fetching employee data:', error.message);
    return NextResponse.json({
      error: 'Error fetching data from the database',
    }, { status: 500 });
  }
};


export const POST = async (req) => {
  try {
    await connectToDatabase();

    // Parse the request body
    const payload = await req.json();

    // Create employee data from the payload
    const employeeData = await Employee.create(payload);

    return NextResponse.json({ success: true, result: employeeData });
  } catch (error) {
    console.error('Error creating employee:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
};

