import { BrowserModule       } from '@angular/platform-browser';
import { NgModule            } from '@angular/core';
import { FormsModule         } from '@angular/forms';
import { HttpModule          } from '@angular/http';

import { AppComponent        } from './app.component';

import { HttpGetService      } from './http-get.service';
import { EmitterService      } from './emitter.service';
import { Ng2PaginationModule } from 'ng2-pagination';
import { MaterialModule      } from '@angular/material';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2PaginationModule,
    MaterialModule.forRoot()
  ],
  providers: [ HttpGetService, EmitterService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
