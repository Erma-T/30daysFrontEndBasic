const testimonials = [
    {
        name: "- Milo Manheim",
        imgpath: "images/usr1.jpg",
        detail: "Working with Ermiyas T. was an absolute game-changer for my business! As a full-stack developer and graphic designer, he brought a level of creativity and expertise that surpassed all my expectations. Not only were his services incredibly satisfying, but the innovative solutions he provided truly set my brand apart. I would highly recommend Ermiyas to anyone looking for top-tier, out-of-the-box design and development services. A true visionary in his field!"
    },
    {
        name: "- Jennifer Garner",
        imgpath: "images/usr2.jpg",
        detail: "His level of creativity and attention to detail is unparalleled, resulting in designs that are not only visually stunning but also highly functional. He truly goes above and beyond to ensure client satisfaction, making the entire process a breeze. If you're looking for someone who can bring your vision to life in ways you never thought possible, look no further than Ermiyas. Trust me, you won't be disappointed!"
    },
    {
        name: "- Jordan North",
        imgpath: "images/usr3.jpg",
        detail: "Working with Ermiyas T. was an absolute game-changer for my business! As a full-stack developer and graphic designer, he brought a level of creativity and expertise that surpassed all my expectations. Not only were his services incredibly satisfying, but the innovative solutions he provided truly set my brand apart. I would highly recommend Ermiyas to anyone looking for top-tier, out-of-the-box design and development services. A true visionary in his field!"
    },
    {
        name: "- Gwyneth Paltrow",
        imgpath: "images/usr4.jpg",
        detail: "Working with Ermiyas T. was an absolute game-changer for my business! As a full-stack developer and graphic designer, he brought a level of creativity and expertise that surpassed all my expectations. Not only were his services incredibly satisfying, but the innovative solutions he provided truly set my brand apart. I would highly recommend Ermiyas to anyone looking for top-tier, out-of-the-box design and development services. A true visionary in his field!"
    }
];

const imgEl = document.querySelector("img")
const textEl = document.querySelector(".text")
const usernameEl = document.querySelector(".username")

let idx = 0;

updateTestimonial();


function updateTestimonial(){
    const {name, imgpath, detail} = testimonials[idx];

    imgEl.src = imgpath;
    textEl.innerText = detail;
    usernameEl.innerText = name;

    idx++;
    
    if(idx === testimonials.length){
        idx = 0;
    }
    setTimeout(() => {
        updateTestimonial();
    }, 3000);
}