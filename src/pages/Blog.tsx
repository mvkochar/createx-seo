import React from 'react'
import { BlogItem } from '../components'
import BlogPostsList from '../components/BlogPostsList'
import './css/Blog.css'
import { Link } from 'react-router-dom'

const Blog = () => {
    const blogLength = BlogPostsList.length
    const categoryOneLength = BlogPostsList.filter((elem) => elem.category === "Media & Press").length
    const categoryTwoLength = BlogPostsList.filter((elem) => elem.category === "Ad Tips").length
    const categoryThreeLength = BlogPostsList.filter((elem) => elem.category === "Marketing").length
    const categoryFourLength = BlogPostsList.filter((elem) => elem.category === "SEO").length
    const categoryFiveLength = BlogPostsList.filter((elem) => elem.category === "Paid Search").length

    const [categoryName, setCategoryName] = React.useState("All")

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
                    <input type="text" name='searchQuery' placeholder='Search the blog' />
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
                        <Link to="/single-post" className="d-b">
                            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7929 0.792893C12.1834 0.402369 12.8166 0.402369 13.2071 0.792893L17.7071 5.29289C18.0976 5.68342 18.0976 6.31658 17.7071 6.70711L13.2071 11.2071C12.8166 11.5976 12.1834 11.5976 11.7929 11.2071C11.4024 10.8166 11.4024 10.1834 11.7929 9.79289L14.5858 7H1C0.447715 7 0 6.55228 0 6C0 5.44772 0.447715 5 1 5H14.5858L11.7929 2.20711C11.4024 1.81658 11.4024 1.18342 11.7929 0.792893Z" fill="#7772F1" />
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="blog-latest-item">
                    <div className='latest-item-main'>
                        <p className="lates-item-badge">Latest Post</p>
                    </div>
                    <div className="latest-item-meta d-f align-center">
                        <p>Marketing</p>
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
            <div className="blog-content d-f">
                <div>
                    <div className="blog-box d-f">
                        {
                            BlogPostsList.filter((elem) => elem.category === categoryName || categoryName === "All").map((post) => {
                                return (
                                    <BlogItem
                                        key={`blog-post${post.id}`}
                                        {...post}
                                    />
                                )
                            })
                        }
                    </div>
                    <div className="blog-pagination d-f align-center">
                        <button className='pagination-btn pagination-btn__active btn-clear d-b'>1</button>
                        <button className='pagination-btn btn-clear d-b'>2</button>
                        <button className='pagination-btn btn-clear d-b'>3</button>
                        <button className='pagination-btn btn-clear d-b'>4</button>
                        <button className='pagination-btn btn-clear d-b'>Next</button>
                        <button className='btn-clear d-b'>
                            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7929 0.792893C12.1834 0.402369 12.8166 0.402369 13.2071 0.792893L17.7071 5.29289C18.0976 5.68342 18.0976 6.31658 17.7071 6.70711L13.2071 11.2071C12.8166 11.5976 12.1834 11.5976 11.7929 11.2071C11.4024 10.8166 11.4024 10.1834 11.7929 9.79289L14.5858 7H1C0.447715 7 0 6.55228 0 6C0 5.44772 0.447715 5 1 5H14.5858L11.7929 2.20711C11.4024 1.81658 11.4024 1.18342 11.7929 0.792893Z" fill="#424551" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="blog-sidebar d-f">
                    <div>
                        <h4 className="sidebar-bl-title">Blog Categories</h4>
                        <div className="blog-categories d-f">
                            <div className={categoryName === "All" ? "d-f jc-sb category__active" : "d-f jc-sb"}>
                                <h5 className="category-name" onClick={() => setCategoryName("All")}>All</h5>
                                <p className="category-count">{blogLength}</p>
                            </div>
                            <div className={categoryName === "Media & Press" ? "d-f jc-sb category__active" : "d-f jc-sb"}>
                                <h5 className="category-name" onClick={() => setCategoryName("Media & Press")}>Media & Press</h5>
                                <p className="category-count">{categoryOneLength}</p>
                            </div>
                            <div className={categoryName === "Ad Tips" ? "d-f jc-sb category__active" : "d-f jc-sb"}>
                                <h5 className="category-name" onClick={() => setCategoryName("Ad Tips")}>Ad Tips</h5>
                                <p className="category-count">{categoryTwoLength}</p>
                            </div>
                            <div className={categoryName === "Marketing" ? "d-f jc-sb category__active" : "d-f jc-sb"}>
                                <h5 className="category-name" onClick={() => setCategoryName("Marketing")}>Marketing</h5>
                                <p className="category-count">{categoryThreeLength}</p>
                            </div>
                            <div className={categoryName === "SEO" ? "d-f jc-sb category__active" : "d-f jc-sb"}>
                                <h5 className="category-name text-uppercase" onClick={() => setCategoryName("SEO")}>Seo</h5>
                                <p className="category-count">{categoryFourLength}</p>
                            </div>
                            <div className={categoryName === "Paid Search" ? "d-f jc-sb category__active" : "d-f jc-sb"}>
                                <h5 className="category-name" onClick={() => setCategoryName("Paid Search")}>Paid Search</h5>
                                <p className="category-count">{categoryFiveLength}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="sidebar-bl-title">Now Trending</h4>
                        <div className="blog-trending d-f">
                            <div className="blog-trending-item d-f">
                                <div><img src="/images/blog-trending1.png" alt="blog-trending1" /></div>
                                <div>
                                    <p className="trending-item-date">July 5, 2020</p>
                                    <h5 className="trending-item-title">5 Surprising Ways to Combine Content Marketing with PPC</h5>
                                </div>
                            </div>
                            <div className="blog-trending-item d-f">
                                <div><img src="/images/blog-trending2.png" alt="blog-trending2" /></div>
                                <div>
                                    <p className="trending-item-date">April 9, 2020</p>
                                    <h5 className="trending-item-title">Why SEO Is All About Content Marketing?</h5>
                                </div>
                            </div>
                            <div className="blog-trending-item d-f">
                                <div><img src="/images/blog-trending3.png" alt="blog-trending3" /></div>
                                <div>
                                    <p className="trending-item-date">March 12, 2020</p>
                                    <h5 className="trending-item-title">10 tips for a small business digital marketing strategy</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="sidebar-bl-title">Tags</h4>
                        <div className="blog-tags d-f">
                            <div className='tag'>#tips&tricks</div>
                            <div className='tag'>#strategy</div>
                            <div className='tag'>#SMM</div>
                            <div className='tag'>#business</div>
                            <div className='tag'>#PPC</div>
                            <div className='tag'>#targeting</div>
                        </div>
                    </div>
                </div>
            </div>
            <section className='blog-subscribe d-f'>
                <div>
                    <h2 className="page-bl-title">Subsribe to our blog</h2>
                    <p className="blog-subscribe-desc">
                        And receive latest trends in search, marketing, digital and news.
                    </p>
                    <form action="" className='blog-subscribe-fm'>
                        <label htmlFor="subscribeEmail">Email</label>
                        <div className="input-wr">
                            <input type="email" name="subscribeEmail" id="subscribeEmail" placeholder='Your working email' />
                            <button type="button">Subscribe</button>
                        </div>
                        <div className="check-bl d-f align-center">
                            <input type="checkbox" name="subscribeAgree" id="subscribeAgree" />
                            <label htmlFor="subscribeAgree">I agree to receive communications from Createx SEO Agency.</label>
                        </div>
                    </form>
                </div>
                <div><img src="/images/blog-subscribe.png" alt="blog-subscribe" /></div>
            </section>
        </>
    )
}

export default Blog