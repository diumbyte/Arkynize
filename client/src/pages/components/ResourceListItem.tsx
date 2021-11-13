import { useState } from 'react'
import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'

import { ReactComponent as CrossIcon } from "../../assets/cross.svg"
import { CatalystDetail } from '../CatalystDetail/CatalystDetail'

type ResourceListItemProp = {
    imageSourcePath: string,
    imageAlt: string,
    resourceName: string,
    currentCount: number,
    desiredCount: number,
    id?: number
}

const isResourceACatalyst = (path: string) => path.includes("catalyst");


export const ResourceListItem = ({
    imageSourcePath,
    imageAlt,
    resourceName,
    currentCount,
    desiredCount,
    id
}:ResourceListItemProp) => {
    const [modalOpen, setModalOpen] = useState(false);
    
    return (
        desiredCount !== 0 ?
        <>
            <div className="flex w-full items-center py-2">
                <div className="md:flex-1 flex justify-start items-center" >
                    {/* TODO: If catalyst -> open modal with drop/shop info */}
                    <img 
                        className={`h-full object-contain mx-2 md:mx-0 ${isResourceACatalyst(imageSourcePath) ? "cursor-pointer" : ""}`}
                        width={30}
                        src={imageSourcePath} 
                        alt={imageAlt}
                        onClick={() => {
                            if(!isResourceACatalyst(imageSourcePath)) {
                                return
                            } 

                            // console.log("Catalyst clicked!");
                            setModalOpen(true)
                        }}
                    />
                    <span className="pl-1 text-center hidden lg:inline">
                        {resourceName}
                    </span>
                </div>
                <CrossIcon fill={"#fff"} width={12} className="mx-2"/>
                <div className="flex-1 flex flex-row items-center">
                    <div className="flex-1 text-center md:text-right">
                        {currentCount}
                    </div>
                    <div className="px-2">
                        {` / `}
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        {desiredCount}
                    </div>
                </div>
            </div>
            {
                isResourceACatalyst(imageSourcePath) ?
                <Modal open={modalOpen} onClose={() => setModalOpen(false)} center classNames={{modal: "customModal", overlay: "customModalOverlay"}}>
                    <div className="text-offWhite">
                        <CatalystDetail
                            id={id as number}
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
        :
        <></>
    )
}