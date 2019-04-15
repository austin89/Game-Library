import { helper } from '@ember/component/helper';


export function userHasGame(game, gamesArr){
  console.log("Games Array in helper: ");
  console.log(gamesArr);


  //console.log('user Games record: ' + userRecord.userGames.find(i => i.id === game.id) != null);
  if (gamesArr.length > 0){
    if(gamesArr.find(i => i.id === game.id) != null){
      return true;
      console.log('game in table');
    }else {console.log('game not in table');
      return false;
    }
  }
  else return false;


}

export default helper(userHasGame);
