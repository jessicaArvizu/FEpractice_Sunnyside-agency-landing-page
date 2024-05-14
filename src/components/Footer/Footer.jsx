import logo from '../../images/logo.svg'

function Footer() {
    return (
        <div className="bg-ss_dark-mod-cyan py-16 flex flex-col justify-center items-center text-center">
            <div className='mt-2'>
                <img src={logo} width={'180px'}></img>
            </div>
            <div className='flex flex-row space-x-14 mt-10'>
                <a>About</a>
                <a>Services</a>
                <a>Projects</a>
            </div>
            <div className="flex flex-row space-x-8 mt-16 mb-4">
                <a>
                    <i className="fa-brands fa-facebook"></i>
                </a>
                <a>
                    <i className="fa-brands fa-instagram"></i>
                </a>
                <a>
                    <i className="fa-brands fa-twitter"></i>
                </a>
                <a>
                    <i className="fa-brands fa-pinterest"></i>
                </a>
            </div>
        </div>
    )
}

export default Footer;