import { NextResponse } from 'next/dist/server/web/spec-extension/response';

export async function POST(req: Request) {
  try {
    const { password } = await req.json();
    
    // In a real app, use environment variables and proper hashing
    if (password === 'admin123') {
      const response = NextResponse.json({ success: true });
      
      response.cookies.set('admin_session', 'true', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24, // 1 day
        path: '/',
      });
      
      return response;
    }
    
    return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
