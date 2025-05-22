const Pricing = () => {
    return (
        <div className='home-pricing'>
            <h2 className="page-bl-title text-center">Flexible pricing plans</h2>
            <div className="home-pricing-tabs d-f">
                <button className='tab-btn tab-btn__active'>Monthly</button>
                <button className='tab-btn'>Yearly <span>-12% Off</span></button>
            </div>
            <div className="home-pricing-box d-f">
                <div className="home-pricing-item">
                    <h3 className="pricing-item-title">Basic</h3>
                    <h4 className="pricing-item-price">$24 <sup>/mon</sup></h4>
                    <div className="divider"></div>
                    <ul className="pricing-item-list">
                        <li>Advanced Analytics</li>
                        <li>Change Management</li>
                        <li>Corporate Finance</li>
                        <li>One Way Link Building</li>
                        <li>Social Media Marketing</li>
                        <li className='unavailable'>Strategy & Marketing</li>
                        <li className='unavailable'>Information Technology</li>
                    </ul>
                    <a href="" className="pricing-item-choose">Choose plan</a>
                </div>
                <div className="home-pricing-item">
                    <h3 className="pricing-item-title">Optimal</h3>
                    <h4 className="pricing-item-price">$64 <sup>/mon</sup></h4>
                    <div className="divider"></div>
                    <ul className="pricing-item-list">
                        <li>Advanced Analytics</li>
                        <li>Change Management</li>
                        <li>Corporate Finance</li>
                        <li>One Way Link Building</li>
                        <li>Social Media Marketing</li>
                        <li>Strategy & Marketing</li>
                        <li className='unavailable'>Information Technology</li>
                    </ul>
                    <a href="" className="pricing-item-choose">Choose plan</a>
                </div>
                <div className="home-pricing-item">
                    <h3 className="pricing-item-title">Premium</h3>
                    <h4 className="pricing-item-price">$98 <sup>/mon</sup></h4>
                    <div className="divider"></div>
                    <ul className="pricing-item-list">
                        <li>Advanced Analytics</li>
                        <li>Change Management</li>
                        <li>Corporate Finance</li>
                        <li>One Way Link Building</li>
                        <li>Social Media Marketing</li>
                        <li>Strategy & Marketing</li>
                        <li>Information Technology</li>
                    </ul>
                    <a href="" className="pricing-item-choose">Choose plan</a>
                </div>
            </div>
        </div>
    )
}

export default Pricing