import { EmployeeEligibilityHistory } from "../../../core/types"

interface EmployeeEligibilityHistoryDisplayProps {
    eligibilityHistory: EmployeeEligibilityHistory
}

export const EmployeeEligibilityHistoryDisplay = ({ eligibilityHistory }: EmployeeEligibilityHistoryDisplayProps) => {
    return (
        <div>
            <p>Status: {eligibilityHistory.type}</p>
            <p>Employment start date: {eligibilityHistory.start_date}</p>
            <p>Eligibility start date: {eligibilityHistory.elig_start_date}</p>
            {eligibilityHistory.elig_term_date && <p>Eligibility term date: {eligibilityHistory.elig_term_date}</p>}
        </div>
    )
}