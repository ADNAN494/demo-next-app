import {
    NextResponse
} from 'next/server';

const isLoggedIn = false;

// export function middleware(request) {

//     if (!isLoggedIn && request.nextUrl.pathname !== '/home') {
//         return NextResponse.redirect(new URL('/home', request.url));
//     }
// }
export function middleware(request) {
    return NextResponse.redirect(new URL('/home', request.url));

}
export const config = {
    matcher: ["/contact-us/:path*"]
}