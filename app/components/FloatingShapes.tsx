import { Compass, Globe2, Plane, Sparkles } from "lucide-react";

export default function FloatingShapes() {
  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden text-cyan-300/20">
      <Plane className="absolute left-[8%] top-[20%] animate-bounce" size={34} />
      <Globe2 className="absolute right-[10%] top-[35%] animate-pulse" size={42} />
      <Compass className="absolute bottom-[18%] left-[15%] animate-spin" size={38} />
      <Sparkles className="absolute bottom-[25%] right-[18%] animate-pulse" size={32} />
    </div>
  );
}