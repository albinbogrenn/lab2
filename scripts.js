/*
 *  Filename: scripts.js
 *  Description: Provided JS source code as material for Lab 2: HTML + JavaScript.
 *  Course Code: TNM115-2024VT
 *  Institution: Linköping University
 *
 *  Author: Nico Reski
 *  Version: 2024-01-23
 */

// ===== SOLAR SYSTEM DATA =====
// JSON object containing the information (data) about the solar system
// JSON object composed by: Nico Reski
// based on data available at: https://science.nasa.gov/solar-system/

// == Documentation for individual star/planet JSON objects ==
// id           -> unique identifier for a JSON object across the dataset
// name         -> textual name
// description  -> textual description
// time_day     -> length of 1 day on the respective planet, measured in (unit) earth days (1 complete self-rotation with respect to the sun)
// time_year    -> length of 1 year, measured in (unit) earth days (1 complete orbit around the sun)
// moons        -> moons of the respective planet; observe: value type varies!
// neighbors    -> array containing the ids of its neighbors
// image_src    -> filepath to image
// online_ref   -> link (url) for further reading
const solarSystemData = {
    version: "2024-01-23",
    data_source: "https://science.nasa.gov/solar-system/",
    star : {
        id: "s1",
        name: "Sun",
        description: "A star is a hot, glowing ball of gas. When you look up in the night sky, you can see countless twinkling stars. Can you see any stars during the daytime? Of course! The light of daytime comes from our closest star: the Sun.",
        neighbors: [ "p1" ],
        image_src: "media/sun.png",
        online_ref: "https://science.nasa.gov/sun/"
    },
    planets : [
        { 
            id: "p1",
            name: "Mercury",
            description: "Mercury is the smallest planet in our solar system. It's just a little bigger than Earth's Moon. Mercury itself, though, doesn't have any moons. It is the closest planet to the Sun, but it's actually not the hottest. Venus is hotter.",
            time_day: 59,
            time_year: 88,
            moons: null,
            neighbors: [ "s1", "p2" ],
            image_src: "media/mercury.png",
            online_ref: "https://science.nasa.gov/mercury/"
        },
        { 
            id: "p2",
            name: "Venus",
            description: "Venus looks like a very active planet. It has mountains and volcanoes. Venus is similar in size to Earth. Earth is just a little bit bigger.",
            time_day: 243,
            time_year: 225,
            moons: null,
            neighbors: [ "p1", "p3" ],
            image_src: "media/venus.png",
            online_ref: "https://science.nasa.gov/venus/"
        },
        { 
            id: "p3",
            name: "Earth",
            description: "Our home planet Earth is a rocky, terrestrial planet. It has a solid and active surface with mountains, valleys, canyons, plains and so much more. Earth is special because it is an ocean planet. Water covers 70% of Earth's surface.",
            time_day: 1,
            time_year: 365.25,
            moons: [ "Moon" ],
            neighbors: [ "p2", "p4" ],
            image_src: "media/earth.png",
            online_ref: "https://science.nasa.gov/earth/"
        },
        { 
            id: "p4",
            name: "Mars",
            description: "Mars is a cold desert world. The average temperature on Mars is minus 85 degrees Fahrenheit - way below freezing. It is half the size of Earth. Mars is sometimes called the Red Planet. It's red because of rusty iron in the ground.",
            time_day: 1.025,
            time_year: 687,
            moons: [ "Phobos", "Deimos" ],
            neighbors: [ "p3", "p5" ],
            image_src: "media/mars.png",
            online_ref: "https://science.nasa.gov/mars/"
        },
        { 
            id: "p5",
            name: "Jupiter",
            description: "Jupiter is the biggest planet in our solar system. It's similar to a star, but it never got massive enough to start burning. It is covered in swirling cloud stripes. It has big storms like the Great Red Spot, which has been going for hundreds of years. Jupiter is a gas giant and doesn't have a solid surface.",
            time_day: 0.417,
            time_year: 11.8,
            moons: 95,
            neighbors: [ "p4", "p6" ],
            image_src: "media/jupiter.png",
            online_ref: "https://science.nasa.gov/jupiter/"
        },
        { 
            id: "p6",
            name: "Saturn",
            description: "Saturn isn't the only planet to have rings, but it definitely has the most beautiful ones. The rings we see are made of groups of tiny ringlets that surround Saturn. They're made of chunks of ice and rock. Like Jupiter, Saturn is mostly a ball of hydrogen and helium.",
            time_day: 0.446,
            time_year: 29,
            moons: 146,
            neighbors: [ "p5", "p7" ],
            image_src: "media/saturn.png",
            online_ref: "https://science.nasa.gov/saturn/"
        },
        { 
            id: "p7",
            name: "Uranus",
            description: "Uranus is made of water, methane, and ammonia fluids above a small rocky center. Its atmosphere is made of hydrogen and helium like Jupiter and Saturn, but it also has methane. The methane makes Uranus blue.",
            time_day: 0.71,
            time_year: 84,
            moons: 27,
            neighbors: [ "p6", "p8" ],
            image_src: "media/uranus.png",
            online_ref: "https://science.nasa.gov/uranus/"
        },
        { 
            id: "p8",
            name: "Neptune",
            description: "Neptune is dark, cold, and very windy. It's the last of the planets in our solar system. It's more than 30 times as far from the sun as Earth is. Neptune is very similar to Uranus. It's made of a thick fog of water, ammonia, and methane over an Earth-sized solid center.",
            time_day: 0.71,
            time_year: 165,
            moons: 14,
            neighbors: [ "p7" ],
            image_src: "media/neptune.png",
            online_ref: "https://science.nasa.gov/neptune/"
        }
    ]
};
// =============================

// manually added listener for the "DOMContentLoaded" event, which is automatically invoked
// once the initial loading of the web page has been completed (.html file is completely parsed) 
document.addEventListener("DOMContentLoaded", function(){
   console.log("HTML DOM tree loaded, and ready for manipulation.");
   // === YOUR FUNCTION CALL TO INITIATE THE GENERATION OF YOUR WEB PAGE SHOULD GO HERE ===
    document.body.style.backgroundImage = "url('media/space.jpg')";
    var w = window.innerWidth;
    var h = window.innerHeight;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    createButton();
});

// ===== PROVIDED JS SOURCE CODE    -- ABOVE   =====
// ===== JS LAB 2 IMPLEMENTATION -- BENEATH =====
function createButton(){
    /* */
    const divContainer = document.createElement("div");
    divContainer.style.display = "flex";
    divContainer.style.justifyContent = "space-evenly";
    divContainer.style.minWidth = "100%";
    const buttonContainer = document.createElement("button");
    buttonContainer.type = "button";
    buttonContainer.style.borderRadius = "50%";
    buttonContainer.style.background = "black";
    buttonContainer.id = "s1";
    const imgElement = document.createElement("img");
    imgElement.src=solarSystemData.star.image_src;
    imgElement.style.borderRadius="50%";
    imgElement.style.maxWidth="100px";
    imgElement.onclick = function(){
        bodyInfo(buttonContainer.id)
    }
    buttonContainer.appendChild(imgElement);
    divContainer.appendChild(buttonContainer);
    for(let i = 0; i < solarSystemData.planets.length; i++){
        const buttonPlanet = document.createElement("button");
        buttonPlanet.type = "button";
        buttonPlanet.id = solarSystemData.planets[i].id;
        buttonPlanet.style.borderRadius = "50%";
        buttonPlanet.style.background = "black";
        const imgElement = document.createElement("img");
        imgElement.src=solarSystemData.planets[i].image_src;
        imgElement.style.borderRadius="50%";
        imgElement.style.maxWidth="100px";
        buttonPlanet.onclick = function(){
            bodyInfo(buttonPlanet.id)
        }
        buttonPlanet.appendChild(imgElement);
        divContainer.appendChild(buttonPlanet);
    }
    document.body.appendChild(divContainer);
}

function bodyInfo(id){
    /*Check if we have clicked any button to generate text*/
    if(document.contains(document.getElementById("planets"))){
        document.getElementById("planets").remove();
    }

    /*Write out info about star/planets*/
    const divContainer = document.createElement("div");
    divContainer.id = "planets";
    divContainer.style.color = "lightskyblue";

    const textElement = document.createElement("h1");
    textElement.innerHTML = getInfo(id).name;
    divContainer.appendChild(textElement);

    const textDesc = document.createElement("p");
    textDesc.innerHTML = 'Description: ' + getInfo(id).description;
    divContainer.appendChild(textDesc);

    const textNeigh = document.createElement("p");
    textNeigh.innerHTML = 'Neighbors: ' + getNeighbors(id);
    divContainer.appendChild(textNeigh);

    /*Write time*/
    if((getInfo(id).time_day) < 1){
        const dearthDays = document.createElement("p");
        dearthDays.innerHTML = getInfo(id).time_day*24 + ' earth hours in one day';
        divContainer.appendChild(dearthDays);
        
        const yearthDays = document.createElement("p");
        yearthDays.innerHTML = getInfo(id).time_year + ' earth days in one year';
        divContainer.appendChild(yearthDays);
    }
    else{
        if(id != solarSystemData.star.id){
            const dearthDays = document.createElement("p");
            dearthDays.innerHTML = getInfo(id).time_day + ' earth days in one day';
            divContainer.appendChild(dearthDays);
        
            const yearthDays = document.createElement("p");
            yearthDays.innerHTML = getInfo(id).time_year + ' earth days in one year';
            divContainer.appendChild(yearthDays);
        }
    }

    /*How many moons a planet has*/
    divContainer.appendChild(getMoons(id));

    /*Link to that planet website*/
    const linkPlanet = document.createElement("a");
    linkPlanet.innerHTML = getInfo(id).online_ref;
    linkPlanet.href = getInfo(id).online_ref;
    linkPlanet.target = "_blank";
    linkPlanet.style.color = "white";
    divContainer.appendChild(linkPlanet); 

    document.body.appendChild(divContainer);
}

/*Return moons*/
function getMoons(id){
    if(getInfo(id).moons){
        const moons = document.createElement("p");
        moons.innerHTML = 'Moons: ' + getInfo(id).moons;
        return moons;
    }
    else{
        const moons = document.createElement("p");
        moons.innerHTML = 'Moons: 0' ;
        return moons;
    }
}

/*Return planets neighbors*/
function getNeighbors(id){
    if(id == "s1" || id == "p8"){
        n = getInfo(id).neighbors;
        return getInfo(n).name;
    }else{
        n = getInfo(id).neighbors
        return getInfo(n[0]).name + ", " + getInfo(n[1]).name;
    }
}

/*Return THAT star/planet object*/
function getInfo(id){
    if(id == solarSystemData.star.id){
        return solarSystemData.star;
    }
    else{
        for(let i = 0; i < solarSystemData.planets.length; i++){
            if(id == solarSystemData.planets[i].id){
                return solarSystemData.planets[i];
            }
        }
    }
}
