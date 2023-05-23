import { FC, ReactElement } from 'react'
import TempLogo from 'src/assets/images/TempLogo.png'
import styles from './login.module.scss'
import { LoginButtons } from './LoginButtons'

// Loadable component or page should not be in index.ts file of components or page folder
const ThirdLogin: FC = (): ReactElement => {

  return (
    <div className={styles.third}>
        <div className={styles.logoContainer}>
            <img src={TempLogo} />
        </div>
        <div>Login using social media to get quick access.</div>
        <LoginButtons />
    </div>
  )
}

export { ThirdLogin }
