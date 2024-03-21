import { redirect } from "./RedirectFix";

export async function requireAuth(request) { 
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const pathname = new URL(request.url).pathname
    if (isLoggedIn !== "true") { 
        throw redirect(`/login?message=You must login first&redirectTo=${pathname}`);     
    }
    return null
}