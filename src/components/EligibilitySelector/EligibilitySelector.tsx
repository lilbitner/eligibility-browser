import { useState } from "react"
import { PeopleSelector } from "../PeopleSelector/PeopleSelector";
import * as mockPeopleData from '../../api/mockData.json';
import { Person } from "../../core/types";
import { EligibilityHistoryDisplay } from "../EligibilityHistoryDisplays/EligibilityHistoryDisplay";
import { ClaimsDisplay } from "../ClaimsDisplay/ClaimsDisplay";
import { sortPeopleByLastName } from "../../utils/sortPeopleByLastName";


export const EligibilitySelector = () => {
    const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

    const peopleData = JSON.parse(JSON.stringify(mockPeopleData));
    const sortedPeopleData = sortPeopleByLastName(peopleData.default);

    const handlePersonSelection = (person: Person) => {
        setSelectedPerson(person);
    }

    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', height: '70vh', width: '100%' }}>
            <PeopleSelector people={sortedPeopleData} onSelect={handlePersonSelection}  />
            <EligibilityHistoryDisplay person={selectedPerson} />
            <ClaimsDisplay person={selectedPerson} />
        </div>
    )
}