import { NextResponse } from "next/server";
import { employees } from "../../../db/db"

export const GET = ()=>{
    const data = employees;
    return NextResponse.json(data,{status:200});
}