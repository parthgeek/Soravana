import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const variants: Record<string, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1 },
  },
};

interface AnimateInProps {
  children: ReactNode;
  variant?: keyof typeof variants;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

const AnimateIn = ({
  children,
  variant = "fadeUp",
  delay = 0,
  duration = 0.6,
  className,
  once = true,
}: AnimateInProps) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once, margin: "-80px" }}
    variants={variants[variant]}
    transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
  >
    {children}
  </motion.div>
);

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } },
};

export const StaggerParent = ({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-80px" }}
    variants={{
      hidden: {},
      visible: { transition: { staggerChildren: 0.12, delayChildren: delay } },
    }}
  >
    {children}
  </motion.div>
);

export const StaggerChild = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <motion.div className={className} variants={staggerItem}>
    {children}
  </motion.div>
);

export default AnimateIn;
