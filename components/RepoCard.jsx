import React from "react";

import { Card, CardBody, Col, Button } from "reactstrap";

import { Fade } from "react-reveal";

const ProjectsCard = ({ data }) => {
	return (
		<Col lg="6">
			<Fade left duration={1000} distance="40px">
				<Card className="shadow-lg--hover shadow mt-4">
					<CardBody>
						<div className="d-flex px-3">
							<div className="pl-4">
								<a href={data.link}>
									<h3>{data.name}</h3>
									</a>
								<p>{data.description}</p>
								<a href={data.html_url}> <Button color="primary">View on Github</Button></a>
								<a href={data.contributors_url}> <Button color="primary">View Contributors</Button></a>
								
							</div>
						</div>
					</CardBody>
				</Card>
			</Fade>
		</Col>
	);
};

export default ProjectsCard;
