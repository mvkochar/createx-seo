import './css/SinglePost.css'

const SinglePost = () => {
    return (
        <>
            <main className='post-main'>
                <div className="page-breadcrumb d-f align-center">
                    <div><img src="/images/home.png" alt="home" /></div>
                    <div>
                        <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.529247 0.362254C0.789596 0.101905 1.21171 0.101905 1.47206 0.362254L6.13872 5.02892C6.39907 5.28927 6.39907 5.71138 6.13872 5.97173L1.47206 10.6384C1.21171 10.8987 0.789596 10.8987 0.529247 10.6384C0.268897 10.378 0.268897 9.95594 0.529247 9.69559L4.72451 5.50033L0.529247 1.30506C0.268897 1.04471 0.268897 0.622604 0.529247 0.362254Z" fill="white" />
                        </svg>
                    </div>
                    <p className="page-breadcrumb-previous">Blog</p>
                    <div>
                        <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.529247 0.362254C0.789596 0.101905 1.21171 0.101905 1.47206 0.362254L6.13872 5.02892C6.39907 5.28927 6.39907 5.71138 6.13872 5.97173L1.47206 10.6384C1.21171 10.8987 0.789596 10.8987 0.529247 10.6384C0.268897 10.378 0.268897 9.95594 0.529247 9.69559L4.72451 5.50033L0.529247 1.30506C0.268897 1.04471 0.268897 0.622604 0.529247 0.362254Z" fill="white" />
                        </svg>
                    </div>
                    <p className="page-breadcrumb-current">How to Increase Your ROI Through Scientific SEM?</p>
                </div>
                <h1 className="post-main-title">How to Increase Your ROI Through Scientific SEM?</h1>
            </main>
            <div className="post-content">
                <div className="post-box d-f">
                    <div>
                        <div className="post-meta d-f">
                            <div>
                                <p className="meta-bl-name">Published</p>
                                <p className="meta-bl-desc post-meta-date">July 5, 2020</p>
                            </div>
                            <div>
                                <p className="meta-bl-name">Reading time</p>
                                <p className="meta-bl-desc post-meta-duration">4 min</p>
                            </div>
                            <div className="post-meta-share d-f align-center">
                                <p className="meta-bl-desc">Share</p>
                                <a href="" className="d-b">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.5628 1.00458L14.7856 1C11.6654 1 9.64903 3.12509 9.64903 6.41423V8.91055H6.85662C6.61532 8.91055 6.41992 9.1115 6.41992 9.35937V12.9763C6.41992 13.2241 6.61554 13.4249 6.85662 13.4249H9.64903V22.5514C9.64903 22.7993 9.84443 23 10.0857 23H13.729C13.9703 23 14.1657 22.799 14.1657 22.5514V13.4249H17.4307C17.672 13.4249 17.8674 13.2241 17.8674 12.9763L17.8688 9.35937C17.8688 9.24036 17.8226 9.12638 17.7409 9.04215C17.6591 8.95793 17.5477 8.91055 17.4318 8.91055H14.1657V6.79439C14.1657 5.77728 14.4017 5.26094 15.6915 5.26094L17.5624 5.26025C17.8035 5.26025 17.9989 5.0593 17.9989 4.81166V1.45317C17.9989 1.20576 17.8037 1.00504 17.5628 1.00458Z" fill="#787A80" />
                                    </svg>
                                </a>
                                <a href="" className="d-b">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.5 5.77233C21.7271 6.10027 20.8978 6.32267 20.0264 6.42196C20.9161 5.91181 21.5972 5.10263 21.92 4.1414C21.0854 4.61383 20.1642 4.95688 19.1826 5.14285C18.3966 4.33994 17.2785 3.83984 16.0384 3.83984C13.6593 3.83984 11.7303 5.68691 11.7303 7.9637C11.7303 8.2866 11.7683 8.60199 11.8418 8.90357C8.26201 8.73141 5.08768 7.08917 2.96314 4.59372C2.59176 5.20189 2.38049 5.91053 2.38049 6.66697C2.38049 8.09814 3.14161 9.36093 4.2964 10.0997C3.5904 10.0771 2.92639 9.89116 2.34508 9.58205V9.63357C2.34508 11.6314 3.83056 13.2988 5.80024 13.6783C5.43936 13.7713 5.05882 13.8228 4.66514 13.8228C4.38696 13.8228 4.11794 13.7964 3.85417 13.7461C4.40267 15.3859 5.99315 16.5783 7.87756 16.611C6.40388 17.7167 4.54573 18.3739 2.52749 18.3739C2.17976 18.3739 1.83724 18.3537 1.5 18.3173C3.40671 19.4896 5.67036 20.1732 8.10327 20.1732C16.028 20.1732 20.3597 13.8881 20.3597 8.43741L20.3453 7.90341C21.1917 7.32537 21.9239 6.59912 22.5 5.77233Z" fill="#787A80" />
                                    </svg>
                                </a>
                                <a href="" className="d-b">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.995 22L22 21.9992V14.6642C22 11.0758 21.2275 8.31167 17.0325 8.31167C15.0158 8.31167 13.6625 9.41833 13.11 10.4675H13.0517V8.64667H9.07416V21.9992H13.2158V15.3875C13.2158 13.6467 13.5458 11.9633 15.7017 11.9633C17.8258 11.9633 17.8575 13.95 17.8575 15.4992V22H21.995Z" fill="#787A80" />
                                        <path d="M2.32999 8.6475H6.47666V22H2.32999V8.6475Z" fill="#787A80" />
                                        <path d="M4.40167 2C3.07583 2 2 3.07583 2 4.40167C2 5.7275 3.07583 6.82583 4.40167 6.82583C5.7275 6.82583 6.80333 5.7275 6.80333 4.40167C6.8025 3.07583 5.72667 2 4.40167 2Z" fill="#787A80" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="post-about d-f">
                            <p className="post-desc-bold">
                                Vulputate vitae pellentesque scelerisque luctus consequat mattis
                                pellentesque dui odio. Interdum aenean sit malesuada ornare sed
                                gravida rhoncus, congue. Purus auctor nullam diam quis est
                                hendrerit ac euismod.
                            </p>
                            <p className="post-desc">
                                At facilisi sapien posuere eget nunc senectus proin nullam.
                                Tortor senectus in et sagittis, vitae diam cras dignissim.
                                Varius adipiscing eget diam nisi. Orci, consectetur vulputate
                                metus ornare pharetra, neque, fermentum. Vel nec rhoncus, non nunc,
                                neque in massa. Feugiat leo nam nisl lacinia amet, odio. Mi varius
                                viverra risus vel.
                            </p>
                            <p className="post-desc">
                                Amet, morbi sed pharetra, elit eget mi potenti. Condimentum orci
                                interdum feugiat lectus libero duis. Nisl massa, elementum varius
                                sit. Nunc felis, porttitor aliquam urna, accumsan et sed. Aliquet
                                non sed duis diam vehicula rhoncus.
                            </p>
                        </div>
                        <div className="post-info d-f">
                            <div>
                                <h2 className="page-bl-title">Why SEM Without CRO Is Impossible?</h2>
                                <p className="post-desc">
                                    Enim, vel massa odio diam. Blandit massa gravida feugiat elementum
                                    id nec sed leo. Nisi in ornare lectus eget. Urna, risus, consectetur
                                    volutpat lorem purus. Velit aliquet nibh vitae maecenas. Consectetur
                                    neque ut aliquam eros, purus enim dignissim aenean vitae. Ultrices
                                    fames augue mattis tortor est justo, pharetra nibh risus. Facilisi
                                    at porttitor volutpat natoque proin amet, nulla. Vivamus ut lobortis
                                    sagittis curabitur tellus convallis eget netus vitae.
                                </p>
                                <div className="post-info-pic"><img src="/images/post.png" alt="post" /></div>
                                <div className="post-info-quote d-f">
                                    <div><img src="/images/braces.png" alt="braces" /></div>
                                    <p className="post-desc-bold">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Justo, amet lectus quam viverra mus lobortis fermentum amet,
                                        eu. Pulvinar eu sed purus  facilisi. Vitae id turpis tempus
                                        ornare turpis quis non. Congue tortor in tot euismod vulputate
                                        etiam eros. Vel accumsan at elit neque, ipsum.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <h2 className="page-bl-title">Check your conversion tracking</h2>
                                <p className="post-desc">
                                    Mauris amet arcu nisl vel dictum tellus. Sed rhoncus, ut sed id
                                    ut erat mattis. Vitae mus blandit in neque amet non fringilla blandit:
                                </p>
                                <ul className='post-info-list'>
                                    <li>Dui, lectus at dui magna vitae vitae egestas sed.</li>
                                    <li>Vulputate placerat amet pulvinar lorem nisl.</li>
                                    <li>Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.</li>
                                    <li>Etiam duis lobortis in fames ultrices commodo nibh.</li>
                                </ul>
                                <p className="post-desc">
                                    Enim, vel massa odio diam. Blandit massa gravida feugiat elementum id nec
                                    sed leo. Nisi in ornare lectus eget. Urna, risus, consectetur volutpat
                                    lorem purus. Velit aliquet nibh vitae maecenas. Consectetur neque ut aliquam
                                    eros, purus enim dignissim aenean vitae. Ultrices fames augue mattis tortor
                                    est justo, pharetra nibh risus. Facilisi at porttitor volutpat natoque proin
                                    amet, nulla. Vivamus ut lobortis sagittis curabitur tellus convallis eget netus vitae.
                                </p>
                            </div>
                            <div className="d-f jc-sb">
                                <div className="post-tags d-f align-center">
                                    <p className="tags-name">Tags:</p>
                                    <p className="tag">#business</p>
                                    <p className="tag">#PPC</p>
                                    <p className="tag">#targeting</p>
                                </div>
                                <div className="post-meta-share d-f align-center">
                                    <p className="share-name">Share:</p>
                                    <a href="" className="d-b">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.5628 1.00458L14.7856 1C11.6654 1 9.64903 3.12509 9.64903 6.41423V8.91055H6.85662C6.61532 8.91055 6.41992 9.1115 6.41992 9.35937V12.9763C6.41992 13.2241 6.61554 13.4249 6.85662 13.4249H9.64903V22.5514C9.64903 22.7993 9.84443 23 10.0857 23H13.729C13.9703 23 14.1657 22.799 14.1657 22.5514V13.4249H17.4307C17.672 13.4249 17.8674 13.2241 17.8674 12.9763L17.8688 9.35937C17.8688 9.24036 17.8226 9.12638 17.7409 9.04215C17.6591 8.95793 17.5477 8.91055 17.4318 8.91055H14.1657V6.79439C14.1657 5.77728 14.4017 5.26094 15.6915 5.26094L17.5624 5.26025C17.8035 5.26025 17.9989 5.0593 17.9989 4.81166V1.45317C17.9989 1.20576 17.8037 1.00504 17.5628 1.00458Z" fill="#787A80" />
                                        </svg>
                                    </a>
                                    <a href="" className="d-b">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22.5 5.77233C21.7271 6.10027 20.8978 6.32267 20.0264 6.42196C20.9161 5.91181 21.5972 5.10263 21.92 4.1414C21.0854 4.61383 20.1642 4.95688 19.1826 5.14285C18.3966 4.33994 17.2785 3.83984 16.0384 3.83984C13.6593 3.83984 11.7303 5.68691 11.7303 7.9637C11.7303 8.2866 11.7683 8.60199 11.8418 8.90357C8.26201 8.73141 5.08768 7.08917 2.96314 4.59372C2.59176 5.20189 2.38049 5.91053 2.38049 6.66697C2.38049 8.09814 3.14161 9.36093 4.2964 10.0997C3.5904 10.0771 2.92639 9.89116 2.34508 9.58205V9.63357C2.34508 11.6314 3.83056 13.2988 5.80024 13.6783C5.43936 13.7713 5.05882 13.8228 4.66514 13.8228C4.38696 13.8228 4.11794 13.7964 3.85417 13.7461C4.40267 15.3859 5.99315 16.5783 7.87756 16.611C6.40388 17.7167 4.54573 18.3739 2.52749 18.3739C2.17976 18.3739 1.83724 18.3537 1.5 18.3173C3.40671 19.4896 5.67036 20.1732 8.10327 20.1732C16.028 20.1732 20.3597 13.8881 20.3597 8.43741L20.3453 7.90341C21.1917 7.32537 21.9239 6.59912 22.5 5.77233Z" fill="#787A80" />
                                        </svg>
                                    </a>
                                    <a href="" className="d-b">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21.995 22L22 21.9992V14.6642C22 11.0758 21.2275 8.31167 17.0325 8.31167C15.0158 8.31167 13.6625 9.41833 13.11 10.4675H13.0517V8.64667H9.07416V21.9992H13.2158V15.3875C13.2158 13.6467 13.5458 11.9633 15.7017 11.9633C17.8258 11.9633 17.8575 13.95 17.8575 15.4992V22H21.995Z" fill="#787A80" />
                                            <path d="M2.32999 8.6475H6.47666V22H2.32999V8.6475Z" fill="#787A80" />
                                            <path d="M4.40167 2C3.07583 2 2 3.07583 2 4.40167C2 5.7275 3.07583 6.82583 4.40167 6.82583C5.7275 6.82583 6.80333 5.7275 6.80333 4.40167C6.8025 3.07583 5.72667 2 4.40167 2Z" fill="#787A80" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="post-navigation d-f jc-sb">
                            <div>
                                <div className="post-navigation-action d-f align-center">
                                    <button className='btn-clear d-b'>
                                        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.20711 11.2071C5.81658 11.5976 5.18342 11.5976 4.79289 11.2071L0.292892 6.70711C-0.0976315 6.31658 -0.0976315 5.68342 0.292892 5.29289L4.79289 0.792893C5.18342 0.402369 5.81658 0.402369 6.20711 0.792893C6.59763 1.18342 6.59763 1.81658 6.20711 2.20711L3.41421 5L17 5C17.5523 5 18 5.44772 18 6C18 6.55228 17.5523 7 17 7L3.41421 7L6.20711 9.79289C6.59763 10.1834 6.59763 10.8166 6.20711 11.2071Z" fill="#424551" />
                                        </svg>
                                    </button>
                                    <h5 className="action-title">Prev Post</h5>
                                </div>
                                <div className="post-navigation-item d-f">
                                    <div><img src="/images/post-prev.png" alt="post-prev" /></div>
                                    <div>
                                        <p className="navigation-item-date">March 12, 2020</p>
                                        <h3 className="navigation-item-title">10 tips for a small business digital marketing strategy</h3>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="post-navigation-action d-f align-center">
                                    <h5 className="action-title">Next Post</h5>
                                    <button className='btn-clear d-b'>
                                        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7929 0.792893C12.1834 0.402369 12.8166 0.402369 13.2071 0.792893L17.7071 5.29289C18.0976 5.68342 18.0976 6.31658 17.7071 6.70711L13.2071 11.2071C12.8166 11.5976 12.1834 11.5976 11.7929 11.2071C11.4024 10.8166 11.4024 10.1834 11.7929 9.79289L14.5858 7H1C0.447715 7 0 6.55228 0 6C0 5.44772 0.447715 5 1 5H14.5858L11.7929 2.20711C11.4024 1.81658 11.4024 1.18342 11.7929 0.792893Z" fill="#424551" />
                                        </svg>
                                    </button>

                                </div>
                                <div className="post-navigation-item d-f">
                                    <div>
                                        <p className="navigation-item-date">April 9, 2020</p>
                                        <h3 className="navigation-item-title">Why SEO Is All About Content Marketing?</h3>
                                    </div>
                                    <div><img src="/images/post-next.png" alt="post-next" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <aside className='post-sidebar d-f'>
                        <form action="" className="post-sidebar-fm d-f jc-sb align-center">
                            <input type="text" name='searchQuery' placeholder='Search the blog' />
                            <button type='button' className='btn-clear d-b'>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_21253_484)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.25065 2.16634C4.4432 2.16634 2.16732 4.44223 2.16732 7.24967C2.16732 10.0571 4.4432 12.333 7.25065 12.333C8.65324 12.333 9.92209 11.7658 10.8425 10.8467C11.7647 9.92589 12.334 8.6549 12.334 7.24967C12.334 4.44223 10.0581 2.16634 7.25065 2.16634ZM0.833984 7.24967C0.833984 3.70585 3.70682 0.833008 7.25065 0.833008C10.7945 0.833008 13.6673 3.70585 13.6673 7.24967C13.6673 8.78248 13.1292 10.1905 12.2326 11.2939L14.9716 14.0278C15.2322 14.2879 15.2326 14.7101 14.9725 14.9706C14.7124 15.2312 14.2903 15.2316 14.0297 14.9715L11.2893 12.2362C10.1868 13.13 8.78088 13.6663 7.25065 13.6663C3.70682 13.6663 0.833984 10.7935 0.833984 7.24967Z" fill="#424551" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_21253_484">
                                            <rect width="16" height="16" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                        </form>
                        <div>
                            <h4 className="sidebar-bl-title">Author</h4>
                            <div className="post-author d-f">
                                <div><img src="/images/post-author.png" alt="post-author" /></div>
                                <div>
                                    <h5 className="post-author-name">Diane Mccoy</h5>
                                    <p className="post-author-pos">Lead Digital PR Strategist</p>
                                    <div className="post-author-social d-f align-center">
                                        <a href="" className="d-b">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18.3164 6.56704C18.2773 5.68147 18.1341 5.07266 17.929 4.54511C17.7174 3.98513 17.3918 3.48378 16.9652 3.06701C16.5484 2.64375 16.0438 2.31485 15.4903 2.10653C14.9597 1.90139 14.354 1.75818 13.4685 1.71914C12.5763 1.67679 12.2931 1.66699 10.0303 1.66699C7.76745 1.66699 7.48422 1.67679 6.59535 1.71583C5.70979 1.75487 5.10097 1.89821 4.57355 2.10322C4.01344 2.31485 3.5121 2.64044 3.09532 3.06701C2.67206 3.48378 2.3433 3.98843 2.13485 4.54193C1.92971 5.07266 1.7865 5.67817 1.74746 6.56373C1.70511 7.45591 1.69531 7.73914 1.69531 10.002C1.69531 12.2648 1.70511 12.548 1.74415 13.4369C1.78319 14.3224 1.92653 14.9312 2.13167 15.4588C2.3433 16.0188 2.67206 16.5201 3.09532 16.9369C3.5121 17.3602 4.01675 17.6891 4.57024 17.8974C5.10097 18.1025 5.70648 18.2457 6.59217 18.2848C7.48091 18.3239 7.76427 18.3336 10.0271 18.3336C12.2899 18.3336 12.5731 18.3239 13.462 18.2848C14.3476 18.2457 14.9564 18.1025 15.4838 17.8974C16.6039 17.4643 17.4894 16.5788 17.9225 15.4588C18.1275 14.9281 18.2708 14.3224 18.3099 13.4369C18.3489 12.548 18.3587 12.2648 18.3587 10.002C18.3587 7.73914 18.3554 7.45591 18.3164 6.56704ZM16.8155 13.3718C16.7796 14.1857 16.6429 14.6253 16.529 14.9183C16.2489 15.6444 15.6727 16.2206 14.9466 16.5007C14.6536 16.6146 14.2108 16.7513 13.4001 16.7871C12.521 16.8263 12.2573 16.8359 10.0336 16.8359C7.8098 16.8359 7.54285 16.8263 6.66695 16.7871C5.85299 16.7513 5.41346 16.6146 5.12043 16.5007C4.75911 16.3671 4.43022 16.1555 4.16326 15.8788C3.88652 15.6085 3.67489 15.2829 3.54135 14.9216C3.42739 14.6286 3.29067 14.1857 3.25494 13.3751C3.21576 12.496 3.2061 12.2322 3.2061 10.0084C3.2061 7.78467 3.21576 7.51772 3.25494 6.64195C3.29067 5.82799 3.42739 5.38845 3.54135 5.09542C3.67489 4.73397 3.88652 4.40521 4.16657 4.13813C4.4367 3.86138 4.76229 3.64975 5.12374 3.51634C5.41676 3.40238 5.85961 3.26566 6.67026 3.2298C7.54934 3.19075 7.81311 3.18096 10.0367 3.18096C12.2638 3.18096 12.5275 3.19075 13.4034 3.2298C14.2173 3.26566 14.6569 3.40238 14.9499 3.51634C15.3112 3.64975 15.6401 3.86138 15.9071 4.13813C16.1838 4.40839 16.3954 4.73397 16.529 5.09542C16.6429 5.38845 16.7796 5.83117 16.8155 6.64195C16.8546 7.52102 16.8643 7.78467 16.8643 10.0084C16.8643 12.2322 16.8546 12.4927 16.8155 13.3718Z" fill="#787A80" />
                                                <path d="M10.0303 5.72052C7.66659 5.72052 5.74882 7.63816 5.74882 10.002C5.74882 12.3658 7.66659 14.2834 10.0303 14.2834C12.3941 14.2834 14.3117 12.3658 14.3117 10.002C14.3117 7.63816 12.3941 5.72052 10.0303 5.72052ZM10.0303 12.7792C8.49683 12.7792 7.253 11.5355 7.253 10.002C7.253 8.4684 8.49683 7.22469 10.0303 7.22469C11.5638 7.22469 12.8075 8.4684 12.8075 10.002C12.8075 11.5355 11.5638 12.7792 10.0303 12.7792Z" fill="#787A80" />
                                                <path d="M15.4807 5.55124C15.4807 6.10321 15.0331 6.55076 14.481 6.55076C13.929 6.55076 13.4815 6.10321 13.4815 5.55124C13.4815 4.99915 13.929 4.55172 14.481 4.55172C15.0331 4.55172 15.4807 4.99915 15.4807 5.55124Z" fill="#787A80" />
                                            </svg>
                                        </a>
                                        <a href="" className="d-b">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.6354 0.836822L12.321 0.833008C9.72086 0.833008 8.04054 2.60392 8.04054 5.34487V7.42513H5.71352C5.51244 7.42513 5.34961 7.59259 5.34961 7.79915V10.8132C5.34961 11.0198 5.51263 11.187 5.71352 11.187H8.04054V18.7925C8.04054 18.9991 8.20337 19.1663 8.40445 19.1663H11.4405C11.6416 19.1663 11.8045 18.9989 11.8045 18.7925V11.187H14.5253C14.7264 11.187 14.8892 11.0198 14.8892 10.8132L14.8903 7.79915C14.8903 7.69997 14.8519 7.60499 14.7837 7.5348C14.7156 7.46461 14.6227 7.42513 14.5262 7.42513H11.8045V5.66166C11.8045 4.81407 12.0011 4.38379 13.0759 4.38379L14.635 4.38322C14.8359 4.38322 14.9987 4.21576 14.9987 4.00939V1.21065C14.9987 1.00447 14.8361 0.837204 14.6354 0.836822Z" fill="#787A80" />
                                            </svg>
                                        </a>
                                        <a href="" className="d-b">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18.3285 18.3337L18.3327 18.333V12.2205C18.3327 9.23019 17.6889 6.92671 14.1931 6.92671C12.5125 6.92671 11.3848 7.84894 10.9243 8.72324H10.8757V7.20588H7.56115V18.333H11.0125V12.8232C11.0125 11.3726 11.2875 9.96977 13.0841 9.96977C14.8542 9.96977 14.8806 11.6253 14.8806 12.9163V18.3337H18.3285Z" fill="#787A80" />
                                                <path d="M1.94101 7.20657H5.39657V18.3337H1.94101V7.20657Z" fill="#787A80" />
                                                <path d="M3.6674 1.66699C2.56254 1.66699 1.66602 2.56352 1.66602 3.66838C1.66602 4.77324 2.56254 5.68852 3.6674 5.68852C4.77227 5.68852 5.66879 4.77324 5.66879 3.66838C5.6681 2.56352 4.77157 1.66699 3.6674 1.66699Z" fill="#787A80" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 className="sidebar-bl-title">Diane Mccoy</h4>
                            <div className="post-trending d-f">
                                <div className="post-trending-item d-f">
                                    <div><img src="/images/blog-trending1.png" alt="blog-trending1" /></div>
                                    <div>
                                        <p className="trending-item-date">July 5, 2020</p>
                                        <h5 className="trending-item-title">5 Surprising Ways to Combine Content Marketing with PPC</h5>
                                    </div>
                                </div>
                                <div className="post-trending-item d-f">
                                    <div><img src="/images/blog-trending2.png" alt="blog-trending2" /></div>
                                    <div>
                                        <p className="trending-item-date">April 9, 2020</p>
                                        <h5 className="trending-item-title">Why SEO Is All About Content Marketing?</h5>
                                    </div>
                                </div>
                                <div className="post-trending-item d-f">
                                    <div><img src="/images/blog-trending3.png" alt="blog-trending3" /></div>
                                    <div>
                                        <p className="trending-item-date">March 12, 2020</p>
                                        <h5 className="trending-item-title">10 tips for a small business digital marketing strategy</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 className="sidebar-bl-title">Author</h4>
                            <div className="post-sidebar-tags d-f">
                                <p className="tag">#tips&tricks</p>
                                <p className="tag">#strategy</p>
                                <p className="tag">#SMM</p>
                                <p className="tag">#business</p>
                                <p className="tag">#PPC</p>
                                <p className="tag">#targeting</p>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </>
    )
}

export default SinglePost