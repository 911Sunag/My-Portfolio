
import { motion } from "motion/react";
import { X } from "lucide-react";

interface MusicWidgetProps {
    onClose: () => void;
}

const MusicWidget = ({ onClose }: MusicWidgetProps) => {
    return (
        <motion.div
            drag
            dragMomentum={false}
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 20 }}
            className="fixed top-5 right-4 z-0 w-full max-w-[320px] rounded-2xl shadow-2xl bg-[#000510]"
        >
            <div className="relative group">
                
                <button
                    onClick={onClose}
                    className="absolute -top-3 -right-3 bg-neutral-800 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-110 shadow-md border border-neutral-700 cursor-pointer"
                    aria-label="Close widget"
                    onPointerDown={(e) => e.stopPropagation()}
                >
                    <X size={14} />
                </button>

                <iframe
                    allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                    frameBorder="0"
                    height="175"
                    style={{
                        width: "100%",
                        maxWidth: "320px",
                        overflow: "hidden",
                        background: "#000510",
                        borderRadius: "12px",
                        pointerEvents: "auto",
                    }}
                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                    src="https://embed.music.apple.com/us/album/let-it-happen/1440838039?i=1440838060&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1440838060&amp;theme=auto"
                    title="Media player"
                    className="cursor-move"
                />

               
                <div className="absolute top-0 left-0 w-full h-4 z-105 cursor-grab active:cursor-grabbing" />
            </div>
        </motion.div>
    );
};

export default MusicWidget;
