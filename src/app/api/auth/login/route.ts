const url = process.env.BACKEND_SOURCE_URL as string


export async function POST(request: Request) {
    try {
        const { email, password } = await request.json()
        console.log(email);
        
        const req = await fetch(`${url}/api/auth`, {
            method:'POST',
            headers: { "Content-Type": "application/json" },
            body:JSON.stringify({ email, password })
        })
        
        console.log(req);
                
         return req;

    } catch (e) {
        return Response.json({ e })
    }
}