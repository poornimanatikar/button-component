import ButtonLayout from '../ButtonLayout/ButtonLayout';
import styles from './PageLayout.module.scss';

const PageLayout =() => {
return (<div className={styles.page_container}>
  
<div className={styles.container_left}>
<h3 className={styles.logo}>
        <span style={{ color: '#F7542E' }}>Dev</span>challenges.io
      </h3>
    <ul>
        <li>Colors </li>
        <li>Typography</li>
        <li>Spaces </li>
        <li className={styles.selected}>Buttons </li>
        <li>Input </li>
        <li>Grid </li>
    </ul>
</div>
<div className={styles.container_right}>
    <ButtonLayout/>
</div>
</div>
)}
export default PageLayout