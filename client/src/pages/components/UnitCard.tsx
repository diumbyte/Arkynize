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
        <div className="border border-primaryBlue rounded-2xl max-w-2xs text-center mt-14 bg-primaryBlue-dark text-white text-md">
            <div 
                className="bg-iconBlue w-24 h-24 overflow-hidden rounded-full border-black border border-opacity-50 -mt-14 mx-auto mb-0 shadow-icon"
            >
                <img 
                    className="w-full h-full object-contain"
                    src={`${process.env.PUBLIC_URL}/assets/images/hero/icon/${code}.png`} 
                    alt={`${name}'s icon`}
                />
            </div>
            <div className="pb-4">
                {name}
            </div>
        </div>
    )    
}