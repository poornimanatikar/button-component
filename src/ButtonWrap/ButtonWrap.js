import styles from './ButtonWrap.module.scss';
import Button from '../Button/Button';


const ButtonWrap =(props) => {

  
return  <div className={styles.btn_wrap}>
<h4>{props.heading}</h4>
<Button title={props.title} color={props.color} frontIcon={props.frontIcon} backIcon={props.backIcon}
 variant={props.variant} size={props.size} heading={props.heading} disabled={props.disabled}
 disableShadow={props.disableShadow}/>

</div>
}

export default ButtonWrap