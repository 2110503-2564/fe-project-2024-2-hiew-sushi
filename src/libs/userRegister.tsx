export default async function userRegister(userName: string, userEmail: string, userPassword: string) {
    const response = await fetch(`https://sw2-backend.onrender.com/api/v1/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify({
            name: userName,   // Send name to backend
            email: userEmail,
            password: userPassword,
        }),
    });

    if (!response.ok) {
        throw new Error("Registration failed. Try again.");
    }

    return await response.json();
}