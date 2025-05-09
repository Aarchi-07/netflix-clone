import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';
import prismadb from '@/lib/prismadb';

export async function POST(request: Request) {
    try {
        if (!request.body) {
            return NextResponse.json({ error: 'No request body' }, { status: 400 });
        }

        const body = await request.json();
        
        if (!body.email || !body.name || !body.password) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const { name, email, password } = body;

        const existingUser = await prismadb.user.findUnique({
            where: {
                email,
            },
        });

        if (existingUser) {
            return NextResponse.json({ error: 'Email taken' }, { status: 422 });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await prismadb.user.create({
            data: {
                email,
                name,
                hashedPassword,
                image: '',
                emailVerified: new Date(),
            },
        });

        return NextResponse.json(user);
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Internal error' }, { status: 500 });
    }
}