/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: tictactoe
 * Date:  21.11.2016
 * Time: 22:48
 */


'use strict';


import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { GameComponent }   from './components/game/game.component';
import { FieldComponent }   from './components/field/field.component';

import { GameService }   from './services/game.service';


@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent, GameComponent, FieldComponent ],
    bootstrap:    [ AppComponent ],
    providers: [GameService]
})



export class AppModule { }