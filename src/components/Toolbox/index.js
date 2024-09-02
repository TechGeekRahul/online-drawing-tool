import { useSelector } from 'react-redux';
import styles from './index.module.css';
import { COLORS, MENU_ITEMS } from '@/constants';

const Toolbox = () => {


    const activeMenuItem = useSelector((state)=> state.menu.activeMenuItem )
    const updateBrushSize = () =>{

    } 
const showStrokeToolOption = activeMenuItem === MENU_ITEMS.PENCIL;
const showBrushToolOption = activeMenuItem === MENU_ITEMS.PENCIL || MENU_ITEMS.ERASER;

    return(
        <div className={styles.toolboxContainer}>
        {showStrokeToolOption &&   <div className={styles.toolItem}>
                <h4 className={styles.toolText}>Stroke Color</h4>
                <div className={styles.itemContainer}>
                    <div className={styles.colorBox} style={{backgroundColor: COLORS.BLACK}}></div>
                    <div className={styles.colorBox} style={{backgroundColor: COLORS.RED}}></div>
                    <div className={styles.colorBox} style={{backgroundColor: COLORS.GREEN}}></div>
                    <div className={styles.colorBox} style={{backgroundColor: COLORS.BLUE}}></div>
                    <div className={styles.colorBox} style={{backgroundColor: COLORS.ORANGE}}></div>
                    <div className={styles.colorBox} style={{backgroundColor: COLORS.YELLOW}}></div>

                </div>
                <div className={styles.colorBox} />
            </div>}   
        {showBrushToolOption && <div className={styles.toolItem}>
                <h4 className={styles.toolText}>Brush Size</h4>
                <div className={styles.itemContainer}>
                    <input type="range" min={1} max={10} step={1} onChange={updateBrushSize} />
                </div>
            </div> }    

        </div>
    )
}
export default Toolbox;