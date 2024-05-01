import { NextResponse } from "next/server";
import url from 'url'; // Import the url module


export async function GET(req) {
    // console.log("request", req);
    const parsedUrl = url.parse(req.url, true);
    // console.log("request href", parsedUrl.href);
    // console.log("request host", parsedUrl.host);    
    //Request Header
    const requestHeader = new Headers(req.headers);
    // console.log("request href", req.url.href);
    // console.log("request host", req.url.host);

    // URL Query Params
    const { searchParams } = new URL(req.url);
    return NextResponse.json({ "msg": "hello NextJS api" })
};

export async function POST(req) {
    const res = await req.json();
    // console.log("res JSON", res)
    const fromData = await req.fromData();
    // console.log("fromData", fromData)
    // console.log("fromData", fromData.get("name"))
    // console.log("fromData", fromData.get("body"))
    return NextResponse.json({ "msg": "success POST"})
}