export class Report{
    constructor(public _id:{
        year:number,
        month:number,
        day:number
    },
        public sum:number,
        public count:number
        ){}
}