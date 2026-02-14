import { motion, useDragControls } from "motion/react";

interface MessagesProps {
    onClose: () => void;
    zIndex?: number;
    onFocus?: () => void;
}

const Messages = ({ onClose, zIndex, onFocus }: MessagesProps) => {
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
      w-[350px] md:w-[380px] h-[500px]
      rounded-2xl
      bg-white/10 backdrop-blur-3xl
      border border-white/20
      shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]
      overflow-hidden flex flex-col font-sans
    ">
            {/* Header / Title Bar */}
            <div
                onPointerDown={(e) => controls.start(e)}
                className="h-10 px-4 flex items-center justify-between
          bg-white/10 backdrop-blur-md
          border-b border-white/10
          cursor-default shrink-0
      ">
                {/* Traffic Lights (Window Controls) */}
                <div className="flex items-center gap-2" onPointerDown={(e) => e.stopPropagation()}>
                    <button
                        onClick={onClose}
                        className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
                    />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50 cursor-not-allowed" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50 cursor-not-allowed" />
                </div>

                <div className="flex flex-col items-center">
                    <span className="text-xs font-semibold text-white/90">Sunag</span>
                    <span className="text-[10px] text-white/50">iMessage</span>
                </div>

                <div className="w-10 flex justify-end">
                    {/* Placeholder for camera/new msg icon if needed later */}
                </div>
            </div>

            {/* Messages Content */}
            <div className="flex-1 p-3 overflow-y-auto w-full no-scrollbar flex flex-col gap-3">
                {/* Date Stamp */}
                <div className="text-center py-2">
                    <span className="text-[10px] text-white/40 font-medium">Today</span>
                </div>

                {/* Message 1: Music Player */}
                <div className="flex flex-col items-start max-w-[85%] self-start animate-in fade-in slide-in-from-bottom-2 duration-500">
                    <div className="bg-white backdrop-blur-sm border border-black/5 px-3 py-2 rounded-2xl rounded-tl-sm text-black text-[13px] leading-relaxed shadow-sm">
                        Hey there! 👋
                    </div>
                </div>
                <div className="flex flex-col items-start max-w-[85%] self-start animate-in fade-in slide-in-from-bottom-2 duration-700 delay-100">
                    <div className="bg-white backdrop-blur-sm border border-black/5 px-3 py-2 rounded-2xl rounded-tl-sm text-black text-[13px] leading-relaxed shadow-sm">
                        Just wanted to let you know the <span className="text-blue-400 font-medium">Music Player</span> is fully functional!
                    </div>
                </div>

                {/* Message 2: Draggable */}
                <div className="flex flex-col items-start max-w-[85%] self-start animate-in fade-in slide-in-from-bottom-2 duration-700 delay-300">
                    <div className="bg-white backdrop-blur-sm border border-black/5 px-3 py-2 rounded-2xl rounded-tl-sm text-black text-[13px] leading-relaxed shadow-sm">
                        Also, notice anything cool? 👀
                        <br />
                        Because I gave you access, all the windows are draggable! Try moving them around to customize your view. 🚀
                    </div>
                    <span className="text-[9px] text-white/30 ml-1 mt-1">Delivered</span>
                </div>
            </div>

            {/* Input Placeholder (Visual only) */}
            <div className="h-12 px-3 flex items-center gap-2 bg-white/5 border-t border-white/10 shrink-0">
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
                    <span className="text-white/50 text-base pb-0.5">+</span>
                </div>
                <div className="flex-1 h-7 rounded-xl border border-white/10 bg-black/20 flex items-center px-3">
                    <span className="text-xs text-white/30">iMessage</span>
                </div>
                <div className="w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center cursor-not-allowed opacity-80">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white ml-0.5">
                        <line x1="12" y1="19" x2="12" y2="5"></line>
                        <polyline points="5 12 12 5 19 12"></polyline>
                    </svg>
                </div>
            </div>
        </motion.section>
    )
}

export default Messages