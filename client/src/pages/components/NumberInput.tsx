import React from "react";

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
    return (
        <div className={props.className}>
            <div className="flex border border-gray-100 border-opacity-30 rounded">
                <input 
                    className="w-full text-white bg-transparent text-center py-1 px-2"
                    type="text" 
                    value={currentValue}
                    onChange={(e) => {
                        const newValue = Number(e.target.value)
                        if(!Number.isInteger(newValue)) {
                            return
                        } 


                        if(0 <= newValue && newValue <= desiredValue) {
                            onCountChange(newValue)
                        }
                    }}
                />
                <div className="flex flex-col bg-transparent">
                    <div
                        className="cursor-pointer border-b border-l border-gray-100 border-opacity-30 p-1 text-center text-xs"
                        onClick={() => {
                            const incrementedValue = currentValue + 1;
                            if (incrementedValue <= desiredValue) {
                                onCountChange(incrementedValue)
                            } else {
                                // TODO: Toast error?
                            }
                        }}
                    >
                        +
                    </div>
                    <div
                        className="cursor-pointer border-l border-gray-100 border-opacity-30 p-1 text-center text-xs"
                        onClick={() => {
                            const decrementedValue = currentValue - 1;
                            if(decrementedValue >= 0) {
                                onCountChange(decrementedValue)
                            }
                        }}
                    >
                        -
                    </div>
                </div>
            </div>
        </div>
    )
}