
        // i. Get node type of element with id 'form-content'
        let formContentNode = document.getElementById("form-content");
        console.log("Node type of form-content:", formContentNode.nodeType);

        // ii. Get node type of element with id 'lastName' and its child node
        let lastNameNode = document.getElementById("lastName");
        console.log("Node type of lastName:", lastNameNode.nodeType);

        let lastNameChild = lastNameNode.firstChild;
        console.log("Node type of lastName's child:", lastNameChild.nodeType);

        // iii. Update child node of element with id 'lastName'
        lastNameNode.textContent = "Updated Last Name";
        console.log("Updated lastName:", lastNameNode.textContent);

        // iv. Get first and last child of element with id 'main-content'
        let mainContentNode = document.getElementById("main-content");
        console.log("First child of main-content:", mainContentNode.firstChild);
        console.log("Last child of main-content:", mainContentNode.lastChild);

        // v. Get next and previous siblings of element with id 'lastName'
        let nextSibling = lastNameNode.nextElementSibling;
        let previousSibling = lastNameNode.previousElementSibling;
        console.log("Next sibling of lastName:", nextSibling);
        console.log("Previous sibling of lastName:", previousSibling);

        // vi. Get parent node and node type of element with id 'email'
        let emailNode = document.getElementById("email");
        let parentNode = emailNode.parentNode;
        console.log("Parent node of email:", parentNode);
        console.log("Node type of email:", emailNode.nodeType);
    