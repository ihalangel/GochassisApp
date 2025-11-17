// import React, { useState } from 'react';
// import styles from './../../styles/components/LoginForm.module.css';

// export default function LoginForm({ onLogin }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Aquí ajustes para validar y enviar datos de login
//     onLogin({ email, password });
//   };

//   return (
//     <form onSubmit={handleSubmit} className={styles.form}>
//        <img src="/loGocha.svg" alt="Logo" className={styles.loGocha} />
//       <h2 className={styles.title}>Iniciar sesión</h2>

//       <label htmlFor="email" className={styles.label}>Correo electrónico</label>
//       <input
//         type="email"
//         id="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//         className={styles.input}
//         placeholder="usuario@ejemplo.com"
//       />

//       <label htmlFor="password" className={styles.label}>Contraseña</label>
//       <input
//         type="password"
//         id="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//         className={styles.input}
//         placeholder="••••••••"
//       />
//         <a href="/recuperar-contrasena" className={styles.forgotPassword}>Olvidé mi contraseña</a>
//       <button type="submit" className={styles.button}>Entrar</button>
//     </form>
//   );
// }




import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './../../styles/components/LoginForm.module.css';

export default function LoginForm({ onLogin }) {
  const { t } = useTranslation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <img src="/loGocha.svg" alt="Logo" className={styles.loGocha} />
      <h2 className={styles.title}>{t('login.title', 'Iniciar sesión')}</h2>

      <label htmlFor="email" className={styles.label}>{t('login.email', 'Correo electrónico')}</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className={styles.input}
        placeholder={t('login.emailPlaceholder', 'usuario@ejemplo.com')}
      />

      <label htmlFor="password" className={styles.label}>{t('login.password', 'Contraseña')}</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className={styles.input}
        placeholder={t('login.passwordPlaceholder', '••••••••')}
      />

      <a href="/recuperar-contrasena" className={styles.forgotPassword}>
        {t('login.forgotPassword', 'Olvidé mi contraseña')}
      </a>
      <button type="submit" className={styles.button}>{t('login.submit', 'Entrar')}</button>
    </form>
  );
}
