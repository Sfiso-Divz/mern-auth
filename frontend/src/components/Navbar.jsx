import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <>
        <nav className='bg-slate-200 p-4'>
           
           <div className='flex justify-between container mx-auto item-center'>
            <h1 className='text-blue-600 cursor-pointer text-2xl font-bold'><Link to='/'>Auth</Link></h1>
            <ul className='flex gap-4'>
                <li className="cursor-pointer"><Link to='/'>Home</Link></li>
                <li className="cursor-pointer"><Link to='/about'>About</Link></li>
                <li className="cursor-pointer"><Link to='/signin'>Sign In</Link></li>
            </ul>
           </div>

        </nav>
    </>
  )
}

export default Navbar