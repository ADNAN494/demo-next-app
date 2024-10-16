import { NextResponse } from "next/server";
import { employees } from "../../../../db/db.JS";

export const GET = (req, value) => {
    console.log(value.params.empolyeeId);
    const empData = employees.filter((item) => item.employeeId == value.params.empolyeeId);
    const result = empData.length === 0 ? { result: 'No Record Found' } : { result: empData };
    return NextResponse.json(result, { status: 200, message: "Result Successfully Found" });
};

export const DELETE = (req,value) =>{
    const id = value.params.empolyeeId;
    const empData = employees.filter((item) => item.employeeId == id);
    console.log({empData});
    if(empData.length > 0){
        return NextResponse.json({result:'User Deleted Sucessfully', status: 200})
    }else{
         return NextResponse.json({result:'User Not Deleted', status: 400})
    }
}

export const PUT = async (req,value)=>{
    const payload = await req.json();
    payload.employeeId = value.params.empolyeeId
    console.log({payload});
    if(!payload.employeeId || !payload.name || !payload.salary){
        return NextResponse.json({result:'Not Updated Data', success:false})
    }
    return NextResponse.json({result:'Updated Data' , success: true})
}