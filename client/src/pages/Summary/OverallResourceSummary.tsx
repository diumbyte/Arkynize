import { useOverallResourceCosts } from "../../hooks/useOverallResourceCosts"

export const OverallResourceSummary = () => {
    const { 
        trackedCatalysts,
        trackedGold,
        trackedMolagora,
        trackedRunes,
        trackedStigma
    } = useOverallResourceCosts();

    // TODO: Don't display a resource in the total if the `required` count is at 0
    return (
        <div>
            {`Current total molagora: ${trackedMolagora.current}`}
        </div>
    )
}