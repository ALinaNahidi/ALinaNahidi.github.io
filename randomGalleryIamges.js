const api_url =
   "https://api.thecatapi.com/v1/images/search";

const arr = [];

async function getapi(url) {

   const response = await fetch(url);


   var data = await response.json();
   console.log(data);

   arr.push(data[0].url);

}


function show() {

   console.log(arr);
   let tab =
        `<div class="image-box">
         <img src="${arr[arr.length-1]}" alt="img.jpg">
         <div class="overlay">
           <div class="details">
             <h3 class="title">
               <a href="#">Title</a>
             </h3>
             <span class="category">
               <a href="#">Category</a>
             </span>
           </div>
         </div>
       </div>`;


   for (let r in arr) {
      console.log(r)
      tab += 
      `<div class="image-box">
      <img src=${arr[r]}>
      <div class="overlay">
        <div class="details">
          <h3 class="title">
            <a href="#">Title</a>
          </h3>
          <span class="category">
            <a href="#">Category</a>
          </span>
        </div>
      </div>
    </div>`;

      document.getElementsByClassName("image-gallery")[0].innerHTML = tab;

   }


}


let listOfImages = async () => {

   for (let i = 0; i <= 10; i++) {
      await getapi(api_url);
   }

   show();
}

listOfImages();