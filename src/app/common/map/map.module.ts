import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { MapComponent } from './map.component';
import { MapService } from './map.service';


@NgModule({
    declarations: [
        MapComponent
    ],
    exports:[
        MapComponent
    ],
    imports: [
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDCACyZn7-myZbN04ume01GT6SPu5dlHHk'
        })
    ],
    providers: [
        MapService
    ]
})
export class MapModule { }
