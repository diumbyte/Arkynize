
export type SkillEnhancementCostProps = {
    unitId: number,
    unitCode: string,
    unitName: string,
    currentEnhancementId: number,
    desiredEnhancementId: number,
    setModalOpen: Function
}

export const SkillEnhancementCost = ({
    unitId,
    unitName,
    unitCode,
    currentEnhancementId,
    desiredEnhancementId,
    setModalOpen
}: SkillEnhancementCostProps) => {
    return (
        <div>Test</div>
    )
}