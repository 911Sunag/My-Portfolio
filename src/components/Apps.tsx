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
  // Store the order of active windows. The last element is on top (highest z-index).
  const [windowOrder, setWindowOrder] = useState<string[]>([]);

  const openApp = (name: string) => {
    setWindowOrder((prev) => {
      // If already open, move to front
      if (prev.includes(name)) {
        return [...prev.filter((item) => item !== name), name];
      }
      // If not open, add to front
      return [...prev, name];
    });
  };

  const closeApp = (name: string) => {
    setWindowOrder((prev) => prev.filter((item) => item !== name));
  };

  const focusApp = (name: string) => {
    setWindowOrder((prev) => {
      if (prev[prev.length - 1] === name) return prev; // Already focused
      return [...prev.filter((item) => item !== name), name];
    });
  };

  const items = [
    {
      icon: <img src={userIcon} width={35} height={18} alt="user" />,
      label: "My Profile",
      onClick: () => openApp("myProfile"),
    },
    {
      icon: <img src={fileIcon} width={35} height={18} alt="user" />,
      label: "My Projects",
      onClick: () => openApp("Projects"),
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
        link.href = "Sunag_Resume.pdf";
        link.download = "Sunag_Resume.pdf";
        link.click();
      },
    },
    {
      icon: <img src={gmainIcon} width={35} height={18} alt="file" />,
      label: "Sand a mail",
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
        {windowOrder.includes("myProfile") && (
          <MyProfile
            onClose={() => closeApp("myProfile")}
            zIndex={windowOrder.indexOf("myProfile") + 10}
            onFocus={() => focusApp("myProfile")}
          />
        )}
        {windowOrder.includes("Projects") && (
          <MyProjects
            onClose={() => closeApp("Projects")}
            zIndex={windowOrder.indexOf("Projects") + 10}
            onFocus={() => focusApp("Projects")}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Apps;
