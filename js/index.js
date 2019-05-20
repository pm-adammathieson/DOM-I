const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navItems = document.querySelectorAll("a")

navItems.forEach(item => item.style.color = "green")

navItems[0].textContent = siteContent["nav"]["nav-item-1"]
navItems[1].textContent = siteContent["nav"]["nav-item-2"]
navItems[2].textContent = siteContent["nav"]["nav-item-3"]
navItems[3].textContent = siteContent["nav"]["nav-item-4"]
navItems[4].textContent = siteContent["nav"]["nav-item-5"]
navItems[5].textContent = siteContent["nav"]["nav-item-6"]

let headerImg = document.getElementById("cta-img")
headerImg.setAttribute('src', siteContent["cta"]["img-src"])

let ctaText = document.querySelector("h1")
ctaText.textContent = siteContent["cta"]["h1"]

let button = document.querySelector("button") 
button.textContent = siteContent["cta"]["button"]

let midImg = document.getElementById('middle-img')
midImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

let head4 = document.querySelectorAll('h4')

head4[0].textContent = siteContent['main-content']['features-h4']
head4[1].textContent = siteContent['main-content']['about-h4']
head4[2].textContent = siteContent['main-content']['services-h4']
head4[3].textContent = siteContent['main-content']['product-h4']
head4[4].textContent = siteContent['main-content']['vision-h4']
head4[5].textContent = siteContent['contact']['contact-h4']

let midContentP = document.querySelectorAll('p')

midContentP[0].textContent = siteContent['main-content']['features-content']
midContentP[1].textContent = siteContent['main-content']['about-content']
midContentP[2].textContent = siteContent['main-content']['services-content']
midContentP[3].textContent = siteContent['main-content']['product-content']
midContentP[4].textContent = siteContent['main-content']['vision-content']
midContentP[5].textContent = siteContent['contact']['address']
midContentP[6].textContent = siteContent['contact']['phone']
midContentP[7].textContent = siteContent['contact']['email']
midContentP[8].textContent = siteContent['footer']['copyright']

let blog = document.createElement('a')
blog.textContent = "Blog"
blog.style.color = 'green'

let nav = document.querySelector('nav')

let home = document.createElement('a')
home.textContent = "Home"
home.style.color = 'green'

nav.prepend(home)

nav.appendChild(blog)


console.log(home)