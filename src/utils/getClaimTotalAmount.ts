import { Person } from "../core/types";

export const getClaimTotalAmount = (person: Person): number => {
    return person.claims.reduce((acc, claim) => {
        // this logic is relying on the fact that the claim_amount is always in the format of $<number>
        const integerClaimAmount = parseInt(claim.claim_amount.split('$')[1]);
        return acc + integerClaimAmount;
    }, 0)
}