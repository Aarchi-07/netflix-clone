import { NextResponse } from 'next/server';
import prismadb from "@/lib/prismadb";
import serverAuth from "@/lib/serverAuth";

export async function GET() {
    try {
        await serverAuth();

        const movies = await prismadb.movie.findMany(); 
        
        return NextResponse.json(movies);
    } catch (error) {
        console.log(error);
        return new NextResponse('Internal Error', { status: 400 });
    }
}