import { Game } from './../game-stats/game.model';
import { GameStatsService } from './../game-stats/game-stats.service';
import { Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import { observable, Subject, Subscription } from 'rxjs';


@Component({
  selector: 'app-search-games',
  templateUrl: './view-games.component.html',
  styleUrls: ['./view-games.component.css'],
})
export class ViewGamesComponent implements OnInit {
  uGame: Game = new Game();
  games : Game[] = []
  col = [ "GameID", "GameType", "Player1", "Player2", "Winner_is" ];
  table = document.getElementById("viewtable")
  subsGames : Subscription
  constructor(private serviceStats : GameStatsService ) { 

  }

  ngOnInit() {
  
    this.subsGames = this.serviceStats.GetAllGamesSubs().subscribe(data => this.games = data)
    this.serviceStats.getAllGames()
  }

  showGame(game){
    
    this.uGame.GameID = game.GameID
    this.uGame.GameType = game.GameType
    this.uGame.Player1 = game.Player1
    this.uGame.Player2 = game.Player2
    this.uGame.Winner_is = game.Winner_is

  }


  updateGame(){      
    this.serviceStats.PutGame(this.uGame).subscribe(
      (succses) => alert("Game updated!"),
      
      (error) => alert("Game not updated"),
      
      () => this.serviceStats.getAllGames()
      
    )
    }
    
    deleteGame(){
      this.serviceStats.DeleteGameByID(this.uGame.GameID).subscribe(
        (succses) => alert("Game deleted!"),
        
        (error) => alert("Game not deleted"),
        
        () => this.serviceStats.getAllGames()
        
      )
    }

}
