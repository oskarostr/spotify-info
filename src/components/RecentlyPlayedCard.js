import '../styles/imports/recently-played-card.scss'
import { useEffect } from 'react';
//import { GiBackwardTime } from "react-icons/gi";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const squareVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 }, x: 0 },
    hidden: { opacity: 0, scale: 0, x: -1000 }
  };

function LatestCard(props) {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);

    return (
        <motion.div 
            className="recently-played__card"
            variants={squareVariants}
            ref={ref}
            animate={controls}
            initial="hidden"
        >
            <img src = {props.image} alt='song cover'/>
            <div className="info-box">
                <h1>{props.name}</h1>
                <h2>{props.artist}</h2>
            </div>
            {/*<div className='time-passed'>
                <GiBackwardTime className='icon'/>
                <p className='time'>{props.time}m</p>
            </div>*/}
        </motion.div>
    )
}

export default LatestCard