function towerBuilder(nFloors) {
    // build here

    for (let i = 1; i <= nFloors; i++) {
        let hasil = ""
        for (let j = nFloors - 1; j > i; j--) {
            hasil += " "
        }
        for (let k = 1; k < (i * 2) - 1; k++) {
            hasil += "*"
        }
        console.log(hasil)
    }

}

towerBuilder(3)