export class DestinationModel {
    constructor(
        public uid: string,
        public term: string,
        public lat: number,
        public lng: number,
        public type: string,
        public state: string
    ) {}
}
