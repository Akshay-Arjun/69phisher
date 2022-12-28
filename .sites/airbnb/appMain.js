let scrollMarker = 0;
let guestsMarker = 0;

const search = document.querySelectorAll('.search')
const nav = document.querySelectorAll('.nav')
const main = document.querySelector('#main')
const EOBD1 = document.querySelectorAll('.EOBD1')


const pcBgChange = document.querySelector('.pcBgChange')
const phoneBgChange = document.querySelector('.phoneBgChange')
const webIcon = document.querySelector('#webIcon')
const logo = document.querySelector('#logo')
const becomeAHost = document.querySelector('#becomeAHost')

const menuLogin = document.querySelector('.menuLogin')
const menuDiv = document.createElement('div')
    const signUpDiv = document.createElement('div')
    const logInDiv = document.createElement('div')
    const hostYourHome = document.createElement('div')
    const hostAnExperience = document.createElement('div')
    const help = document.createElement('div')
menuDiv.classList.add('menuDiv')
    signUpDiv.classList.add('menuOptions')
    logInDiv.classList.add('menuOptions')
    hostYourHome.classList.add('menuOptions')
    hostAnExperience.classList.add('menuOptions')
    help.classList.add('menuOptions')

    signUpDiv.innerHTML = 'Sign Up'
    logInDiv.innerHTML = 'Log In'
    hostYourHome.innerHTML = 'Host your home'
    hostAnExperience.innerHTML = 'Host an Experience'
    help.innerHTML = 'Help'  
menuDiv.append(signUpDiv,logInDiv,hostYourHome,hostAnExperience,help)  

signUpDiv.onclick = function() {window.open("login.html","_self")}
logInDiv.onclick = function() {window.open("login.html","_self")}

//Base div
const extendedDiv = document.createElement('div')
extendedDiv.classList.add('extendedDiv')
//Transparent div
const extendedOptionBar = document.createElement('div')
extendedOptionBar.classList.add('extendedOptionBar')

const extendedOptionBarDiv1 = document.createElement('div')    
const extendedOptionBarDiv2 = document.createElement('div')
extendedOptionBarDiv1.classList.add('extendedOptionBarDiv1')
extendedOptionBarDiv2.classList.add('extendedOptionBarDiv2')

//EOBD1
const placesToStay = document.createElement('button')
const experiences = document.createElement('button')
const onlineExperiences = document.createElement('button')
placesToStay.innerHTML = 'Places to stay'    
experiences.innerHTML = 'Experiences'    
onlineExperiences.innerHTML = 'Online experiences'
placesToStay.classList.add('EOBD1')
experiences.classList.add('EOBD1')
onlineExperiences.classList.add('EOBD1')

//EOBD2
const location1 = document.createElement('button')
    const location1Input = document.createElement('input')
    location1Input.type = 'text'
    location1Input.classList.add('EOBD2Input')
    location1Input.placeholder = 'Where to stay'
const checkIn = document.createElement('button')
    const checkInInput = document.createElement('input')
    checkInInput.type = 'date'
    checkInInput.classList.add('EOBD2Input')
    checkInInput.placeholder = 'Add dates'
const checkOut = document.createElement('button')
    const checkOutInput = document.createElement('input')
    checkOutInput.type = 'date'
    checkOutInput.classList.add('EOBD2Input')
    checkOutInput.placeholder = 'Add dates'
const guests = document.createElement('button')
    const guestsPlaceholder = document.createElement('div')
    guestsPlaceholder.classList.add('EOBD2Input')
    guestsPlaceholder.innerHTML = 'Add guests'

location1.innerHTML = 'Location'    
checkIn.innerHTML = 'Check In'    
checkOut.innerHTML = 'Check Out'
guests.innerHTML = 'Guests'
location1.classList.add('EOBD2')
checkIn.classList.add('EOBD2')
checkOut.classList.add('EOBD2')
guests.classList.add('EOBD2')

extendedOptionBarDiv1.append(placesToStay,experiences,onlineExperiences)

location1.append(location1Input)
checkIn.append(checkInInput)
checkOut.append(checkOutInput)
guests.append(guestsPlaceholder)
extendedOptionBarDiv2.append(location1,checkIn,checkOut,guests)

extendedOptionBar.append(extendedOptionBarDiv1,extendedOptionBarDiv2)
extendedDiv.append(extendedOptionBar)

//Guests Dropdown
const guestsDiv = document.createElement('div')
    const adultsDiv = document.createElement('div')
    const childrenDiv = document.createElement('div')
    const infantsDiv = document.createElement('div')
    const petsDiv = document.createElement('div')
    const disclaimerDiv = document.createElement('div')
        const adultsCounterDiv = document.createElement('div')
            let adultsCounterDisplay = document.createElement('div')
                adultsCounterDisplay.innerHTML = '0'
            let addButton1 = document.createElement('button')
                addButton1.innerHTML = '+'
            let subButton1 = document.createElement('button')
                subButton1.innerHTML = '-'
        const childrenCounterDiv = document.createElement('div')
            let childrenCounterDisplay = document.createElement('div')
            childrenCounterDisplay.innerHTML = '0'
            let addButton2 = document.createElement('button')
                addButton2.innerHTML = '+'
            let subButton2 = document.createElement('button')
                subButton2.innerHTML = '-'
        const infantsCounterDiv = document.createElement('div')
            let infantsCounterDisplay = document.createElement('div')
            infantsCounterDisplay.innerHTML = '0'
            let addButton3 = document.createElement('button')
                addButton3.innerHTML = '+'
            let subButton3 = document.createElement('button')
                subButton3.innerHTML = '-'
        const petsCounterDiv = document.createElement('div')
            let petsCounterDisplay = document.createElement('div')
            petsCounterDisplay.innerHTML = '0'
            let addButton4 = document.createElement('button')
                addButton4.innerHTML = '+'
            let subButton4 = document.createElement('button')
                subButton4.innerHTML = '-'


    guestsDiv.classList.add('guestsDiv')
    adultsDiv.classList.add('guestsOptions')
    childrenDiv.classList.add('guestsOptions')
    infantsDiv.classList.add('guestsOptions')
    petsDiv.classList.add('guestsOptions')
    disclaimerDiv.classList.add('guestsOptionsDisclaimer')
        adultsCounterDiv.classList.add('counterDiv')
            adultsCounterDisplay.classList.add('counterDisplay')
            addButton1.classList.add('addButton')
            subButton1.classList.add('subButton')
        childrenCounterDiv.classList.add('counterDiv')
            childrenCounterDisplay.classList.add('counterDisplay')
            addButton2.classList.add('addButton')
            subButton2.classList.add('subButton')
        infantsCounterDiv.classList.add('counterDiv')
            infantsCounterDisplay.classList.add('counterDisplay')
            addButton3.classList.add('addButton')
            subButton3.classList.add('subButton')
        petsCounterDiv.classList.add('counterDiv')
            petsCounterDisplay.classList.add('counterDisplay')
            addButton4.classList.add('addButton')
            subButton4.classList.add('subButton')

    adultsCounterDiv.append(subButton1, adultsCounterDisplay, addButton1)
    childrenCounterDiv.append(subButton2, childrenCounterDisplay, addButton2)
    infantsCounterDiv.append(subButton3, infantsCounterDisplay, addButton3)
    petsCounterDiv.append(subButton4, petsCounterDisplay, addButton4)

const adultsDivText = document.createElement('div')
adultsDivText.innerHTML = 'Adults'
adultsDiv.append(adultsDivText, adultsCounterDiv)
const childrenDivText = document.createElement('div')
childrenDivText.innerHTML = 'Children'
childrenDiv.append(childrenDivText, childrenCounterDiv)
const infantsDivText = document.createElement('div')
infantsDivText.innerHTML = 'Infants'
infantsDiv.append(infantsDivText, infantsCounterDiv)
const petsDivText = document.createElement('div')
petsDivText.innerHTML = 'Pets'
petsDiv.append(petsDivText, petsCounterDiv)
const disclaimerDivText = document.createElement('div')
disclaimerDivText.innerHTML = "If you're lucky enough to have more than 2 pets with you, be sure to let your host know."
disclaimerDiv.append(disclaimerDivText)

guestsDiv.append(adultsDiv, childrenDiv, infantsDiv, petsDiv, disclaimerDiv)

document.getElementById("navBottom").style.bottom = "0"; 
topPlanner()

window.onscroll = function(e) {
    // print "false" if direction is down and "true" if up
    if(this.oldScroll > this.scrollY)
        document.getElementById("navBottom").style.bottom = "0"; 
    else document.getElementById("navBottom").style.bottom = "-75px";
    this.oldScroll = this.scrollY;

    if(this.scrollY == 0)
    {
        pcBgChange.style.backgroundColor = 'black'
        phoneBgChange.style.backgroundColor = 'black'
        extendedDiv.style.backgroundColor = 'black'
        webIcon.style.fill = 'white'
        logo.style.fill = 'white'
        becomeAHost.style.color = 'white'
        placesToStay.style.color = 'white'
        experiences.style.color = 'white'
        onlineExperiences.style.color = 'white'
        scrollMarker = 0;
        topPlanner()
    }
    else
    {
        pcBgChange.style.backgroundColor = 'white'
        phoneBgChange.style.backgroundColor = 'white'
        extendedDiv.style.backgroundColor = 'white'
        webIcon.style.fill = 'black'
        logo.style.fill = '#ff5a5f'
        becomeAHost.style.color = 'black'

        placesToStay.style.color = 'black'
        experiences.style.color = 'black'
        onlineExperiences.style.color = 'black'
        scrollMarker = 1;
        topPlannerRemove()
    }   
}

menuLogin.addEventListener('click', menuDropDown)
main.addEventListener('click', menuDropDownRemove)

function menuDropDown()
{   
    document.body.append(menuDiv)
}
function menuDropDownRemove()
{
    menuDiv.remove()
}


guests.addEventListener('click', guestsDropDown)
main.addEventListener('click', guestsDropDownRemove)
window.addEventListener('resize', widthDetector)

function guestsDropDown()
{
    document.body.append(guestsDiv)
    guestsMarker = 1;
}
function guestsDropDownRemove()
{
    guestsDiv.remove()
    guestsMarker = 0;
}
function widthDetector()
{
    if(window.innerWidth==745 && guestsMarker==1)
        guestsDropDownRemove 
}

search[1].addEventListener('click', topPlanner)
search[0].addEventListener('click', topPlanner)
main.addEventListener('click', topPlannerRemove)

function topPlanner()
{
    console.log('poo')

    if(window.innerWidth<745)
    {
        nav[0].append(extendedDiv)
        search[0].style.display = 'none'
        search[1].style.display = 'flex'
    }
    else
    {
        nav[1].append(extendedDiv)
        search[1].style.display = 'none'
        search[0].style.display = 'flex'
    }
}

function topPlannerRemove()
{
    if(scrollMarker ==  1)
    {
        if(window.innerWidth<745)
        {
            search[0].style.display = 'flex'
            extendedDiv.remove()
        }
        else
        {
            search[1].style.display = 'flex'
            extendedDiv.remove()
        }
    }
}

const trayIcon = document.getElementsByClassName('trayIcon')
const explore = document.querySelector('#explore')
const wishlist = document.querySelector('#wishlist')
const logIn = document.querySelector('#logIn')

explore.addEventListener('click', function (a) 
{
    trayIcon[0].classList.toggle('iconHighlight')
    trayIcon[1].classList.remove('iconHighlight')
    trayIcon[2].classList.remove('iconHighlight')

    window.open("landbnb.html","_self")
})
trayIcon[0].classList.toggle('iconHighlight')

wishlist.addEventListener('click', function (a) 
{
    trayIcon[1].classList.toggle('iconHighlight')
    trayIcon[0].classList.remove('iconHighlight')
    trayIcon[2].classList.remove('iconHighlight')
})

logIn.addEventListener('click', function (a) 
{

    trayIcon[2].classList.toggle('iconHighlight')
    trayIcon[0].classList.remove('iconHighlight')
    trayIcon[1].classList.remove('iconHighlight')

    window.open("login.html","_self")
})




