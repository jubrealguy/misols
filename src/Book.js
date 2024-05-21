const Book = () => {
    return (
        <section class="section-book">
            <div class="row">
                <div class="book">
                    <div class="book__form">
                        <form action="#" class="form">
                            <div class="u-margin-big">
                                <h2 class="heading__secondary u-margin-bottom-medium">
                                    book us now
                                </h2>
                            </div>

                            <div class="form__group">
                                <input type="text" class="form__input" placeholder="Full Name" id="name" required />
                                <label for="name" class="form__label">Full Name</label>
                            </div>

                            <div class="form__group">
                                <input type="email" class="form__input" placeholder="Email Address" id="email" required />
                                <label for="email" class="form__label">Email Address</label>
                            </div>

                            <div class="form__group">
                                <input type="name" class="form__input" placeholder="Location" id="location" required />
                                <label for="location" class="form__label">Location</label>
                            </div>

                            <div class="form__group u-margin-bottom-medium">
                                <div class="form__radio-group">
                                    <input type="radio" class="form__radio-input" id="home" name="space" />
                                    <label for="home" class="form__radio-label">
                                        <span class="form__radio-button"></span>
                                        Home furnishing
                                    </label>
                                </div>

                                <div class="form__radio-group">
                                    <input type="radio" class="form__radio-input" id="others" name="space" />
                                    <label for="others" class="form__radio-label">
                                        <span class="form__radio-button"></span>
                                        Others
                                    </label>
                                </div>
                            </div>

                            <div class="form__group">
                                <button class="btn btn--blue">Next Step &rarr;</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Book