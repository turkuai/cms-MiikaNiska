// Load saved values from localStorage
window.addEventListener("load", function () {
    let savedName = localStorage.getItem("compName");
    let savedDesc = localStorage.getItem("compDesc");
    let storedLinks = JSON.parse(localStorage.getItem("socialLinks"));

    if (savedName) {
        document.getElementById("compname").innerText = savedName;
    }
    if (savedDesc) {
        document.getElementById("compdesc").innerText = savedDesc;
    }
    if (storedLinks) {
        links = storedLinks;
        displayLinks();
    }
});

function editContent() {
    let compName = document.getElementById("compname");
    let compDesc = document.getElementById("compdesc");
    
    let nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.value = compName.innerText;
    
    let descInput = document.createElement("textarea");
    descInput.value = compDesc.innerText;
    
    let saveButton = document.createElement("button");
    saveButton.innerText = "Save";
    
    compName.replaceWith(nameInput);
    compDesc.replaceWith(descInput);
    document.getElementById("edit").after(saveButton);
    
    saveButton.addEventListener("click", function () {
        compName.innerText = nameInput.value;
        compDesc.innerText = descInput.value;
        
        localStorage.setItem("compName", nameInput.value);
        localStorage.setItem("compDesc", descInput.value);
        
        nameInput.replaceWith(compName);
        descInput.replaceWith(compDesc);
        saveButton.remove();
    });
}

let links = []; // Global variable to hold links

function editLinks() {
    let container = document.querySelector(".social-links");
    container.innerHTML = ""; // Clear existing content

    let titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.placeholder = "Link Title (e.g. Twitter)";

    let urlInput = document.createElement("input");
    urlInput.type = "text";
    urlInput.placeholder = "Enter URL (e.g. https://twitter.com/yourpage)";

    let addBtn = document.createElement("button");
    addBtn.innerText = "Add Link";

    container.appendChild(titleInput);
    container.appendChild(urlInput);
    container.appendChild(addBtn);

    addBtn.addEventListener("click", function () {
        let title = titleInput.value.trim();
        let url = urlInput.value.trim();

        if (title && url) {
            links.push({ title, url });
            localStorage.setItem("socialLinks", JSON.stringify(links));
            displayLinks();
        }
    });
}

function displayLinks() {
    let container = document.querySelector(".social-links");
    container.innerHTML = "";

    links.forEach((linkObj, index) => {
        let linkEl = document.createElement("a");
        linkEl.href = linkObj.url;
        linkEl.target = "_blank";
        linkEl.innerText = linkObj.title;

        let removeBtn = document.createElement("button");
        removeBtn.innerText = "Remove";
        removeBtn.style.marginLeft = "10px";
        removeBtn.addEventListener("click", function () {
            links.splice(index, 1);
            localStorage.setItem("socialLinks", JSON.stringify(links));
            displayLinks();
        });

        let wrapper = document.createElement("div");
        wrapper.appendChild(linkEl);
        wrapper.appendChild(removeBtn);
        container.appendChild(wrapper);
    });
}
