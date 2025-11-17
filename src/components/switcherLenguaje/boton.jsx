import { useTranslation } from 'react-i18next';
import styles from './../../styles/components/switcherLeng.module.css';


function LanguageSwitcher() {
 const { i18n } = useTranslation();

 const changeLanguage = (lng) => {
 i18n.changeLanguage(lng);
 };

 return (
 <div className={styles.languageSwitcher}>
 <button onClick={() => changeLanguage('es')} className={styles.button}>
 ES </button>
 <button onClick={() => changeLanguage('en')} className={styles.button}>
 EN </button>
 </div>
 );
}

export default LanguageSwitcher;

