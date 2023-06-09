const formHandler = (event) => {
    event.preventDefault()
    const FD = new FormData(event.target);
    const formDataObj = Object.fromEntries(FD.entries());

    alert(`Request with body ${  JSON.stringify(formDataObj)  } has been mocked! Timestamp: ${event.timeStamp}`)
}

window.onload = () => {
    Array(...document.getElementById("qna-accordeon").children).forEach((node) => {
        node.children.item(2).addEventListener("click", (event) => {
            event.preventDefault()
            const parentNode = event.target.parentNode;
            console.log(parentNode.classList)
            if (parentNode.classList.contains("active")) {
                parentNode.classList.remove("active")
                event.target.innerHTML = "+"
            } else {
                parentNode.classList.add("active")
                event.target.innerHTML = "X"
            }
        })
    })

    document.getElementById("customers-stack-controls").children[1].addEventListener("click", (event) => {
        event.preventDefault()
        const cards = document.getElementById("customers-stack").children

        cards[0].parentNode.insertBefore(cards[cards.length-1], cards[0])
    })

    document.getElementById("customers-stack-controls").children[0].addEventListener("click", (event) => {
        event.preventDefault()
        const cards = document.getElementById("customers-stack").children

        cards[cards.length-1].parentNode.insertBefore(cards[0], null)
    })

    document.getElementById("newsletter").addEventListener("submit", formHandler)
    document.getElementById("review").addEventListener("submit", formHandler)
}
