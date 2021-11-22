import { useEffect, useState } from "react";

const useLongPress = (
    onLongPress: Function,
    { delay = 300 } = {}
    ) => {
    const [startLongPress, setStartLongPress] = useState(false)

    useEffect(() => {
        let timerId:number

        if(startLongPress) {
            timerId = setTimeout(onLongPress, delay)
        }
        
        return () => {
            clearTimeout(timerId)
        }
    }, [onLongPress, delay, startLongPress])

    const start = () => setStartLongPress(true)
    const clear = () => setStartLongPress(false)
    
    return {
        onMouseDown: function(e?: React.MouseEvent<HTMLElement>) {return start()},
        onMouseUp: function(e?: React.MouseEvent<HTMLElement>) {return clear()},
        onMouseLeave: function(e?: React.MouseEvent<HTMLElement>) {return clear()},
        onTouchStart: function(e?: React.TouchEvent<HTMLDivElement>) {return start()},
        onTouchEnd: function(e?: React.TouchEvent<HTMLDivElement>) {return clear()},
    };
};

export default useLongPress;