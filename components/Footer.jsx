import React from "react";

import { Card, Col, Row, Container } from "reactstrap";
import { socialLinks } from "..";
import SocialLinks from "./SocialLinks";

const GithubProfileCard = ({ prof }) => {
	return (
		<Card className="section-lg bg-gradient-primary shadow-lg border-0">
			<Container className="">
				<div className="p-2">
					<Row className="">
						<Col className="order-lg-2" lg="4">
							<img
								src={prof.avatar_url}
								style={{ width: "200px" }}
								alt=""
								className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
							/>
						</Col>
						<Col lg="8" className="order-lg-1">
							<h2 className="text-white">Wanna chat?</h2>
							<p className="lead text-white mt-3">
								Wanna chat about a project, or just say hi? Join my <a style={{color: "black"}} href={socialLinks.discord}>discord server!</a>
							</p>
							<SocialLinks />
						</Col>
					</Row>
				</div>
			</Container>
		</Card>
		


	);
};

export default GithubProfileCard;
