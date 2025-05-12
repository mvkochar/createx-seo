import './SeoAnalysis.css'

const SeoAnalysis = () => {
  return (
    <div className='seo-analysis d-f'>
        <div><img src="/images/seo-illustration.png" alt="seo-illustration" /></div>
        <div>
            <h2 className="page-bl-title">Get a Free SEO Analysis!</h2>
            <form action="" className='seo-analysys-fm'>
                <div className="input-bl d-f">
                    <div>
                        <label htmlFor="seoName">Name</label>
                        <input type="text" name='seoName' id='seoName' placeholder='Your name' />
                    </div>
                    <div>
                        <label htmlFor="seoEmail">Email</label>
                        <input type="email" name="seoEmail" id="seoEmail" placeholder='Your working email' />
                    </div>
                </div>
                <div>
                    <label htmlFor="seoUrl">Your website URL</label>
                    <input type="url" name="seoUrl" id="seoUrl" placeholder='http://yoursite.com' />
                </div>
                <div className="control-bl d-f">
                    <div className="check-bl d-f">
                        <input type="checkbox" name="seoAgree" id="seoAgree" />
                        <label htmlFor="seoAgree">I agree to receive communications from Createx SEO Agency</label>
                    </div>
                    <button type="button">Get a free analysis</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SeoAnalysis