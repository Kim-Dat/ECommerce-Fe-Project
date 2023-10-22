import React from "react";

const CustomInput = (props) => {
    const { type, name, placeholder, className, value, ...prop } = props;
    return (
        <div>
            <input
                type={type}
                name={name}
                className={`form-control ${className}`}
                placeholder={placeholder}
                min={prop.min}
                max={prop.max}
            />
        </div>
    );
};

export default CustomInput;
