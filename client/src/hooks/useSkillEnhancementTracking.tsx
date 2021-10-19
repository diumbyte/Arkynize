import React, { useState, useEffect } from "react"
import { useAppSelector } from "../redux/hooks"
import { Enhancement } from "../generated/graphql"

// TODO: Send unitId in here in order to initialize state from redux store in case it's being tracked already
export const useSkillEnhancementTracking = (skillId: number, unitId: number, enhancements: Enhancement[]) => {

    const [selectedCurrentEnhancementId, setSelectedCurrentEnhancementId] = useState(0)
    const [selectedDesiredEnhancementId, setSelectedDesiredEnhancementId] = useState(0)
    const {units} = useAppSelector(state => state.units)

    useEffect(() => {
        const unitIdx = units.findIndex(unit => unit.unitId === unitId)
        const foundUnit = units[unitIdx]
        if(!foundUnit) {
            setSelectedCurrentEnhancementId(0)
            setSelectedDesiredEnhancementId(enhancements[0].id)
            return;
        }
        const skillIdx = foundUnit.skills.findIndex(skill => skill.skillId === skillId)
        const foundSkill = foundUnit.skills[skillIdx]

        if(unitIdx !== -1 && skillIdx !== -1) {
            setSelectedCurrentEnhancementId(foundSkill.currentEnhancement.enhancemenId)
            setSelectedDesiredEnhancementId(foundSkill.desiredEnhancement.enhancemenId)
        } else if(enhancements !== undefined) {
            setSelectedCurrentEnhancementId(0)
            setSelectedDesiredEnhancementId(enhancements[0].id)
        }
    }, [enhancements, skillId, unitId, units])

    const onCurrentEnhancementClick = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCurrentEnhancementId(parseInt(e.target.value))
        const desiredEnhancement = enhancements.find(enh => enh.id === selectedDesiredEnhancementId) as Enhancement
        const currentEnhancement = enhancements.find(enh => enh.id === parseInt(e.target.value)) as Enhancement

        if(parseInt(e.target.value) === 0) {
            return;
        }
        
        
                
        if (desiredEnhancement.level <= currentEnhancement.level) {
            const highestEnhancement = enhancements[enhancements.length - 1];
            if(currentEnhancement.level === highestEnhancement.level) {
                setSelectedDesiredEnhancementId(parseInt(e.target.value))
            } else {
                const oneLevelHigherThanCurrent = enhancements.find(enh => enh.level === currentEnhancement.level + 1) as Enhancement
                setSelectedDesiredEnhancementId(oneLevelHigherThanCurrent.id)
            }
        }
    }

    const onDesiredEnhancementClick = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const currentEnhancement = enhancements.find(enh => enh.id === selectedCurrentEnhancementId) as Enhancement
        const desiredEnhancement = enhancements.find(enh => enh.id === parseInt(e.target.value)) as Enhancement

        if (selectedCurrentEnhancementId === 0 || desiredEnhancement.level > currentEnhancement.level) {
            setSelectedDesiredEnhancementId(parseInt(e.target.value))
        }
    }
    
    return {
        selectedCurrentEnhancementId,
        selectedDesiredEnhancementId,
        onCurrentEnhancementClick,
        onDesiredEnhancementClick
    }
}