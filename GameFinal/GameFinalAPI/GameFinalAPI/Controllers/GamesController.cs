using GameService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace GameFinalAPI.Controllers
{
    public class GamesController : ApiController
    {
        // GET api/games
        [HttpGet]
        [Route("api/games/")]
        public HttpResponseMessage Get()
        {
            using (GameDBEntities entities = new GameDBEntities())
            {
                return Request.CreateResponse(HttpStatusCode.OK, entities.Games.ToList());
            }
        }

        // GET api/games/1
        [HttpGet]
        [Route("api/games/{selectid}")]
        public HttpResponseMessage Get(int selectID)
        {
            using (GameDBEntities entities = new GameDBEntities())
            {
                Game gamematch = entities.Games.FirstOrDefault(g => g.ID.Equals(selectID));
                if (gamematch != null)
                    return Request.CreateResponse(HttpStatusCode.OK, gamematch);
                else
                    return Request.CreateResponse(HttpStatusCode.NotFound, String.Format("Game match with ID {0} not found", selectID));
            }
        }

        // GET by Player
        [Route("api/games/byplayer/{player}")]
        [HttpGet]
        public HttpResponseMessage GetByPlayer(string player)
        {
            using (GameDBEntities entities = new GameDBEntities())
            {
                List<Game> gameList = entities.Games
                    .Where(g => g.Player1.ToLower().StartsWith(player.ToLower()) || g.Player2.ToLower().StartsWith(player.ToLower())).ToList();
                if (gameList.Count > 0)

                    return Request.CreateResponse(HttpStatusCode.OK, gameList);

                else
                    return Request.CreateResponse(HttpStatusCode.NotFound, String.Format("The parameters requested are not found"));

            }
        }

        // GET by Search
        [Route("api/games/search/")]
        [HttpGet]
        public HttpResponseMessage GetBySearch([FromUri] int id = -1, [FromUri] string gameType = null, [FromUri]string player1 = null,
            [FromUri]string player2 = null, [FromUri] string winner_is = null)
        {
            using (GameDBEntities entities = new GameDBEntities())
            {
                IQueryable<Game> gameMatch = entities.Games;
                    
                if (id != -1)
                {
                    gameMatch = gameMatch.Where(g => g.ID == id);
                }
                if (gameType != null)
                {
                    gameMatch = gameMatch.Where(g => g.GameType.ToLower().StartsWith(gameType.ToLower()));
                }
                if (player1 != null)
                {
                    gameMatch = gameMatch.Where(g => g.Player1.ToLower().StartsWith(player1.ToLower()));
                }
                if (player2 != null)
                {
                    gameMatch = gameMatch.Where(g => g.Player2.ToLower().StartsWith(player2.ToLower()));
                }
                if (winner_is != null)
                {
                    gameMatch = gameMatch.Where(g => g.Winner_Is.ToLower().StartsWith(winner_is.ToLower()));
                }
                List<Game> SearchResult = gameMatch.ToList();


                                
                if (SearchResult.Count > 0)
                    return Request.CreateResponse(HttpStatusCode.OK, SearchResult);
                else
                    return Request.CreateResponse(HttpStatusCode.NotFound, "The parameters requested are not found");
            }
        }

        // POST api/games
        [HttpPost]
        [Route("api/games/")]
        public HttpResponseMessage Post([FromBody]Game gamematch)
        {
            using (GameDBEntities entities = new GameDBEntities())
            {
                entities.Games.Add(gamematch);
                entities.SaveChanges();
                return Request.CreateResponse(HttpStatusCode.Created, new Uri(Request.RequestUri + "/" + gamematch.ID.ToString()));
            }
        }

        // PUT api/games/1
        [HttpPut]
        [Route("api/games/{id}")]
        public HttpResponseMessage Put(int id, [FromBody]Game gamematch)
        {

            using (GameDBEntities entities = new GameDBEntities())
            {
                Game gameToUpdate = entities.Games.FirstOrDefault(g => g.ID == id);
                if (gameToUpdate != null)
                {

                    gameToUpdate.GameType = gamematch.GameType;
                    gameToUpdate.Player1 = gamematch.Player1;
                    gameToUpdate.Player2 = gamematch.Player2;
                    gameToUpdate.Winner_Is = gamematch.Winner_Is;
                    entities.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.Accepted, gamematch);
                }
                else
                    return Request.CreateResponse(HttpStatusCode.NotFound, String.Format("Game match with ID {0} not found", id));
            }
        }

        // DELETE api/games/1
        [HttpDelete]
        [Route("api/games/{id}")]
        public HttpResponseMessage Delete(int id)
        {
            using (GameDBEntities entities = new GameDBEntities())
            {
                Game gamematch = entities.Games.FirstOrDefault(g => g.ID == id);
                if (gamematch != null)
                {
                    entities.Games.Remove(gamematch);
                    entities.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.Accepted, String.Format("Game match with ID {0} was deleted", id));
                }
                else
                    return Request.CreateResponse(HttpStatusCode.NotFound, String.Format("Game match with ID {0} not found", id));
            }
        }        
    }
}

