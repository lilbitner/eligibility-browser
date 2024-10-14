import { EligibilityHistory, EligibilityStatus, EmployeeStatus, Person } from "../core/types";

const determineStatus = (currentEligibility: EligibilityHistory): EligibilityStatus => {
  switch (currentEligibility.type) {
    case EmployeeStatus.EMPLOYEE:
      if (currentEligibility.elig_term_date && currentEligibility.termed_date) {
        return 'empl, termed';
      }
      return 'empl';
    case EmployeeStatus.DEPENDENT:
      if (currentEligibility.elig_term_date) {
        return 'dep, termed';
      }
      return 'dep';
    case EmployeeStatus.RETIREE:
      if (currentEligibility.elig_term_date) {
        return 'ret, termed';
      }
      return 'ret';
    default: 
     return 'empl';

  }
}

export const getStatus = (person: Person): string => {
  let mostRecentElgibilityDate: Date;
  let index = 0;

  person.eligibility_history.forEach((eligibilityHistory: EligibilityHistory, i: number) => {
    if (!mostRecentElgibilityDate || new Date(eligibilityHistory.elig_start_date) > mostRecentElgibilityDate) {
      mostRecentElgibilityDate = new Date(eligibilityHistory.elig_start_date);
      index = i;
    }
  })

  const currentStatusObj = person.eligibility_history[index];
  return determineStatus(currentStatusObj);
  
}
