import Dock from "./Dock";
import userIcon from "../assets/icons/user.svg";
import fileIcon from "../assets/icons/icons8-folder-128.png";
import resumeIcon from "../assets/icons/pdf.png";
import githubIcon from "../assets/icons/GitHub_Invertocat_White_Clearspace.png";
import gmainIcon from "../assets/icons/icons8-gmail.svg";
import linkedinIcon from "../assets/icons/icons8-linkedin.svg";
import { useState } from "react";
import MyProfile from "./MyProfile";
import MyProjects from "./MyProjects";
import { AnimatePresence } from "motion/react";

const Apps = () => {
  const [active, setActive] = useState(null);

  const toggleComponent = (name) => {
    setActive((prev) => (prev === name ? null : name));
  };

  const items = [
    {
      icon: <img src={userIcon} width={35} height={18} alt="user" />,
      label: "My Profile",
      onClick: () => toggleComponent("myProfile"),
    },
    {
      icon: <img src={fileIcon} width={35} height={18} alt="user" />,
      label: "My Projects",
      onClick: () => toggleComponent("Projects"),
    },
    {
      icon: <img src={githubIcon} width={35} height={18} alt="file" />,
      label: "GitHub",
      onClick: () => {
        window.open("https://github.com/911Sunag", "_blank");
      },
    },
    {
      icon: <img src={resumeIcon} width={35} height={18} alt="file" />,
      label: "Click to download resume",
      onClick: () => {
        const link = document.createElement("a");
        link.href = "Sunag_Arigala_Resume.pdf";
        link.download = "Sunag_Arigala_Resume.pdf";
        link.click();
      },
    },
    {
      icon: <img src={gmainIcon} width={35} height={18} alt="file" />,
      label: "Gmail me",
      onClick: () => {
        window.open(
          "https://mail.google.com/mail/?view=cm&fs=1&to=ramsunag@gmail.com&su=Hello%20Sunag&body=Hi%20Sunag,",
          "_blank",
        );
      },
    },
    {
      icon: <img src={linkedinIcon} width={35} height={18} alt="file" />,
      label: "LinkedIN",
      onClick: () => {
        window.open(
          "https://www.linkedin.com/in/sunag-arigala-0a211b3a9/",
          "_blank",
        );
      },
    },
  ];
  return (
    <section>
      <div className="dock-wrapper">
        <Dock
          items={items}
          panelHeight={60}
          baseItemSize={50}
          magnification={70}
        />
      </div>
      <AnimatePresence>
        {active === "myProfile" && (
          <MyProfile onClose={() => setActive(null)} />
        )}
        {active === "Projects" && (
          <MyProjects onClose={() => setActive(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Apps;
