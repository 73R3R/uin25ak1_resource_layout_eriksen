//generere knapper som kan kjøre funksjon loadResource
document.getElementById("cats").innerHTML = `
    <button onclick="loadResource('HTML')">HTML</button>
    <button onclick="loadResource('CSS')">CSS</button>
    <button onclick="loadResource('JavaScript')">Javascript</button>
    <button onclick="loadResource('React')">React</button>
    <button onclick="loadResource('Sanity and headless CMS')">Sanity and headless CMS</button>
`

function loadResource(category){
    //finne kategori som mather med onclick...("XXXX")
    const resource = resources.find(r => r.category === category);
    const text = document.getElementById("content")
    //fyller inn HTML i content basert på kategorien fra button som er trykket
    text.innerHTML = `
    <h1>${resource.category}
    <p>${resource.text}
    <ul>
    ${resource.sources
    .map(source => `<li><a href="${source.url}" >${source.title}</a></li>`)
    .join("")}
    </ul>
    `
}

//eventlistener når siden lastes inn
document.addEventListener("DOMContentLoaded", () => {
    //filter, map og flat for å printe ut linkene i category=HTML
    const Links = resources
        .filter(resource => resource.category === 'HTML') 
        .map(resource => resource.sources) 
        .flat()

        //HTML nødvendig for linkene og map, join
    document.getElementById("content").innerHTML = `
        <ul>
            ${Links
                .map(source => `<li><a href="${source.url}">${source.title}</a></li>`)
                .join("")}
        </ul>
    `;
});