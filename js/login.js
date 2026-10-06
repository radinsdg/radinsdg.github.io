function login(){
    let message = document.querySelector("#message")
    let btn = document.querySelector("#login-btn")
    let fName = document.querySelector("#fname").value.trim()
    let lName = document.querySelector("#lname").value.trim()
    let id = document.querySelector("#id").value.replace(" ", "")
    let email = document.querySelector("#email").value.replace(" ", "")
    let password = document.querySelector("#password").value.trim()
    
    if(fName === "" || lName === "" || id === "" || email === "" || password === ""){
        message.innerText = "همه بخش ها را پرکنید"
    } else if(fName.lenght == 1 || lName.lenght == 1){
        message.innerText = "نام یا نام خانوادگی اشتباه"
    } else if(id.lenght < 4){
        message.innerText = "شناسه باید کاراکتر بیشتری داشته باشد"
    } else if(!email.includes("@") || !email.includes(".")){
        message.innerText = "ایمیل اشتباه"
    } else if(password.lenght > 6){
        message.innerText = "رمز باید کاراکتر بیشتر از ۶ داشته باشد"
    } else{
        localStorage.setItem("firstname", fName)
        localStorage.setItem("lastname", lName)
        localStorage.setItem("id", id)
        localStorage.setItem("email", email)
        localStorage.setItem("password", password)
        localStorage.setItem("isLoggedIn", true)
        message.style.color = "yellowgreen"
        message.innerText = "ورود موفق"
        location.href = "../index.html"
    }
}
