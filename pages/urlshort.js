import Image from 'next/image';


function urlshort() {
  return (
    <div className="">
    <div className="Header">
      <nav className="nav__left">
      <Image src="https://raw.githubusercontent.com/anjusoren/collection-repo/main/images/bg-intro-desktop.png" alt="shortly logo" width ={200} height={100}/>
        <ul>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
      </nav>
    </div>
     
    </div>
  )
}

export default urlshort
