import { useState } from 'react';
import styles from '../components/Login.module.css'

{/*Icons*/ }
import { FaRegCheckSquare, FaRegSquare, FaLock, FaUser } from 'react-icons/fa';
import { PureNavbar } from '../components/Navbar';
import { useAuth } from '../context/AuthContext';
import LoginWithGoogle from './LoginWithGoogle';

function Login() {
    const { user, login } = useAuth()
    const [remember, setRemeber] = useState(false);
    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const handleLogin = async (e) => {
        //e.preventDefault();
        try {
            await login(data.email, data.password)
        } catch {
            console.error("Some terrible mistake has been witnessed by these lands whilst attempting to login")
        }
    }
    return (
        <div className={styles['main-login-container']}>

            {/*login interface*/}
            <div className={styles['login-title']}>
                Welcome back 👋
            </div>
            <div className={styles['login-container']}>
                <div className={styles['label']}>Continue with your social account:</div>
                {/*login with google*/}
                <LoginWithGoogle />
                {/*login with facebook*/}

                <div className={styles['label']}>Or log in with your Majordomu account:</div>
                {/*login with default credentials*/}
                <div className={styles['input-container']}>
                    <FaUser />
                    <input
                        placeholder='Your mail'
                        type="text"
                        required
                        className={styles['login-input']}
                        value={data.email}
                        onChange={(e) => setData({
                            ...data,
                            email: e.target.value,
                        })}></input>
                </div>
                <div className={styles['input-container']}>
                    <FaLock />
                    <input
                        placeholder='Your password'
                        type="password"
                        required
                        className={styles['login-input']}
                        value={data.password}
                        onChange={(e) => setData({
                            ...data,
                            password: e.target.value,
                        })}></input>
                </div>
                <div className={styles['login-toggle']} onClick={() => { setRemeber(!remember) }}>
                    {remember ? <FaRegCheckSquare /> : <FaRegSquare />}
                    <div className={styles['login-toggle-label']}>
                        Stay logged in
                    </div>
                </div>

                <div
                    className={styles['login-button']}
                    onClick={() => handleLogin()}
                >Log In</div>

                <div className={styles['forgot-password']}>Forgot password?</div>
            </div>
            <div className={styles['background-container']}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f2262d" fillOpacity="7" d="M0,0L26.7,42.7C53.3,85,107,171,160,208C213.3,245,267,235,320,208C373.3,181,427,139,480,117.3C533.3,96,587,96,640,128C693.3,160,747,224,800,234.7C853.3,245,907,203,960,197.3C1013.3,192,1067,224,1120,208C1173.3,192,1227,128,1280,96C1333.3,64,1387,64,1413,64L1440,64L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
            </div>
            <div className={styles['background-container']}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300"><path fill="#f24526" fillOpacity="7" d="M0,224L26.7,234.7C53.3,245,107,267,160,240C213.3,213,267,139,320,138.7C373.3,139,427,213,480,218.7C533.3,224,587,160,640,144C693.3,128,747,160,800,160C853.3,160,907,128,960,117.3C1013.3,107,1067,117,1120,138.7C1173.3,160,1227,192,1280,176C1333.3,160,1387,96,1413,64L1440,32L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
            </div>
            <div className={styles['background-container']}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 260"><path fill="#e95e45" fillOpacity="7" d="M0,96L26.7,128C53.3,160,107,224,160,234.7C213.3,245,267,203,320,181.3C373.3,160,427,160,480,149.3C533.3,139,587,117,640,133.3C693.3,149,747,203,800,208C853.3,213,907,171,960,154.7C1013.3,139,1067,149,1120,160C1173.3,171,1227,181,1280,160C1333.3,139,1387,85,1413,58.7L1440,32L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
            </div>
        </div>
    )
}

export default Login