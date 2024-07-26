import "./button.css"
import { ButtonProps } from "./button.interface";

function Button(props: ButtonProps) {
    return <button {...props} className="button">{props.children}</button>;
}

export default Button;
