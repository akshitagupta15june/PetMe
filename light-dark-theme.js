/* Light dark theme : v1 */
/* 
to use in html:
text_1 : text-slate-50 dark:text-gray-900 
text_2 : text-blue-600 dark:text-blue-200 
text_3 : text-gray-900 dark:text-slate-50  
text_4 : text-slate-800 dark:text-gray-400 
bg_1 : bg-slate-50 dark:bg-slate-400 
bg_2 : bg-blue-300 dark:bg-gray-900 
bg_3 : bg-blue-600 dark:bg-blue-200 

*/

class element{
    constructor(cssName, lightCss, darkCss){
        
        this.cssName = cssName;
        this.eles = document.querySelectorAll("."+cssName);
        this.lightCss = lightCss;
        this.darkCss = darkCss;
        
        this.eles.forEach(element => {
            element.classList.add(darkCss);
        });

        this.toggle = function(){
            this.eles.forEach(element => {
                if(element.classList.contains(lightCss)){
                    element.classList.remove(lightCss);
                    element.classList.add(darkCss);
                }
                else{
                    element.classList.remove(darkCss);
                    element.classList.add(lightCss);
                }
            });
            
        }
    }

    
}

let t1 = new element("text_1", "text-slate-50", "text-gray-900");
let t2 = new element("text_2", "text-blue-600", "text-blue-200");
let t3 = new element("text_3", "text-gray-900", "text-slate-50");
let t4 = new element("text_4", "text-slate-800", "text-gray-400");
let b1 = new element("bg_1", "bg-slate-50", "bg-slate-400");
let b2 = new element("bg_2", "bg-blue-300", "bg-gray-900");
let b3 = new element("bg_3", "bg-blue-600", "bg-blue-200");


let toggler = document.querySelector("#theme-toggle");
// let body = document.querySelector("body");
// let heading = document.querySelector("#heading-adopt-me");
toggler.addEventListener("click", ()=>{
    t1.toggle();
    t2.toggle();
    t3.toggle();
    t4.toggle();
    b1.toggle();
    b2.toggle();
    b3.toggle();
    // if(body.classList.contains("dark")){
    //     body.classList.remove("dark");
    //     heading.style.color = "white";
    //     // console.log("removed");

    // }
    // else{
    //     body.classList.add("dark");
    //     heading.style.color = "black";
    //     // console.log("added");
    // } 

})




