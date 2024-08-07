const button = document.querySelector(".form__end-button")
const img = document.querySelector(".form__end-button img")
const input_1 = document.querySelector("#input__1")
const input_2 = document.querySelector("#input__2")


input_1.addEventListener("input", function check1(params) {
    if(input_1.value.length  > 4){


        input_2.addEventListener("input", function check2(params) {
            if (input_2.value.length > 6) {
                button.style  = "cursor: pointer"
                button.style.background =" #fc6464"
                img.style = "cursor: pointer"
                img.style.opacity = "1"
                button.style.border = "2px solid black"
                button.href = "./end.html"
            }
        })


        
    }
})


button.addEventListener('mouseover', function Click(e) {
    e.preventDefault();
    localStorage.setItem(input_1.value, input_2.value)
})


