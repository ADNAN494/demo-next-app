import { NextResponse } from "next/server"

export const POST = async (req,res)=>{
    const data = await req.json();
    if(!data.id || !data.age){
        return NextResponse.json({result:'Bad Request',status:400},)
    }
    return NextResponse.json({result:'Sucess' , data: data , status:200})
    // return NextResponse.json({
    //         name:'Adnan',
    //         age:23
    // })
}