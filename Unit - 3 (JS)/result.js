function calculateResult() {
    let m1 = Number(document.getElementById("s1").value);
    let m2 = Number(document.getElementById("s2").value);
    let m3 = Number(document.getElementById("s3").value);

    // Check that no subject has marks greater than 100 or less than 0
    if (m1 > 100 || m2 > 100 || m3 > 100 || m1 < 0 || m2 < 0 || m3 < 0) {
        document.getElementById("output").innerHTML = "Error: Marks for each subject must be between 0 and 100.";
        return;
    }

    let total = m1 + m2 + m3;
    let percentage = total / 3;

    // Ensure percentage never goes above 100
    if (percentage > 100) {
        percentage = 100;
    }

    let result = "";

    if (m1 >= 40 && m2 >= 40 && m3 >= 40) {
        result = "Pass";
    } else {
        result = "Fail";
    }

    document.getElementById("output").innerHTML = 
        "Total Marks: " + total + 
        "<br>Percentage: " + percentage.toFixed(2) + "%" + 
        "<br>Result: " + result;
}
