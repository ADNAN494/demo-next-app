import { NextResponse } from "next/server"

export const GET = async (req,value)=>{
    console.log(value.params.all);
    const data = value.params.all
    return NextResponse.json({result:'Sucess' , data:data})
}