import { FC, ReactElement } from 'react'

import styles from './login.module.scss'
import { ThirdLogin } from './ThirdLogin'
import { EmailLogin } from './EmailLogin'


const Login: FC = (): ReactElement => {

  return (
    <div className={styles.login}>
      <ThirdLogin />
      <EmailLogin />
    </div>
  )
}

export { Login }
