import logo from '../../images/logo.svg'
import facebook from '../../images/icon-facebook.svg'
import instagram from '../../images/icon-instagram.svg'
import pinterest from '../../images/icon-pinterest.svg'
import twitter from '../../images/icon-twitter.svg'


function Footer() {
    return (
        <div className="py-16 flex flex-col justify-center items-center text-center text-ss_dark-mod-cyan bg-[#90D4C4]">
            <div className='mt-2'>
                <img src={logo} width={'170px'} alt='Sunnyside logo' className='fill-ss_dark-mod-cyan' style={{color:'red'}}></img>
            </div>
            <div className='flex flex-row space-x-14 mt-10 font-semibold'>
                <a className='font-semibold'>About</a>
                <a>Services</a>
                <a>Projects</a>
            </div>
            <div className="flex flex-row space-x-8 mt-20 mb-4 text-lg">
                <a>
                    <img src={facebook}></img>
                </a>
                <a>
                    <img src={instagram}></img>
                </a>
                <a>
                    <img src={twitter}></img>
                </a>
                <a>
                    <img src={pinterest}></img>
                </a>
            </div>
        </div>
    )
}

export default Footer;