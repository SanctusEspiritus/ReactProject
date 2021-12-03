import styles from "./FormElements.module.css"

const Element = Element => ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
      <div>
        <Element {...input} {...props} className={hasError && styles.textError}/>
        {hasError && <div className={styles.spanError}>{meta.error}</div>}
      </div>
    );
  };

export const Textarea = Element("textarea");

export const Input = Element("input");