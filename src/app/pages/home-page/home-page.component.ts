import { Component } from '@angular/core';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';
import {MatIconModule} from '@angular/material/icon'; 
import { MatButtonModule } from '@angular/material/button';
import { CreateRecipeComponent } from '../create-recipe/create-recipe.component';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RecipeCardComponent,MatIconModule,MatButtonModule,NavbarComponent,FooterComponent,RouterOutlet],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  recipes=[1,1,1,1,1,1,1,1,1,1]
  constructor(public dialog: MatDialog){}

  openCreateRecipeForm(){
    this.dialog.open(CreateRecipeComponent)
  }
 
}
