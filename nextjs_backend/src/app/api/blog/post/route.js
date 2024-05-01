import { NextResponse } from "next/server";

export const GET = async (req) => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json();
        console.log("Response data:", data); // Log the response data to the console
        return NextResponse.json({ "data": data });
};
