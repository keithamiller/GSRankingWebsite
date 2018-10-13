import { CompetitonResults } from "./competiton-results";
import { Gender } from "./gender.enum";

export class User {
    public name: string;
    public bodyweight: number;
    public gender: Gender;
    public squat: number;
    public bench: number;
    public deadlift: number;
    public total: number;
    public wilks: number;
    public competitionResults: CompetitonResults[];

    public constructor(name: string, gender: Gender){
        this.name = name;
        this.gender = gender;
    }

    createFullUser(bw: number,  squat: number, bench: number, deadlift: number, total: number, wilks: number){
        this.bodyweight = bw;
        this.squat = squat;
        this.squat = squat;
        this.bench = bench;
        this.deadlift = deadlift;
        this.total = total;
        this.wilks = wilks;
    }

    createUserBrief(squat: number, bench: number, deadlift: number, total: number, wilks: number){
        this.squat = squat;
        this.bench = bench;
        this.deadlift = deadlift;
        this.total = total;
        this.wilks = wilks;
    }

    calculateWilks(){
        var bw = this.bodyweight;
        switch(this.gender){
            case(Gender.Male): {
                var wilksCoeff =   500 / 
                                   (-216.0475144
                                 + (16.2606339*bw) 
                                 + (-0.002388645 * Math.pow(bw,2)) 
                                 + (-0.00113732 * Math.pow(bw, 3)) 
                                 + (Math.pow(7.01863*Math.E, -6)*Math.pow(bw, 4)) 
                                 + (Math.pow(-1.291*Math.E,-8)*Math.pow(bw, 5)))
                console.log(wilksCoeff);
                return this.total*wilksCoeff;
                                    
            }


            case(Gender.Female): {
                return 1;

            }

        }
    }
}

