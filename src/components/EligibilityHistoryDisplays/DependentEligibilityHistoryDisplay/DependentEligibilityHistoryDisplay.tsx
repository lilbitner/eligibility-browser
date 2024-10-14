import { DependentEligibilityHistory } from "../../../core/types"

interface DependentEligibilityHistoryDisplayProps {
    eligibilityHistory: DependentEligibilityHistory
}

export const DependentEligibilityHistoryDisplay = ({ eligibilityHistory }: DependentEligibilityHistoryDisplayProps) => {
    return (
        <div >
            <p>Status: {eligibilityHistory.type}</p>
            <p>Eligibility start date: {eligibilityHistory.elig_start_date}</p>
            {eligibilityHistory.elig_term_date && <p>Eligibility term date: {eligibilityHistory.elig_term_date}</p>}
        </div>
    )
}