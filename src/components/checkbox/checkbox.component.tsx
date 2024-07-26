import { useRef } from "react";
import "./checkbox.css";
import { CheckboxProps } from "./checkbox.interface";

function Checkbox(props: CheckboxProps) {
    
    const checkboxRef = useRef<HTMLInputElement>(null);

    function onClick() {
        if(checkboxRef.current) {
            checkboxRef.current.click();
        }
    }
    
    return (
        <div className="checkbox">
            <input {...props} type="checkbox" ref={checkboxRef} readOnly />
            <div onClick={onClick}>
                <svg
                    width="17"
                    height="12"
                    viewBox="0 0 17 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0.68 6.592L6.22879 11.5272C6.24925 11.5454 6.28055 11.5437 6.29899 11.5235L16.32 0.520004"
                        stroke="#878787"
                        strokeLinecap="round"
                    />
                </svg>
            </div>
        </div>
    );
}

export default Checkbox;
