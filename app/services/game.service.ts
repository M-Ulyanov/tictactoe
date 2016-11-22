/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: tictactoe
 * Date:  22.11.2016
 * Time: 10:37
 */


'use strict';


import { Injectable } from "@angular/core";
import { Utils } from "../libs/Utils";


enum Gamers { User, AI }


@Injectable()
export class GameService {


    /**
     *
     */
    constructor() {}


    /**
     *
     * @param field
     * @returns {any}
     */
    public checkWinner(field: any[]): any {

        for (let i = 0; i < 3; i++) {
            if (field[i][0]['isSelected'] && field[i][0]['mark'] == field[i][1]['mark'] && field[i][0]['mark'] == field[i][2]['mark']) {
                return [
                    field[i][0],
                    field[i][1],
                    field[i][2]
                ];
            }
        }

        for (let i = 0; i < 3; i++) {
            if (field[0][i]['isSelected'] && field[0][i]['mark'] == field[1][i]['mark'] && field[0][i]['mark'] == field[2][i]['mark']) {
                return [
                    field[0][i],
                    field[1][i],
                    field[2][i]
                ];
            }
        }


        if (field[0][0]['isSelected'] && field[0][0]['mark'] == field[1][1]['mark'] && field[1][1]['mark'] == field[2][2]['mark']) {
            return [
                field[0][0],
                field[1][1],
                field[2][2]
            ];
        }

        if (field[0][2]['isSelected'] && field[0][2]['mark'] == field[1][1]['mark'] && field[1][1] ['mark'] == field[2][0] ['mark']) {
            return [
                field[0][2],
                field[1][1],
                field[2][0]
            ];
        }
    }


    /**
     *
     * @param cells
     */
    public addWinnerClass(cells: any[]): void {
        if(cells.length > 0) {
            cells.forEach((cell) => {
               cell.addWinnerClass();
            });
        }
    }


    /**
     *
     * @param field
     * @returns {any}
     */
    getRandomAvailableCell(field: any[]): any {
        let availableCells = [];
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if(field[i][j]['isSelected'] == false) {
                    availableCells.push(field[i][j]);
                }
            }
        }

        if(availableCells.length > 0) {
            let index = Utils.randomInteger(0, availableCells.length - 1);
            return availableCells[index];
        }

        return null;
    }


    /**
     *
     * @param field
     * @returns {any}
     */
    getImportantCell(field: any[]): any {

        let result: any;

        for (let i = 0; i < 3; i++) {
            result = this.checkGroupCells(field[i][0], field[i][1], field[i][2]);
            if(result != null) {
                return result;
            }
        }

        for (let i = 0; i < 3; i++) {
            result = this.checkGroupCells(field[0][i], field[1][i], field[2][i]);
            if(result != null) {
                return result;
            }
        }

        result = this.checkGroupCells(field[0][0], field[1][1], field[2][2]);
        if(result != null) {
            return result;
        }

        result = this.checkGroupCells(field[0][2], field[1][1], field[2][0]);
        if(result != null) {
            return result;
        }
    }


    /**
     *
     * @param cells
     * @returns {any}
     */
    checkGroupCells(...cells): any {
        let selectedCount: number = 0;
        let notSelectedCell: any = null;

        let countAI: number = 0;
        let countUser: number = 0;

        for (let i = 0; i < cells.length; i++) {
            let item = cells[i];
            if(item.isSelected) {
                selectedCount++;
            }
            else {
                notSelectedCell = item;
            }

            if(item.gamer === Gamers.AI) {
                countAI++;
            }
            else if(item.gamer === Gamers.User) {
                countUser++;
            }

        }

        let length = cells.length - 1;
        if(selectedCount === length && (countAI === length || countUser === length)) {
            return notSelectedCell;
        }

        return null;

    }

}