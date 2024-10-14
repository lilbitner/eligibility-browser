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
    return people.map((person: Person) => {
        return (
            <li key={person.date_of_birth} style={{ marginBottom: '16px'}}>
                <button style={{ backgroundColor: 'transparent'}} onClick={() => onSelect(person)}>
                    {formatName(person.last_name, person.first_name)} ({getStatus(person)})
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