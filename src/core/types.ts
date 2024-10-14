export type DependentEligibilityHistory = {
    type: 'dependent';
    elig_start_date: string;
    elig_term_date?: string;
};

export type RetireeEligibilityHistory = {
    type: 'retiree';
    elig_start_date: string;
    elig_term_date?: string;
};

export type EmployeeEligibilityHistory = {
    type: 'employee';
    start_date: string;
    elig_start_date: string;
    elig_term_date?: string;
    elig_end_date?: string;
    termed_date?: string;
}

export type EligibilityHistory = DependentEligibilityHistory | RetireeEligibilityHistory | EmployeeEligibilityHistory;

type ClaimType = 'medical' | 'dental' | 'vision' | 'rx';

type Claim = {
    type: ClaimType;
    claim_id: string;
    provider: string;
    description: string;
    claim_amount: string;
    claim_date: string;
}

export type Person = {
    last_name: string;
    first_name: string;
    date_of_birth: string;
    eligibility_history: EligibilityHistory[];
    claims: Claim[];
};

export enum EmployeeStatus {
    EMPLOYEE = 'employee',
    DEPENDENT = 'dependent',
    RETIREE = 'retiree'
  }

export type EligibilityStatus = 'empl' | 'empl, termed' | 'dep' | 'dep, termed' | 'ret' | 'ret, termed';