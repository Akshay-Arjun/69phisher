const search = document.querySelector('#search')



document.getElementById("navBottom").style.bottom = "0"; 
window.onscroll = function(e) {
    // print "false" if direction is down and "true" if up
    if(this.oldScroll > this.scrollY)
        document.getElementById("navBottom").style.bottom = "0"; 
    else document.getElementById("navBottom").style.bottom = "-75px";
    this.oldScroll = this.scrollY;
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
trayIcon[2].classList.toggle('iconHighlight')

const countryCode = document.getElementById('countryCode')
const numberInput = document.getElementById('numberInput')
const numberInputInput = document.getElementById('numberInputInput')
const prefixDiv = document.getElementById('prefixDiv')

numberInput.onclick = function() 
{
    prefixDiv.innerText = `+${countryCode.value}`
    numberInputInput.placeholder = 'Phone number'
}

countryCode.addEventListener('change', function()
{
    prefixDiv.innerText = ''
    prefixDiv.innerText = `+${countryCode.value}`
    numberInputInput.placeholder = 'Phone number'
})



