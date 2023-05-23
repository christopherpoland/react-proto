import { FC, ReactElement, ReactNode, MouseEvent, memo } from 'react'
import cn from 'classnames'

import styles from './socialButton.module.scss'

interface ISocialButton {
  className?: string
  disabled?: boolean
  onClick?: (_e: MouseEvent<HTMLButtonElement>) => void
  type?: 'button' | 'submit' | 'reset'
  children?: ReactNode
}

const SocialButton: FC<ISocialButton> = ({
  onClick,
  className,
  disabled = false,
  children,
  type = 'button'
}): ReactElement => (
  <button
    type={type}
    disabled={disabled}
    className={cn(styles.button, className)}
    onClick={onClick}
  >
    {children}
  </button>
)

const memorizedButton: FC<ISocialButton> = memo(SocialButton)

export { memorizedButton as SocialButton }
