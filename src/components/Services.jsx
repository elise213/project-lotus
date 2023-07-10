import React from 'react'
import { MdPhoneIphone, MdCode, MdSpeed, MdArchitecture } from "react-icons/md";
import '../styles/services.css'

const Services = () => {
    return (
        <section className='services'>
            <div className='responsive-web-design'>
                <img 
                    className='responsive-img'
                    src="https://www.mainstreethost.com/marketing/web-design-services/library/images/responsive-design.svg" 
                    alt="A image of a computer, a tablet and a phone" 
                />
                <div className="service-text-cont">
                    <p className='service-title'>Responsive Web Design</p>
                    <p className='service-text'> 
                        With over 50% of all web traffic coming from a mobile device, creating a mobile-friendly website is no longer an option—it’s a necessity. It all starts with responsive web design.
                        <br/>
                        Responsive web design allows your website to adapt to and provide an optimal experience on any device it’s being viewed from. This means that your website will look great and function flawlessly for a user on a desktop computer, laptop, tablet, or smartphone.
                        <br/>
                        Every website developed by Mainstreethost utilizes responsive web design, adapting perfectly to each device users are accessing it from.
                    </p>
                </div>
            </div>
            <div className='SEO-backed'>
                <div className="service-text-cont">
                    <p className='service-title'>SEO Backed Web Design</p>
                    <p className='service-text'>
                        Search engine optimization is what helps users find your site—web design is what keeps them there. These two critical digital marketing elements combine to create a strong platform for your online business to grow and find success.
                        <br/>
                        That’s why SEO is built into every site we create. Our team offers strategic web design backed by modern SEO techniques—when we develop a new website, our search engine optimization efforts work to help your website be discovered.
                    </p>
                </div>
                <div className='card-cont'>
                    <div className='card'>
                        <MdArchitecture className='icon'/>
                        <p>Site Architecture</p>
                        <p>An easy-to-navigate, logical page structure helps your users, and the search engines find what they are looking for.</p>
                    </div>
                    <div className='card'>
                        <MdSpeed className='icon' />
                        <p>Optimized Speed</p>
                        <p>Fast load times = happy customers. Google has made it clear that they prefer websites that respond quickly.</p>
                    </div>
                    <div className='card'>
                        <MdCode className='icon' />
                        <p>Modern Coding</p>
                        <p>Our web design & development team utilizes up-to-date coding practices with clean HTML5 and CSS3.</p>
                    </div>
                    <div className='card'>
                        <MdPhoneIphone className='icon'  />
                        <p>Mobile-Friendly</p>
                        <p>All of our websites are developed to look and perform beautifully on every device your users are viewing it from.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
