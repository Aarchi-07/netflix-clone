import { NextResponse, NextRequest } from 'next/server';
import prismadb from '@/lib/prismadb';
import serverAuth from '@/lib/serverAuth';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ movieId: string }> }
): Promise<NextResponse> {
  try {
    await serverAuth(); // authentication or other preflight checks

    const { movieId } = await params; // resolve the params promise
    if (!movieId) {
      return new NextResponse('Invalid ID', { status: 400 });
    }

    const movie = await prismadb.movie.findUnique({ where: { id: movieId } });
    if (!movie) {
      return new NextResponse('Movie not found', { status: 404 });
    }

    return NextResponse.json(movie);
  } catch (error) {
    console.error(error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
