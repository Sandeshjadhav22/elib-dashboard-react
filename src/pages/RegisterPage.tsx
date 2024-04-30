import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { register } from '@/http/api'
import useTokenStore from '@/store'
import { useMutation } from '@tanstack/react-query'
import { LoaderCircle } from 'lucide-react'
import { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const RegisterPage = () => {
  const navigate = useNavigate();
  const setToken = useTokenStore((state) => state.setToken)
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  // Mutations
  const mutation = useMutation({
    mutationFn: register,
    onSuccess: (response) => {
      console.log("Login successfull");
      setToken(response.data.accessToken)

      //redirect to dashboard
      navigate('/dashboard/home')
    },
  });

  const handleRegisterSubmit = () => {
    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    console.log("data", {name, email, password });

    if(!name || !email || !password){
      return alert("Enter your name, email and password")
    }

    mutation.mutate({name, email, password });

    //make server call
  };
  return (
    <section className='flex justify-center items-center h-screen'>
         <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
          {mutation.isError && (
            <span className='text-red-500 text-sm'>{'Something Went wrong'}</span>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input ref={nameRef} id="name" placeholder="Max" required />
            </div>
           
          
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
            ref={emailRef}
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input ref={passwordRef} id="password" type="password" />
          </div>
          <Button onClick={handleRegisterSubmit} type="submit" className="w-full" disabled={mutation.isPending}>
            {mutation.isPending && <LoaderCircle className='animate-spin'/>}
            <span className='ml-2'>Create an account</span>
          </Button>
          
        </div>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link to={'/auth/login'} className="underline">
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
    </section>
  )
}

export default RegisterPage