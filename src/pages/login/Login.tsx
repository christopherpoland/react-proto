import { FC, ReactElement } from 'react'

import styles from './login.module.scss'
import { ThirdLogin } from './ThirdLogin'


const Login: FC = (): ReactElement => {

  return (
    <div className={styles.login}>
      <ThirdLogin />
      
    </div>
  )
}

export { Login }
