import { FC, ReactElement } from 'react'
import metamaskLogo from 'src/assets/images/MetaMask Fox.png';
import linkedinLogo from 'src/assets/images/LI-In-Bug.png';
import googleLogo from 'src/assets/images/googleLogo.png';
import styles from './login.module.scss';
import { SocialButton } from 'components'
const LoginButtons: FC = (): ReactElement => {
  const handleMetamaskLogin = () => {
    // Handle Metamask login logic here
  };

  const handleLinkedInLogin = () => {
    // Handle LinkedIn login logic here
  };

  const handleGoogleLogin = () => {
    // Handle Google login logic here
  };

  return (
    <div className={styles.buttoncont}>
      <SocialButton onClick={handleMetamaskLogin}>
            <img 
                src={metamaskLogo} 
                alt="Metamask" 
                className={styles.logo} 
            />
        </SocialButton>
      <SocialButton onClick={handleLinkedInLogin}>
            <img 
                src={linkedinLogo}
                alt="LinkedIn"
                className={styles.logo}
                style={{marginLeft: '2px'}}
            />
        </SocialButton>
      <SocialButton onClick={handleGoogleLogin}>
            <img 
                src={googleLogo}
                alt="Google" 
                className={styles.logo} 
            />
      </SocialButton>
    </div>
  );
};

export { LoginButtons }
