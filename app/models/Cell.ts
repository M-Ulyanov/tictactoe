/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: tictactoe
 * Date:  22.11.2016
 * Time: 8:28
 */


'use strict';



export class Cell {


    public isSelected: boolean;
    public gamer: number;
    public mark: string;
    public classes: string;

    private marks: string[];
    private classesMark: string[];


    /**
     *
     */
    constructor() {
        this.isSelected = false;
        this.gamer = -1;
        this.mark = '';
        this.classes = '';

        this.marks = ['x', 'o'];
        this.classesMark = ['is-cross', 'is-zero'];
    }


    /**
     *
     * @param nowAction
     */
    public setMark(nowAction: any): void {
        this.isSelected = true;
        this.mark = this.marks[nowAction];
        this.gamer = nowAction;
        this.classes = `animated zoomIn ${this.classesMark[nowAction]}`;
    }


    /**
     *
     */
    public addWinnerClass(): void {
        this.classes += ' is-winner';
    }

}