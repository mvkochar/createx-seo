import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import './css/Contacts.css'

const marks = [
    {
        value: 10,
        label: '$1k',
    },
    {
        value: 25,
        label: '$25k',
    },
    {
        value: 50,
        label: '$50k',
    },

    {
        value: 75,
        label: '$75k',
    },

    {
        value: 100,
        label: '$100K',
    },
];

function valuetext(value: number) {
    return `${value}°C`;
}

const Contacts = () => {
    const [value, setValue] = React.useState<number[]>([20, 37]);

    const handleChange = (event: Event, newValue: number[]) => {
        setValue(newValue);
        console.log(event.target)
    };

    return (
        <>
            <main className='contacts-main'>
                <div className="page-breadcrumb d-f align-center">
                    <div><img src="/images/home.png" alt="home" /></div>
                    <div>
                        <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.529247 0.362254C0.789596 0.101905 1.21171 0.101905 1.47206 0.362254L6.13872 5.02892C6.39907 5.28927 6.39907 5.71138 6.13872 5.97173L1.47206 10.6384C1.21171 10.8987 0.789596 10.8987 0.529247 10.6384C0.268897 10.378 0.268897 9.95594 0.529247 9.69559L4.72451 5.50033L0.529247 1.30506C0.268897 1.04471 0.268897 0.622604 0.529247 0.362254Z" fill="white" />
                        </svg>
                    </div>
                    <p className="page-breadcrumb-current">Contacts</p>
                </div>
                <h1 className="contacts-main-title">Contacts</h1>
                <div className="contacts-main-info d-f">
                    <div className="contact-item d-f">
                        <div>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9987 12.9163C18.1577 12.9163 16.6654 14.4087 16.6654 16.2497C16.6654 18.0906 18.1577 19.583 19.9987 19.583C21.8396 19.583 23.332 18.0906 23.332 16.2497C23.332 14.4087 21.8396 12.9163 19.9987 12.9163ZM13.332 16.2497C13.332 12.5678 16.3168 9.58301 19.9987 9.58301C23.6806 9.58301 26.6654 12.5678 26.6654 16.2497C26.6654 19.9316 23.6806 22.9163 19.9987 22.9163C16.3168 22.9163 13.332 19.9316 13.332 16.2497Z" fill="#7772F1" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9987 5.41634C13.9661 5.41634 9.16536 10.1431 9.16536 15.8651C9.16536 20.5297 11.9687 25.2411 15.0331 28.9467C16.5374 30.7659 18.0461 32.2728 19.1795 33.3249C19.4827 33.6063 19.7582 33.8545 19.9987 34.0667C20.2392 33.8545 20.5147 33.6063 20.8179 33.3249C21.9513 32.2728 23.46 30.7659 24.9643 28.9467C28.0287 25.2411 30.832 20.5297 30.832 15.8651C30.832 10.1431 26.0313 5.41634 19.9987 5.41634ZM19.9987 36.2497C18.9673 37.5589 18.9669 37.5586 18.9665 37.5583L18.9624 37.555L18.9529 37.5475L18.9206 37.5217C18.8932 37.4998 18.8543 37.4684 18.8047 37.4279C18.7054 37.3469 18.563 37.2292 18.3837 37.0771C18.0251 36.773 17.5179 36.3307 16.9117 35.7679C15.7013 34.6443 14.085 33.0308 12.4643 31.071C9.27868 27.2187 5.83203 21.7377 5.83203 15.8651C5.83203 8.20473 12.2241 2.08301 19.9987 2.08301C27.7733 2.08301 34.1654 8.20473 34.1654 15.8651C34.1654 21.7377 30.7187 27.2187 27.5331 31.071C25.9124 33.0308 24.2961 34.6443 23.0857 35.7679C22.4795 36.3307 21.9723 36.773 21.6137 37.0771C21.4344 37.2292 21.292 37.3469 21.1927 37.4279C21.1431 37.4684 21.1042 37.4998 21.0768 37.5217L21.0445 37.5475L21.035 37.555L21.032 37.5574C21.0316 37.5577 21.0301 37.5589 19.9987 36.2497ZM19.9987 36.2497L21.0301 37.5589C20.4251 38.0355 19.5715 38.0349 18.9665 37.5583L19.9987 36.2497Z" fill="#7772F1" />
                            </svg>
                        </div>
                        <div>
                            <h6 className="contact-item-title">Visit us</h6>
                            <p className="contact-item-desc">
                                2464 Royal Ln. Mesa, <br />
                                New Jersey 45463, USA
                            </p>
                            <a href="https://www.google.com/maps/place/Royal+Ln/data=!4m7!3m6!1s0x89c19c30e85c16d3:0x77b4ad312815d20d!8m2!3d39.9571648!4d-74.1612883!16s%2Fg%2F1tdz5qvf!19sChIJ0xZc6DCcwYkRDdIVKDGttHc?authuser=0&hl=uk&rclk=1" target='__blank' className="contact-item-link">See on the map</a>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="contact-item d-f">
                        <div>
                            <svg width="24" height="38" viewBox="0 0 24 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.16536 3.86947C4.78465 3.86947 3.66536 4.98875 3.66536 6.36947V31.6299C3.66536 33.0106 4.78465 34.1299 6.16536 34.1299H17.832C19.2127 34.1299 20.332 33.0106 20.332 31.6299V6.36947C20.332 4.98875 19.2127 3.86947 17.832 3.86947H17.6931L17.2871 4.84355C17.0283 5.46458 16.4215 5.86909 15.7487 5.86909H8.2487C7.5759 5.86909 6.96909 5.46458 6.71028 4.84355L6.30433 3.86947H6.16536ZM0.332031 6.36947C0.332031 3.14781 2.9437 0.536133 6.16536 0.536133H17.832C21.0537 0.536133 23.6654 3.14781 23.6654 6.36947V31.6299C23.6654 34.8515 21.0537 37.4632 17.832 37.4632H6.16536C2.9437 37.4632 0.332031 34.8515 0.332031 31.6299V6.36947Z" fill="#7772F1" />
                            </svg>

                        </div>
                        <div>
                            <h6 className="contact-item-title">Call us</h6>
                            <p className="contact-item-desc">
                                (405) 555-0128 <br />
                                (603) 555-0123
                            </p>
                        </div>
                    </div>
                    <div className="divider">
                    </div>
                    <div className="contact-item d-f">
                        <div>
                            <svg width="37" height="33" viewBox="0 0 37 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M34.5384 14.612C34.301 16.2565 33.7384 17.8196 32.9047 19.2569C32.9672 19.6128 32.9992 19.9725 32.9992 20.3338C32.9992 21.5885 32.6357 22.7893 31.9623 23.8803C31.6261 24.4249 31.5396 25.063 31.5063 25.4846C31.4682 25.9677 31.481 26.4964 31.5155 27.0043C31.5542 27.5741 31.6243 28.1723 31.7045 28.7366C31.054 28.547 30.3489 28.3564 29.676 28.2046C29.1163 28.0784 28.5436 27.9708 28.0249 27.9172C27.5724 27.8704 26.9185 27.8342 26.3338 28.0233C25.0553 28.4365 23.6485 28.6671 22.1659 28.6671C20.4027 28.6671 18.7834 28.3541 17.364 27.8104C17.0226 27.8259 16.6787 27.8338 16.3325 27.8338C14.3248 27.8338 12.3925 27.5697 10.5846 27.0818C13.2129 30.1215 17.5457 32.0004 22.1659 32.0004C23.9708 32.0004 25.7031 31.7233 27.2996 31.2141C27.3023 31.2142 27.3074 31.2141 27.315 31.214C27.356 31.2132 27.4698 31.2109 27.6824 31.2329C28.0167 31.2674 28.4466 31.3444 28.9425 31.4563C29.9297 31.679 31.0391 32.0076 31.9038 32.2821C33.7374 32.8641 35.514 31.264 35.1863 29.4034C35.0452 28.6025 34.8987 27.6252 34.8412 26.7785C34.8123 26.3527 34.8091 26.0033 34.8293 25.7468C34.8377 25.6406 34.8485 25.5739 34.8553 25.5385C35.793 23.9852 36.3326 22.2167 36.3326 20.3338C36.3326 18.2112 35.6733 16.2729 34.5384 14.612Z" fill="#7772F1" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.32773 6.49661C5.08113 8.2146 3.83266 10.4698 3.83266 12.833C3.83266 14.0114 4.13943 15.1463 4.71496 16.2017C4.93417 16.6037 4.99636 17.0183 5.0186 17.2991C5.04285 17.6051 5.03076 17.9197 5.00414 18.2139C4.95085 18.8028 4.82372 19.4701 4.67124 20.1274C4.49287 20.8962 4.26431 21.7162 4.03239 22.486C4.91281 22.166 5.87508 21.8381 6.78733 21.5719C7.52461 21.3568 8.26918 21.1702 8.93185 21.0654C9.5027 20.9752 10.3311 20.8864 11.0443 21.1332C12.6448 21.6869 14.4353 21.9997 16.3327 21.9997C19.9113 21.9997 23.0895 20.8886 25.3376 19.1694C27.5842 17.4514 28.8327 15.1962 28.8327 12.833C28.8327 10.4698 27.5842 8.2146 25.3376 6.49661C23.0895 4.77745 19.9113 3.66634 16.3327 3.66634C12.754 3.66634 9.57586 4.77745 7.32773 6.49661ZM5.30289 3.84875C8.18209 1.64702 12.0872 0.333008 16.3327 0.333008C20.5781 0.333008 24.4832 1.64702 27.3624 3.84875C30.2432 6.05167 32.166 9.21311 32.166 12.833C32.166 16.4529 30.2432 19.6144 27.3624 21.8173C24.4832 24.019 20.5781 25.333 16.3327 25.333C14.0942 25.333 11.9561 24.9681 10.0148 24.3041C10.0128 24.3095 9.85537 24.2941 9.45245 24.3578C8.98803 24.4313 8.39522 24.5751 7.72089 24.7719C6.37845 25.1635 4.87087 25.7176 3.72255 26.1645C1.73317 26.9387 -0.293418 25.0281 0.376849 22.9929C0.732099 21.9142 1.15108 20.5511 1.42414 19.3741C1.5617 18.7812 1.65096 18.2827 1.68437 17.9135C1.69596 17.7853 1.69896 17.6919 1.69829 17.6288C0.931153 16.1629 0.499324 14.5417 0.499324 12.833C0.499324 9.21311 2.42216 6.05167 5.30289 3.84875Z" fill="#7772F1" />
                            </svg>
                        </div>
                        <div>
                            <h6 className="contact-item-title">Talk to us</h6>
                            <a href='mailto:hello@createx.com' className="contact-item-desc">
                                hello@createx.com
                            </a>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="contact-item d-f">
                        <div>
                            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.668 9.83366C20.668 8.91318 19.9218 8.16699 19.0013 8.16699C18.0808 8.16699 17.3346 8.91318 17.3346 9.83366V19.0003C17.3346 19.4424 17.5102 19.8663 17.8228 20.1788L22.8228 25.1788C23.4737 25.8297 24.5289 25.8297 25.1798 25.1788C25.8307 24.528 25.8307 23.4727 25.1798 22.8218L20.668 18.31V9.83366Z" fill="#7772F1" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.0013 0.666992C8.87608 0.666992 0.667969 8.8751 0.667969 19.0003C0.667969 29.1255 8.87608 37.3337 19.0013 37.3337C29.1265 37.3337 37.3346 29.1255 37.3346 19.0003C37.3346 8.8751 29.1265 0.666992 19.0013 0.666992ZM4.0013 19.0003C4.0013 10.7161 10.717 4.00033 19.0013 4.00033C27.2856 4.00033 34.0013 10.7161 34.0013 19.0003C34.0013 27.2846 27.2856 34.0003 19.0013 34.0003C10.717 34.0003 4.0013 27.2846 4.0013 19.0003Z" fill="#7772F1" />
                            </svg>
                        </div>
                        <div>
                            <h6 className="contact-item-title">Working Hours</h6>
                            <p className="contact-item-desc">
                                Mon-Fri: 9 am — 6 pm <br />
                                Sat-Sun: days off
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <section className='contacts-started d-f align-center'>
                <div>
                    <h2 className="page-bl-title">Ready to get started?</h2>
                    <div className="contasts-started-services">
                        <p className="started-services-name">Services</p>
                        <div className="started-services-box d-f">
                            <div className="service">Social Media</div>
                            <div className="service text-uppercase">Seo</div>
                            <div className="service service__active">Research</div>
                            <div className="service">Content & PR</div>
                            <div className="service">Payed Traffic</div>
                        </div>
                    </div>
                    <form action="" className='contacts-started-fm'>
                        <div className="input-bl d-f">
                            <div>
                                <label htmlFor="contactsFName">First Name*</label>
                                <input type="text" name='contactsFName' id='contactsFName' placeholder='Your first name' />
                            </div>
                            <div>
                                <label htmlFor="contactsLName">Last Name*</label>
                                <input type="text" name='contactsLName' id='contactsLName' placeholder='Your last name' />
                            </div>
                        </div>
                        <div className="input-bl d-f">
                            <div>
                                <label htmlFor="contactsEmail">Email*</label>
                                <input type="email" name='contactsEmail' id='contactsEmail' placeholder='Your working email' />
                            </div>
                            <div>
                                <label htmlFor="contactsPhone">Last Name*</label>
                                <input type="tel" name='contactsPhone' id='contactsPhone' placeholder='Your phone number' />
                            </div>
                        </div>
                        <div className="input-bl d-f">
                            <div>
                                <label htmlFor="contactsCompany">Company</label>
                                <input type="text" name='contactsCompany' id='contactsCompany' placeholder='Your company name' />
                            </div>
                            <div>
                                <label htmlFor="contactsPosition">Position</label>
                                <input type="text" name='contactsPosition' id='contactsPosition' placeholder='Your position' />
                            </div>
                        </div>
                        <div className="input-bl">
                            <p>Approx. budget</p>
                            <div className="budget-bl">
                                <Box sx={{ width: 601 }}>
                                    <Slider
                                        getAriaLabel={() => 'Temperature range'}
                                        value={value}
                                        onChange={handleChange}
                                        valueLabelDisplay="auto"
                                        getAriaValueText={valuetext}
                                        marks={marks}

                                    />
                                </Box>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="contactsDetails">Additional Details</label>
                            <textarea name="contactsDetails" id="contactsDetails" placeholder='Your message'></textarea>
                        </div>
                        <div className="actions-bl d-f">
                            <div className="check-bl d-f">
                                <input type="checkbox" name="contactsAgree" id="contactsAgree" />
                                <label htmlFor="contactsAgree">I agree to receive communications from <br /> Createx SEO Agency</label>
                            </div>
                            <button type="button">Request a proposal</button>
                        </div>
                    </form>
                </div>
                <div><img src="/images/contact-illustration.png" alt="contact-illustration" /></div>
            </section>
        </>
    )
}

export default Contacts