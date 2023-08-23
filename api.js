const box = [
    {
        image1: "/img/logo8.png",
    }
]
var logo2=""
for(let i in box){
    logo2 +=`
        <img src="${box[i]["image1"]}" alt="">
    `;
}
document.getElementById("lg").innerHTML=logo2;


const box1 = [
    {
        image2: "/img/banner.jpg",
    }
]
var logo3=""
for(let i in box1){
    logo3 +=`
        <img src="${box1[i]["image2"]}" alt="">
    `;
}
document.getElementById("bn").innerHTML=logo3;


const menu =[
    {
        name : "កម្សាន្ត",
        icon : "fa-solid fa-house-chimney",
        // image  : "/img/logo8.png"
    },
    {
        name : "បច្ចេកវិទ្យា",
        // image1  : "/img/banner.jpg"
    },
    {
        name : "ជីវិតនិងសង្គម"
    },
    {
        name : "កីឡា"
    },
    {
        name : "ស៊ីហ្គេម ២០២៣"
    },
    {
        name : "AUTO TALK"
    },
    {
        name : "SMART HUB"
    },
    {
        name : "DEALS"
    },
    {
        name : "STARTING UP"
    },
    
]
var text ="";
for(let i in menu){
    text +=`
        <li><a href=""><i class="${menu[i]["icon"]}"></i> ${menu[i]["name"]}</a></li> 
    `;
}
document.getElementById("nav").innerHTML=text;

