const defaultDestinations = [
    { id: "cairo", name: "Cairo", country: "Egypt", category: "History", flight: 120, perDay: 70, description: "Land of the Pharaohs, ancient pyramids, and the legendary Nile.", images: ["../assets/img/dest/Cairo.jpg"], likes: 0, dislikes: 0, comments: [], posts: [] },
    { id: "london", name: "London", country: "United Kingdom", category: "Town", flight: 275, perDay: 180, description: "Centuries of royalty, world-class theater, and endless tea.", images: ["../assets/img/dest/London.jpg"], likes: 0, dislikes: 0, comments: [], posts: [] },
    { id: "victoria", name: "Victoria", country: "Seychelles", category: "Beach", flight: 480, perDay: 230, description: "Calm waters, golden sunset views, and island relaxation.", images: ["../assets/img/dest/victoria.jpg"], likes: 0, dislikes: 0, comments: [], posts: [] },
    { id: "rio", name: "Rio de Janeiro", country: "Brazil", category: "Beach", flight: 530, perDay: 310, description: "Bustling beach boardwalks, vibrant Carnival spirit, and samba nights.", images: ["../assets/img/dest/riodejan.jpg"], likes: 0, dislikes: 0, comments: [], posts: [] },
    { id: "la", name: "Los Angeles", country: "California", category: "Town", flight: 645, perDay: 350, description: "Hollywood glamour, palm-lined boulevards, and sun-drenched Pacific coasts.", images: ["../assets/img/dest/LA.jpg"], likes: 0, dislikes: 0, comments: [], posts: [] }
];

let destinations = JSON.parse(localStorage.getItem("fpDestinations"));
if (destinations == null) {
    destinations = defaultDestinations;
}

function saveDestinations() {
    localStorage.setItem("fpDestinations", JSON.stringify(destinations));
}

function findDestination(id) {
    for (let i = 0; i < destinations.length; i++) {
        if (destinations[i].id == id) {
            return destinations[i];
        }
    }
    return null;
}