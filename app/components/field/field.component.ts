/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: tictactoe
 * Date:  21.11.2016
 * Time: 22:48
 */


'use strict';



import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Cell } from '../../models/Cell';
import { GameService } from '../../services/game.service';


enum Gamers { User, AI }


@Component({
    selector: 'field-component',
    templateUrl: 'app/components/field/field.component.html',
    styleUrls:  ['app/components/field/field.component.css']
})


export class FieldComponent {


    @Input() size: number = 3;
    @Input() gameOver: boolean;
    @Output() setWinner = new EventEmitter();


    public field: any[];

    private nowWalk: Gamers;


    /**
     *
     */
    constructor(private gameService: GameService) {
        this.field = [];
        this.nowWalk = Gamers.User;
    }


    /**
     *
     * @returns {FieldComponent}
     */
    public create(): FieldComponent {
        this.createField();
        return this;
    }


    /**

     * @returns {FieldComponent}
     */
    public destroy(): FieldComponent {
        this.field = [];
        this.nowWalk = Gamers.User;
        return this;
    }


    /**
     *
     * @param cell
     */
    public handlerClick(cell: Cell): void {
        if(!cell.isSelected && this.nowWalk === Gamers.User) {
            this.setSelect(cell);
        }
    }


    /**
     *
     */
    private createField(): void {
        for(let i = 0; i < this.size; i++) {
            let row = [];
            for(let j = 0; j < this.size; j++) {
                row.push(new Cell());
            }
            this.field.push(row);
        }
    }


    /**
     *
     * @param cell
     */
    private setSelect(cell: Cell): void {

        if(this.gameOver) {
            return;
        }

        cell.setMark(this.nowWalk);

        // check winner
        let result: any[] = this.gameService.checkWinner(this.field);
        if(Array.isArray(result)) {
            this.gameService.setWinnerClass(result);
            this.setWinner.emit(this.nowWalk);
        }
    }


}