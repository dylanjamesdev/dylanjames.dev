import React from "react";
import { Container, Row } from "reactstrap";
import GithubCard from "../components/RepoCard";
import { Fade } from "react-reveal";

const Projects = ({ repos }) => {
  return (
    <section className="section section-lg">
      <Container>
        <Fade bottom duration={1000} distance="40px">
          <div className="d-flex p-4">
            <div>
              <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                <i className="ni ni-laptop text-info" />
              </div>
            </div>
            <div className="pl-4">
              <h4 className="display-3 text-info">Public Repos</h4>
            </div>
          </div>
          <Row className="row-grid align-items-center">
            {repos.map((data, i) => {
              return <GithubCard key={i} data={data} />;
            })}
          </Row>
        </Fade>
      </Container>
    </section>
  );
};

export default Projects;
