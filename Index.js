//Variaveis 
let HeroName = "Romulo do Bolo" 
let HeroXP = 9999
let Rank = ""
//Condicionais
if (HeroXP < 1000) {
    Rank = "Ferro";
} else if (HeroXP >= 1001 && HeroXP <= 2000) {
    Rank = "Bronze";
} else if (HeroXP >= 2001 && HeroXP <= 5000) {
    Rank = "Prata";
} else if (HeroXP >= 5001 && HeroXP <= 7000) {
    Rank = "Ouro";
} else if (HeroXP >= 7001 && HeroXP <= 8000) {
    Rank = "Platina";
} else if (HeroXP >= 8001 && HeroXP <= 9000) {
    Rank = "Ascendente";
} else if (HeroXP >= 9001 && HeroXP <= 10000) {
    Rank = "Imortal";
} else {
    Rank = "Radiante";}
//Saida
console.log("O Heroi de nome " + HeroName + " esta no nível " + Rank + " e pronto para enfrentar qualquer desafio!")
