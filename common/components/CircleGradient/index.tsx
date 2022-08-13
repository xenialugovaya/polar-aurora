import { FC } from "react";

import styles from "./Circle.module.scss";

interface CircleProps {
  className?: string;
}

export const CircleGradient: FC<CircleProps> = ({ className }) => (
  <div className={`${className} ${styles.circle}`} />
);
