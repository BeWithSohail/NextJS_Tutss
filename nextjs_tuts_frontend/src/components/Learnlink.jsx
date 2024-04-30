"use client";
import Link from "next/link";
import { usePathname } from 'next/navigation'


const Learnlink = () => {
    const id = 2;
    const pathname = usePathname()


  return (
      <>
          <Link className={`link ${pathname==="/" ? "active":""} `} href="/admin/dashboard"> Go to admin dashboard </Link>
          <Link href={`/profile2/${id}`}> Go to admin profile </Link>
      </>
  )
}

export default Learnlink;