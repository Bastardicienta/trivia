import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  currentQuestion:string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, eos ipsum dolore sint accusamus eligendi asperiores, soluta incidunt, pariatur velit laboriosam voluptas fuga inventore! Sequi enim ratione quia quaerat reiciendis.'

  answerOptions: string[]=[
    "Opcion1",
    "Opcion2",
    "Opcion3",
    "Opcion4"
  ]
  correctAnswer:string="Opcion3"
  constructor() { }
}
