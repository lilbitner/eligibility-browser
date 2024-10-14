import { RetireeEligibilityHistory } from "../../../core/types"

interface RetireeEligibilityHistoryDisplayProps {
    eligibilityHistory: RetireeEligibilityHistory
}

export const RetireeEligibilityHistoryDisplay = ({ eligibilityHistory }: RetireeEligibilityHistoryDisplayProps) => {
    return (
        <div >
            <p>Status: {eligibilityHistory.type}</p>
            <p>Eligibility start date: {eligibilityHistory.elig_start_date}</p>
            {eligibilityHistory.elig_term_date && <p>Eligibility term date: {eligibilityHistory.elig_term_date}</p>}
        </div>
    )
}