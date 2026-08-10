import { motion } from "framer-motion";

import { pageTransitionVariants } from "./pageTransitionVariants";

const PageTransition = ({ children }) => {

    return (

        <motion.div

            variants={pageTransitionVariants}

            initial="hidden"

            animate="visible"

            exit="exit"

        >

            {children}

        </motion.div>

    );

};

export default PageTransition;