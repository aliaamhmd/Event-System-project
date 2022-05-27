import { Speaker } from "./speaker";
import { Student } from "./student"

export class Event {
    constructor(
        public _id:number,
        public Title:string,
        public EventDate:Date,
        public mainSpeaker:Number,
        public speakers:Number[],
        public students:number[]
        
        
    ){

    }
}
