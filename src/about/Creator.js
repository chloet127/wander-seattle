import React, { Component } from "react";
/* import MailOutlineIcon from 'url:@material-ui/icons/MailOutline';
import GitHubIcon from 'url:@material-ui/icons/GitHub';
import LinkedInIcon from 'url:@material-ui/icons/LinkedIn';
import IconButton from "url:@material-ui/core/IconButton"; */

export default class Creator extends Component {
  render() {
    return (
      <div>
        <div class={this.props.name}>
          <img src={this.props.img} alt={this.props.name} />
          <h3 className="aboutName">{this.props.name}</h3>
          <p className="aboutRoleTitle">{this.props.role}</p>
          <div className="aboutIcons">

            <div className="aboutEmail">
              {/* <IconButton variant="link" href={"mailto:" + this.props.email}>
                <MailOutlineIcon className="mail-icon" />
              </IconButton> */}
              <a href={"mailto:" + this.props.email}>{this.props.email}</a>
            </div>

            <div className="aboutGithub">
              {/* <IconButton variant="link" href={this.props.github}>
                <GitHubIcon className="aboutGithubIcon" />
              </IconButton> */}
              <a target="_blank" href={"https://" + this.props.github}>{this.props.github}</a>
            </div>
            {/* <div className="linkedin">
                <LinkedInIcon className="linkedin-icon" />
                <a href="https://www.linkedin.com/in/steven-luong">https://www.linkedin.com/in/steven-luong</a>
              </div> */}

          </div>
        </div>
      </div>
    )
  }
}