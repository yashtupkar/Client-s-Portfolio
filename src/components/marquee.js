import React, { useEffect, useRef } from "react";
import "./Marquee.css";

const Marquee = () => {
  const marqueeRefs = {
    marquee1: useRef(null),
    marquee2: useRef(null),
    // marquee3: useRef(null),
    // marquee4: useRef(null),
  };

  const pathRefs = {
    path1: useRef(null),
    path2: useRef(null),
    // path3: useRef(null),
    // path4: useRef(null),
  };

  useEffect(() => {
    function startMarquee(textRef, pathRef, content, speed) {
      const textPath = textRef.current;
      const path = pathRef.current;
      const pathLength = path.getTotalLength();
      textPath.innerHTML = content;

      let offset = 0;
      function animateText() {
        offset -= speed;
        if (offset < 0) {
          offset = pathLength;
        } else if (offset > pathLength) {
          offset = 0;
        }
        textPath.setAttribute("startOffset", `${offset}px`);
        requestAnimationFrame(animateText);
      }
      animateText();
    }

    const textContent1 =
      '<a href="#" target="_blank" style="text-decoration: none;">Buy tickets &nbsp;&nbsp;&nbsp;&nbsp;</a>'.repeat(
        20
      );
    startMarquee(marqueeRefs.marquee1, pathRefs.path1, textContent1, -2);

    const textContent2 =
      '<a href="#" target="_blank" style="text-decoration: none;">Learn more &nbsp;&nbsp;&nbsp;&nbsp;</a>'.repeat(
        20
      );
    startMarquee(marqueeRefs.marquee2, pathRefs.path2, textContent2, 2);

    // const textContent3 =
    //   '<a href="#" target="_blank" style="text-decoration: none;">Buy tickets &nbsp;&nbsp;&nbsp;&nbsp;</a>'.repeat(
    //     20
    //   );
    // startMarquee(marqueeRefs.marquee3, pathRefs.path3, textContent3, -2);

    // const textContent4 =
    //   '<a href="#" target="_blank" style="text-decoration: none;">Learn more &nbsp;&nbsp;&nbsp;&nbsp;</a>'.repeat(
    //     20
    //   );
    // startMarquee(marqueeRefs.marquee4, pathRefs.path4, textContent4, 2);
  }, []);

  return (
    <div className="marquee-container">
      {[1, 2].map((num) => (
        <div className="marquee-item" key={num}>
          <svg width="100%" height="200px" viewBox="0 0 1000 100">
            <defs>
              <path
                id={`text-path-${num}`}
                ref={pathRefs[`path${num}`]}
                d="M -50 50 Q 200 -50, 400 50 Q 600 150, 800 50 Q 1000 -50, 1200 50"
                fill="transparent"
              />
            </defs>

            <path
              d="M -50 50 Q 200 -50, 400 50 Q 600 150, 800 50 Q 1000 -50, 1200 50"
              fill="none"
              stroke="#B5F652"
              strokeWidth="2.5rem"
            />

            <text
              fontSize="0.8rem"
              fill="#020203"
              className="uppercase-text"
              dominantBaseline="middle"
              textAnchor="middle"
            >
              <textPath
                id={`marquee-text-${num}`}
                ref={marqueeRefs[`marquee${num}`]}
                href={`#text-path-${num}`}
              >
                {/* Text will be dynamically added by JavaScript */}
              </textPath>
            </text>
          </svg>
        </div>
      ))}
    </div>
  );
};

export default Marquee;
