import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName) => {
  return function HOC({ worksInitial = 'hidden', ...props }) {
    return (
      <motion.section
        variants={staggerContainer()}
        initial={props.hasOwnProperty('worksInitial') ? worksInitial : 'visible'}
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component {...props} />
      </motion.section>
    );
  };
};

export default StarWrapper;
