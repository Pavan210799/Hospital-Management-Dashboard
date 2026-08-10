import { motion } from "framer-motion";

const AuthTransition = ({ children }) => {
return (
<motion.div
style={{
width: "100%",
display: "flex",
alignItems: "center",
justifyContent: "center",
}}
initial={{ opacity: 0, x: 24 }}
animate={{ opacity: 1, x: 0 }}
exit={{ opacity: 0, x: -24 }}
transition={{ duration: 0.3 }}
>
{children}
</motion.div>
);
};

export default AuthTransition;
