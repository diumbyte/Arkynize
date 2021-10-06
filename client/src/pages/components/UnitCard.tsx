import React from 'react'

type UnitCardProps = {
    name?: string,
    code?: string,
    id?: number
}

export const UnitCard = ({
    id,
    name,
    code
}: UnitCardProps) => {
    return (
        <div className="w-1/4 flex flex-col flex-grow min-w-90 max-w-2xs md:flex-grow-0 md:w-1/6 mx-1 py-1 md:mx-2 md:py-2 border border-tavernBrown-light bg-transparent rounded-2xl text-center text-white mb-4 cursor-pointer w-2xs">
            <div 
                className="bg-iconBlue w-18 h-18 md:w-20 md:h-20 overflow-hidden rounded-full border-black border border-opacity-50 md:mx-auto"
            >
                <img 
                    className="w-full h-full object-contain"
                    src={`${process.env.PUBLIC_URL}/assets/images/hero/icon/${code}.png`} 
                    alt={`${name}'s icon`}
                />
            </div>
            <div className="text-base flex flex-col justify-center break-words flex-grow">
                {name}
            </div>
        </div>
    )    
}