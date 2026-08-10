export const pageTransitionVariants = {

    hidden: {
        opacity: 0,
        y: 20,
    },

    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: "easeOut",
        },
    },

    exit: {
        opacity: 0,
        y: -12,
        transition: {
            duration: 0.25,
            ease: "easeIn",
        },
    },

};