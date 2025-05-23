import { Link } from 'react-router-dom'
import { LatestNews, Testimonials } from '../components'
import './css/CaseStudies.css'

const CaseStudies = () => {
    return (
        <>
            <main className='case-main'>
                <div className="page-breadcrumb d-f align-center">
                    <div><img src="/images/home.png" alt="home" /></div>
                    <div>
                        <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.529247 0.362254C0.789596 0.101905 1.21171 0.101905 1.47206 0.362254L6.13872 5.02892C6.39907 5.28927 6.39907 5.71138 6.13872 5.97173L1.47206 10.6384C1.21171 10.8987 0.789596 10.8987 0.529247 10.6384C0.268897 10.378 0.268897 9.95594 0.529247 9.69559L4.72451 5.50033L0.529247 1.30506C0.268897 1.04471 0.268897 0.622604 0.529247 0.362254Z" fill="white" />
                        </svg>
                    </div>
                    <p className="page-breadcrumb-current">Case Studies</p>
                </div>
                <h1 className="case-main-title">Case Studies</h1>
                <p className="case-main-desc">
                    We help our clients get better results with our creative
                    and data-driven approach to online advertising. View our
                    case study portfolio and learn more about the process
                    that sets us apart.
                </p>
                <form action="" className='case-main-fm'>
                    <label htmlFor="subscribeEmail">Email</label>
                    <div className="input-wr">
                        <input type="email" name="subscribeEmail" id="subscribeEmail" placeholder='Your working email' />
                        <button type="button">Subscribe</button>
                    </div>
                </form>
            </main>
            <div className="case-tabs d-f">
                <button className='tab-btn tab-btn__active'>All case studies</button>
                <button className='tab-btn'>Social Media</button>
                <button className='tab-btn'>Seo</button>
                <button className='tab-btn'>Research</button>
                <button className='tab-btn'>Content & PR</button>
                <button className='tab-btn'>Payed Traffic</button>
            </div>
            <div className="case-box d-f">
                <div className="case-card">
                    <div className="case-card-main">
                        <div><img src="/images/case-studies/client-logo1.png" alt="client-logo1" /></div>
                        <p className="case-card-category">Charity organisation</p>
                    </div>
                    <div className="case-card-features d-f">
                        <div className="feature d-f align-center">
                            <div><img src="/images/figure1-bg.png" alt="figure1" width={40} /></div>
                            <div>
                                <h4 className="feature-num">90%</h4>
                                <p className="feature-desc">Engagement</p>
                            </div>
                        </div>
                        <div className="feature d-f align-center">
                            <div><img src="/images/circle1.png" alt="circle1" width={40} /></div>
                            <div>
                                <h4 className="feature-num">100%</h4>
                                <p className="feature-desc">Deliverability</p>
                            </div>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <p className="case-card-desc">
                        Createx SEO Agency helped JNational Inc. increase
                        their MQL to SQL conversion rate by 300%.
                    </p>
                    <div className="case-card-view d-f align-center">
                        <h4 className="view-title">View case</h4>
                        <a href="" className="d-b">
                            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7929 0.792893C12.1834 0.402369 12.8166 0.402369 13.2071 0.792893L17.7071 5.29289C18.0976 5.68342 18.0976 6.31658 17.7071 6.70711L13.2071 11.2071C12.8166 11.5976 12.1834 11.5976 11.7929 11.2071C11.4024 10.8166 11.4024 10.1834 11.7929 9.79289L14.5858 7H1C0.447715 7 0 6.55228 0 6C0 5.44772 0.447715 5 1 5H14.5858L11.7929 2.20711C11.4024 1.81658 11.4024 1.18342 11.7929 0.792893Z" fill="#7772F1" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="case-card">
                    <div className="case-card-main">
                        <div><img src="/images/case-studies/client-logo2.png" alt="client-logo2" /></div>
                        <p className="case-card-category">Oil and natural resources</p>
                    </div>
                    <div className="case-card-features d-f">
                        <div className="feature d-f align-center">
                            <div><img src="/images/circle2.png" alt="circle2" width={40} /></div>
                            <div>
                                <h4 className="feature-num">200%</h4>
                                <p className="feature-desc">Growth in sales</p>
                            </div>
                        </div>
                        <div>
                            <h4 className="feature-num">1,400</h4>
                            <p className="feature-desc">Target investors</p>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <p className="case-card-desc">
                        With an advanced A/B testing and usability analysis,
                        Createx SEO Agency helps Del Mar see a 400% increase
                        in conversion rate.
                    </p>
                    <div className="case-card-view d-f align-center">
                        <h4 className="view-title">View case</h4>
                        <a href="" className="d-b">
                            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7929 0.792893C12.1834 0.402369 12.8166 0.402369 13.2071 0.792893L17.7071 5.29289C18.0976 5.68342 18.0976 6.31658 17.7071 6.70711L13.2071 11.2071C12.8166 11.5976 12.1834 11.5976 11.7929 11.2071C11.4024 10.8166 11.4024 10.1834 11.7929 9.79289L14.5858 7H1C0.447715 7 0 6.55228 0 6C0 5.44772 0.447715 5 1 5H14.5858L11.7929 2.20711C11.4024 1.81658 11.4024 1.18342 11.7929 0.792893Z" fill="#7772F1" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="case-card">
                    <div className="case-card-main">
                        <div><img src="/images/case-studies/client-logo3.png" alt="client-logo3" /></div>
                        <p className="case-card-category">Electric company</p>
                    </div>
                    <div className="case-card-features d-f">
                        <div className="feature d-f align-center">
                            <div><img src="/images/figure2-bg.png" alt="figure2" width={40} /></div>
                            <div>
                                <h4 className="feature-num">80%</h4>
                                <p className="feature-desc">Open Rate</p>
                            </div>
                        </div>
                        <div>
                            <h4 className="feature-num">1,840</h4>
                            <p className="feature-desc">Target investors</p>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <p className="case-card-desc">
                        With an advanced A/B testing and usability analysis,
                        Createx SEO Agency helps Lovato see a 200% increase
                        in conversion rate.
                    </p>
                    <div className="case-card-view d-f align-center">
                        <h4 className="view-title">View case</h4>
                        <Link to="/case-study" className="d-b">
                            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7929 0.792893C12.1834 0.402369 12.8166 0.402369 13.2071 0.792893L17.7071 5.29289C18.0976 5.68342 18.0976 6.31658 17.7071 6.70711L13.2071 11.2071C12.8166 11.5976 12.1834 11.5976 11.7929 11.2071C11.4024 10.8166 11.4024 10.1834 11.7929 9.79289L14.5858 7H1C0.447715 7 0 6.55228 0 6C0 5.44772 0.447715 5 1 5H14.5858L11.7929 2.20711C11.4024 1.81658 11.4024 1.18342 11.7929 0.792893Z" fill="#7772F1" />
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="case-card">
                    <div className="case-card-main">
                        <div><img src="/images/case-studies/client-logo4.png" alt="client-logo4" /></div>
                        <p className="case-card-category">Personal care</p>
                    </div>
                    <div className="case-card-features d-f">
                        <div className="feature d-f align-center">
                            <div><img src="/images/figure2-bg.png" alt="figure2" width={40} /></div>
                            <div>
                                <h4 className="feature-num">70%</h4>
                                <p className="feature-desc">Open rate</p>
                            </div>
                        </div>
                        <div className="feature d-f align-center">
                            <div><img src="/images/circle3.png" alt="circle3" width={40} /></div>
                            <div>
                                <h4 className="feature-num">200%</h4>
                                <p className="feature-desc">Growth in sales</p>
                            </div>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <p className="case-card-desc">
                        We helped Sunset company break through a noisy
                        industry and better understand their buyer's journey.
                    </p>
                    <div className="case-card-view d-f align-center">
                        <h4 className="view-title">View case</h4>
                        <a href="" className="d-b">
                            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7929 0.792893C12.1834 0.402369 12.8166 0.402369 13.2071 0.792893L17.7071 5.29289C18.0976 5.68342 18.0976 6.31658 17.7071 6.70711L13.2071 11.2071C12.8166 11.5976 12.1834 11.5976 11.7929 11.2071C11.4024 10.8166 11.4024 10.1834 11.7929 9.79289L14.5858 7H1C0.447715 7 0 6.55228 0 6C0 5.44772 0.447715 5 1 5H14.5858L11.7929 2.20711C11.4024 1.81658 11.4024 1.18342 11.7929 0.792893Z" fill="#7772F1" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="case-card">
                    <div className="case-card-main">
                        <div><img src="/images/case-studies/client-logo5.png" alt="client-logo5" /></div>
                        <p className="case-card-category">Departments stores</p>
                    </div>
                    <div className="case-card-features d-f">
                        <div className="feature d-f align-center">
                            <div><img src="/images/figure3-bg.png" alt="figure3" width={40} /></div>
                            <div>
                                <h4 className="feature-num">70%</h4>
                                <p className="feature-desc">Increase in leads</p>
                            </div>
                        </div>
                        <div>
                            <h4 className="feature-num">190+</h4>
                            <p className="feature-desc">Prospects</p>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <p className="case-card-desc">
                        We helped Dove company break through 
                        a noisy industry and better understand 
                        their buyer's journey.
                    </p>
                    <div className="case-card-view d-f align-center">
                        <h4 className="view-title">View case</h4>
                        <a href="" className="d-b">
                            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7929 0.792893C12.1834 0.402369 12.8166 0.402369 13.2071 0.792893L17.7071 5.29289C18.0976 5.68342 18.0976 6.31658 17.7071 6.70711L13.2071 11.2071C12.8166 11.5976 12.1834 11.5976 11.7929 11.2071C11.4024 10.8166 11.4024 10.1834 11.7929 9.79289L14.5858 7H1C0.447715 7 0 6.55228 0 6C0 5.44772 0.447715 5 1 5H14.5858L11.7929 2.20711C11.4024 1.81658 11.4024 1.18342 11.7929 0.792893Z" fill="#7772F1" />
                            </svg>
                        </a>
                    </div>
                </div>
                   <div className="case-card">
                    <div className="case-card-main">
                        <div><img src="/images/case-studies/client-logo6.png" alt="client-logo6" /></div>
                        <p className="case-card-category">Electric cars, solar & clean energy</p>
                    </div>
                    <div className="case-card-features d-f">
                        <div className="feature d-f align-center">
                            <div><img src="/images/circle1.png" alt="circle1" width={40} /></div>
                            <div>
                                <h4 className="feature-num">200%</h4>
                                <p className="feature-desc">ROI</p>
                            </div>
                        </div>
                        <div>
                            <h4 className="feature-num">$12,000</h4>
                            <p className="feature-desc">Increase per month</p>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <p className="case-card-desc">
                        We helped Dove company break through 
                        a noisy industry and better understand 
                        their buyer's journey.
                    </p>
                    <div className="case-card-view d-f align-center">
                        <h4 className="view-title">View case</h4>
                        <a href="" className="d-b">
                            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7929 0.792893C12.1834 0.402369 12.8166 0.402369 13.2071 0.792893L17.7071 5.29289C18.0976 5.68342 18.0976 6.31658 17.7071 6.70711L13.2071 11.2071C12.8166 11.5976 12.1834 11.5976 11.7929 11.2071C11.4024 10.8166 11.4024 10.1834 11.7929 9.79289L14.5858 7H1C0.447715 7 0 6.55228 0 6C0 5.44772 0.447715 5 1 5H14.5858L11.7929 2.20711C11.4024 1.81658 11.4024 1.18342 11.7929 0.792893Z" fill="#7772F1" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="case-more d-f align-center">
                <div><img src="/images/convert.png" alt="convert" /></div>
                <button className='case-more-btn'>Load more</button>
            </div>
            <div className="case-bottom">
                <div className="case-clients"><img src="/images/clients-logos.png" alt="clients-logos" /></div>
                <div className="case-testimonials">
                    <Testimonials/>
                </div>
                <LatestNews/>
            </div>
        </>
    )
}

export default CaseStudies