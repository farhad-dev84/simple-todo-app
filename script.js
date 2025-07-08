// html گرفتن المنت از
const passwordInput = document.getElementById("password") ;

// این همون اینپوت هست که رمز رو توش مینویسیم
const toggleButton = document.getElementById("togglePassword") ;

// این همون دکمه ای است که میزنیم روش که رمز دیده شه یا نه
// اضافه کردن رویداد کلیک به دکمه
toggleButton.addEventListener("click" , function() {
  // بررسی میکنیم اگه نوغ اینپوت پسورد باشه رمز مخفی باشه
  if(passwordInput.type === "password") {
    // تغییرش میدیم به تکست تا کاربر رمز را ببینه
    passwordInput.type = "text" ;
    // متن دکمه را هم عوض میکنیم
    passwordInput.textContent = "مخفی کن"
    // دوباره برمیگردانیم به پسوورد تا مخفی شه
  }else {
    passwordInput.type = "password" ;
    // متن دکمه را به حالت اول برمیگردانیم
    toggleButton.textContent = "نمایش"
  }
});