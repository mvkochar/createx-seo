const Studies = () => {
    return (
        <div className="home-studies">
            <div className="d-f jc-sb align-center">
                <h2 className="page-bl-title">Read our clients' case studies</h2>
                <div className="home-studies-actions d-f">
                    <button className='action-btn'>
                        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.20711 11.2071C5.81658 11.5976 5.18342 11.5976 4.79289 11.2071L0.292892 6.70711C-0.0976315 6.31658 -0.0976315 5.68342 0.292892 5.29289L4.79289 0.792893C5.18342 0.402369 5.81658 0.402369 6.20711 0.792893C6.59763 1.18342 6.59763 1.81658 6.20711 2.20711L3.41421 5L17 5C17.5523 5 18 5.44772 18 6C18 6.55228 17.5523 7 17 7L3.41421 7L6.20711 9.79289C6.59763 10.1834 6.59763 10.8166 6.20711 11.2071Z" fill="#424551" />
                        </svg>
                    </button>
                    <button className='action-btn'>
                        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7929 0.792893C12.1834 0.402369 12.8166 0.402369 13.2071 0.792893L17.7071 5.29289C18.0976 5.68342 18.0976 6.31658 17.7071 6.70711L13.2071 11.2071C12.8166 11.5976 12.1834 11.5976 11.7929 11.2071C11.4024 10.8166 11.4024 10.1834 11.7929 9.79289L14.5858 7H1C0.447715 7 0 6.55228 0 6C0 5.44772 0.447715 5 1 5H14.5858L11.7929 2.20711C11.4024 1.81658 11.4024 1.18342 11.7929 0.792893Z" fill="#424551" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="home-studies-box d-f jc-sb">
                <div className="home-studies-item">
                    <div className='studies-item-logo'>
                        <img src="/images/studies-logo1.png" alt="studies-logo1" />
                    </div>
                    <h4 className="studies-item-title">Charity organisation</h4>
                    <div className="divider"></div>
                    <p className="studies-item-desc">
                        Createx SEO Agency helped National Inc.
                        increase their MQL to SQL conversion rate by 300%.
                    </p>
                    <div className="studies-item-features d-f">
                        <div className="feature d-f align-center">
                            <div><img src="/images/figure1-bg.png" alt="figure1" width={40} /></div>
                            <div>
                                <h5 className="feature-num">90%</h5>
                                <p className="feature-desc">Engagement</p>
                            </div>
                        </div>
                        <div className="feature d-f align-center">
                            <div className='feature-ellipse'></div>
                            <div>
                                <h5 className="feature-num">100%</h5>
                                <p className="feature-desc">Deliverability</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-studies-item">
                    <div className='studies-item-logo'>
                        <img src="/images/studies-logo2.png" alt="studies-logo2" />
                    </div>
                    <h4 className="studies-item-title">Oil and natural resources</h4>
                    <div className="divider"></div>
                    <p className="studies-item-desc">
                        With an advanced A/B testing and usability analysis, Createx
                        SEO Agency helps Del Mar see a 400% increase in conversion rate.
                    </p>
                    <div className="studies-item-features d-f">
                        <div className="feature d-f align-center">
                            <div className='feature-ellipse'></div>
                            <div>
                                <h5 className="feature-num">200%</h5>
                                <p className="feature-desc">Growth in sales</p>
                            </div>
                        </div>
                        <div>
                            <h5 className="feature-num">1,400</h5>
                            <p className="feature-desc">Target investors</p>
                        </div>
                    </div>
                </div>
                <div className="home-studies-item">
                    <div className='studies-item-logo'>
                        <img src="/images/studies-logo3.png" alt="studies-logo3" />
                    </div>
                    <h4 className="studies-item-title">Personal care</h4>
                    <div className="divider"></div>
                    <p className="studies-item-desc">
                        We helped Sunset company break through
                        a noisy industry and better understand
                        their buyer's journey.
                    </p>
                    <div className="studies-item-features d-f">
                        <div className="feature d-f align-center">
                            <div><img src="/images/figure2-bg.png" alt="figure2" width={40} /></div>
                            <div>
                                <h5 className="feature-num">70%</h5>
                                <p className="feature-desc">Open Rate</p>
                            </div>
                        </div>
                        <div className="feature d-f align-center">
                            <div className='feature-ellipse'></div>
                            <div>
                                <h5 className="feature-num">200%</h5>
                                <p className="feature-desc">Growth in sales</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Studies