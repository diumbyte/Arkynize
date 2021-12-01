import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'

import { Enhancement } from "../../../generated/graphql"
import { ReactComponent as PlusIcon } from "../../../assets/plus.svg"
import { useSkillEnhancementTracking } from "../../../hooks/useSkillEnhancementTracking"
import { useState } from 'react'
import { SkillEnhancementCost } from './SkillEnhancementCost'

type SkillDetailProps = {
    unitId: number,
    unitName: string,
    unitCode: string,
    id: number,
    name: string,
    type: number,
    code: string,
    enhancements: Enhancement[]
}

export const SkillDetail = ({
    id,
    name,
    type,
    code,
    unitId,
    unitCode,
    unitName,
    enhancements
}: SkillDetailProps) => {
    const [modalOpen, setModalOpen] = useState(false);

    const currentEnhancementOptions = [{level: 0, id: 0}, ...enhancements.map(e => ({level: e.level, id: e.id}))];
    const {
        onCurrentEnhancementClick,
        onDesiredEnhancementClick,
        selectedCurrentEnhancementId,
        selectedDesiredEnhancementId
    } = useSkillEnhancementTracking(id, unitId, enhancements)
    
    return (
        <div className="flex flex-col items-center space-y-2 md:space-y-0 md:flex-row bg-white p-4 rounded shadow">
            {/* Skill Info */}
            <div className="w-full flex flex-col items-center md:block md:w-1/3">
                <p className="text-xl">{name}</p>
                <img 
                    src={`${process.env.PUBLIC_URL}/assets/images/skill/${code}.png`} 
                    alt={`${name} logo`} 
                />
            </div>
            {/* Current */}
            <div className="w-full flex flex-col items-center md:block md:w-1/3 md:align-start">
                <p className="text-gray-300">Current</p>
                <select 
                    className="w-1/2 p-2 bg-aliceBlue text-black shadow-md rounded" 
                    name={`startSkill${id}`} 
                    id={`startSkill${id}`}
                    value={selectedCurrentEnhancementId}
                    onChange={onCurrentEnhancementClick}
                >
                    {currentEnhancementOptions.map(e => <option key={e.id} value={e.id}>{e.level}</option>)}
                </select>
            </div>
            {/* Goal */}
            <div className="w-full flex flex-col items-center md:block md:w-1/3 md:align-start">
                <p className="text-gray-300">Desired</p>
                <select 
                    className="w-1/2 p-2 bg-aliceBlue text-black shadow-md rounded" 
                    name={`desiredSkill${id}`} 
                    id={`desiredSkill${id}`}
                    value={selectedDesiredEnhancementId}
                    onChange={onDesiredEnhancementClick}
                >
                    {enhancements.map(e => <option key={e.id} value={e.id}>{e.level}</option>)}
                </select>
            </div>
            <PlusIcon fill="#263645" width={32} height={32} className="mx-4 cursor-pointer" onClick={() => setModalOpen(true)}/>
            <Modal open={modalOpen} onClose={() => setModalOpen(false)} center classNames={{modal: "customModal", overlay: "customModalOverlay"}}>
                <div className="">
                    <h2 className="text-center text-2xl font-semibold pb-4">Materials Required</h2>
                    <SkillEnhancementCost
                        unitId={unitId}
                        unitName={unitName}
                        unitCode={unitCode}
                        skillId={id}
                        type={type}
                        currentEnhancementId={selectedCurrentEnhancementId}
                        desiredEnhancementId={selectedDesiredEnhancementId}
                        setModalOpen={setModalOpen}
                        enhancements={enhancements}
                    />
                </div>
            </Modal>
        </div>
    )
}