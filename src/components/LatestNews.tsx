const LatestNews = () => {
    return (
        <div className="home-blog d-f">
            <div>
                <h2 className="page-bl-title">Latest news</h2>
                <p className="home-blog-desc">
                    Check more posts in our blog for
                    featured news and advertising insights
                </p>
                <a href="" className="home-blog-link">Go to blog</a>
            </div>
            <div className="home-blog-item">
                <div><img src="/images/latest-post1.png" alt="latest-post1" /></div>
                <div className="blog-item-meta d-f align-center">
                    <p className='text-uppercase'>Seo</p>
                    <div><img src="/images/divider.png" alt="divider" /></div>
                    <p className="blog-item-date">July 5, 2020</p>
                    <div><img src="/images/divider.png" alt="divider" /></div>
                    <p className="blog-item-author">By Diane Mccoy</p>
                </div>
                <h3 className="blog-item-title">
                    How to Maximize Your ROI Through Scientific SEM?
                </h3>
                <p className="blog-item-desc">
                    Vulputate vitae pellentesque scelerisque
                    luctus consequat mattis pellentesque dui odio...
                </p>
                <div className="blog-item-more d-f align-center">
                    <h4 className="more-title">Read more</h4>
                    <a href="" className="more-link">
                        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7929 0.792893C12.1834 0.402369 12.8166 0.402369 13.2071 0.792893L17.7071 5.29289C18.0976 5.68342 18.0976 6.31658 17.7071 6.70711L13.2071 11.2071C12.8166 11.5976 12.1834 11.5976 11.7929 11.2071C11.4024 10.8166 11.4024 10.1834 11.7929 9.79289L14.5858 7H1C0.447715 7 0 6.55228 0 6C0 5.44772 0.447715 5 1 5H14.5858L11.7929 2.20711C11.4024 1.81658 11.4024 1.18342 11.7929 0.792893Z" fill="#7772F1" />
                        </svg>
                    </a>
                </div>
            </div>
            <div className="home-blog-item">
                <div><img src="/images/latest-post2.png" alt="latest-post2" /></div>
                <div className="blog-item-meta d-f align-center">
                    <p>Marketing</p>
                    <div><img src="/images/divider.png" alt="divider" /></div>
                    <p className="blog-item-date">July 2, 2020</p>
                    <div><img src="/images/divider.png" alt="divider" /></div>
                    <p className="blog-item-author">By Diane Mccoy</p>
                </div>
                <h3 className="blog-item-title">
                    The Basics of Blogging Search Engine Optimization.
                </h3>
                <p className="blog-item-desc">
                    Mauris tincidunt sollicitudin tristique odio eget volutpat.
                    Fringilla viverra amet, mi interdum blandit...
                </p>
                <div className="blog-item-more d-f align-center">
                    <h4 className="more-title">Read more</h4>
                    <a href="" className="more-link">
                        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7929 0.792893C12.1834 0.402369 12.8166 0.402369 13.2071 0.792893L17.7071 5.29289C18.0976 5.68342 18.0976 6.31658 17.7071 6.70711L13.2071 11.2071C12.8166 11.5976 12.1834 11.5976 11.7929 11.2071C11.4024 10.8166 11.4024 10.1834 11.7929 9.79289L14.5858 7H1C0.447715 7 0 6.55228 0 6C0 5.44772 0.447715 5 1 5H14.5858L11.7929 2.20711C11.4024 1.81658 11.4024 1.18342 11.7929 0.792893Z" fill="#7772F1" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default LatestNews