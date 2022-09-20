import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
function App() {
  const cont = useRef(null);
  const first = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(cont.current, {
      scrollTrigger: {
        trigger: first.current,
        start: "top top",
        endTrigger: cont.current,
        end: "bottom bottom",
        snap: {
          snapTo: 0.9,
          duration: { min: 0.8, max: 1.7 },
        },
      },
    });
  }, []);

  return (
    <>
      <motion.div
        ref={first}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ dealy: 0.5, duration: 0.75 }}
        className="h-[calc(100vh-5vh)] 2xl:h-screen     bg-[#120C5C] bg-hero-pattern2 bg-cover  2xl:bg-contain bg-right 2xl:bg-center md:bg-right bg-no-repeat sticky top-0 left-0 right-0 z-0"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ dealy: 0.5, duration: 0.75 }}
        ref={cont}
        className="h-[125vh] min-h-screen   bg-center mt-[-25vh]  bg-section-pattern bg-cover pt-[30vh]  bg-no-repeat sticky top-0 left-0 right-0  z-20"
      >
        <div className="">
          <p className="text-white text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
            perferendis animi optio quaerat ratione consequuntur harum illo
            minima quibusdam doloribus.
          </p>
        </div>
        <div>
          <p className="text-white text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
            perferendis animi optio quaerat ratione consequuntur harum illo
            minima quibusdam doloribus.
          </p>
        </div>
        <div>
          <p className="text-white text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
            perferendis animi optio quaerat ratione consequuntur harum illo
            minima quibusdam doloribus.
          </p>
        </div>
      </motion.div>
    </>
  );
}

export default App;
