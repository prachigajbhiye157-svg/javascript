// // Image list
// let images = [
//     "img1.jpg",
//     "img2.jpg",
//     "img3.jpg",
//     "img4.jpg"
// ];

// // Main image create
// let mainDiv = document.getElementById("main");
// let mainImg = document.createElement("img");
// mainImg.src = images[0];
// mainImg.style.width = "400px";
// mainImg.style.height = "300px";
// mainImg.style.border = "2px solid #ccc";
// mainImg.style.borderRadius = "10px";
// mainDiv.appendChild(mainImg);

// // Thumbnails create
// let thumbDiv = document.getElementById("thumbs");

// images.forEach(function(src){
//     let img = document.createElement("img");
//     img.src = src;
//     img.style.width = "70px";
//     img.style.height = "70px";
//     img.style.margin = "5px";
//     img.style.cursor = "pointer";
//     img.style.border = "2px solid #ddd";
//     img.style.borderRadius = "5px";

//     img.onclick = function(){
//         mainImg.src = src;
//     };

//     thumbDiv.appendChild(img);
// });



// Image list
let pics = [
    "https://sp.yimg.com/ib/th/id/OIP.z5VvJyQbt1dzQmgXpXymdwHaJQ?pid=Api&w=148&h=148&c=7&dpr=2&rs=1",
    "https://sp.yimg.com/ib/th/id/OIP.gNQsfgxTC3oNdXfYa3rzHAHaE0?pid=Api&w=148&h=148&c=7&dpr=2&rs=1",
    "https://up.yimg.com/ib/th/id/OIP.1hbiL4VyM3u3uIL0NpQiqwHaFK?pid=Api&rs=1&c=1&qlt=95&w=164&h=114",
    "https://sp.yimg.com/ib/th/id/OIP.Oj3W9dX-k0UzTGW-UQS-bQHaGn?pid=Api&w=148&h=148&c=7&dpr=2&rs=1"
];

// LEFT SIDE THUMBNAIL BOXES
let left = document.getElementById("leftBox");
left.style.width = "120px";
left.style.float = "left";

// RIGHT SIDE MAIN BOX
let right = document.getElementById("rightBox");
right.style.marginLeft = "150px";

let bigImg = document.createElement("img");
bigImg.src = pics[0];
bigImg.style.width = "400px";
bigImg.style.height = "300px";
bigImg.style.border = "2px solid #666";
bigImg.style.borderRadius = "10px";
right.appendChild(bigImg);

// CREATE SMALL BOXES + CLICK EVENT
pics.forEach(function(src){
    
    let smallBox = document.createElement("div");
    smallBox.style.width = "100px";
    smallBox.style.height = "70px";
    smallBox.style.border = "2px solid #ddd";
    smallBox.style.marginBottom = "10px";
    smallBox.style.cursor = "pointer";
    smallBox.style.borderRadius = "5px";
    smallBox.style.backgroundImage = `url(${src})`;
    smallBox.style.backgroundSize = "cover";

    smallBox.onclick = function(){
        bigImg.src = src;
    };

    left.appendChild(smallBox);
});