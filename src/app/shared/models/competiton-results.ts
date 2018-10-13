import { Competiton } from "./competiton";
import { Gender } from "./gender.enum";

export class CompetitonResults {
    competition: Competiton;   
    gender: Gender;
    bodyweight: number;
    weightClass: number;
    placing: number;
    squat: number;
    bench: number;
    deadlift: number;
    total: number;
    wilks: number;
}
