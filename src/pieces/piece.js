import WhiteBishop from '../images/Tiffany.png'
import BlackBishop from '../images/Eujean.png'
import WhiteKnight from '../images/Quy.png'
import BlackKnight from '../images/Abby.png'
import WhitePawn from '../images/Raymond.png'
import BlackPawn from '../images/Kris.png'
import WhiteRook from '../images/Liza.png'
import BlackRook from '../images/Jose.png'
import WhiteQueen from '../images/Gus.png'
import BlackQueen from '../images/Anqi.png'
import WhiteKing from '../images/Tony.png'
import BlackKing from '../images/Soo.png'

export default class Piece {
  constructor(player, iconUrl) {
    this.player = player;
    var size = '85px';
    switch(iconUrl) {
      case "WhiteBishop":
        this.style = { backgroundImage: `url(${WhiteBishop})`,
        width: size,
        height: size };
      break;
      case "BlackBishop":
        this.style = { backgroundImage: `url(${BlackBishop})`,
        width: size,
        height: size };;
      break;
      case "WhiteKnight":
        this.style = { backgroundImage: `url(${WhiteKnight})`,
        width: size,
        height: size };;
      break;
      case "BlackKnight":
        this.style = { backgroundImage: `url(${BlackKnight})`,
        width: size,
        height: size };;
      break;
      case "WhiteRook":
        this.style = { backgroundImage: `url(${WhiteRook})`,
        width: size,
        height: size };;
      break;
      case "BlackRook":
        this.style = { backgroundImage: `url(${BlackRook})`,
        width: size,
        height: size };;
      break;
      case "WhitePawn":
        this.style = { backgroundImage: `url(${WhitePawn})`,
        width: size,
        height: size };;
      break;
      case "BlackPawn":
        this.style = { backgroundImage: `url(${BlackPawn})`,
        width: size,
        height: size };;
      break;
      case "WhiteQueen":
        this.style = { backgroundImage: `url(${WhiteQueen})`,
        width: size,
        height: size };;
      break;
      case "BlackQueen":
        this.style = { backgroundImage: `url(${BlackQueen})`,
        width: size,
        height: size };;
      break;
      case "WhiteKing":
        this.style = { backgroundImage: `url(${WhiteKing})`,
        width: size,
        height: size };;
      break;
      case "BlackKing":
        this.style = { backgroundImage: `url(${BlackKing})`,
        width: size,
        height: size };;
      break;
      default:
        this.style = { backgroundImage: `url(${WhiteBishop})`,
        width: size,
        height: size };
      break;
    }
    
  }

  getPlayer() {
    return this.player
  }
}