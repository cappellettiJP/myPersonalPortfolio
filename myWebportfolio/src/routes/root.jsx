import { Outlet, useNavigation } from "react-router-dom"
import Header from "../components/header"
import styles from './root.module.css';



const Root = () => {
    const navigation = useNavigation()

    return (
        <>
            <Header></Header>
            <div id="detail"
            className={
        navigation.state === "loading" ? styles.loading : ""
        }
        >
                <Outlet />
            </div>
        </>
    )
}

export default Root