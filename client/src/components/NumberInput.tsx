import React from "react";
import { toast } from "react-hot-toast"
import useLongPress from "../hooks/useLongPress"

type NumberInputProps = React.HTMLAttributes<HTMLDivElement> & {
    onCountChange: (value: number) => void,
    currentValue: number,
    desiredValue: number,
}

export const NumberInput = ({
    currentValue,
    desiredValue,
    onCountChange,
    ...props
}: NumberInputProps) => {

    const incrementValue = (e?: React.MouseEvent<HTMLElement>) => {
        const incrementedValue = currentValue + 1;
        if (incrementedValue <= desiredValue) {
            onCountChange(incrementedValue)
        } else {
            toast.error(`Value cannot be greater than max (${desiredValue})`, {
                id: "increment"
            })
        }
    }

    const decrementValue = (e?: React.MouseEvent<HTMLElement>) => {
        const decrementedValue = currentValue - 1;
        if(decrementedValue >= 0) {
            onCountChange(decrementedValue)
        } else {
            toast.error("Value cannot be less than 0", {
                id: "decrement"
            })
        }
    }

    const onLongPressIncrement = useLongPress(incrementValue)
    const onLongPressDecrement = useLongPress(decrementValue)
    
    return (
        <div className={props.className}>
            <div className="flex border border-gray-100 border-opacity-30 bg-aliceBlue rounded shadow">
                <input 
                    className="w-full text-gray-400 bg-transparent text-center rounded py-1 px-2 outline-none focus:outline-none focus:ring"
                    type="text" 
                    value={currentValue}
                    onChange={(e) => {
                        const newValue = Number(e.target.value)
                        if(!Number.isInteger(newValue)) {
                            return toast.error("Invalid value entered", {
                                id: "manuallySet"
                            })
                        } 

                        if(0 <= newValue && newValue <= desiredValue) {
                            onCountChange(newValue)
                        } else {
                            toast.error("Value out of bounds", {
                                id: "manuallySet"
                            })
                        }
                    }}
                />
                <div className="flex flex-col bg-transparent">
                    <div
                        className="cursor-pointer border-b border-l border-gray-100 border-opacity-30 p-1 text-center text-xs"
                        onClick={incrementValue}
                        {...onLongPressIncrement}
                    >
                        +
                    </div>
                    <div
                        className="cursor-pointer border-l border-gray-100 border-opacity-30 p-1 text-center text-xs"
                        onClick={decrementValue}
                        {...onLongPressDecrement}
                    >
                        -
                    </div>
                </div>
            </div>
        </div>
    )
}