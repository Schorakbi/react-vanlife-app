import React from "react"
import { Link, useLoaderData, Form, useActionData, useNavigation } from "react-router-dom"
import { redirect } from "../utils/RedirectFix"
import { loginUser } from "../api"

export function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}

export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    const pathname = new URL(request.url)
        .searchParams.get("redirectTo") || "/"
    try {
        const data = await loginUser({ email, password })
        localStorage.setItem("isLoggedIn", "true")
        return redirect(pathname)
    } catch(error) {
        return error.message
    }
}

export default function Login() {

    const message = useLoaderData()
    const errorMessage = useActionData()
    const navigation = useNavigation()

    const redColor = {
        "color": "#cc0000"
    }

    return (
        <div className="login-container">
            {message && <h3 style={redColor}>{message}</h3>}
            <h1>Sign in to your account</h1>
            {errorMessage && <h3 style={redColor}>{errorMessage}</h3>}
            <Form method="post" className="login-form" replace>
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                />
                <button disabled={navigation.state === "submitting"}>{navigation.state === "submitting" ? "Signing in..." : "Sign in"}</button>
            </Form>
            <p className="login-bottom-text">Don’t have an account? <Link>Create one now</Link></p>
        </div>
    )

}