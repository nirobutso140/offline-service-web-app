import './Pricing.css'

const Pricing = () => {
    return (
        <>
            <h1 className="demo-title">
               Service Pricing Table
                    
            </h1>
            <div className="pricing-table">
                <div className="ptable-item">
                    <div className="ptable-single">
                        <div className="ptable-header">
                            <div className="ptable-title">
                                <h2>Silver</h2>
                            </div>
                            <div className="ptable-price">
                                <h2><small>$</small>99<span>/ M</span></h2>
                            </div>
                        </div>
                        <div className="ptable-body">
                            <div className="ptable-description">
                                <ul>
                                    <li>Pure HTML & CSS</li>
                                    <li>Responsive Design</li>
                                    <li>Well-commented Code</li>
                                    <li>Easy to Use</li>
                                </ul>
                            </div>
                        </div>
                        <div className="ptable-footer">
                            <div className="ptable-action">
                                <a href="">Buy Now</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="ptable-item featured-item">
                    <div className="ptable-single">
                        <div className="ptable-header">
                            <div className="ptable-status">
                                <span>Hot</span>
                            </div>
                            <div className="ptable-title">
                                <h2>Gold</h2>
                            </div>
                            <div className="ptable-price">
                                <h2><small>$</small>199<span>/ M</span></h2>
                            </div>
                        </div>
                        <div className="ptable-body">
                            <div className="ptable-description">
                                <ul>
                                    <li>Pure HTML & CSS</li>
                                    <li>Responsive Design</li>
                                    <li>Well-commented Code</li>
                                    <li>Easy to Use</li>
                                </ul>
                            </div>
                        </div>
                        <div className="ptable-footer">
                            <div className="ptable-action">
                                <a href="">Buy Now</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="ptable-item">
                    <div className="ptable-single">
                        <div className="ptable-header">
                            <div className="ptable-title">
                                <h2>Platinum</h2>
                            </div>
                            <div className="ptable-price">
                                <h2><small>$</small>299<span>/ M</span></h2>
                            </div>
                        </div>
                        <div className="ptable-body">
                            <div className="ptable-description">
                                <ul>
                                    <li>Pure HTML & CSS</li>
                                    <li>Responsive Design</li>
                                    <li>Well-commented Code</li>
                                    <li>Easy to Use</li>
                                </ul>
                            </div>
                        </div>
                        <div className="ptable-footer">
                            <div className="ptable-action">
                                <a href="">Buy Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br /><br /><br />
        </>
    );
};

export default Pricing;