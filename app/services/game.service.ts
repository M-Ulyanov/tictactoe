/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: tictactoe
 * Date:  22.11.2016
 * Time: 10:37
 */


'use strict';


import { Injectable } from "@angular/core";


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
    public setWinnerClass(cells: any[]): void {
        if(cells.length > 0) {
            cells.forEach((cell) => {
               cell.setWinnerClass();
            });
        }
    }

}