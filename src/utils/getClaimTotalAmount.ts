import { Person } from "../core/types";

export const getClaimTotalAmount = (person: Person): number => {
    return person.claims.reduce((acc, claim) => {
        const integerClaimAmount = parseInt(claim.claim_amount.split('$')[1]);
        return acc + integerClaimAmount;
    }, 0)
}