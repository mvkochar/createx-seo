import { JobPanel } from '../components'
import JobList from '../components/JobList'
import fileDialog from 'file-dialog'
import './css/Careers.css'

const Careers = () => {

    const openFileDialog = () => {
        fileDialog()
            .then(file => {
                const data = new FormData()
                data.append('file', file[0])
                data.append('imageName', 'flower')

                // Post to server
                fetch('/uploadImage', {
                    method: 'POST',
                    body: data
                })
            })
    }

    return (
        <>
            <main className='careers-main'>
                <div className="page-breadcrumb d-f align-center">
                    <div><img src="/images/home.png" alt="home" /></div>
                    <div>
                        <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.529247 0.362254C0.789596 0.101905 1.21171 0.101905 1.47206 0.362254L6.13872 5.02892C6.39907 5.28927 6.39907 5.71138 6.13872 5.97173L1.47206 10.6384C1.21171 10.8987 0.789596 10.8987 0.529247 10.6384C0.268897 10.378 0.268897 9.95594 0.529247 9.69559L4.72451 5.50033L0.529247 1.30506C0.268897 1.04471 0.268897 0.622604 0.529247 0.362254Z" fill="white" />
                        </svg>
                    </div>
                    <p className="page-breadcrumb-previous">About Us</p>
                    <div>
                        <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.529247 0.362254C0.789596 0.101905 1.21171 0.101905 1.47206 0.362254L6.13872 5.02892C6.39907 5.28927 6.39907 5.71138 6.13872 5.97173L1.47206 10.6384C1.21171 10.8987 0.789596 10.8987 0.529247 10.6384C0.268897 10.378 0.268897 9.95594 0.529247 9.69559L4.72451 5.50033L0.529247 1.30506C0.268897 1.04471 0.268897 0.622604 0.529247 0.362254Z" fill="white" />
                        </svg>
                    </div>
                    <p className="page-breadcrumb-current">Careers at Createx Agency</p>
                </div>
                <p className="careers-main-desc">
                    We're looking for extraordinary talents!
                    If you're passionate about SEO and digital
                    marketing, we want to hear from you.
                </p>
                <div className="careers-main-contacts d-f">
                    <div className="contacts-item d-f align-center">
                        <div>
                            <svg width="37" height="33" viewBox="0 0 37 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M34.5384 14.612C34.301 16.2565 33.7384 17.8196 32.9047 19.2569C32.9672 19.6128 32.9992 19.9725 32.9992 20.3338C32.9992 21.5885 32.6357 22.7893 31.9623 23.8803C31.6261 24.4249 31.5396 25.063 31.5063 25.4846C31.4682 25.9677 31.481 26.4964 31.5155 27.0043C31.5542 27.5741 31.6243 28.1723 31.7045 28.7366C31.054 28.547 30.3489 28.3564 29.676 28.2046C29.1163 28.0784 28.5436 27.9708 28.0249 27.9172C27.5724 27.8704 26.9185 27.8342 26.3338 28.0233C25.0553 28.4365 23.6485 28.6671 22.1659 28.6671C20.4027 28.6671 18.7834 28.3541 17.364 27.8104C17.0226 27.8259 16.6787 27.8338 16.3325 27.8338C14.3248 27.8338 12.3925 27.5697 10.5846 27.0818C13.2129 30.1215 17.5457 32.0004 22.1659 32.0004C23.9708 32.0004 25.7031 31.7233 27.2996 31.2141C27.3023 31.2142 27.3074 31.2141 27.315 31.214C27.356 31.2132 27.4698 31.2109 27.6824 31.2329C28.0167 31.2674 28.4466 31.3444 28.9425 31.4563C29.9297 31.679 31.0391 32.0076 31.9038 32.2821C33.7374 32.8641 35.514 31.264 35.1863 29.4034C35.0452 28.6025 34.8987 27.6252 34.8412 26.7785C34.8123 26.3527 34.8091 26.0033 34.8293 25.7468C34.8377 25.6406 34.8485 25.5739 34.8553 25.5385C35.793 23.9852 36.3326 22.2167 36.3326 20.3338C36.3326 18.2112 35.6733 16.2729 34.5384 14.612Z" fill="#7772F1" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.32773 6.49661C5.08113 8.2146 3.83266 10.4698 3.83266 12.833C3.83266 14.0114 4.13943 15.1463 4.71496 16.2017C4.93417 16.6037 4.99636 17.0183 5.0186 17.2991C5.04285 17.6051 5.03076 17.9197 5.00414 18.2139C4.95085 18.8028 4.82372 19.4701 4.67124 20.1274C4.49287 20.8962 4.26431 21.7162 4.03239 22.486C4.91281 22.166 5.87508 21.8381 6.78733 21.5719C7.52461 21.3568 8.26918 21.1702 8.93185 21.0654C9.5027 20.9752 10.3311 20.8864 11.0443 21.1332C12.6448 21.6869 14.4353 21.9997 16.3327 21.9997C19.9113 21.9997 23.0895 20.8886 25.3376 19.1694C27.5842 17.4514 28.8327 15.1962 28.8327 12.833C28.8327 10.4698 27.5842 8.2146 25.3376 6.49661C23.0895 4.77745 19.9113 3.66634 16.3327 3.66634C12.754 3.66634 9.57586 4.77745 7.32773 6.49661ZM5.30289 3.84875C8.18209 1.64702 12.0872 0.333008 16.3327 0.333008C20.5781 0.333008 24.4832 1.64702 27.3624 3.84875C30.2432 6.05167 32.166 9.21311 32.166 12.833C32.166 16.4529 30.2432 19.6144 27.3624 21.8173C24.4832 24.019 20.5781 25.333 16.3327 25.333C14.0942 25.333 11.9561 24.9681 10.0148 24.3041C10.0128 24.3095 9.85537 24.2941 9.45245 24.3578C8.98803 24.4313 8.39522 24.5751 7.72089 24.7719C6.37845 25.1635 4.87087 25.7176 3.72255 26.1645C1.73317 26.9387 -0.293418 25.0281 0.376849 22.9929C0.732099 21.9142 1.15108 20.5511 1.42414 19.3741C1.5617 18.7812 1.65096 18.2827 1.68437 17.9135C1.69596 17.7853 1.69896 17.6919 1.69829 17.6288C0.931153 16.1629 0.499324 14.5417 0.499324 12.833C0.499324 9.21311 2.42216 6.05167 5.30289 3.84875Z" fill="#7772F1" />
                            </svg>
                        </div>
                        <dl>
                            <dt>Talk to us</dt>
                            <dd>
                                <a href="mailto:hello@createx.com">hello@createx.com</a>
                            </dd>
                        </dl>
                    </div>
                    <div className="divider"></div>
                    <div className='contacts-item d-f align-center'>
                        <div>
                            <svg width="24" height="38" viewBox="0 0 24 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.16732 3.86947C4.78661 3.86947 3.66732 4.98875 3.66732 6.36947V31.6299C3.66732 33.0106 4.78661 34.1299 6.16732 34.1299H17.834C19.2147 34.1299 20.334 33.0106 20.334 31.6299V6.36947C20.334 4.98875 19.2147 3.86947 17.834 3.86947H17.695L17.2891 4.84355C17.0303 5.46458 16.4234 5.86909 15.7507 5.86909H8.25065C7.57786 5.86909 6.97104 5.46458 6.71223 4.84355L6.30629 3.86947H6.16732ZM0.333984 6.36947C0.333984 3.14781 2.94566 0.536133 6.16732 0.536133H17.834C21.0556 0.536133 23.6673 3.14781 23.6673 6.36947V31.6299C23.6673 34.8515 21.0556 37.4632 17.834 37.4632H6.16732C2.94566 37.4632 0.333984 34.8515 0.333984 31.6299V6.36947Z" fill="#7772F1" />
                            </svg>
                        </div>
                        <dl>
                            <dt>Call us</dt>
                            <dd>
                                <a href="tel:+1(405) 555-0128">(405) 555-0128</a>
                            </dd>
                        </dl>
                    </div>
                </div>
            </main >
            <section className='careers-job d-f'>
                {
                    JobList.map((job) => {
                        return (
                            <JobPanel
                                key={`job${job.id}`}
                                {...job}
                            />
                        )
                    })
                }
            </section>
            <section className="careers-contact d-f">
                <div>
                    <h2 className="page-bl-title">
                        Didn't find what you <br /> were looking for?
                    </h2>
                    <p className="careers-contact-desc">
                        Send your CV or subscribe to our newsletter
                        to receive information about new vacancies.
                    </p>
                </div>
                <form action="" className='careers-contact-fm'>
                    <div className="input-bl d-f">
                        <div>
                            <label htmlFor="contactName">Name*</label>
                            <input type="text" name='contactName' id='contactName' placeholder='Your name' />
                        </div>
                        <div>
                            <label htmlFor="contactPhone">Phone*</label>
                            <input type="text" name='contactPhone' id='contactPhone' placeholder='Your phone number' />
                        </div>
                    </div>
                    <div className="input-bl d-f">
                        <div>
                            <label htmlFor="contactEmail">Email*</label>
                            <input type="email" name='contactEmail' id='contactEmail' placeholder='Your working email' />
                        </div>
                        <div>
                            <label htmlFor="contactInterested">I am interested in*</label>
                            <div className="select-wr">
                                <select name="contactInterested" id="contactInterested">
                                    <option value="0">Choose...</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="input-bl">
                        <label htmlFor="contactCover">Cover letter</label>
                        <textarea name="contactCover" id="contactCover" placeholder='Your cover letter'></textarea>
                    </div>
                    <div className="attach-bl d-f">
                        <button type="button" className='btn-clear d-b' onClick={openFileDialog}>
                            <img src="/images/attach.svg" alt="attach" />
                        </button>
                        <p>Attach your CV*</p>
                    </div>
                    <div className="check-bl d-f align-center">
                        <input type="checkbox" name="contactWant" id="contactWant" />
                        <label htmlFor="contactWant">I want to suscribe to receive information about new vacancies.</label>
                    </div>
                    <button type="button" className='send-btn'>Send Resume</button>
                </form>
            </section>
        </>
    )
}

export default Careers