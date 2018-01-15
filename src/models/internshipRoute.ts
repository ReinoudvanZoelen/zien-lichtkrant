import { Institution } from "models/institution";

export class InternshipRoute {

    id: number;
    name: String;
    institution: Institution;
    active: boolean;

    constructor(name?: String, institution?: Institution, active?: boolean, id?: number) {
        this.id = id;
        this.name = name;
        this.institution = institution;
        this.active = active;
    }
}
