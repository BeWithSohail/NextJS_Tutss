"use client"
import { useRouter } from "next/navigation"

const LearnRouter = () => {
  const router = useRouter();
  console.log("router", router)
  return (
    <div>
      <h1> Learn Router useRouter</h1>
      <button onClick={() => {
        router.push('/admin/dashboard')
      }}> Go to dashboard page </button>
    </div>
  )
}

export default LearnRouter