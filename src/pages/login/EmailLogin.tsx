import { FC, ReactElement } from 'react'
import React from 'react'
import styles from './login.module.scss'
// import { path } from 'ramda'
import { Button } from 'components'
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { NavLink } from 'react-router-dom'
import { ROUTE_CONSTANTS } from 'constants/routeConstants'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
// Loadable component or page should not be in index.ts file of components or page folder
interface Values {
    firstName: string;
    lastName: string;
    email: string;
  }
  
const EmailLogin: FC = (): ReactElement => {
    const [userType, setUserType] = React.useState<boolean>(false)
    const [seePassword, setSeePassword] = React.useState<boolean>(false)

    const passInput = (confirm:boolean) => {
        return (
            <div className={styles.inputWrap}>
                    <Field 
                        id={confirm ? "confirmPassword" : "password"}
                        name={confirm ? "confirmPassword" : "password"}
                        type={seePassword ? '' : "password"}
                        placeholder={confirm ? "Re-type Password" : "Password"}

                    />
                    {seePassword ?
                        <VisibilityOffIcon 
                            className={styles.icon} 
                            onClick={() => setSeePassword(!seePassword)}
                        /> 
                        :
                        <VisibilityIcon 
                            className={styles.icon} 
                            onClick={() => setSeePassword(!seePassword)}
                        />
                    }
            </div>
        )
    }
  return (
    <div className={styles.email}>
        <div className={styles.userTypeCont}>
            <div className={`${styles.userType} ${userType ? styles.selected : ''}`} onClick={() => setUserType(!userType)}>
                Already a member
            </div>
            <div className={`${styles.userType} ${!userType ? styles.selected : ''}`} onClick={() => setUserType(!userType)}>
                I am new here
            </div>
        </div>
        <Formik
            initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            }}
            onSubmit={(
            values: Values,
            { setSubmitting }: FormikHelpers<Values>
            ) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
            }, 500);
            }}
        >
            <Form className={styles.form}>
                <>
                <Field
                    id="email"
                    name="email"
                    placeholder="Email address"
                    type="email"
                />
                {passInput(false)}

                {!userType && passInput(true)}

                {userType && 
                <NavLink
                    to={ROUTE_CONSTANTS.FETCH}
                    className={styles.forgot}
                >
                    {'Forgot password?'}
                </NavLink>}
                <Button type="submit">{userType ? 'Sign Up with Email' : 'Login with Email'}</Button>
                </>
            </Form>
      </Formik>
    </div>
  )
}

export { EmailLogin }
