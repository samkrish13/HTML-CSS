function generateOTP() {
    let otp = Math.floor(1000 + Math.random() * 9000);
    document.getElementById("otp").innerText = otp;
}
console.log(generateOTP());

