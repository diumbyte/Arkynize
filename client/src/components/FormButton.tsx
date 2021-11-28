import { ButtonHTMLAttributes } from "react"

export const SuccessButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
    type,
    className,
    children,
    onClick,
    ...props
}) => {
    return (
        <button 
            type="button"
            className={`text-white font-bold bg-emerald-500 active:bg-emerald-600 px-6 py-3 rounded shadow hover:shadow-lg outline-none ease-linear transition-all duration-150 ${className}`}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    )
}

export const ErrorButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
    type,
    className,
    children,
    onClick,
    ...props
}) => {
    return (
        <button 
            type="button"
            className={`text-white font-bold bg-red-500 active:bg-red-700 px-6 py-3 rounded shadow hover:shadow-lg outline-none ease-linear transition-all duration-150 ${className}`}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    )
}

export const NeutralButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
    type,
    className,
    children,
    onClick,
    ...props
}) => {
    return (
        <button 
            type="button"
            className={`text-white font-bold bg-blueGray-500 active:bg-blueGray-600 px-6 py-3 rounded shadow hover:shadow-lg outline-none ease-linear transition-all duration-150 ${className}`}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    )
}