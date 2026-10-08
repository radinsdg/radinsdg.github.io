const fullNameInput = document.querySelector(".fullname");
const phoneInput = document.querySelector(".phonenumber");
const messageInput = document.querySelector("#message");
const sendBtn = document.querySelector(".send-comment-btn");
const errMessage = document.querySelector(".err-message");

function showError(text) {
    errMessage.textContent = text;
    errMessage.style.color = "red";
    errMessage.style.display = "block";
    alert(text);
    setTimeout(() => {
        errMessage.style.display = "none";
    }, 3000);
}

function sendComment() {
    const fullName = fullNameInput.value.trim();
    const phone = phoneInput.value.trim();
    const message = messageInput.value.trim();

    if (!fullName) {
        showError("لطفا نام و نام خانوادگی خود را وارد کنید");
        return;
    }

    if (fullName.length < 3) {
        showError("نام و نام خانوادگی باید حداقل ۳ حرف باشد");
        return;
    }

    if (!phone) {
        showError("لطفا شماره تلفن خود را وارد کنید");
        return;
    }

    if (!/^09\d{9}$/.test(phone)) {
        showError("شماره تلفن باید ۱۱ رقم و با ۰۹ شروع شود");
        return;
    }

    if (!message) {
        showError("لطفا نظر خود را وارد کنید");
        return;
    }

    if (message.length < 5) {
        showError("متن نظر باید حداقل ۵ حرف باشد");
        return;
    }

    alert("پیام شما با موفقیت ثبت شد");
    fullNameInput.value = "";
    phoneInput.value = "";
    messageInput.value = "";
    location.reload();
}

sendBtn.addEventListener("click", sendComment);
