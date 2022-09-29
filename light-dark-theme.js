/* Light dark theme : v1 */
/* 
to use in html:
text-slate-50 dark:text-gray-900 
text-blue-600 dark:text-blue-200 
text-gray-900 dark:text-slate-50  
text-slate-800 dark:text-gray-400 
bg-slate-50 dark:bg-slate-400 
bg-blue-300 dark:bg-gray-900 
bg-blue-600 dark:bg-blue-200 

*/

let toggler = document.querySelector("#theme-toggle");
let body = document.querySelector("body");
toggler.addEventListener("click", ()=>{
    if(body.classList.contains("dark")){
        body.classList.remove("dark");
        // console.log("removed");
    }
    else{
        body.classList.add("dark");
        // console.log("added");
    }  
})




