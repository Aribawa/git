import { Injectable } from '@angular/core';
import { Game } from './game.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GameStatsService {
  
  NGames = new Subject<Game[]>()
  constructor(private http: HttpClient) {

  }
  
  // http://localhost:52383/api/games/

  getAllGames(){
    const url = 'http://localhost:52383/api/games';
    this.http.get<Game[]>(url).subscribe(data => this.NGames.next(data));
  }
  
  GetAllGamesSubs() : Observable<Game[]>{
    return this.NGames.asObservable()
  }
  getOneGame(gameID ) : Observable<Game>{
    const url = 'http://localhost:52383/api/games' + gameID;
    return this.http.get<Game>(url);
  }
  PutGame(game ){
    const url = 'http://localhost:52383/api/games' + game.GameID + '/edit';
    return this.http.put(url ,game);

  }
  PostGame(game){
   
    const url = 'http://localhost:52383/api/games';
    this.http.post(url ,game).subscribe( x => {});
  }

  DeleteGameByID(gameID : number) {
    const url = 'http://localhost:52383/api/games' + gameID;
    return this.http.delete(url)
   
  }

  SearchGameByFilter(gameID? : number, gameType? : string, player1? : string, player2? : string, winner_is? : string){
    let params : HttpParams = new HttpParams;
    
    if (gameType != null && gameType !== '') {params = params.append("gameType", gameType); }
    if (player1 != null && player1 !== '') {params = params.append("player1", player1); }
    if (player2 != null && player2 !== '') {params =  params.append("player2", player2);}
    if (winner_is != null && winner_is !== '') {params =  params.append("whoWon", winner_is); }
    console.log("this is searched")
    console.log ( params);
    
    const url = 'http://localhost:56672/api/gamestats/search';
    this.http.get<Game[]>(url, {params}).subscribe(data => this.NGames.next(data));
  }
}
