async function fetchCat() {
    let catFact = await fetch('https://catfact.ninja/fact?max_length=140')
        .then(res => res.json());
    
        var pageHeading = document.createElement('h3');
        pageHeading.innerHTML = `Random Cat Fact`;

        var randomFact = document.createElement('p');
        randomFact.innerHTML = catFact.fact;

        var factWrapper = document.getElementById('factWrapper');
        factWrapper.appendChild(pageHeading);
        factWrapper.appendChild(randomFact);
}

fetchCat();