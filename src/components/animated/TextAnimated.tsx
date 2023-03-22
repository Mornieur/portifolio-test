import { useRef } from "react";
import { useInView } from "framer-motion";
import "../../styles/components/animated/textAnimated.sass";

export const TextAnimated = ({ children }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="textSelect" ref={ref}>
      <span
        className="textSpan"
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
};
