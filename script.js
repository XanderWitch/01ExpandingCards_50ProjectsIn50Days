//switch panel class to active

//bring panels into JS file
const panels = document.querySelectorAll('.panel') //selects all panels and puts them into a node list, like an array

//loop through nodelist of panels
panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active'); //change class list of clicked panel to addive;
    })
})

function removeActiveClasses() { //remove active class on all panels, so only one panel at a time is active

    //loop through all panels
    panels.forEach(panel => {
        panel.classList.remove('active');
    })

}