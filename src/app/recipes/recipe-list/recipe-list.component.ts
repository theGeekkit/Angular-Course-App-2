import { Component, OnInit } from '@angular/core';
import { recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: recipe[] = [
    new recipe('A Test Recipe', 'This is simply a Test', 'https://cdn.pixabay.com/photo/2018/03/05/06/26/board-3200054_960_720.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
