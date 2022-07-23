var tabs =Array.from(document.querySelectorAll(".btn"));
var secs =Array.from(document.querySelectorAll(".sec"));
tabs.forEach((item) => { 
item.addEventListener("click",()=>{
        secs.forEach((it)=>{
            it.classList.remove("active");
            tabs[secs.indexOf(it)].classList.remove("active");
        })
        item.classList.add("active"); // console.log(tabs.indexOf(item));
        secs[tabs.indexOf(item)].classList.add("active");
}
)    
});