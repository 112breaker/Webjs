// https://api.genderize.io/?name=scott
// https://cors.bridged.cc
// https://api.musixmatch.com/ws/1.1





// const names = document.getElementById("names");
// const code = document.getElementById("code");
// const nope = document.getElementById("nope");

// code.addEventListener("click", getGender);

// const BASE_url = " https://api.genderize.io";

// // fetch

// async function getGender ()  {
//     try{
//         console.log(names)
//         console.log(names.value)
//         const inputValue = names.value;


//         if (!inputValue) {
//             alert("please enter your name");
//             return;
//         }
//         //api call
//         const response = await fetch (`${BASE_url}/?name=${inputValue}`);

//         const data = await response.json();

// if (!data.gender) {
//     nope.innerHTML = "The gender of this name is unknown"
// }else{
//     nope:innerHTML =    `The gender of this is ${data.gender} and the probaility is ${data.prpobability}`
// }
//         //etsekhume

//         console.log(data)
//         console.log(data.name)
//         console.log(data.gender)
//         console.log(data.probability)
//     }catch (err) {
//         console.log(err);
//         throw err;
//     }

// };





// const response = await fetch (`${BASE_url}/?name=${name}`);

// const data = await response.json();

// console.log(data)

// }catch(err){
// console.log(err)
// throw err;
// }
// }

// getGender("wealth");




// ========================musix match========================//


// async function findsong(artist_namel ) {
//     try{
//         const url = `${cors}/${MUSIX_MATCH_BASE_URL}/track.search?q_artist=${artist_name}&apikey=${API_KEY}`

//         const response = await fetch(url);

//         const data = await response.json();
//         const result = data.message.body.track_list;

//         console.log(data)
//     console.log(data.message.body)
//     console.log(data.message.body.track_list)

//     const track = data.message.body.track_list;

//     tracks.forEach((track) => {
//         console.log(track.track.track_name);        
//     }
//     )
        
   
//     }catch (err) {
//         throw err;
//     }
// }
   
// findsong(drake)


 const artist = document.getElementById("artist");  //input field
 const my_button = document.getElementById("code"); //button
 const names = document.getElementById("name"); //div tag
//  const nope = document.getElementById("nope"); //p_tag

 my_button.addEventListener("click",trackSearch);

 const MUSIX_MATCH_BASE_URL =  "https://api.musixmatch.com/ws/1.1";
 const cors = "https://cors.bridged.cc";
 const API_KEY = "9e473b90400baaab486ae95201c8da8";
 

 async function trackSearch( ) {
        try{
            // get input field value
            const inputfield = artist.value;

            // check to make sure user mustr pass a value
            if(!inputfield) {
                alert("please enter an artist name")
                return;
            }

            const url = `${cors}/${MUSIX_MATCH_BASE_URL}/track.search?q_artist=${inputfield}&apikey=${API_KEY}`
                                // API CALL

            const response = await fetch(url);

            const data = await response.json();

        //     const result = data.message.body.track_list;
    
        // console.log(data);

        // console.log(data.message.body)
        // console.log(data.message.body.track_list)
    
        const tracks = data.message.body.track_list;
    
        tracks.forEach((track) => {
            const newElement = document.createElement("p");
            newElement.innerHTML = track.track.track_name;


            names.appendChild(newElement);
            //console.log(newElement)  ;
            console.log(track.track.track_name) ; 
        }
        );
            
        }catch (err) {
            throw err;
        }
    };

       
 
    
    


// const movies = [
//     { title: `A new hope`,

//         body: `doctor is a skcjbwcinicw`

//     },

//     {
//         title:`The empire strikes back`,
        
//             body:  `darth vader kcbjksjcbcujicjicbeuib`,

//     }
// ]

// function getMovies() {
//     setTimeout(() => {
//     Movies.Foreach(( movie, index) => {
//         console.log(movies.title)
            
//         });
//     } , 1000);
    
// }

// function createmovie(movie,callback) {
//     setTimeout(() => {
//         movies.push(movie);
//         callback();
//     },2000);
// }



    
    
