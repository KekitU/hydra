import { useId } from "react";
import * as styles from "./checkbox-field.css";
import { CheckIcon } from "@primer/octicons-react";
import cn from "classnames";

export interface CheckboxFieldProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  theme?: keyof typeof styles.checkboxThemes;
}

export function CheckboxField({
  label,
  theme = "dark",
  ...props
}: CheckboxFieldProps) {
  const id = useId();

  return (
    <div className={styles.checkboxField}>
      <div className={cn(styles.checkbox, styles.checkboxThemes[theme])}>
        <input
          id={id}
          type="checkbox"
          className={styles.checkboxInput}
          {...props}
        />
        {props.checked && <CheckIcon />}
      </div>
      <label htmlFor={id} className={styles.checkboxLabel}>
        {label}
      </label>
    </div>
  );
}
