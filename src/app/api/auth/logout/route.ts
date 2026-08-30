import { NextResponse } from 'next/dist/server/web/spec-extension/response';

export async function POST() {
  const response = NextResponse.redirect(new URL('/admin/login', process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'));
  
  response.cookies.delete('admin_session');
  
  return response;
}
