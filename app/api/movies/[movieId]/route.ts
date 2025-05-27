import { NextResponse } from 'next/server';
import prismadb from "@/lib/prismadb";
import serverAuth from "@/lib/serverAuth";

export async function GET(
    request: Request,
    { params }: { params: { movieId: string } }
) {
    try {
        await serverAuth();

        // Handle params validation
        if (!params || !params.movieId) {
            return new NextResponse('Invalid ID', { status: 400 });
        }
        
        const { movieId } = params;

        const movie = await prismadb.movie.findUnique({
            where: {
                id: movieId
            }
        });

        if (!movie) {
            return new NextResponse('Movie not found', { status: 404 });
        }

        return NextResponse.json(movie);
    } catch (error) {
        console.error(error);
        return new NextResponse('Internal Error', { status: 500 });
    }
}