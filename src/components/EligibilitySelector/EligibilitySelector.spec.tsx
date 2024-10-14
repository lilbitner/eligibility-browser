import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest'
import { EligibilitySelector } from './EligibilitySelector';
import * as mockPeopleData from '../../api/mockData.json';
import { sortPeopleByLastName } from '../../utils/sortPeopleByLastName';

const mockPeople = JSON.parse(JSON.stringify(mockPeopleData));

describe('EligibilitySelector', () => {
  it('renders EligibilitySelector component', () => {
    render(<EligibilitySelector />);

    const peopleSelectorTitle = screen.getByText(/People/i);
    const eligibilityHistoryDisplayTitle = screen.getByText(/History/i);
    const claimsDisplayTitle = screen.getByText(/Claims/i);

    expect(peopleSelectorTitle).toBeTruthy();
    expect(eligibilityHistoryDisplayTitle).toBeTruthy();
    expect(claimsDisplayTitle).toBeTruthy();
  });

  it('selects a person to view', async () => {
    render(<EligibilitySelector />);
    const indexSelected = 1;

    const peopleToSelect = screen.getAllByRole('button');
    const sortedPeople = sortPeopleByLastName(mockPeople.default)

    fireEvent.click(peopleToSelect[indexSelected]);

    const selectedPersonBirthDate = sortedPeople[indexSelected].date_of_birth;
    const displayedDate = await screen.findByText(`Born: ${selectedPersonBirthDate}`);

    expect(displayedDate).toBeTruthy();
  })
})