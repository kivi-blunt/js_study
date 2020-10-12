let lang = (prompt('Введите ru или en'));
let ruDays = ['Понедельник, вторник, среда, четверг, пытница, суббота, воскресенье'];
let enDays = ['Monday, tuesday, wednesday, thurcday, saturday, sunday'];
if (lang === "ru"){
    console.log(ruDays);
    
    }
else if (lang==="en") {
    console.log(enDays);
    
}

switch(lang){
    case "ru":
        console.log(ruDays);
    break;
    case "en":
        console.log(enDays);
    break;
    default:
        console.log('ошибка');
}
let newMass =[ ['ru',ruDays],['en', enDays]];

lang===newMass[0][0]?console.log(newMass[0][1]):console.log(newMass[1][1]);

let namePerson = (prompt('Введите имя'));;

namePerson ==="Артем" ? console.log('директор') : namePerson ==="Максим" ? console.log('преподаватель'): console.log('студент');


