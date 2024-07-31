import React from 'react';

const Project = React.forwardRef((props, ref) => {
  return (
    <section className="Projects" ref={ref}>
      <h1>hello Project</h1>
        <ul className="featured-projects">
        {/* project 1 */}
        <li className="projects">
          <div className="project-content">
            <div className="content-wrapper">
              <p className="project-overline">Featured Project</p>
              <h3 className="project-title">SchedBin</h3>
              <div className="project-description"></div>
              <ul className="project-tech-list"></ul>
              <div className="project-links"></div>
            </div>
          </div>
          <div className="project-image"></div>
        </li>


        {/* project 2 */}
        <li className="projects">
          <div className="project-content">
            <div className="content-wrapper">
              <p className="project-overline">Featured Project</p>
              <h3 className="project-title">Skycast</h3>
              <div className="project-description"></div>
              <ul className="project-tech-list"></ul>
              <div className="project-links"></div>
            </div>
          </div>
          <div className="project-image"></div>
        </li>


        {/* project 3 */}
        <li className="projects">
          <div className="project-content">
            <div className="content-wrapper">
              <p className="project-overline">Featured Project</p>
              <h3 className="project-title">Speech2Text</h3>
              <div className="project-description"></div>
              <ul className="project-tech-list"></ul>
              <div className="project-links"></div>
            </div>
          </div>
          <div className="project-image"></div>
        </li>


        {/* project 4 ///   Ongoing*/}
        <li className="projects">
          <div className="project-content">
            <div className="content-wrapper">
              <p className="project-overline">Featured Project</p>
              <h3 className="project-title">TrackRecord</h3>
              <div className="project-description"></div>
              <ul className="project-tech-list"></ul>
              <div className="project-links"></div>
            </div>
          </div>
          <div className="project-image"></div>
        </li>
      </ul>
    </section>
  );
});

export default Project;