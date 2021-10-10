import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css';

import { Awakening } from "../../generated/graphql";
import { useAwakeningTracking } from "../../hooks/useAwakeningTracking"; 
import {ReactComponent as PlusIcon} from "../../assets/plus.svg"
import StarIcon from "../../assets/star.png"
import StarFilledIcon from "../../assets/star_filled.png"
import { useState } from 'react';
import AwakeningCost from '../../util/AwakeningCost';
import findLastIndex from '../../util/findLastIndex';

type AwakeningDetailProps = {
    awakenings: Array<Awakening>
}

export const AwakeningDetail = ({
    awakenings
}: AwakeningDetailProps) => {
    const [modalOpen, setModalOpen] = useState(false);
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
                <div className="row justify-start">
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
            <div className="flex-auto my-4 md:my-0">
                <p className="text-2xl">Desired</p>
                <div className="row justify-start">
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
            <div className="flex-auto md:w-auto w-full my-4">
                <PlusIcon fill={`#fff`} width={32} height={32} className="cursor-pointer" onClick={() => setModalOpen(true)}/>
            </div>
            <Modal open={modalOpen} onClose={() => setModalOpen(false)} center classNames={{modal: "customModal", overlay: "customModalOverlay"}}>
                <div className="text-offWhite">
                    <h2 className="text-center text-2xl">Materials Required</h2>
                    <div className="flex flex-col items-center py-6">
                        <AwakeningCost 
                            currentAwakeningsIdx={findLastIndex(currentAwakenings, ca => ca.status === true)}
                            desiredAwakeningsIdx={findLastIndex(desiredAwakenings, da => da.status === true)}
                            awakenings={awakenings}   
                        />
                    </div>
                    <div className="w-full row">
                        <button className="primaryButton active:bg-buttonGreen-dark md:w-1/5 w-1/2">Track!</button>
                    </div>
                </div>
            </Modal>
        </>
    )
}