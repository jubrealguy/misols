import img1 from "./assets/tosin.jpg"
import img2 from "./assets/adebayo.jpg"
import vid from "./assets/video.mp4"


const Stories = () => {
    return (
        <section class="section-stories">
                <div class="bg-video">
                    <video className="bg-video__content" autoPlay muted loop>
                        <source src={vid} type="video/mp4" />
                            Your browser is not supported
                    </video>
                </div>

                <div class="u-center-text u-margin-big">
                    <h2 class="heading__secondary u-margin-bottom-big">
                        your happiness is our business
                    </h2>
                </div>

                <div class="row">
                    <div class="story">
                        <figure class="story__shape">
                            <img src={img1} alt="" class="story__image" />
                            <figcaption class="story__figcaption">adejoju oluwatosin</figcaption>
                        </figure>
                        <div class="story__text">
                            <h3 class="heading__tertiary u-margin-bottom-small">
                                misols gave us a homely home
                            </h3>
                            <p class="paragraph">
                                For a long time now, It has been an herculean task getting an interior decoration firm than can style our beautiful home to taste until I made my research and found MISOLS. Our home became more comfy and lovely and extraordinary beautiful. Words cannot say how we feel.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="story">
                        <figure class="story__shape">
                            <img src={img2} alt="a client" class="story__image" />
                            <figcaption class="story__figcaption">jubreel adebayo</figcaption>
                        </figure>
                        <div class="story__text">
                            <h3 class="heading__tertiary u-margin-bottom-small">
                                my office feels like a paradise
                            </h3>
                            <p class="paragraph">
                                After so many interior decoration contractors have messed up my workspace. From poor partitions to low quality window blinds and fading flower petals. I started looking for another office space but meeting Gbemisola Alli, the woman behind Misols, the architectural problem of my office space was solved starting with a sheet and right now has been perfectly executed. My office now is a place of bliss.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="u-center-text u-margin-bottom-small">
                    <a href="##" class="btn-text">
                        check all reviews &rarr;
                    </a>
                </div>
            </section>
    )
}

export default Stories