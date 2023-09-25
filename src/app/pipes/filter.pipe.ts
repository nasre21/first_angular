import {Pipe, PipeTransform } from "@angular/core";
import { City } from "../services/data.service";


@Pipe({
    name: 'filter',
})
export class FilterPipe implements PipeTransform {



    transform(cities: City[], arg: string):City[] {
        if(!arg || arg?.length <3) return cities;
        let result: City[] = [];

        for(const city of cities) {
            if(city.name.toLowerCase().indexOf(arg.toLocaleLowerCase())> -1){
                result= [...result, city]
            }

        }
        return result;
    }
}


// if (value && arg) {
//     result = value.filter(item => item.indexOf(arg) > -1);
// }
