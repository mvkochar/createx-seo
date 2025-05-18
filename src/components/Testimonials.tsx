const Testimonials = () => {
    return (
        <div className="home-testimonials">
            <h2 className="page-bl-title text-center">What our clients say</h2>
            <div className="home-testimonials-content d-f jc-sb align-center">
                <button className='home-testimonials-action'>
                    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.20222 11.2071C5.8117 11.5976 5.17853 11.5976 4.78801 11.2071L0.28801 6.70711C-0.102514 6.31658 -0.102514 5.68342 0.28801 5.29289L4.78801 0.792893C5.17853 0.402369 5.8117 0.402369 6.20222 0.792893C6.59275 1.18342 6.59275 1.81658 6.20222 2.20711L3.40933 5L16.9951 5C17.5474 5 17.9951 5.44772 17.9951 6C17.9951 6.55228 17.5474 7 16.9951 7L3.40933 7L6.20222 9.79289C6.59275 10.1834 6.59275 10.8166 6.20222 11.2071Z" fill="#424551" />
                    </svg>
                </button>
                <div className="home-testimonials-info">
                    <div className="home-testimonials-review d-f">
                        <div><img src="/images/braces.png" alt="braces" /></div>
                        <div>
                            <p className="home-testimonials-desc">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Justo, amet lectus quam viverra mus lobortis fermentum amet, eu.
                                Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis
                                quis non. Congue tortor in euismod vulputate etiam eros.
                                Pulvinar neque pharetra arcu diam maecenas diam integer in.
                            </p>
                            <div className="home-testimonials-author d-f align-center">
                                <div><img src="/images/author.png" alt="author" /></div>
                                <div>
                                    <h4 className="author-name">Courtney Alexander</h4>
                                    <p className="author-pos">Position, Company name</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='home-testimonials-action'>
                    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7929 0.792893C12.1834 0.402369 12.8166 0.402369 13.2071 0.792893L17.7071 5.29289C18.0976 5.68342 18.0976 6.31658 17.7071 6.70711L13.2071 11.2071C12.8166 11.5976 12.1834 11.5976 11.7929 11.2071C11.4024 10.8166 11.4024 10.1834 11.7929 9.79289L14.5858 7H1C0.447715 7 0 6.55228 0 6C0 5.44772 0.447715 5 1 5H14.5858L11.7929 2.20711C11.4024 1.81658 11.4024 1.18342 11.7929 0.792893Z" fill="#424551" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Testimonials