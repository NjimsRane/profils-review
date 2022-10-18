// data
const reviews =[
    {
        id:1,
        name:"Susan Smith",
        job:"web developper" ,
        img:"/images/blog-1.jpg",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia repellat dolorum modi harum libero consectetur, accusamus nisi aspernatur dignissimos molestiae nostrum eaque delectus nam quod."
    },
    {
        id:2,
        name:"Anna Smith",
        job:"web designer",
        img:
          "/images/blog-2.jpg",
        text:
          "Anna ipsum dolor sit amet consectetur adipisicing elit. Mollitia repellat dolorum modi harum libero consectetur, accusamus nisi aspernatur dignissimos molestiae nostrum eaque delectus nam quod."
    },
    {
        id:3,
        name:"Rane Smith",
        job:"inter",
        img:
          "/images/blog-3.jpg",
        text:
          "Rane ipsum dolor sit amet consectetur adipisicing elit. Mollitia repellat dolorum modi harum libero consectetur, accusamus nisi aspernatur dignissimos molestiae nostrum eaque delectus nam quod."
    },
    {
        id:4,
        name:"Njims Smith",
        job:"web developper",
        img:
          "/images/blog-4.jpg",
        text:
          "Njims ipsum dolor sit amet consectetur adipisicing elit. Mollitia repellat dolorum modi harum libero consectetur, accusamus nisi aspernatur dignissimos molestiae nostrum eaque delectus nam quod."
    },
    {
        id:5,
        name:"Soul Smith",
        job:"web designer",
        img:
          "/images/blog-5.jpg",
        text:
          "Soul ipsum dolor sit amet consectetur adipisicing elit. Mollitia repellat dolorum modi harum libero consectetur, accusamus nisi aspernatur dignissimos molestiae nostrum eaque delectus nam quod."
    },
    {
        id:6,
        name:"Randass Smith",
        job:"intern",
        img:
          "/images/blog-6.jpg",
        text:
          "Randass ipsum dolor sit amet consectetur adipisicing elit. Mollitia repellat dolorum modi harum libero consectetur, accusamus nisi aspernatur dignissimos molestiae nostrum eaque delectus nam quod."
    },
];

//selectors from Html
const img = document.querySelector("#profil-image");
const name = document.querySelector("#name");
const job = document.querySelector("#job");
const info = document.querySelector("#info");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const randomBtn = document.querySelector(".random-btn");

// get initial item;
let currentItem =0;

//window load;

// window.addEventListener("DOMContentLoaded",function(){
//     userReviews();
// })

// filtered info 

function userReviews(){
    let item = reviews[currentItem];
    img.src = item.img;
    name.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
};

// to next slide
nextBtn.addEventListener("click",function(){
    currentItem++;
    if(currentItem > reviews.length -1){
        currentItem = 0;
    }
    userReviews();
});

// to preview slide
prevBtn.addEventListener("click",function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length-1 ;
    }
    userReviews();
})

//random slide;
randomBtn.addEventListener("click",function(){
    currentItem = getRandomNumber();
    userReviews();
})

function getRandomNumber(){
 return Math.floor(Math.random() * reviews.length)
}