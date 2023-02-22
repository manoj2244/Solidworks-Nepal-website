import React from 'react'

const Blog = () => {
  return (
        <section id="recent-blog-posts" className="recent-blog-posts">

      <div className="container" data-aos="fade-up">

        <div className="section-header">
          <h2>Blog</h2>
          <p>Recent posts form our Blog</p>
        </div>

        <div className="row">

          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div className="post-box">
              <div className="post-img"><img src="assets/img/fab.jpg" className="img-fluid" alt=""/></div>
              <div className="meta">
                <span className="post-date">Tue, December 12 </span>
                <span className="post-author">/ Rajendra</span>
              </div>
              <h3 className="post-title">Simulation and fabrication</h3>
              <p>Quia nam eaque omnis explicabo similique eum quaerat similique laboriosam. Quis omnis repellat sed quae consectetur magnam veritatis dicta nihil...</p>
              <a href="blog-details.html" className="readmore stretched-link"><span>Read More</span><i className="bi bi-arrow-right"></i></a>
            </div>
          </div>

          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="400">
            <div className="post-box">
              <div className="post-img"><img src="assets/img/fab.jpg" className="img-fluid" alt=""/></div>
              <div className="meta">
                <span className="post-date">Fri, September 05 </span>
                <span className="post-author">/ Sunil</span>
              </div>
              <h3 className="post-title">Simulation and fabrication</h3>
              <p>Quia nam eaque omnis explicabo similique eum quaerat similique laboriosam. Quis omnis repellat sed quae consectetur magnam veritatis dicta nihil...</p>
              <a href="blog-details.html" className="readmore stretched-link"><span>Read More</span><i className="bi bi-arrow-right"></i></a>
            </div>
          </div>

          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="600">
            <div className="post-box">
              <div className="post-img"><img src="assets/img/fab.jpg" className="img-fluid" alt=""/></div>
              <div className="meta">
                <span className="post-date">Tue, July 27 </span>
                <span className="post-author">/ Shree</span>
              </div>
              <h3 className="post-title">Simulation and fabrication</h3>
              <p>Quia nam eaque omnis explicabo similique eum quaerat similique laboriosam. Quis omnis repellat sed quae consectetur magnam veritatis dicta nihil...</p>
              <a href="blog-details.html" className="readmore stretched-link"><span>Read More</span><i className="bi bi-arrow-right"></i></a>
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Blog