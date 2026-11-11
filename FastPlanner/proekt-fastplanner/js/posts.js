const sights = {
    cairo: ["The Great Pyramid of Giza", "The Grand Egyptian Museum", "Khan el-Khalili", "Saladin Citadel", "The Egyptian Museum in Cairo", "Al Moez Ldin Allah Al Fatmi", "Coptic Cairo", "Cairo Tower", "Al-Azhar Park", "The National Museum of Egyptian Civilization"],
    london: ["Tower of London", "British Museum", "Big Ben & Houses of Parliament", "Tower Bridge", "Buckingham Palace", "London Eye", "Westminster Abbey", "Saint Paul's Cathedral", "British National Gallery","Borough Market"],
    victoria: ["Victoria Clock Tower", "Sir Selwyn Selwyn-Clarke Market", "Arul Mihu Navasakthi Vinayagar Temple", "Victoria Botanical Gardens", "National Museum of History", "Saint Paul's Anglican Cathedral", "Venn's Town - Mission Lodge", "Copolia Nature Trail", "Beau Vallon Beach", "Eden Island-Seychelles"],
    rio: ["Christ the Redeemer", "Sugarloaf Mountain", "Copacabana Beach", "Ipanema Beach", "Escadaria Selarón", "Tijuca National Park", "Botanical Garden of Rio de Janeiro", "Parque Lage", "Museu do Amanhã", "Estádio Jornalista Mário Filho"],
    la: ["Griffith Observatory", "Hollywood Sign", "Universal Studios Hollywood", "Santa Monica Pier", "Venice Beach", "The Getty Center", "Hollywood Walk of Fame", "Los Angeles County Museum of Art (LACMA)", "Warner Bros. Studio Tour Hollywood", "Rodeo Drive"]
};

let current = null;
if (destinations.length > 0) {
    current = destinations[0];
}

function showBlog() {
    let tabs = document.getElementById("pills");
    let page = document.getElementById("post");

    if (current == null) {
        page.innerHTML = "<p>No destinations yet.</p>";
        return;
    }

    tabs.innerHTML = "";
    for (let i = 0; i < destinations.length; i++) {
        let dest = destinations[i];
        let active = "";
        if (dest.id == current.id) {
            active = "active";
        }
        tabs.innerHTML += '<li><a href="#" class="blog-tab ' + active + '" onclick="selectCity(\'' + dest.id + '\'); return false;">' +
            dest.name + ',' + '<small>' + dest.country + '</small></a></li>';
    }

    let guide = '<p class="text-muted">No guide for this destination yet.</p>';
    let places = sights[current.id];
    if (places != undefined) {
        guide = "<h4>10 things you must see in " + current.name + "</h4><ol>";
        for (let i = 0; i < places.length; i++) {
            guide += "<li>" + places[i] + "</li>";
        }
        guide += "</ol>";
    }

    let posts = "";
    for (let i = 0; i < current.posts.length; i++) {
        posts += '<div class="card border-0 shadow-sm mb-2"><div class="card-body">' +
            '<h5>' + current.posts[i].topic + '</h5>' +
            '<p class="mb-1">' + current.posts[i].text + '</p>' +
            '<small class="text-muted">' + current.posts[i].date + '</small>' +
            '</div></div>';
    }
    if (posts == "") {
        posts = '<p class="text-muted">No posts yet. Write the first one!</p>';
    }

    page.innerHTML = '<div class="card border-0 shadow-sm"><div class="card-body">' +
        '<h3>A guide to ' + current.name + '</h3>' +
        '<p>' + current.description + '</p>' + guide +
        '</div></div>' +
        '<h4 class="mt-4">Visitor posts</h4>' + posts +
        '<form class="card card-body border-0 shadow-sm mt-3" onsubmit="addPost(event)">' +
        '<h5>Write a post about ' + current.name + '</h5>' +
        '<input class="form-control mb-2" id="postTopic" placeholder="Topic" required>' +
        '<textarea class="form-control mb-2" id="postText" rows="3" placeholder="Your story or tips" required></textarea>' +
        '<button class="btn btn-accent align-self-start">Publish</button>' +
        '</form>';
}

function selectCity(id) {
    current = findDestination(id);
    showBlog();
}

function addPost(event) {
    event.preventDefault();

    let newPost = {
        topic: document.getElementById("postTopic").value,
        text: document.getElementById("postText").value,
        date: new Date().toLocaleDateString()
    };
    current.posts.push(newPost);

    saveDestinations();
    showBlog();
}

showBlog();