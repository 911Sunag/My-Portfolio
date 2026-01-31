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
      w-[90vw] md:w-155 h-[80vh] md:h-105
      rounded-xl
      bg-white/20 backdrop-blur-xl
      border border-white/30
      shadow-[0_30px_60px_rgba(0,0,0,0.35)]
      overflow-hidden
    ">
      <div
        onPointerDown={(e) => controls.start(e)}
        className="h-10 px-4 flex items-center justify-between
        bg-white/25 backdrop-blur-md
        border-b border-white/20
        cursor-default
      ">
        <div className="flex items-center gap-2" onPointerDown={(e) => e.stopPropagation()}>
          <button
            onClick={onClose}
            className="w-3.5 h-3.5 rounded-full bg-red-500 hover:bg-red-400"
          />
        </div>

        <h1 className="text-lg font-medium text-white/90 select-none font-pop">
          Profile
        </h1>
        <div className="w-12" />
      </div>
      <div className="h-[calc(100%-40px)] p-4 overflow-y-auto">
        <div className="w-full h-full rounded-lg
          bg-white/30 backdrop-blur-md
          border border-white/20
          shadow-inner
          flex flex-col items-center
        ">
          <AboutSection />
        </div>
      </div>
    </motion.section>
  );
};

export default MyProfile;
