export type ButtonProps = {
    id?: string;
    type?: 'button' | 'submit' | 'reset';
    color?: string;
    gradientMonochrome?: string;
    gradientDuoTone?: string;
    outline?: boolean;
    size?: string;
    label?: string;
    isProcessing?: boolean;
    processingSpinner?: JSX.Element;
    pill?: boolean;
    disabled?: boolean;
    className?: string;
    children: JSX.Element | string;
    testId?: string;
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
};
