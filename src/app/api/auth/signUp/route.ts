
const url = process.env.BACKEND_SOURCE_URL as string
interface userDetails{
    name:string,
    email:string,
    password:string
}
export async function POST(request: Request) {
    try {
        const { name, email, password } = await request.json()
        const userDetails:userDetails={name,email,password}

          const req = await fetch(`${url}/api/users`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userDetails)
        })
        
        const data = await req.json()
        console.log(data);
        
        return Response.json({ data })

    } catch (e) {
        console.log('helllll');
        
        return Response.json({ e })
    }
}