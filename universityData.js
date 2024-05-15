let url = "http://universities.hipolabs.com/search?name=";


let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
    
    let country = document.querySelector("input").value;
    let univarr = await getuniversities(country);
    console.log(univarr);
    show(univarr);

});

function show(univarr) {
    let list = document.querySelector("ul");
    list.innerText = "";
    for (univ of univarr) {
        console.log(univ.name);
        let li = document.createElement("li");
        li.classList.add("animate");
        li.innerText = univ.name;
        let a = document.createElement("a");
        a.href = univ.web_pages;
        a.innerText = "Go to Official website";
        a.target = "_blank";
        list.appendChild(li);
        li.appendChild(a);
    }
}

async function getuniversities(country) {
    try {
        let res = await axios.get(url + country);
        console.log(res.data);
        return res.data;
    }
    catch(err) {
        console.log("error:-", err)
        return [];
    }
}