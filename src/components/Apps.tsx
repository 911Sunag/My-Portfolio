import Dock from "./Dock";
import userIcon from "../assets/icons/user.svg";
import fileIcon from "../assets/icons/icons8-folder-128.png";

import githubIcon from "../assets/icons/GitHub_Invertocat_White_Clearspace.png";
import OGGreenIcon from "../assets/icons/OG Green Icon (1).svg";
import gmainIcon from "../assets/icons/icons8-gmail.svg";
import linkedinIcon from "../assets/icons/icons8-linkedin.svg";
import AppleMusic from "../assets/icons/standard.svg";
import { useState } from "react";
import MyProfile from "./MyProfile";
import MyProjects from "./MyProjects";
import MusicWidget from "./MusicWidget";
import Messages from "./Messages";
import { AnimatePresence } from "motion/react";

const Apps = () => {
  // Store the order of active windows. The last element is on top (highest z-index).
  const [windowOrder, setWindowOrder] = useState<string[]>([]);
  const [isMusicOpen, setIsMusicOpen] = useState(false);

  const openApp = (name: string) => {
    setWindowOrder((prev) => {
      
      if (prev.includes(name)) {
        return [...prev.filter((item) => item !== name), name];
      }
      
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
      icon: (
        <div className="relative">
          <img src={OGGreenIcon} width={35} height={18} alt="file" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
            2
          </span>
        </div>
      ),
      label: "iMessage",
      onClick: () => openApp("Messages"),
    },
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
      icon: <img src={AppleMusic} width={30} height={18} alt="file" />,
      label: "Music",
      onClick: () => setIsMusicOpen((prev) => !prev),
    },

    {
      icon: <img src={gmainIcon} width={35} height={18} alt="file" />,
      label: "Send a mail",
      onClick: () => {
        window.open(
          "https://mail.google.com/mail/?view=cm&fs=1&to=sunag.arigala@gmail.com&su=Job%20Opportunity%20%7C%20Sunag%20Arigala&body=Hi%20Sunag,%0A%0AI%20am%20reaching%20out%20regarding%20a%20potential%20role%20at%20[Company%20Name].%20We%20would%20love%20to%20discuss%20your%20background%20further.",
          "_blank",
        );
      },
    },
    {
      icon: <img src={linkedinIcon} width={35} height={18} alt="file" />,
      label: "LinkedIN",
      onClick: () => {
        window.open(
          "https://www.linkedin.com/in/sunag-arigala",
          "_blank",
        );
      },
    }
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
            key="myProfile"
            onClose={() => closeApp("myProfile")}
            zIndex={windowOrder.indexOf("myProfile") + 10}
            onFocus={() => focusApp("myProfile")}
          />
        )}
        {windowOrder.includes("Projects") && (
          <MyProjects
            key="Projects"
            onClose={() => closeApp("Projects")}
            zIndex={windowOrder.indexOf("Projects") + 10}
            onFocus={() => focusApp("Projects")}
          />
        )}
        {isMusicOpen && (
          <MusicWidget
            key="musicWidget"
            onClose={() => setIsMusicOpen(false)}
          />
        )}
        {windowOrder.includes("Messages") && (
          <Messages
            key="Messages"
            onClose={() => closeApp("Messages")}
            zIndex={windowOrder.indexOf("Messages") + 10}
            onFocus={() => focusApp("Messages")}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Apps;
