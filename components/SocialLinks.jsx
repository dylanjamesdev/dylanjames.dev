import React from "react";

import { Button } from "reactstrap";

import { socialLinks } from "..";

const SocialLinks = () => {
	return (
		<div className="btn-wrapper text-lg">
		
			<Button
				className="btn-icon-only rounded-circle ml-1"
				color="github"
				href={socialLinks.github}
				rel="noopener"
				aria-label="Github"
				target="_blank"
			>
				<span className="btn-inner--icon">
					<i className="fa fa-github" />
				</span>
			</Button>
			<Button
				className="btn-icon-only rounded-circle ml-1"
				color="github"
				href={socialLinks.gitlab}
				rel="noopener"
				aria-label="Github"
				target="_blank"
			>
				<span className="btn-inner--icon">
					<i className="fa fa-gitlab" />
				</span>
			</Button>

		</div>
	);
};

export default SocialLinks;
