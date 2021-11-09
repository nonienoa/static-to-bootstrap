import React from 'react'

import fullsize1 from "../img/portfolio/fullsize/1.jpg"
import thumbnail1 from "../img/portfolio/thumbnails/1.jpg"
import fullsize2 from "../img/portfolio/fullsize/2.jpg"
import thumbnail2 from "../img/portfolio/thumbnails/2.jpg"
import fullsize3 from "../img/portfolio/fullsize/3.jpg"
import thumbnail3 from "../img/portfolio/thumbnails/3.jpg"
import fullsize4 from "../img/portfolio/fullsize/4.jpg"
import thumbnail4 from "../img/portfolio/thumbnails/4.jpg"
import fullsize5 from "../img/portfolio/fullsize/5.jpg"
import thumbnail5 from "../img/portfolio/thumbnails/5.jpg"
import fullsize6 from "../img/portfolio/fullsize/6.jpg"
import thumbnail6 from "../img/portfolio/thumbnails/6.jpg"

function Portfolio() {
    return (
        <div id="portfolio">
            <div className="container-fluid p-0">
                <div className="row g-0">
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href={fullsize1} title="Project Name">
                            <img className="img-fluid" src={thumbnail1} alt="..." />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">Project Name</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href={fullsize2} title="Project Name">
                            <img className="img-fluid" src={thumbnail2} alt="..." />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">Project Name</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href={fullsize3} title="Project Name">
                            <img className="img-fluid" src={thumbnail3} alt="..." />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">Project Name</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href={fullsize4} title="Project Name">
                            <img className="img-fluid" src={thumbnail4} alt="..." />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">Project Name</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href={fullsize5} title="Project Name">
                            <img className="img-fluid" src={thumbnail5} alt="..." />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">Project Name</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href={fullsize6} title="Project Name">
                            <img className="img-fluid" src={thumbnail6} alt="..." />
                            <div className="portfolio-box-caption p-3">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">Project Name</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
