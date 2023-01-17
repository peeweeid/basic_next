import { useEffect } from "react"
import { useRouter } from "next/router";

export default function Custom404() {
    const router = useRouter();
    useEffect(()=> {
        setTimeout(()=> {
        router.push('/');
    },2000);
},[]);
  return (
    <h1>tidak ketemu</h1>
  )
}
