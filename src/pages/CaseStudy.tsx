import { BarChart } from '@mui/x-charts/BarChart'
import './css/CaseStudy.css'
import { SeoAnalysis, Studies, Testimonials } from '../components'

const CaseStudy = () => {
    return (
        <>
            <main className='study-main'>
                <div className="page-breadcrumb d-f align-center">
                    <div><img src="/images/home.png" alt="home" /></div>
                    <div>
                        <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.529247 0.362254C0.789596 0.101905 1.21171 0.101905 1.47206 0.362254L6.13872 5.02892C6.39907 5.28927 6.39907 5.71138 6.13872 5.97173L1.47206 10.6384C1.21171 10.8987 0.789596 10.8987 0.529247 10.6384C0.268897 10.378 0.268897 9.95594 0.529247 9.69559L4.72451 5.50033L0.529247 1.30506C0.268897 1.04471 0.268897 0.622604 0.529247 0.362254Z" fill="white" />
                        </svg>
                    </div>
                    <p className="page-breadcrumb-previous">Case Studies</p>
                    <div>
                        <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.529247 0.362254C0.789596 0.101905 1.21171 0.101905 1.47206 0.362254L6.13872 5.02892C6.39907 5.28927 6.39907 5.71138 6.13872 5.97173L1.47206 10.6384C1.21171 10.8987 0.789596 10.8987 0.529247 10.6384C0.268897 10.378 0.268897 9.95594 0.529247 9.69559L4.72451 5.50033L0.529247 1.30506C0.268897 1.04471 0.268897 0.622604 0.529247 0.362254Z" fill="white" />
                        </svg>
                    </div>
                    <p className="page-breadcrumb-current">200% increase in conversion rate for Lovato Company</p>
                </div>
                <div className="study-main-logo"><img src="/images/client-logo.svg" alt="client-logo" /></div>
                <h1 className="study-main-title">200% increase in conversion rate for Lovato Company</h1>
            </main>
            <div className="study-content d-f">
                <div>
                    <div className="study-figures d-f">
                        <div className="study-figures-item d-f">
                            <div>
                                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1772_2380)">
                                        <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M40 72C57.6731 72 72 57.6731 72 40C72 22.3269 57.6731 8 40 8C22.3269 8 8 22.3269 8 40C8 57.6731 22.3269 72 40 72ZM40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z" fill="#F52F6E" />
                                        <path d="M40 72C57.6731 72 72 57.6731 72 40C72 22.3269 57.6731 8 40 8V0C62.0914 0 80 17.9086 80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 36.547 0.43753 33.1962 1.26017 30L9 32.0317C8.34714 34.5791 8 37.249 8 40C8 57.6731 22.3269 72 40 72Z" fill="#F52F6E" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1772_2380">
                                            <rect width="80" height="80" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <dl>
                                <dt>70%</dt>
                                <dd>Open Rate</dd>
                            </dl>
                        </div>
                        <div className="study-figures-item d-f">
                            <div>
                                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1772_2388)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M40.002 72C57.6751 72 72.002 57.6731 72.002 40C72.002 22.3269 57.6751 8 40.002 8C22.3288 8 8.00195 22.3269 8.00195 40C8.00195 57.6731 22.3288 72 40.002 72ZM40.002 80C62.0933 80 80.002 62.0914 80.002 40C80.002 17.9086 62.0933 0 40.002 0C17.9106 0 0.00195312 17.9086 0.00195312 40C0.00195312 62.0914 17.9106 80 40.002 80Z" fill="#F89828" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1772_2388">
                                            <rect width="80" height="80" fill="white" transform="translate(0.00195312)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <dl>
                                <dt>200%</dt>
                                <dd>Growth in sales</dd>
                            </dl>
                        </div>
                        <div className="study-figures-item">
                            <dl>
                                <dt>8,000</dt>
                                <dd>DAU</dd>
                            </dl>
                        </div>
                    </div>
                    <p className="study-desc-bold">
                        The Company has been with us for 3 months.
                        They are in our optimal package for SEO & our
                        premium package for SEM plus Ad spend ($1,000).
                        The client's goal was to get growth in sales.
                        We helped exceeding the client's goals in generating
                        new clients.
                    </p>
                    <p className="study-desc">
                        At facilisi sapien posuere eget nunc senectus proin nullam.
                        Tortor senectus in et sagittis, vitae diam cras dignissim.
                        Varius adipiscing eget diam nisi. Orci, consectetur vulputate
                        metus ornare pharetra, neque, fermentum. Vel nec rhoncus, non nunc,
                        neque in massa. Feugiat leo nam nisl lacinia amet, odio. Mi varius
                        viverra risus vel.
                    </p>
                    <div className="study-diagram">
                        <div className="d-f jc-sb align-center" style={{ marginBottom: "40px" }}>
                            <h4 className="study-diagram-title">Final Results</h4>
                            <div className="study-diagram-legend d-f">
                                <div className="diagram-legend-item d-f align-center">
                                    <div className="ellipse"></div>
                                    <h5 className="legend-item-title">Before Createx</h5>
                                </div>
                                <div className="diagram-legend-item d-f align-center">
                                    <div className="ellipse"></div>
                                    <h5 className="legend-item-title">After Createx</h5>
                                </div>
                            </div>
                        </div>
                        <BarChart
                            series={[
                                { data: [77, 60, 49, 75], color: "var(--primary)" },
                                { data: [99, 22, 120, 95], color: "#00F0B5" },

                            ]}
                            height={290}
                            xAxis={[{ data: ['Revenue', 'Emails in spam', 'Conversions', 'ROI'], }]}
                        />
                    </div>
                    <h2 className="study-bl-title">Strategies</h2>
                    <ul className="study-bl-list">
                        <li>Gravida elit et libero, varius congue risus quisque enim.</li>
                        <li>Sit quis vitae, gravida aliquam condimentum.</li>
                        <li>Praesent et facilisis nam mus senectus massa dignissim.</li>
                        <li>Fermentum diam elementum viverra proin.</li>
                    </ul>
                    <p className="study-desc">
                        Enim, vel massa odio diam. Blandit massa gravida feugiat
                        elementum id nec sed leo. Nisi in ornare lectus eget.
                        Urna, risus, consectetur volutpat lorem purus. Velit
                        aliquet nibh vitae maecenas. Consectetur neque ut aliquam
                        eros, purus enim dignissim aenean vitae. Ultrices fames
                        augue mattis tortor est justo, pharetra nibh risus.
                        Facilisi at porttitor volutpat natoque proin amet, nulla.
                        Vivamus ut lobortis sagittis curabitur tellus convallis eget netus vitae.
                    </p>
                    <div className='study-pic'><img src="/images/study-pic.png" alt="study-pic" /></div>
                    <h2 className="study-bl-title">Resieved goals</h2>
                    <ul className="study-bl-list" style={{ marginBottom: "60px" }}>
                        <li>Bibendum malesuada mauris, id nisl enim diam.</li>
                        <li>Nam id in non sed cras purus nunc et.</li>
                        <li>Neque tortor, pellentesque amet est, eu accumsan condimentum nulla.</li>
                        <li>Mauris orci, cursus nisl odio est adipiscing gravida magna eget.</li>
                        <li>Sit turpis sit ultrices viverra adipiscing malesuada.</li>
                    </ul>
                    <h2 className="study-bl-title">Results</h2>
                    <ul className="study-bl-list">
                        <li>Mauris dignissim blandit cursus imperdiet accumsan lorem vel, tortor.</li>
                        <li>Quis mauris vel felis convallis nulla dignissim.</li>
                        <li>Cursus sit platea ac posuere non interdum in.</li>
                        <li>Mattis pellentesque vel, venenatis, urna, quis ut. </li>
                    </ul>
                </div>
                <div>
                    <div className="study-about d-f">
                        <div>
                            <h4 className="about-bl-title">About the client</h4>
                            <p className="about-bl-desc">
                                At facilisi sapien posuere eget nunc senectus proin nullam.
                                Tortor senectus in et sagittis, vitae diam cras dignissim.
                                Varius adipiscing eget diam nisi. Orci, consectetur vulputate
                                metus ornare pharetra, neque, fermentum.
                            </p>
                        </div>
                        <div>
                            <h4 className="about-bl-title">Industry</h4>
                            <p className="about-bl-desc">Electric company - B2B</p>
                        </div>
                        <div>
                            <h4 className="about-bl-title">Services rendered</h4>
                            <ul className="about-bl-list">
                                <li>Remarketing</li>
                                <li>Conversion Rate Optimization</li>
                                <li>User Testing</li>
                                <li>PPC Management</li>
                                <li>Usability Testing</li>
                            </ul>
                        </div>
                    </div>
                    <div className="study-tags d-f">
                        <div className="tag text-uppercase">#seo</div>
                        <div className="tag">#research</div>
                        <div className="tag">#payed_traffic</div>
                    </div>
                    <div className="study-share d-f">
                        <h5 className="study-share-title">Share:</h5>
                        <a href="" className="d-b">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.6354 0.836822L12.321 0.833008C9.72086 0.833008 8.04054 2.60392 8.04054 5.34487V7.42513H5.71352C5.51244 7.42513 5.34961 7.59259 5.34961 7.79915V10.8132C5.34961 11.0198 5.51263 11.187 5.71352 11.187H8.04054V18.7925C8.04054 18.9991 8.20337 19.1663 8.40445 19.1663H11.4405C11.6416 19.1663 11.8045 18.9989 11.8045 18.7925V11.187H14.5253C14.7264 11.187 14.8892 11.0198 14.8892 10.8132L14.8903 7.79915C14.8903 7.69997 14.8519 7.60499 14.7837 7.5348C14.7156 7.46461 14.6227 7.42513 14.5262 7.42513H11.8045V5.66166C11.8045 4.81407 12.0011 4.38379 13.0759 4.38379L14.635 4.38322C14.8359 4.38322 14.9987 4.21576 14.9987 4.00939V1.21065C14.9987 1.00447 14.8361 0.837204 14.6354 0.836822Z" fill="#787A80" />
                            </svg>
                        </a>
                        <a href="" className="d-b">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.75 4.8106C18.1059 5.08388 17.4148 5.26922 16.6887 5.35196C17.4301 4.92683 17.9976 4.25252 18.2666 3.45149C17.5711 3.84519 16.8035 4.13106 15.9855 4.28603C15.3305 3.61695 14.3988 3.2002 13.3653 3.2002C11.3827 3.2002 9.77523 4.73942 9.77523 6.63674C9.77523 6.90583 9.80694 7.16865 9.86819 7.41997C6.88501 7.2765 4.23973 5.90797 2.46928 3.82843C2.1598 4.33523 1.98374 4.92576 1.98374 5.55613C1.98374 6.74878 2.618 7.8011 3.58033 8.41677C2.992 8.39793 2.43866 8.24296 1.95423 7.98537V8.0283C1.95423 9.69317 3.19213 11.0826 4.83353 11.3989C4.5328 11.4764 4.21568 11.5193 3.88761 11.5193C3.6558 11.5193 3.43161 11.4973 3.2118 11.4554C3.66889 12.8219 4.99429 13.8156 6.56463 13.8428C5.33657 14.7642 3.7881 15.3119 2.10624 15.3119C1.81646 15.3119 1.53103 15.2951 1.25 15.2647C2.83893 16.2417 4.7253 16.8113 6.75273 16.8113C13.3566 16.8113 16.9665 11.5738 16.9665 7.0315L16.9544 6.5865C17.6597 6.1048 18.2699 5.49959 18.75 4.8106Z" fill="#787A80" />
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
            <SeoAnalysis/>
            <div className="study-bottom">
                <Testimonials/>
                <Studies/>
            </div>
        </>
    )
}

export default CaseStudy