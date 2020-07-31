export class EstudiantesModel {

    public nombre?: string;
    public id?: number; // pk - autoincremente

    constructor(raw: any) {
        if (raw.hasOwnProperty('nombre')) {
            this.nombre = raw.nombre;
        }
        if (raw.hasOwnProperty('id')) {
            this.id = raw.id;
        }
    }
}

export class GetAllStudents {
    public count: number;
    public estudiantes: EstudiantesModel[];
    constructor(raw: any) {
        if (raw.hasOwnProperty('count')) {
            this.count = raw.count;
        }
        if (raw.hasOwnProperty('estudiantes') && Array.isArray(raw.estudiantes)) {
            this.estudiantes = raw.estudiantes.map((estudiantes: any) => {

                return new EstudiantesModel(estudiantes);
            });
        }
    }
}
