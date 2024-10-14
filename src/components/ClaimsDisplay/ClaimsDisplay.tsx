import { Person } from "../../core/types";
import { getClaimTotalAmount } from "../../utils/getClaimTotalAmount";
import { ColumnWrapper } from "../ColumnWrapper/ColumnWrapper";

interface ClaimsDisplayProps {
    person: Person | null;
}

export const ClaimsDisplay = ({ person }: ClaimsDisplayProps) => {
    const personHasClaims = person && person.claims.length;

    const getNumberOfClaims = () => {
        if (person) return `(${person.claims.length})`;
        else return '';
    }

    const renderClaims = () => {
        const claimsList =  person?.claims.map((claim, index) => {
            return (
                <div style={{ display: 'flex', justifyContent: 'space-evenly'}} key={index}>
                    <p style={{ margin: 0}}>{claim.claim_date}</p>
                    <p style={{ margin: 0}}>{claim.claim_amount}</p>
                </div>
            )
        })

        return (
            <>  
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px'}}>
                    {claimsList}
                </div>
                <p style={{ position: 'absolute', bottom: 0 }}>Total: ${getClaimTotalAmount(person!)}</p>
            </>
        )
    }

    return (
        <ColumnWrapper title={`Claims ${getNumberOfClaims()}`}>
            {person &&
                <>
                    {!personHasClaims ? <p>No claims found</p> : renderClaims()}
                </>
            }
        </ColumnWrapper>
    )

}