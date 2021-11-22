import { useEffect, useRef, useState } from "react"
import { debounce } from "lodash"

type UnitImagePreviewProps = {
    name: string,
    imageSource: string,
    imageAlt: string
}

export const UnitImagePreview = ({
    name,
    imageSource,
    imageAlt
}: UnitImagePreviewProps) => {
    const [isAtTopOfPage, setIsAtTopOfPage] = useState(false)
    const componentRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        window.addEventListener("scroll", isSticky, true)

        return () => {
            window.removeEventListener("scroll", isSticky, true)
        }
    })

    const isSticky:EventListener = (e: Event) => {
        const target: HTMLDivElement = e.target as HTMLDivElement
        if(componentRef.current !== null) {
            // console.log("componentRef.current?.offsetTop", componentRef.current?.offsetTop);
            // console.log("target.scrollTop", target.scrollTop);
            
            if(componentRef.current?.offsetTop < target.scrollTop + 10) {
                setIsAtTopOfPage(true)
                // debounce(() => setIsAtTopOfPage(true), 500)
                
            } else {
                // console.log("\tNot at top of page");    
                setIsAtTopOfPage(false)
                // debounce(() => setIsAtTopOfPage(false), 500)
            }
        }
    }

    // TODO: Delete. Just for debugging
    useEffect(() => {
        console.log("isAtTopOfPage: ", isAtTopOfPage);
        
    }, [isAtTopOfPage])
    
    return (
        <div className="w-full py-4 relative" ref={componentRef}> 
        {   isAtTopOfPage ? 
            <div className="w-full fixed top-0 left-0 h-12 py-2 bg-primaryBlue-dark shadow">
                <img 
                    src={imageSource}
                    alt={imageAlt}
                    className="absolute opacity-60 left-0 top-0 w-full h-12 object-cover"
                />
                <p className="text-xl ml-8">{name}</p>
            </div>
            :
            <img 
                className=""
                src={imageSource} 
                alt={imageAlt}
            />
        }
        </div>
    )
}