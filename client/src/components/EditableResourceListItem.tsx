import { useState } from 'react'
import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'

import { ReactComponent as CrossIcon } from "../assets/cross.svg"
import { NumberInput } from "./NumberInput"
import { CatalystDetail } from '../pages/CatalystDetail/CatalystDetail'


type ResourceListItemProp = {
    imageSourcePath: string,
    imageAlt: string,
    resourceId?: number,
    resourceName: string,
    currentCount: number,
    desiredCount: number,
    isTracked: boolean,
    onCurrentCountChange: (value: number) => void
}

const isResourceACatalyst = (path: string) => path.includes("catalyst");


export const EditableResourceListItem = ({
    imageSourcePath,
    imageAlt,
    resourceId,
    resourceName,
    currentCount,
    desiredCount,
    isTracked,
    onCurrentCountChange
}:ResourceListItemProp) => {
    const [modalOpen, setModalOpen] = useState(false);
    
    return (
        <>
            <div className={`w-full sm:w-1/2 md:w-1/3 flex items-center`}>
                <div className={`flex w-auto md:w-1/2 justify-start items-center py-4`} >
                    <img 
                        className="object-contain mx-2 md:mx-0 cursor-pointer"
                        width={30}
                        src={imageSourcePath} 
                        alt={imageAlt}
                        onClick={() => {
                            if(!isResourceACatalyst(imageSourcePath)) {
                                return;
                            }

                            setModalOpen(true)
                        }}
                    />
                    <span className="pl-1 text-center hidden lg:inline">
                        {resourceName}
                    </span>
                </div>
                <div className="flex w-auto items-center">
                    <CrossIcon fill="#263645" width={12} className="mx-2"/>
                    <NumberInput
                        className="flex-1"
                        currentValue={currentCount}
                        desiredValue={desiredCount}
                        onCountChange={onCurrentCountChange}
                    />
                    <div className="mx-2 text-center">
                        {` / `}
                    </div>
                    <div className={`flex-1 text-center md:text-left ${isTracked ? "opacity-100" : "opacity-30"}`}>
                        {desiredCount}
                    </div>
                </div>
            </div>
            {
                isResourceACatalyst(imageSourcePath) ?
                <Modal open={modalOpen} onClose={() => setModalOpen(false)} center classNames={{modal: "customModal", overlay: "customModalOverlay"}}>
                    <div>
                        <CatalystDetail
                            id={resourceId as number}
                            name={resourceName}
                            imageSourcePath={imageSourcePath}
                            imageAlt={imageAlt}
                        />
                    </div>
                </Modal>
                :
                <></>
            }
        </>
    )
}