// import { Button } from "@/components/ui/button";
import AboutSection from "./AboutSection";
import { motion, useDragControls } from "motion/react";

interface MyProfileProps {
  onClose: () => void;
  zIndex?: number;
  onFocus?: () => void;
}

const MyProfile = ({ onClose, zIndex, onFocus }: MyProfileProps) => {
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
      w-[95vw] md:w-[900px] h-[65vh] md:h-[550px]
      rounded-lg
      bg-[#0d1117]/95 
      border border-white/10
      shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]
      overflow-hidden font-mono
      text-white
    ">
      <div
        onPointerDown={(e) => controls.start(e)}
        className="h-9 px-4 flex items-center justify-between
        bg-[#161b22]
        border-b border-white/5
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
          Profile
        </h1>
        <div className="w-14" />
      </div>
      <div className="h-[calc(100%-40px)] overflow-y-auto no-scrollbar">
        <div className="w-full h-full
          bg-transparent
          flex flex-col items-center
        ">
          <AboutSection />
        </div>
      </div>
    </motion.section>
  );
};

export default MyProfile;
