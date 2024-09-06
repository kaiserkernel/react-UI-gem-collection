import Image from 'next/image'
const Footer = () => {
    return ( 
        <footer className='flex flex-row items-center justify-center gap-2 text-drip-black'>
          <p>Created with love by</p>
            <a target="_blank" rel="noopener noreferrer" className='no-underline hover:underline text-2xl font-semibold text-drip-black font-Cursive'>
                @codeking
          </a>
            
          </footer>
     );
}
 
export default Footer;