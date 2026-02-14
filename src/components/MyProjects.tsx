import { motion, useDragControls } from "motion/react";
import folderIcon from "../assets/icons/icons8-folder-128.png";

interface MyProjectsProps {
  onClose: () => void;
  zIndex?: number;
  onFocus?: () => void;
}

const MyProjects = ({ onClose, zIndex, onFocus }: MyProjectsProps) => {
  const controls = useDragControls();

  return (
    <motion.section
      drag
      dragControls={controls}
      dragListener={false}
      dragMomentum={false}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      transition={{ type: "spring", damping: 20, stiffness: 300 }}
      style={{ zIndex }}
      onPointerDown={onFocus}
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      w-[95vw] md:w-[900px] h-[80vh] md:h-[600px]
      rounded-2xl
      bg-white/10 backdrop-blur-3xl
      border border-white/20
      shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]
      overflow-hidden font-sans
      text-white
    ">
      <div
        onPointerDown={(e) => controls.start(e)}
        className="h-10 px-4 flex items-center justify-between
        bg-white/5 backdrop-blur-md
        border-b border-white/10
        cursor-default shrink-0
      ">
        <div className="flex items-center gap-2" onPointerDown={(e) => e.stopPropagation()}>
          <button
            onClick={onClose}
            className="w-3 h-3 rounded-full bg-[#FF5F57] hover:bg-[#FF5F57]/80 transition-colors border border-[#E0443E]"
          />
          <div className="w-3 h-3 rounded-full bg-[#FEBC2E] border border-[#D89E24] cursor-not-allowed" />
          <div className="w-3 h-3 rounded-full bg-[#28C840] border border-[#1AAB29] cursor-not-allowed" />
        </div>

        <h1 className="text-sm font-medium text-white/80 select-none font-pop">
          Projects
        </h1>
        <div className="w-14" />
      </div>
      <div className="h-[calc(100%-40px)] p-6 overflow-y-auto no-scrollbar">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
          <a
            href="https://sprout-ecom.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 p-2 rounded-xl hover:bg-white/10 transition-colors duration-200"
          >
            <img
              src={folderIcon}
              alt="Project Folder"
              className="w-16 h-16 object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-200"
            />
            <span className="text-white/90 font-medium text-xs text-center leading-tight shadow-black/50 drop-shadow-sm">
              Sprout Ecommerce
            </span>
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default MyProjects;
