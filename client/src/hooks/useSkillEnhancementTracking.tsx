import React, { useState, useEffect } from "react"
import { useAppSelector } from "../redux/hooks"
import { Enhancement } from "../generated/graphql"
import { TrackedUnit } from "../redux/types"

export const useSkillEnhancementTracking = (skillId: number, unitId: number, enhancements: Enhancement[]) => {

    const [selectedCurrentEnhancementId, setSelectedCurrentEnhancementId] = useState(0)
    const [selectedDesiredEnhancementId, setSelectedDesiredEnhancementId] = useState(0)
    const { trackedUnits } = useAppSelector(state => state.units)

    useEffect(() => {
        const unitIdx = trackedUnits.findIndex(unit => unit.id === unitId)
        const foundUnit = trackedUnits[unitIdx]
        if(!foundUnit) {
            setSelectedCurrentEnhancementId(0)
            setSelectedDesiredEnhancementId(enhancements[0].id)
            return;
        }
        const skillIdx = foundUnit.trackedSkills.findIndex(skill => skill.id === skillId)
        const foundSkill = foundUnit.trackedSkills[skillIdx]

        if(unitIdx !== -1 && skillIdx !== -1) {
            setSelectedCurrentEnhancementId(foundSkill.currentEnhancement.id)
            setSelectedDesiredEnhancementId(foundSkill.desiredEnhancement.id)
        } else if(enhancements !== undefined) {
            setSelectedCurrentEnhancementId(0)
            setSelectedDesiredEnhancementId(enhancements[0].id)
        }
    }, [enhancements, skillId, unitId, trackedUnits])

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

export const useTrackSkillCostChanges = (
    trackedUnits: TrackedUnit[],
    unitId: number,
    skillId: number,
    basicCatalystTracked: boolean, 
    epicCatalystTracked: boolean, 
    goldTracked: boolean,
    molagoraTracked: boolean,
    stigmaTracked: boolean,
) => {
    const [areResourcesModified, setAreResourcesModified] = useState(false)

    const [isBasicCatalystChanged, setIsBasicCatalystChanged] = useState(false)
    const [isEpicCatalystChanged, setIsEpicCatalystChanged] = useState(false)
    const [isGoldChanged, setIsGoldChanged] = useState(false)
    const [isMolagoraChanged, setIsMolagoraChanged] = useState(false)
    const [isStigmaChanged, setIsStigmaChanged] = useState(false)

    const unitIdx = trackedUnits.findIndex(unit => unit.id === unitId && unit.trackedAwakenings)

    useEffect(() => {
        if(unitIdx !== -1) {
            const skillIdx = trackedUnits[unitIdx].trackedSkills.findIndex(s => s.id === skillId)
            if(skillIdx !== -1) {
                if(basicCatalystTracked !== trackedUnits[unitIdx].trackedSkills[skillIdx].trackedCatalysts.find(c => c.isEpic === false)?.count.isTracked) {
                    setIsBasicCatalystChanged(true)
                } else {
                    setIsBasicCatalystChanged(false)
                }
            }
        }
    }, [basicCatalystTracked, trackedUnits, unitIdx, skillId])

    useEffect(() => {
        if(unitIdx !== -1) {
            const skillIdx = trackedUnits[unitIdx].trackedSkills.findIndex(s => s.id === skillId)
            if(skillIdx !== -1) {
                if(epicCatalystTracked !== trackedUnits[unitIdx].trackedSkills[skillIdx].trackedCatalysts.find(c => c.isEpic === true)?.count.isTracked) {
                    setIsEpicCatalystChanged(true)
                } else {
                    setIsEpicCatalystChanged(false)
                }
            }
        }
    }, [epicCatalystTracked, trackedUnits, unitIdx, skillId])

    useEffect(() => {
        if(unitIdx !== -1) {
            const skillIdx = trackedUnits[unitIdx].trackedSkills.findIndex(s => s.id === skillId)
            if(skillIdx !== -1) {
                if(goldTracked !== trackedUnits[unitIdx].trackedSkills[skillIdx].trackedGold.isTracked) {
                    setIsGoldChanged(true)
                } else {
                    setIsGoldChanged(false)
                }
            }
        }
    }, [goldTracked, trackedUnits, unitIdx, skillId])

    useEffect(() => {
        if(unitIdx !== -1) {
            const skillIdx = trackedUnits[unitIdx].trackedSkills.findIndex(s => s.id === skillId)
            if(skillIdx !== -1) {
                if(molagoraTracked !== trackedUnits[unitIdx].trackedSkills[skillIdx].trackedMolagora.isTracked) {
                    setIsMolagoraChanged(true)
                } else {
                    setIsMolagoraChanged(false)
                }
            }
        }
    }, [molagoraTracked, trackedUnits, unitIdx, skillId])

    useEffect(() => {
        if(unitIdx !== -1) {
            const skillIdx = trackedUnits[unitIdx].trackedSkills.findIndex(s => s.id === skillId)
            if(skillIdx !== -1) {
                if(stigmaTracked !== trackedUnits[unitIdx].trackedSkills[skillIdx].trackedStigma.isTracked) {
                    setIsStigmaChanged(true)
                } else {
                    setIsStigmaChanged(false)
                }
            }
        }
    }, [stigmaTracked, trackedUnits, unitIdx, skillId])

    useEffect(() => {
        if([isBasicCatalystChanged, isEpicCatalystChanged, isGoldChanged, isMolagoraChanged, isStigmaChanged].some(value => value === true)) {
            setAreResourcesModified(true)
        } else {
            setAreResourcesModified(false)
        }
    }, [isBasicCatalystChanged, isEpicCatalystChanged, isGoldChanged, isMolagoraChanged, isStigmaChanged])

    return {
        areResourcesModified
    }
}