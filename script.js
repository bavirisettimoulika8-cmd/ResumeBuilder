function generateResume() {

    document.getElementById("rname").innerText =
        document.getElementById("name").value;

    document.getElementById("remail").innerText =
        document.getElementById("email").value;

    document.getElementById("rphone").innerText =
        document.getElementById("phone").value;

    document.getElementById("rskills").innerText =
        document.getElementById("skills").value;

    document.getElementById("reducation").innerText =
        document.getElementById("education").value;
}