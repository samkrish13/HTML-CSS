function generateOTP() {
    let otp = Math.floor(100000 + Math.random() * 900000);
    document.getElementById("otp").innerText = otp;
}
console.log(generateOTP());

