import {
  useRef,
  useEffect,
  useState,
  useMemo,
  useId,
  type FC,
  type PointerEvent,
} from "react";

interface CurvedLoopProps {
  marqueeText?: string;
  speed?: number;
  className?: string;
  curveAmount?: number;
  direction?: "left" | "right";
  interactive?: boolean;
}

const BRAND_COLORS: Record<string, string> = {
  tailwindcss: "#38BDF8",
  "react.js": "#61DAFB",
  "next.js": "#ffffff",
  typescript: "#3178C6",
  "framer motion": "#FFF312",
  "shadcn/ui": "#A855F7",
};

const CurvedLoop: FC<CurvedLoopProps> = ({
  marqueeText = "",
  speed = 2,
  className,
  curveAmount = 400,
  direction = "left",
  interactive = true,
}) => {
  const segments = useMemo(() => {
    return marqueeText
      .split("✦")
      .map((s) => s.trim())
      .filter(Boolean)
      .map((word) => ({
        text: word,
        color: BRAND_COLORS[word.toLowerCase()] ?? "#d1d5db",
      }));
  }, [marqueeText]);

  const measureRef = useRef<SVGTextElement | null>(null);
  const textPathRef = useRef<SVGTextPathElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);

  const [spacing, setSpacing] = useState(0);
  const [, setOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const uid = useId();
  const pathId = `curve-${uid}`;
  const pathD = `M-100,40 Q500,${40 + curveAmount} 1540,40`;

  const dragRef = useRef(false);
  const lastXRef = useRef(0);
  const dirRef = useRef<"left" | "right">(direction);
  const velRef = useRef(0);

  const ready = spacing > 0;

  // Measure text width
  useEffect(() => {
    if (measureRef.current) {
      setSpacing(measureRef.current.getComputedTextLength());
    }
  }, [segments, className]);

  // Initial offset
  useEffect(() => {
    if (textPathRef.current && spacing) {
      textPathRef.current.setAttribute("startOffset", -spacing + "px");
    }
  }, [spacing]);

  // Animation loop
  useEffect(() => {
    if (!ready) return;

    let frame = 0;
    const step = () => {
      if (!dragRef.current && textPathRef.current) {
        const delta = dirRef.current === "right" ? speed : -speed;
        const current = parseFloat(
          textPathRef.current.getAttribute("startOffset") || "0",
        );

        let next = current + delta;
        if (next <= -spacing) next += spacing;
        if (next > 0) next -= spacing;

        textPathRef.current.setAttribute("startOffset", next + "px");
        setOffset(next);
      }
      frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [ready, spacing, speed]);

  const onPointerDown = (e: PointerEvent) => {
    if (!interactive) return;
    dragRef.current = true;
    setIsDragging(true);
    lastXRef.current = e.clientX;
    velRef.current = 0;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: PointerEvent) => {
    if (!interactive || !dragRef.current || !textPathRef.current) return;
    const dx = e.clientX - lastXRef.current;
    lastXRef.current = e.clientX;
    velRef.current = dx;

    const current = parseFloat(
      textPathRef.current.getAttribute("startOffset") || "0",
    );
    let next = current + dx;

    if (next <= -spacing) next += spacing;
    if (next > 0) next -= spacing;

    textPathRef.current.setAttribute("startOffset", next + "px");
    setOffset(next);
  };

  const endDrag = () => {
    dragRef.current = false;
    setIsDragging(false);
    dirRef.current = velRef.current > 0 ? "right" : "left";
  };

  const cursorStyle = interactive ? (isDragging ? "grabbing" : "grab") : "auto";
// hell
  return (
    <div
      className="flex items-center justify-center w-full mt-10"
      style={{ visibility: ready ? "visible" : "hidden", cursor: cursorStyle }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
    >
      <svg
        className="select-none w-full overflow-visible block aspect-100/12 text-[6rem] font-bold uppercase leading-none"
        viewBox="0 0 1440 120"
      >
        {/* Hidden measurement text */}
        <text
          ref={measureRef}
          xmlSpace="preserve"
          style={{ visibility: "hidden", opacity: 0 }}
        >
          {segments.map((seg, i) => (
            <tspan key={i}>{seg.text} ✦ </tspan>
          ))}
        </text>

        <defs>
          <path id={pathId} ref={pathRef} d={pathD} fill="none" />
        </defs>

        {ready && (
          <text className={`font-fas ${className ?? ""}`}>
            <textPath ref={textPathRef} href={`#${pathId}`}>
              {Array(Math.ceil(1800 / spacing) + 2)
                .fill(segments)
                .flat()
                .map((seg, i) => (
                  <tspan
                    key={i}
                    fill={seg.color}
                    className="hover:opacity-80 hover:drop-shadow-[0_0_10px_currentColor]"
                  >
                    {seg.text} ✦{" "}
                  </tspan>
                ))}
            </textPath>
          </text>
        )}
      </svg>
    </div>
  );
};

export default CurvedLoop;
