const Header = () => {
  return (
    <div className=" py-5 relative rgba(0, 0, 0, 0.5)">
        <div className="container mx-auto">
            <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-slate-300">@mvadly</h1>
            <nav>
                <ul className="flex space-x-4">
                <li><a href="#home" className="text-gray-600 hover:text-white">Home</a></li>
                <li><a href="#about" className="text-gray-600 hover:text-white">About</a></li>
                <li><a href="#services" className="text-gray-600 hover:text-white">Services</a></li>
                <li><a href="#contact" className="text-gray-600 hover:text-white">Contact</a></li>
                </ul>
            </nav>
            </div>
        </div>
    </div>
  )
}

export default Header