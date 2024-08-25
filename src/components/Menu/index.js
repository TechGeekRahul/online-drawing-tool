import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil,faEraser,faRotateLeft,faRotateRight,faArrowDown} from '@fortawesome/free-solid-svg-icons'
import styles from "./index.module.css"
  const Menu = () => {
    return(
        <div className={styles.menuContainer}>
            <div className={styles.iconWrapper}>
            <FontAwesomeIcon className={styles.icons} icon={faPencil} />
            </div>
            <div className={styles.iconWrapper}>
            <FontAwesomeIcon className={styles.icons} icon={faEraser} />
            </div>
            <div className={styles.iconWrapper}>
            <FontAwesomeIcon className={styles.icons} icon={faRotateLeft} />
            </div>
            <div className={styles.iconWrapper}>
            <FontAwesomeIcon className={styles.icons} icon={faRotateRight} />
            </div>
            <div className={styles.iconWrapper}>
            <FontAwesomeIcon className={styles.icons} icon={faArrowDown} />
            </div>
        </div>
    )
}

export default Menu;