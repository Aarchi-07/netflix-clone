import { NextResponse } from 'next/server';
import prismadb from "@/lib/prismadb";
import serverAuth from "@/lib/serverAuth";

export async function GET(
    request: Request,
    { params }: { params: { movieId: string } }
) {
    try {
        await serverAuth();

        const movieId = params.movieId;

        if (!movieId) {
            return new NextResponse('Invalid ID', { status: 400 });
        }

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