import cn from 'classnames'
import styles from './Button.module.scss';

function Button(props) {
    const computedClassNames = cn(styles.Button, {
        [styles.primary]: props.color === "primary",
        [styles.secondary]: props.color === "secondary",
        [styles.danger]: props.color === "danger",
        [styles.default]: props.color === undefined,
        [styles.button_foreground]: true,
        [styles.sm]: props.size === "sm",
        [styles.md]: props.size === "md" || props.size === undefined,
        [styles.lg]: props.size === "lg",
        [styles.variant_text]: props.variant === "text",
        [styles.variant_outline]: props.variant === "outline",
        [styles.disabled]: props.disabled,
        [styles.disableShadow]: props.disableShadow,
        [styles.focus]: props.heading !== undefined && props.heading.includes('focus'),
    })
    const iconClassNames = cn(styles.Button,{
        'material-icons': true,
        'md-15': true, 
    })

    return <span>
        <button  className={computedClassNames}>
            {props.disableShadow}
        <i className={iconClassNames}>{props.frontIcon}</i>{props.title}
        <i className={iconClassNames}>{props.backIcon}</i></button>
        </span>
}
export default Button
