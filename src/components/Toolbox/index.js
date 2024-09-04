import { useSelector,useDispatch } from 'react-redux';
import styles from './index.module.css';
import cx from "classnames";
import { COLORS, MENU_ITEMS } from '@/constants';
import { changeColor,changeBrushSize } from '@/slice/toolboxSlice';
const Toolbox = () => {

const dispatch = useDispatch();
    const activeMenuItem = useSelector((state)=> state.menu.activeMenuItem )
    const updateBrushSize = (e) =>{
        dispatch(changeBrushSize({item:activeMenuItem , size: e.target.value }))
    } 
    const updateColor = (newColor) =>{
        dispatch(changeColor({item:activeMenuItem , color: newColor }))
    } 
    const {color,size} = useSelector((state)=> state.toolbox[activeMenuItem])
const showStrokeToolOption = activeMenuItem === MENU_ITEMS.PENCIL;
const showBrushToolOption = activeMenuItem === MENU_ITEMS.PENCIL || MENU_ITEMS.ERASER;

    return(
        <div className={styles.toolboxContainer}>
        {showStrokeToolOption &&   <div className={styles.toolItem}>
                <h4 className={styles.toolText}>Stroke Color</h4>
                <div className={styles.itemContainer}>
                    <div className={cx(styles.colorBox , {[styles.active]: color === COLORS.BLACK})} style={{backgroundColor: COLORS.BLACK}} onClick={()=> updateColor(COLORS.BLACK)} ></div>
                    <div className={cx(styles.colorBox , {[styles.active]: color === COLORS.RED})} style={{backgroundColor: COLORS.RED}} onClick={()=> updateColor(COLORS.RED)} ></div>
                    <div className={cx(styles.colorBox , {[styles.active]: color === COLORS.GREEN})} style={{backgroundColor: COLORS.GREEN}}  onClick={()=> updateColor(COLORS.GREEN)} ></div>
                    <div className={cx(styles.colorBox , {[styles.active]: color === COLORS.BLUE})} style={{backgroundColor: COLORS.BLUE}}  onClick={()=> updateColor(COLORS.BLUE)} ></div>
                    <div className={cx(styles.colorBox , {[styles.active]: color === COLORS.ORANGE})} style={{backgroundColor: COLORS.ORANGE}}  onClick={()=> updateColor(COLORS.ORANGE)} ></div>
                    <div className={cx(styles.colorBox , {[styles.active]: color === COLORS.YELLOW})} style={{backgroundColor: COLORS.YELLOW}}  onClick={()=> updateColor(COLORS.YELLOW)} ></div>

                </div>
                <div className={styles.colorBox} />
            </div>}   
        {showBrushToolOption && <div className={styles.toolItem}>
                <h4 className={styles.toolText}>Brush Size</h4>
                <div className={styles.itemContainer}>
                    <input type="range" min={1} max={10} step={1} onChange={updateBrushSize} value={size} />
                </div>
            </div> }    

        </div>
    )
}
export default Toolbox;