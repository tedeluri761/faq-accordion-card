let paragraphcolor = document.getElementById("paragraph");
let arrowimage = document.getElementById("image");
let newparagraph = document.getElementById("newparagraph");
let paragraphcolor2 = document.getElementById("paragraph2");
let arrowimage2 = document.getElementById("image2");
let newparagraph2 = document.getElementById("newparagraph2");
let paragraphcolor3 = document.getElementById("paragraph3");
let arrowimage3 = document.getElementById("image3");
let newparagraph3 = document.getElementById("newparagraph3");
let paragraphcolor4 = document.getElementById("paragraph4");
let arrowimage4 = document.getElementById("image4");
let newparagraph4 = document.getElementById("newparagraph4");
let paragraphcolor5 = document.getElementById("paragraph5");
let arrowimage5 = document.getElementById("image5");
let newparagraph5 = document.getElementById("newparagraph5");
let clickcount = 0;
function changecolor(Pcolor, image) {
  Pcolor.style.color = "black";
  Pcolor.style.fontWeight = 700;
  image.style.transform = "rotate(180deg)";
  image.style.transition = "transform 0.3s ease";
}
function innerhtml(Pcolor, image, newP) {
  if (Pcolor.style.fontWeight === "700") {
    Pcolor.style.color = "";
    Pcolor.style.fontWeight = "";
    image.style.transform = "";
    newP.textContent = "";
  } else {
    changecolor(Pcolor, image);
  }
}

function clickcound(Pcolor, image, newP, textContent) {
  clickcount++;
  if (clickcount % 2 === 1) {
    changecolor(Pcolor, image);
    newP.style.display = "block";
    newP.textContent = textContent;
    newP.style.display = "flex";
    newP.style.justifyContent = "center";
    newP.style.padding = "0 25px 0 25px";
  } else if (clickcount % 2 === 0) {
    innerhtml(Pcolor, image, newP);
    newP.style.display = "none";
  }
}

paragraphcolor.addEventListener("click", function () {
  clickcound(
    paragraphcolor,
    arrowimage,
    newparagraph,
    "It depends on the platform. Generally, there's no strict limit, but it varies by service. Check the specific tool's guidelines."
  );
});

arrowimage.addEventListener("click", function () {
  clickcound(
    paragraphcolor,
    arrowimage,
    newparagraph,
    "It depends on the platform. Generally, there's no strict limit, but it varies by service. Check the specific tool's guidelines."
  );
});

paragraphcolor2.addEventListener("click", function () {
  clickcound(
    paragraphcolor2,
    arrowimage2,
    newparagraph2,
    "maximum file upload size varies by server and application settings. Common limits are 2MB to 100MB. Check server or application configuration for specifics"
  );
});

arrowimage2.addEventListener("click", function () {
  clickcound(
    paragraphcolor2,
    arrowimage2,
    newparagraph2,
    "maximum file upload size varies by server and application settings. Common limits are 2MB to 100MB. Check server or application configuration for specifics"
  );
});

paragraphcolor3.addEventListener("click", function () {
  clickcound(
    paragraphcolor3,
    arrowimage3,
    newparagraph3,
    "Click Forgot Password on the login page and follow the instructions."
  );
});

arrowimage3.addEventListener("click", function () {
  clickcound(
    paragraphcolor3,
    arrowimage3,
    newparagraph3,
    "Click Forgot Password on the login page and follow the instructions."
  );
});

paragraphcolor4.addEventListener("click", function () {
  clickcound(
    paragraphcolor4,
    arrowimage4,
    newparagraph4,
    "Yes, you can usually cancel your subscription through the account settings or billing section of the service."
  );
});

arrowimage4.addEventListener("click", function () {
  clickcound(
    paragraphcolor4,
    arrowimage4,
    newparagraph4,
    "Yes, you can usually cancel your subscription through the account settings or billing section of the service."
  );
});

paragraphcolor5.addEventListener("click", function () {
  clickcound(
    paragraphcolor5,
    arrowimage5,
    newparagraph5,
    "I’m here to help with your questions and provide guidance! For more specific support, you might need to contact the service’s customer support directly."
  );
});

arrowimage5.addEventListener("click", function () {
  clickcound(
    paragraphcolor5,
    arrowimage5,
    newparagraph5,
    "I’m here to help with your questions and provide guidance! For more specific support, you might need to contact the service’s customer support directly."
  );
});
