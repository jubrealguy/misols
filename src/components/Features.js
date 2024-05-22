const Features = () => {
    return (
        <section id="features" className="section-features">
                <div className="row">
                    <div className="col-1-of-3">
                        <div className="feature-box">
                            <i className="feature-box__icon icon-basic-calendar"></i>
                            <h3 className="heading__tertiary u-margin-bottom-small">Availability</h3>
                            <p className="feature-box__text">Book a date with us and we will never disappoint you. We are always on ground for our clients and potential clients. We are available and reliable.</p>
                        </div>
                    </div>
                    <div className="col-1-of-3">
                        <div className="feature-box">
                            <i className="feature-box__icon icon-basic-mail"></i>
                            <h3 className="heading__tertiary u-margin-bottom-small">Affordability</h3>
                            <p className="feature-box__text">We are quite affordable but not cheap. We will always work within our client's budget. We still give you the best with what you have.</p>
                        </div>
                    </div>
                    <div className="col-1-of-3">
                        <div className="feature-box">
                            <i className="feature-box__icon icon-basic-star"></i>
                            <h3 className="heading__tertiary u-margin-bottom-small">Perfection</h3>
                            <p className="feature-box__text">The most important of all is the quality of the service we provide, we do not joke with quality. It is what has kept us in business for so long.</p>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Features