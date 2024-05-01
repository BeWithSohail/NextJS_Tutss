import { connectDB } from "@/lib/connectMongoDB";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        await connectDB();
        return NextResponse.json({"msg":"success"},{status:200})

    } catch (e) { 
        return NextResponse.json({"msg":"sommething went wrong"},{status:400})
    }
}