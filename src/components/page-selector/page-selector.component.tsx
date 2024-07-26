import Checkbox from "../checkbox/checkbox.component";
import "./page-selector.css";
import { PageSelectorProps } from "./page-selector.interface";

function PageSelector(props: PageSelectorProps) {

    function onClick(event: any) {
        if(props.onChange) {
            props.onChange(event)
        }
    }

    return (
        <div className="page-selector" onClick={onClick}>
            <span>{props.text}</span>
            <Checkbox {...props}/>
        </div>
    );
}

export default PageSelector;
