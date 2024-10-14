import { EligibilityHistory, Person, EmployeeStatus } from "../../core/types";
import { ColumnWrapper } from "../ColumnWrapper/ColumnWrapper";
import { DependentEligibilityHistoryDisplay } from "./DependentEligibilityHistoryDisplay/DependentEligibilityHistoryDisplay";
import { EmployeeEligibilityHistoryDisplay } from "./EmployeeEligibilityHistoryDIsplay/EmployeeEligibilityHistoryDisplay";
import { RetireeEligibilityHistoryDisplay } from "./RetireeEligibilityHistoryDisplay/RetireeEligibilityHistoryDisplay";

interface EligibilityHistoryDisplayProps {
    person: Person | null;
}

const renderEligibilityTimeline = (eligibilityHistory: EligibilityHistory[]) => {
    if (!eligibilityHistory.length) return <p>No eligibility history</p>;
    return eligibilityHistory.map((eligibility, i) => {
        let display: React.ReactNode;
        if (eligibility.type === EmployeeStatus.DEPENDENT) {
          display = <DependentEligibilityHistoryDisplay eligibilityHistory={eligibility} />
        } else if (eligibility.type === EmployeeStatus.EMPLOYEE) {
                display = <EmployeeEligibilityHistoryDisplay eligibilityHistory={eligibility} />
        } else if (eligibility.type === EmployeeStatus.RETIREE) {
                display = <RetireeEligibilityHistoryDisplay eligibilityHistory={eligibility} />
        }

        return (
            <div key={`${eligibility.elig_start_date}-${i}`}>
                {i !== 0 && <hr />}
                {display}
            </div>
        )
    })
}

export const EligibilityHistoryDisplay = ({ person }: EligibilityHistoryDisplayProps ) => {
    return (
        <ColumnWrapper title='History'>
            {person && (
                <div style={{  textAlign: 'left' }}>
                    <p>Born: {person.date_of_birth}</p>
                    <hr />
                    {renderEligibilityTimeline(person?.eligibility_history)}
                    <hr />
                    <p>Now</p>
                </div>
            )}
        </ColumnWrapper>
    )

}