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

let links = [];

function editLinks() {
    let linksContainer = document.querySelector(".social-links");
    let linkInput = document.createElement("input");
    linkInput.type = "text";
    linkInput.placeholder = "Enter link URL...";
    
    let linkTextInput = document.createElement("input");
    linkTextInput.type = "text";
    linkTextInput.placeholder = "Enter link text...";

    let saveButton = document.createElement("button");
    saveButton.innerText = "Add Link";
    
    linksContainer.appendChild(linkInput);
    linksContainer.appendChild(linkTextInput);
    linksContainer.appendChild(saveButton);
    
    saveButton.addEventListener("click", function () {
        if (linkInput.value && isValidUrl(linkInput.value) && linkTextInput.value) {
            links.push({ url: linkInput.value, text: linkTextInput.value });
            localStorage.setItem("socialLinks", JSON.stringify(links));
            
            linkInput.remove();
            linkTextInput.remove();
            saveButton.remove();
            displayLinks();
        } else {
            alert("Please enter a valid URL and link text.");
        }
    });
}

function isValidUrl(url) {
    try {
        new URL(url);
        return true;
    } catch (_) {
        return false;
    }
}

function displayLinks() {
    const linksContainer = document.querySelector(".social-links");
    linksContainer.innerHTML = "";

    links.forEach(function(link, index) {
        let linkElement = document.createElement("a");
        linkElement.href = link.url;
        linkElement.innerText = link.text;
        linkElement.target = "_blank";

        let removeButton = document.createElement("button");
        removeButton.innerText = "Remove";
        removeButton.onclick = function() {
            removeLink(index);
        };

        linksContainer.appendChild(linkElement);
        linksContainer.appendChild(removeButton);
        linksContainer.appendChild(document.createElement("br"));
    });
}

function removeLink(index) {
    links.splice(index, 1);
    localStorage.setItem("socialLinks", JSON.stringify(links));
    displayLinks();
}
