const Book = () => {
    return (
        <section id="book" className="section-book">
            <div className="row">
                <div className="book">
                    <div className="book__form">
                        <form action="https://formspree.io/f/xvoejdoo" method="POST">
                            <div className="u-margin-big">
                                <h2 className="heading__secondary u-margin-bottom-medium">
                                    book us now
                                </h2>
                            </div>

                            <div className="form__group">
                                <input type="text" className="form__input" placeholder="Full Name" id="name" required />
                                <label for="name" className="form__label">Full Name</label>
                            </div>

                            <div className="form__group">
                                <input type="email" className="form__input" placeholder="Email Address" id="email" required />
                                <label for="email" className="form__label">Email Address</label>
                            </div>

                            <div className="form__group">
                                <input type="name" className="form__input" placeholder="Location" id="location" required />
                                <label for="location" className="form__label">Location</label>
                            </div>

                            <div className="form__group u-margin-bottom-medium">
                                <div className="form__radio-group">
                                    <input type="radio" className="form__radio-input" id="home" name="space" />
                                    <label for="home" className="form__radio-label">
                                        <span className="form__radio-button"></span>
                                        Home furnishing
                                    </label>
                                </div>

                                <div className="form__radio-group">
                                    <input type="radio" className="form__radio-input" id="others" name="space" />
                                    <label for="others" className="form__radio-label">
                                        <span className="form__radio-button"></span>
                                        Others
                                    </label>
                                </div>
                            </div>

                            <div className="form__group">
                                <button className="btn btn--blue">Next Step &rarr;</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Book