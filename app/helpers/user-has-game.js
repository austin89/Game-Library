import { helper } from '@ember/component/helper';


export function userHasGame(params){
  let[gameUser, user] = params;
  console.log("Games Array in helper: ");
  console.log(gameUser.arrangedContent.record.__relationships.initializedRelationships.gameUser.members.list.get(0));

  // let thing = gameUser.arrangedContent.record.__relationships.initializedRelationships.gameUser.members.list;
  // thing.filterBy('id')
  // gameUser=gameUser.get('arrangedContent').get('record').get('id');
  // console.log('game name: ' + gameUser);
  //
  // //console.log('user Games record: ' + userRecord.userGames.find(i => i.id === game.id) != null);
  // if (gameUser.length > 0){
  //   if(gameUser.find(i => i.id === user) != null){
  //     return true;
  //     console.log('game in table');
  //   }else {console.log('game not in table');
  //     return false;
  //   }
  // }
  // else return false;
  return true

}

export default helper(userHasGame);
