/*
 * Aggregate of all common services.
 */

import { NgModule } from '@angular/core';

// import angular dependencies
import { HttpModule } from '@angular/http';

// import child services
import { ApiService } from './api.service';

@NgModule({
  imports:   [ HttpModule ],
  providers: [ ApiService ]
})

export class ServicesModule { }
