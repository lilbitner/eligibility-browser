import { Person } from "../../core/types";
import { formatName } from "../../utils/formatName";
import { getStatus } from "../../utils/getStatus";
import { ColumnWrapper } from "../ColumnWrapper/ColumnWrapper";

interface PeopleSelectorProps {
    people: Person[];
    onSelect: (person: Person) => void;
}

export const PeopleSelector = ({ people, onSelect }: PeopleSelectorProps) => {
  const renderPeople = () => {
    return people.map((person: Person, i: number) => {
        const formattedName = formatName(person.last_name, person.first_name);
        const formattedStatus = getStatus(person);
        return (
            <li key={`${person.date_of_birth}-${i}`} style={{ marginBottom: '16px'}}>
                <button style={{ backgroundColor: 'transparent'}} onClick={() => onSelect(person)}>
                    {formattedName} {formattedStatus}
                </button>
            </li>
        )
    })
  }
  return (
    <ColumnWrapper title='People'>
        <ul style={{ listStyleType: 'none', padding: 0, textAlign: 'left'}}>
            {renderPeople()}
        </ul>
    </ColumnWrapper>
  )
}