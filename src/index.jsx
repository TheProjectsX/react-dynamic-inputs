import React, { useEffect, useState } from "react";
import "./index.css";

const ReactDynamicInputs = ({
    onChange,
    children: CustomElement,
    defaultValues = [],
    defaultItemsCount = 2,
    minItems = 0,
    maxItems,
    className = "",
    style = {},
    inputWrapperStyle = {},
    addButtonLabel = "Add More",
    customAddButton,
}) => {
    const [values, setValues] = useState(
        defaultValues.length < defaultItemsCount
            ? new Array(defaultItemsCount).fill("")
            : defaultValues
    );

    const handleUpdateRecord = (idx, value) => {
        setValues((prev) =>
            prev.map((currentValue, currentIdx) =>
                currentIdx === idx ? value : currentValue
            )
        );
    };

    const handleAddItem = () => {
        if (maxItems && values.length >= maxItems) return;
        setValues((prev) => [...prev, ""]);
    };

    const handleRemoveItem = (idx) => {
        if (values.length <= minItems) return;
        setValues((prev) => prev.filter((_, currentIdx) => currentIdx !== idx));
    };

    useEffect(() => {
        onChange([...values]);
    }, [values]);

    let InputArea = (inputProps, removeButtonProps) => (
        <div className="dir__input-group">
            <input type="text" className="dir__input" {...inputProps} />
            <button className="dir__remove-btn" {...removeButtonProps}>
                <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"></path>
                </svg>
            </button>
        </div>
    );

    if (CustomElement) {
        InputArea = CustomElement;
    }

    let AddButton = (
        <button
            onClick={() => handleAddItem()}
            className="dir__add-btn"
            disabled={!!maxItems && values.length >= maxItems}
        >
            {addButtonLabel ?? "Add More"}
        </button>
    );

    if (customAddButton) {
        AddButton = React.cloneElement(customAddButton, {
            onClick: () => handleAddItem(),
            disabled: !!maxItems && values.length >= maxItems,
        });
    }

    return (
        <div
            className={`dir__wrapper ${className ?? ""}`}
            style={style}
            data-name="multiselect_wrapper"
        >
            <div
                data-name="multiselect_inputs_wrapper"
                className="dir__inputs-wrapper"
                style={inputWrapperStyle}
            >
                {values.map((value, idx) => (
                    <div
                        key={idx}
                        data-name="multiselect_item"
                        className="dir__item"
                    >
                        {InputArea(
                            {
                                onChange: (e) =>
                                    handleUpdateRecord(idx, e.target.value),
                                defaultValue: value,
                            },
                            {
                                onClick: () => handleRemoveItem(idx),
                                disabled: values.length <= minItems,
                            }
                        )}
                    </div>
                ))}
            </div>

            {AddButton}
        </div>
    );
};

export default ReactDynamicInputs;
