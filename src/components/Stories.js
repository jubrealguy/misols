import vid from "../assets/video.mp4"
import data from "./Data"

const Stories = () => {
    return (
        <section id="stories" className="section-stories">
            <div className="bg-video">
                <video classNameName="bg-video__content" autoPlay muted loop>
                    <source src={vid} type="video/mp4" />
                        Your browser is not supported
                </video>
            </div>

            <div className="u-center-text u-margin-big">
                <h2 className="heading__secondary u-margin-bottom-big">
                    your happiness is our business
                </h2>
            </div>

            {
                data.clients.map((client, index) => {
                    return (
                        <div className="row" key={index}>
                            <div className="story">
                                <figure className="story__shape">
                                    <img src={client.image} alt=" a client" className="story__image" />
                                    <figcaption className="story__figcaption">{client.name}</figcaption>
                                </figure>
                                <div className="story__text">
                                    <h3 className="heading__tertiary u-margin-bottom-small">{client.title}</h3>
                                    <p className="paragraph">{client.story}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

            <div className="u-center-text u-margin-bottom-small">
                <a href="##" className="btn-text">
                    check all reviews &rarr;
                </a>
            </div>
        </section>
    )
}

export default Stories