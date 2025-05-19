import './css/Blog.css'

const Blog = () => {
    return (
        <>
            <main className='blog-main'>
                <div className="page-breadcrumb d-f align-center">
                    <div><img src="/images/home.png" alt="home" /></div>
                    <div>
                        <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.529247 0.362254C0.789596 0.101905 1.21171 0.101905 1.47206 0.362254L6.13872 5.02892C6.39907 5.28927 6.39907 5.71138 6.13872 5.97173L1.47206 10.6384C1.21171 10.8987 0.789596 10.8987 0.529247 10.6384C0.268897 10.378 0.268897 9.95594 0.529247 9.69559L4.72451 5.50033L0.529247 1.30506C0.268897 1.04471 0.268897 0.622604 0.529247 0.362254Z" fill="white" />
                        </svg>
                    </div>
                    <p className="page-breadcrumb-current">Blog</p>
                </div>
                <h1 className="blog-main-title">Blog</h1>
                <p className="blog-main-desc">
                    Thoughts, trends and up-to-date news in search
                    and digital marketing. Subsribe to our blog
                    and receive latest news weekly.
                </p>
                <form action="" className='blog-main-fm'>
                    <input type="text" placeholder='Search the blog' />
                    <button type="button">Search</button>
                </form>
            </main>
            <div className="blog-latest d-f">
                <div className="blog-latest-item">
                    <div className='latest-item-main'>
                        <p className="lates-item-badge">Latest Post</p>
                    </div>
                    <div className="latest-item-meta d-f align-center">
                        <p className="text-uppercase">Seo</p>
                        <div className="divider"></div>
                        <p className="latest-item-date">July 5, 2020</p>
                        <div className="divider"></div>
                        <p className="latest-item-author">By Diane Mccoy</p>
                    </div>
                    <h3 className="latest-item-title">How to Maximize Your ROI Through Scientific SEM?</h3>
                    <div className="latest-item-more d-f align-center">
                        <h4 className="more-title">Read more</h4>
                        <a href="" className="d-b">
                            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7929 0.792893C12.1834 0.402369 12.8166 0.402369 13.2071 0.792893L17.7071 5.29289C18.0976 5.68342 18.0976 6.31658 17.7071 6.70711L13.2071 11.2071C12.8166 11.5976 12.1834 11.5976 11.7929 11.2071C11.4024 10.8166 11.4024 10.1834 11.7929 9.79289L14.5858 7H1C0.447715 7 0 6.55228 0 6C0 5.44772 0.447715 5 1 5H14.5858L11.7929 2.20711C11.4024 1.81658 11.4024 1.18342 11.7929 0.792893Z" fill="#7772F1" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="blog-latest-item">
                    <div className='latest-item-main'>
                        <p className="lates-item-badge">Latest Post</p>
                    </div>
                    <div className="latest-item-meta d-f align-center">
                        <p className="text-uppercase">Marketing</p>
                        <div className="divider"></div>
                        <p className="latest-item-date">July 2, 2020</p>
                        <div className="divider"></div>
                        <p className="latest-item-author">By Diane Mccoy</p>
                    </div>
                    <h3 className="latest-item-title">The Basics of Blogging Search Engine Optimization.</h3>
                    <div className="latest-item-more d-f align-center">
                        <h4 className="more-title">Read more</h4>
                        <a href="" className="d-b">
                            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7929 0.792893C12.1834 0.402369 12.8166 0.402369 13.2071 0.792893L17.7071 5.29289C18.0976 5.68342 18.0976 6.31658 17.7071 6.70711L13.2071 11.2071C12.8166 11.5976 12.1834 11.5976 11.7929 11.2071C11.4024 10.8166 11.4024 10.1834 11.7929 9.79289L14.5858 7H1C0.447715 7 0 6.55228 0 6C0 5.44772 0.447715 5 1 5H14.5858L11.7929 2.20711C11.4024 1.81658 11.4024 1.18342 11.7929 0.792893Z" fill="#7772F1" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="blog-content d-f"></div>
        </>
    )
}

export default Blog