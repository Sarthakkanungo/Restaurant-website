import CartIcon from "../Cart/Carticon";
import classes from "./HeaderCardButton.module.css";
import { useContext, useEffect ,useState } from "react";
import CartContext from '../../store/cart-context';

const HeaderCardButton = (props) => {

  const [btnIsHighLighted ,setBtnISHighLighted] = useState(false);
  const cartCtx = useContext(CartContext); 
  const {items} = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item)=> {
     return curNumber + item.amount;
  }, 0)

  const btnClasses = `${classes.button} ${btnIsHighLighted ? classes.bump : ""}`

  useEffect(() => {
    if(items.length === 0)
    {
      return;
    }
    setBtnISHighLighted(true);
     
   const timer = setTimeout(() => {
      setBtnISHighLighted(false);
    }, 300);


    return () => {
      clearTimeout(timer);
    }
  }, [items])

  

  return (

    <button className={btnClasses} onClick={props.onClick}>  
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderCardButton;
