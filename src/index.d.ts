import * as React from "react";

export interface ReactDynamicInputsProps {
    onChange: (values: string[]) => void;
    children?: (
        inputProps: {
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
            defaultValue: string;
        },
        removeButtonProps: {
            onClick: (e: React.MouseEvent<HTMLElement>) => void;
            disabled: boolean;
        }
    ) => React.ReactElement;
    defaultValues?: string[];
    defaultItemsCount?: number;
    minItems?: number;
    maxItems?: number | null;
    className?: string;
    style?: React.CSSProperties;
    inputWrapperStyle?: React.CSSProperties;
    addButtonLabel?: React.ReactNode | null;
    customAddButton?: React.ReactElement<any, any> | null;
}

declare const ReactDynamicInputs: React.FC<ReactDynamicInputsProps>;
export default ReactDynamicInputs;
