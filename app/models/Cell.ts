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
    public classWinner: string;
    public mark: string;
    public className: string;

    private marks: string[];
    private classes: string[];


    /**
     *
     */
    constructor() {
        this.isSelected = false;
        this.classWinner = '';
        this.mark = '';
        this.marks = ['x', 'o'];
        this.classes = ['is-cross', 'is-zero'];
    }


    /**
     *
     * @param walk
     */
    public setMark(walk: any): void {
        this.isSelected = true;
        this.mark = this.marks[walk];
        this.className = `animated zoomIn ${this.classes[walk]}`;
    }


    /**
     *
     */
    public setWinnerClass() {
        this.classWinner = 'is-winner';
        console.log(this);
    }

}