// question no 01
const output = document.getElementById("output");

    // ---- Q1(i): Get element of id “main-content” and assign in variable ----
    const mainContent = document.getElementById("main-content");
    output.innerHTML += "Q1(i): main-content element obtained.\n\n";

    // ---- Q1(ii): Display all child elements of “main-content” ----
    const children = mainContent.children;
    output.innerHTML += "Q1(ii): Child elements of main-content:\n";
    for (let i = 0; i < children.length; i++) {
      output.innerHTML += children[i].outerHTML + "\n";
    }

    // ---- Q1(iii): Get all elements of class “render” and show their innerHTML ----
    const renders = document.getElementsByClassName("render");
    output.innerHTML += "\nQ1(iii): InnerHTML of elements with class 'render':\n";
    for (let i = 0; i < renders.length; i++) {
      output.innerHTML += renders[i].innerHTML + "\n";
    }

    // ---- Q1(iv & v): Fill input values using JavaScript ----
    document.getElementById("first-name").value = "wania";
    document.getElementById("last-name").value = "Bank";
    document.getElementById("email").value = "waniabank@example.com";
    output.innerHTML += "\nQ1(iv & v): Input fields filled with values.\n\n";

    
// question no 02
const formContent = document.getElementById("form-content");
    output.innerHTML += "Q2(i): Node type of 'form-content' = " + formContent.nodeType + "\n";

    // ---- Q2(ii): Node type of element having id “lastName” and its child ----
    const lastNameEl = document.getElementById("lastName");
    output.innerHTML += "Q2(ii): Node type of 'lastName' = " + lastNameEl.nodeType + "\n";
    output.innerHTML += "Child node type of 'lastName' = " + lastNameEl.firstChild.nodeType + "\n";

    // ---- Q2(iii): Update child node of element having id “lastName” ----
    lastNameEl.textContent = "Last Name: Updated Bank";
    output.innerHTML += "Q2(iii): Updated text of 'lastName' element.\n";

    // ---- Q2(iv): Get first and last child of id “main-content” ----
    const firstChild = mainContent.firstElementChild;
    const lastChild = mainContent.lastElementChild;
    output.innerHTML += "Q2(iv): First child of main-content = " + firstChild.outerHTML + "\n";
    output.innerHTML += "Last child of main-content = " + lastChild.outerHTML + "\n";

    // ---- Q2(v): Get next and previous siblings of id “lastName” ----
    const nextSibling = lastNameEl.nextElementSibling;
    const prevSibling = lastNameEl.previousElementSibling;
    output.innerHTML += "Q2(v): Previous sibling of 'lastName' = " + prevSibling.outerHTML + "\n";
    output.innerHTML += "Next sibling of 'lastName' = " + nextSibling.outerHTML + "\n";

    // ---- Q2(vi): Get parent node and node type of element having id “email” ----
    const emailEl = document.getElementById("email");
    output.innerHTML += "Q2(vi): Parent node of 'email' = " + emailEl.parentNode.nodeName + "\n";
    output.innerHTML += "Node type of 'email' = " + emailEl.nodeType + "\n";