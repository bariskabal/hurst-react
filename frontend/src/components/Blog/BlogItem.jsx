import Proptypes from "prop-types";

export default function BlogItem({image}) {
    return(
        <div className="col-lg-6">
        <div className="single-blog mt-30">
            <div className="row">
                <div className="col-xl-6 col-md-7">
                    <div className="blog-info">
                        <div className="post-meta fix">
                            <div className="post-date floatleft"><span className="text-dark-red">30</span></div>
                            <div className="post-year floatleft">
                                <p className="text-uppercase text-dark-red mb-0">June, 2021</p>
                                <h4 className="post-title"><a href="#">Farniture drawing 2021</a></h4>
                            </div>
                        </div>
                        <div className="like-share fix">
                            <a href="#"><i className="zmdi zmdi-favorite"></i><span>89 Like</span></a>
                            <a href="#"><i className="zmdi zmdi-comments"></i><span>59 Comments</span></a>
                            <a href="#"><i className="zmdi zmdi-share"></i><span>29 Share</span></a>
                        </div>
                        <p className="like-desc">There are many variations of passages of Lorem Ipsum available, but the majority have suffered If you are going to use a passage  Lorem Ipsum, you alteration in some form.</p>
                        <a href="#" className="button-2 text-dark-red">Read more...</a>
                    </div>
                </div>
                <div className="col-xl-6 col-md-5">
                    <div className="blog-photo">
                        <a href="#"><img src={image} alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

BlogItem.propTypes = {
    image: Proptypes.string
}