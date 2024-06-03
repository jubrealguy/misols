import data from "./Data"

const Projects = () => {
    return (
        <section id="projects" className="section-project">
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading__secondary">
                    highly rated projects
                </h2>
            </div>

            <div className="row">
                {
                    data.projects.map((project, index) => {
                        return (
                            <div className="col-1-of-3">
                                <div className="card">
                                    <div className="card__side card__side--front">
                                    <div className={`card__picture card__picture--${project.no}`}>&nbsp;</div>

                                        <h4 className="card__heading">
                                            <span className={`card__heading-span card__heading-span--${project.no}`}>{project.title}</span>
                                        </h4>

                                        <div className="card__details">
                                            <ul>
                                                {project.list.map(item => <li>{item}</li>)}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className={`card__side card__side--back card__side--back-${project.no}`}>
                                        <div className="card__cta">
                                            <div className="card__project-box">
                                                <div className="card__project-year">year</div>
                                                <div className="card__project-time">{project.year}</div>
                                            </div>

                                            <a href="##" className="btn btn--white">check project</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className="u-center-text u-margin-top-huge">
                <a href="##" className="btn btn--blue ">check all projects</a>
            </div>
        </section>
    )
}

export default Projects