import { Enhancement } from "../../generated/graphql"
import {ReactComponent as PlusIcon } from "../../assets/plus.svg"
import { useSkillEnhancementTracking } from "../../hooks/useSkillEnhancementTracking"

type SkillDetailProps = {
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
    enhancements
}: SkillDetailProps) => {

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
                    <PlusIcon fill="#fff" className="mr-4 cursor-pointer"/>
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
        </div>
    )
}