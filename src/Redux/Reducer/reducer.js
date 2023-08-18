import { AllMoves } from "../Types/Type";


const iniatial = {Movies:[] , pageCount: 0}

export const MovesREducer = (State = iniatial ,action) => {

    switch(action.type) 
    {
        case AllMoves : 
        return {
            Movies :action.data  ,
            pageCount : action.pages
        }
        default : return State;
    }
}