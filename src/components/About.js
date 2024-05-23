import about1 from '../assets/about1.jpg'
import about2 from '../assets/about2.jpg'
import about3 from '../assets/about3.jpg'

const About = () => {
    return (
        <section id="about" className="section-about">
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading__secondary">
                    decorating your space to its finest
                </h2>
            </div>
            <div className="row">
                <div className="col-1-of-2">
                    <h3 className="heading__tertiary u-margin-bottom-small">
                        furnishing to taste
                    </h3>
                    <p className="paragraph">
                        The question of what we want as an individual is endless. We at Misols Interiors does not decide for you but we are ready to guide you through your thoughts, process them with you and give you the perfect reality of what you envisioned.
                    </p>

                    <h3 className="heading__tertiary u-margin-bottom-small">
                        furnishing to comfort
                    </h3>
                    <p className="paragraph">
                        There is this special and amazing feeling that emanates from a well furnished space providing this sense of homely feeling. A feeling of being in a place where you can call a safe haven. This is what you get when you engage us. We are good at what we do and we are affordable.
                    </p>
                    <a href="##" className="btn-text">Learn more &rarr;</a>
                </div>

                <div className="col-1-of-2">
                    <div className="composition">
                        <img src={about1} alt="about-photo1" className="composition__photo composition__photo--p1" />
                        <img src={about2}  alt="about-photo2" className="composition__photo composition__photo--p2" />
                        <img src={about3}  alt="about-photo3" className="composition__photo composition__photo--p3" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About