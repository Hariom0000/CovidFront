import { Comments } from "./comments"
export interface CountryCovid {
    "id": number;
    "code": string;
    "latitude": number;
    "longitude": number;
    "lastChange": string;
    "lastUpdate": string;
    "country": string;
    "confirmed": number;
    "recovered": number;
    "deaths": number;
    "critical": number;
    "comments" : Comments[]; 
}