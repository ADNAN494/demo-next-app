import mongoose from 'mongoose';
import {
    connection
} from "../../../../../config/database/db_config.js";
import Employee from "../../../../../config/database/model/employee.js";
import {
    NextResponse
} from 'next/server';

export const PUT = async (req, value) => {
    const id = value.params.empid;
    const empId = {
        _id: id
    };
    const payload = await req.json();
    console.log({
        payload
    });
    await mongoose.connect(connection)
    const result = await Employee.findByIdAndUpdate(empId, payload)
    return NextResponse.json({
        result: result,
        message: 'Updated',
        success: true
    })
}

export const GET = async (req, value) => {
    const id = value.params.empid;

    try {
        await mongoose.connect(connection);

        // Fetch the employee by ID
        const result = await Employee.findById(id);

        if (!result) {
            return NextResponse.json({
                message: 'Employee not found',
                success: false
            }, {
                status: 404
            });
        }

        return NextResponse.json({
            result,
            message: 'Fetched successfully',
            success: true
        });
    } catch (error) {
        console.error('Error fetching employee:', error);
        return NextResponse.json({
            message: 'Error fetching employee',
            success: false
        }, {
            status: 500
        });
    } finally {
        mongoose.connection.close(); // Close the connection if necessary
    }
};

export const DELETE = async (req, value) => {
    const empId = value.params.empid;
    const id = {
        _id: empId
    }
    await mongoose.connect(connection);
    const result = await Employee.deleteOne(id);

    if (!result) {
        return NextResponse.json({
            message: 'Employee not Deleted',
            success: false
        }, {
            status: 400
        });
    }
    return NextResponse.json({
        result,
        message: 'Deleted successfully',
        success: true
    });
}