/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: tictactoe
 * Date:  21.11.2016
 * Time: 22:48
 */


'use strict';



import { Component, ViewChild } from '@angular/core';

import { FieldComponent } from '../field/field.component';


enum Gamers { User, AI }


@Component({
    selector: 'game-component',
    templateUrl: 'app/components/game/game.component.html',
    styleUrls:  ['app/components/game/game.component.css']
})


export class GameComponent {


    @ViewChild(FieldComponent) fieldComponent: FieldComponent;


    public isStart: boolean;
    public gameOver: boolean;
    public title: string;


    /**
     *
     */
    constructor() {
        this.isStart = false;
        this.gameOver = false;
        this.title = 'waiting';
    }


    /**
     *
     */
    public start(): void {
        this.isStart = true;
        this.fieldComponent.create();
        this.title = 'game begun';
    }


    /**
     *
     */
    public reload(): void {
        this.fieldComponent.destroy();
        this.gameOver = false;
        this.start();
    }


    /**
     *
     * @param winner
     */
    public setWinner(winner: any): void {
        this.gameOver = true;
        if(winner === Gamers.User) {
            this.title = 'you win!';
        }
        else {
            this.title = 'you lose!';
        }
    }

}