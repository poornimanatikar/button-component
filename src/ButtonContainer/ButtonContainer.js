import ButtonWrap from '../ButtonWrap/ButtonWrap';
import styles from './ButtonContainer.module.scss';

const ButtonContainer = (props) => {
    return <div className={styles.btn_container}>
    {props.rows.map((value, index) => {
        return <ButtonWrap key={index} heading={value.heading} title={value.title} color={value.color} 
        variant={value.variant} size={value.size} frontIcon={value.frontIcon} backIcon={value.backIcon} disabled={value.disabled} disableShadow={value.disableShadow}></ButtonWrap>
      })}
  </div>
  }
  export default ButtonContainer