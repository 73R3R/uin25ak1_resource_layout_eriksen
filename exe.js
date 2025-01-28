document.getElementById("cats").innerHTML = `
    <button onclick="loadResource('HTML')">HTML</button>
    <button onclick="loadResource('CSS')">CSS</button>
    <button onclick="loadResource('JavaScript')">Javascript</button>
    <button onclick="loadResource('React')">React</button>
    <button onclick="loadResource('Sanity and headless CMS')">Sanity and headless CMS</button>
`

function loadResource(category){
    const resource = resources.find(r => r.category === category);

    const text = document.getElementById("content")
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

document.addEventListener("DOMContentLoaded", () => {
    const Links = resources
        .filter(resource => resource.category === 'HTML') 
        .map(resource => resource.sources) 
        .flat()

    document.getElementById("content").innerHTML = `
        <ul>
            ${Links
                .map(source => `<li><a href="${source.url}">${source.title}</a></li>`)
                .join("")}
        </ul>
    `;
});