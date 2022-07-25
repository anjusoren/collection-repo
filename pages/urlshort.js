import Image from 'next/image';
import styles from '../styles/UrlShort.module.css';

const Urlshort = () => {

  return (
    <div className={styles.container}>
        {/* header */}
        <div className={styles.header}>
          <nav className={styles.nav__left}>
          <div className={styles.image__div}>
          <Image src="https://raw.githubusercontent.com/anjusoren/collection-repo/main/images/logo.svg"
          alt="shortly logo"  width={100} height={32}/></div>
            <ul>
              <li>Features</li>
              <li>Pricing</li>
              <li>Resources</li>
            </ul>
          </nav>
          <nav className={styles.nav__right}>
          <ul>
            <li>Login</li>
            <li><span className={styles.signUp__box}>Sign Up</span></li>
          </ul>
          </nav>
        </div>
        
        {/* hero section */}
        <div className={styles.hero}>
          <div className={styles.hero__left}>
            <h1>More than just shorter links</h1>
            <p>Build your brands recognition and get detailed
            insights on how your links are performing. </p>
            <button>Get Started</button>
          </div>
          <div className={styles.hero__right}>
          <Image src="https://raw.githubusercontent.com/anjusoren/collection-repo/main/images/illustration-working.svg"
           alt="hero image" width={500} height={400}/>  
          </div>
        </div>
        {/* main section */}
        
        <div className={styles.main__outer}>
        <form>
          <input placeholder="Shorten a link here..." ></input>
          <button type="submit"> Shorten it!</button>
        </form>
        </div>
        
        {/* middle section */}
        <div className={styles.middle}>
          <div className={styles.middle__top}>
            <h1>Advanced Statistics</h1>
            <p>Track how your links are performing across the web
            with our advanced statistics dashboard.</p>
          </div>
          {/* cards */}
          <div className={styles.middle__bottom}>
            <div className={styles.middle__bottom__card}>
              <div  className={styles.card__body}>
                <h2>Brand Recognition</h2>
                <p>Boost your brand recognition with
                each click. Generic links do not mean a thing.
                Branded links help instill confidence
                in your content.</p>
              </div>
              <div  className={styles.card__body}>
                <h2>Detailed Records</h2>
                <p>Gain insights into who is clicking your
                links. Knowing when and where people 
                engage with your content helps inform better decisions.</p>
              </div>
              <div  className={styles.card__body}>
                <h2>Fully Customizable</h2>
                <p>Improve brand awareness and content discoverability
                through customizable links, supercharging audience 
                engagement.</p>
              </div>
              </div>
          </div>
        </div>

        {/* bottom section */}
        <div className={styles.bottom}>
        <h2>Boost your links today</h2>
        <button>Get Started</button>
        </div>

        {/* footer */}
      <div className={styles.footer}>
        <div className={styles.footer__logo}>
          <Image src="https://raw.githubusercontent.com/anjusoren/collection-repo/main/public/logo1.svg"
            alt="shortly logo"  width={78} height={32}/>
        </div>
        <div className={styles.footer__features}>
          <h4>Features</h4>
          <ul>
            <li>Link Shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
          </ul>
        </div>
        <div className={styles.footer__resources}>
          <h4>Resources</h4>
          <ul>
            <li>Blog</li>
            <li>Developers</li>
            <li>Support</li>
          </ul>
        </div>
        <div className={styles.footer__company}>
          <h4>Company</h4>
          <ul>
            <li>About</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className={styles.footer__icons}>
          <div><Image src="https://raw.githubusercontent.com/anjusoren/collection-repo/main/images/icon-facebook.svg"
            alt="facebook logo icon" width={20} height={20}/></div>
          <div><Image src="https://raw.githubusercontent.com/anjusoren/collection-repo/main/images/icon-twitter.svg"
            alt="twitter logo icon" width={20} height={20}/></div>
          <div><Image src="https://raw.githubusercontent.com/anjusoren/collection-repo/main/images/icon-pinterest.svg"
            alt="pinterest logo icon" width={20} height={20}/></div>
          <div><Image src="https://raw.githubusercontent.com/anjusoren/collection-repo/main/images/icon-instagram.svg"
            alt="instagram logo icon" width={20} height={20}/></div>
        </div>
      </div>
    </div>
  )
};

export default Urlshort
