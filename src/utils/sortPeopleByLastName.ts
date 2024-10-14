import { Person } from "../core/types";

export const sortPeopleByLastName = (people: Person[]) => {
    people.sort((a, b) => {
        const aLastName = a.last_name.toLowerCase();
        const bLastName = b.last_name.toLowerCase();
        if (aLastName < bLastName) {
            return -1;
        }
        if (aLastName > bLastName) {
            return 1;
        }
        return 0;
    })

    return people;
}