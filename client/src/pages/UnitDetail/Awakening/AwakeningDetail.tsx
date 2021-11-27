import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css';
import { useState } from 'react';
import { toast } from "react-hot-toast"

import { Awakening } from "../../../generated/graphql";
import { useAwakeningTracking } from "../../../hooks/useAwakeningTracking"; 
import {ReactComponent as PlusIcon} from "../../../assets/plus.svg"
import StarIcon from "../../../assets/star.png"
import StarFilledIcon from "../../../assets/star_filled.png"
import AwakeningCost from './AwakeningCost';
import findLastIndex from '../../../util/findLastIndex';

type AwakeningDetailProps = {
    unitId?: number,
    unitName?: string,
    unitCode?: string,
    awakenings: Awakening[]
}

export const AwakeningDetail = ({
    unitId,
    unitName,
    unitCode,
    awakenings
}: AwakeningDetailProps) => {
    const [modalOpen, setModalOpen] = useState(false);
    const {
        currentAwakenings,
        desiredAwakenings,
        onCurrentAwakeningClick,
        onDesiredAwakeningClick
    } = useAwakeningTracking({unitId, awakenings})
    
    const currentAwakeningsIdx = findLastIndex(currentAwakenings, ca => ca.status === true)
    const desiredAwakeningsIdx = findLastIndex(desiredAwakenings, da => da.status === true)
    
    return (
        <>
            <div className="flex-auto">
                <p className="text-2xl text-midnightBlue">Current</p>
                <div className="row justify-start">
                    {currentAwakenings?.map(a => 
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
            <div className="flex-auto my-4 md:my-0">
                <p className="text-2xl text-midnightBlue">Desired</p>
                <div className="row justify-start">
                    {desiredAwakenings?.map(a => 
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
            <div className="flex-auto md:w-auto w-full my-4">
                <PlusIcon fill="#263645" width={32} height={32} className="cursor-pointer" onClick={() => {
                        if( currentAwakeningsIdx < desiredAwakeningsIdx) {
                            setModalOpen(true)
                        } else {
                            toast.error("Current awakening level must be less than desired awakening level")
                        }
                    }
                }/>
            </div>
            <Modal open={modalOpen} onClose={() => setModalOpen(false)} center classNames={{modal: "customModal", overlay: "customModalOverlay"}}>
                <div className="text-midnightBlue">
                    <h2 className="text-center text-2xl font-semibold pb-4">Materials Required</h2>
                    <AwakeningCost 
                        unitId={unitId}
                        unitName={unitName}
                        unitCode={unitCode}
                        currentAwakeningsIdx={currentAwakeningsIdx}
                        desiredAwakeningsIdx={desiredAwakeningsIdx}
                        awakenings={awakenings}   
                        setModalOpen={setModalOpen}
                    />
                </div>
            </Modal>
        </>
    )
}