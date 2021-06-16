import React from "react";
import "./style.scss";
import { ReactComponent as LogoStellar } from "../../assets/icons/logo-stellar.svg";

interface ProjectLogoProps {
  title?: string;
  link?: string;
}

export const ProjectLogo: React.FC<ProjectLogoProps> = ({
  title,
  link = "https://www.stellar.org/",
}) => (
  <div className="Logo">
    <a href={link} rel="noreferrer noopener">
      <LogoStellar />
    </a>
    <div className="ProjectLogoTitle">{title}</div>
  </div>
);
