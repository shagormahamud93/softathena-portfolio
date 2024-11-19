
import React, { useRef, useEffect } from "react";
import useScrollDirection from "@/hooks/sticky-header"; // Import useScrollDirection hook

const BacktoTop = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const isSticky = useScrollDirection(elementRef.current);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div ref={elementRef} className={`progress-wrap ${isSticky ? "active-progress" : ""}`}>
      <div className={`backtotop-wrap cursor-pointer ${isSticky ? "active-progress" : ""}`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <svg className="backtotop-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
    </div>
  );
};

export default BacktoTop;





