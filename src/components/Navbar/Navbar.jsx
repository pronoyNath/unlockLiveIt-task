import logo from '../../assets/logo.png'
import searchIcon from '../../assets/Search.svg'
import heartIcon from '../../assets/heart.svg'
import shopingCartIcon from '../../assets/shopping-cart.svg'
import userIcon from '../../assets/user.svg'



const Navbar = () => {
    return (
        <div className='border-b px-20  mt-5 pb-2'>
            <div className="navbar text-xl bg-base-100 font-semibold text-[#270A05]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li>
                                <a>Pages</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li>
                                <a>Menu</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Contact Us</a></li>
                        </ul>
                    </div>
                    <ul className="menu menu-horizontal hidden lg:flex text-lg  px-1">
                        <li><a>Home</a></li>
                        <li>
                            <details>
                                <summary>Pages</summary>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>Menu</summary>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>Contact Us</a></li>
                    </ul>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <img src={logo} className='' alt="" />
                </div>
                <div className="navbar-end space-x-6 ">
                    <div className='flex justify-end gap-20 w-full items-center'>
                        <div className='flex gap-9'>
                            <div className='hidden lg:block'>
                                <img src={searchIcon} className='h-8 w-8' alt="" />
                            </div>
                            <div className='relative hidden lg:block'>
                                <img src={heartIcon} className='h-8 w-8' alt="" />
                                <p className='absolute -top-2 -right-2 h-5 w-5 text-center bg-[#270A05] rounded-full text-white text-sm'>5</p>
                            </div>
                            <div className='relative hidden lg:block'>
                                <img src={shopingCartIcon} className='h-8 w-8' alt="" />
                                <p className='absolute -top-2 -right-2 h-5 w-5 text-center bg-[#270A05] rounded-full text-white text-sm'>4</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <img src={userIcon} className=' bg-[#270A05] rounded-full p-2' alt="" />
                            <a className="text-xl">Sign in</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
