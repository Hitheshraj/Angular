import { PipeTransform ,Pipe} from "@angular/core";


@Pipe({
    name:'shorten',
})

export class ShortenPipe implements PipeTransform{
    // transform(value: any, ...args: any[]) {
    //     if(value.length>9){
    //         return value.substr(0,9)+'...';
    //     }
    //     return value;
    // }
    transform(value: any, start:number,limit:number) {
        if(value.length>9){
            return value.substr(start,limit)+'...';
        }
        return value;
    }

}