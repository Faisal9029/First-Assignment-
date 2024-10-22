import Link from "next/link";

export default function Navbar(){
return(
  <div>
    <Link href="/">Home</Link>
    <br/>
    <Link href="/about">About</Link>
    <br/>
    <Link href="/jobs">Jobs</Link>
    <br/>
    <Link href="/jobs/programming">Programming</Link>
    <br/>
    <Link href="/contact">Contact</Link>
    <br/>
    <Link href="/services">Services</Link>
    <br/>
  </div>
);
}