const month = 3
switch (month) {
    case 1 :
        console.log("jan");
                break;

        case 2 :
        console.log("feb");
                break;


        case 3:
        console.log("mar");
                break;


        case 4 :
        console.log("apr");
        
        break;

    default:
        console.log("default case match");
        
        break;
}

let role = "admin"
switch (role) {
    case  "admin" :
        console.log("welcome admin ");
        break;

        case "user":
        console.log("welcome user ");
        break;
      case "guest":
        console.log("welcome guest ");
        break;

    default:
        console.log("access Denied");
        
        break;
}