// export async function GET(reqest){
//     return new Response("Hello-World");
// }

import { NextResponse } from "next/server"

export const GET = (reqest)=>{
    return NextResponse.json({
        name: "Adnan",
        age: 23,
        depatment:'Css'
    })
}