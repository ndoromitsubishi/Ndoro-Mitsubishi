function detailMobil(
    nama,
    gambar,
    merk,
    harga,
    deskripsi,
    kredit
){

    document.getElementById("fotoDetail").src = gambar;


    document.getElementById("namaDetail").innerHTML = nama;


    document.getElementById("merkDetail").innerHTML =
    "Merk : " + merk;


    document.getElementById("hargaDetail").innerHTML =
    harga;


    document.getElementById("deskripsiDetail").innerHTML =
    deskripsi;


    document.getElementById("kreditDetail").innerHTML =
    kredit;


    document.getElementById("popup").style.display = "flex";

}





function tutup(){

    document.getElementById("popup").style.display = "none";

}
