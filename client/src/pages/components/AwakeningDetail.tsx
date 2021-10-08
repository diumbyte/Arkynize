import { Awakening } from "../../generated/graphql";
import { useAwakeningTracking } from "../../util/useAwakeningTracking"; 
import StarIcon from "../../assets/star.png"
import StarFilledIcon from "../../assets/star_filled.png"

type AwakeningDetailProps = {
    awakenings: Array<Awakening>
}

export const AwakeningDetail = ({
    awakenings
}: AwakeningDetailProps) => {
    // const currentAwakeningOptions = awakenings.map(e => ({state: e.state, id: e.id}));
    const {
        currentAwakenings,
        desiredAwakenings,
        onCurrentAwakeningClick,
        onDesiredAwakeningClick
    } = useAwakeningTracking({awakenings})
    
    return (
        <>
            <div className="flex-auto">
                <p className="text-2xl">Current</p>
                <div className="row">
                    {currentAwakenings.map(a => 
                        <img
                            key={a.id}
                            className="cursor-pointer" 
                            src={a.status ? StarFilledIcon : StarIcon} 
                            alt={`Star Icon`} 
                            data-id={a.id} 
                            data-state={a.state}
                            onClick={() => onCurrentAwakeningClick(a.id)}
                        />
                    )}
                </div>
            </div>
            <div className="flex-auto">
                <p className="text-2xl">Desired</p>
                <div className="row">
                    {desiredAwakenings.map(a => 
                        <img 
                            key={a.id}
                            className="cursor-pointer"
                            src={a.status ? StarFilledIcon : StarIcon} 
                            alt={`Star Icon`} 
                            data-id={a.id} 
                            data-state={a.state}
                            onClick={() => onDesiredAwakeningClick(a.id)}
                        />
                    )}
                </div>
            </div>
        </>
    )
}