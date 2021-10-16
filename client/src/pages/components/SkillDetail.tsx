import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'

import { Enhancement } from "../../generated/graphql"
import { ReactComponent as PlusIcon } from "../../assets/plus.svg"
import { useSkillEnhancementTracking } from "../../hooks/useSkillEnhancementTracking"
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
    enhancements: Array<Enhancement>
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
    } = useSkillEnhancementTracking(id, enhancements)
    
    return (
        <div className="row">
            {/* Skill Info */}
            <div className="w-1/3">
                <div className="row justify-start">
                    <PlusIcon fill="#fff" className="mr-4 cursor-pointer" onClick={() => setModalOpen(true)}/>
                    <span className="text-xl">{name}</span>
                </div>
                <div>
                    <img 
                        src={`${process.env.PUBLIC_URL}/assets/images/skill/${code}.png`} 
                        alt={`${name} logo`} 
                    />
                </div>
            </div>
            {/* Current */}
            <div className="w-1/3 align-start">
                <p className="text-xl">Current</p>
                <select 
                    className="w-1/2 p-2 text-black" 
                    name={`startSkill${id}`} 
                    id={`startSkill${id}`}
                    value={selectedCurrentEnhancementId}
                    onChange={onCurrentEnhancementClick}
                >
                    {currentEnhancementOptions.map(e => <option key={e.id} value={e.id}>{e.level}</option>)}
                </select>
            </div>
            {/* Goal */}
            <div className="w-1/3">
                <p className="text-xl">Desired</p>
                <select 
                    className="w-1/2 p-2 text-black" 
                    name={`desiredSkill${id}`} 
                    id={`desiredSkill${id}`}
                    value={selectedDesiredEnhancementId}
                    onChange={onDesiredEnhancementClick}
                >
                    {enhancements.map(e => <option key={e.id} value={e.id}>{e.level}</option>)}
                </select>
            </div>
            <Modal open={modalOpen} onClose={() => setModalOpen(false)} center classNames={{modal: "customModal", overlay: "customModalOverlay"}}>
                <div className="text-offWhite">
                    <h2 className="text-center text-2xl">Materials Required</h2>
                    <form className="flex flex-col items-center py-6" onSubmit={(e) => e.preventDefault()}>
                        <SkillEnhancementCost
                            unitId={unitId}
                            unitName={unitName}
                            unitCode={unitCode}
                            currentEnhancementId={selectedCurrentEnhancementId}
                            desiredEnhancementId={selectedDesiredEnhancementId}
                            setModalOpen={setModalOpen}
                        />
                    </form>
                </div>
            </Modal>
        </div>
    )
}