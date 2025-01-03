import { NextResponse } from "next/server";

export function GET() {
    const data = "Sol Edu Central!";
    return NextResponse.json(
        { data },
        {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
}
