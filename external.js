//ini fungsi buat tombol ganti gambar di galeri
function ganti_gambar() {
            const gambar = document.getElementById("foto");
            
            if (gambar.src.includes("https://mastodon.webs3.bark.lgbt/media_attachments/files/110/000/758/062/109/867/original/d03a6f8c2ce2d392.jpeg")) {
                gambar.src = "https://pbs.twimg.com/media/FL0LM3BUYAQnGvU.jpg"; 
            } else {
                gambar.src = "https://mastodon.webs3.bark.lgbt/media_attachments/files/110/000/758/062/109/867/original/d03a6f8c2ce2d392.jpeg"; 
            }
        }


// ini buat tombol play/stop di galeri
const audiomedia = document.getElementById("iniaudionya")

function play_audio() {
    audiomedia.play();
}

function stop_audio(){
    audiomedia.pause();
    audiomedia.currentTime = 0;
}
//-------------------------------------

let arrayMember = JSON.parse(localStorage.getItem("datainputan")) || [];

const formPendaftaran = document.getElementById("formpendaftaran");

if (formPendaftaran) {
    formPendaftaran.addEventListener("submit", function(event) {
        
        event.preventDefault();

        const yakin = confirm("Apakah data sudah benar?");

        if (!yakin){
            return;
        }

        const namaform = document.getElementById("formnama").value;
        const emailform = document.getElementById("formemail").value;
        const minatform = document.getElementById("formminat").value;

        const dataBaru = {
            nama: namaform,
            email: emailform,
            minat: minatform
        };
        arrayMember.push(dataBaru);

        localStorage.setItem("datainputan", JSON.stringify(arrayMember));

        alert(
            "Data Berhasil Disimpan!\n\n" +
            "Nama: " + namaform + "\n" +
            "Email: " + emailform + "\n" +
            "Bidang Minat: " + minatform
        );

        this.reset();
    });
}

function load_tabel() {

    const saved = localStorage.getItem("datainputan");
    const tabeldata = document.getElementById("tabelmember");
    const arrayMember = JSON.parse(saved) || [];

    if (tabeldata) {
        tabeldata.innerHTML = ""; 

        arrayMember.forEach(function(item, index){

            let teksMinat = "";
            switch(item.minat) {
                case "1":
                    teksMinat = "Cyber Security";
                    break;
                case "2":
                    teksMinat = "Database";
                    break;
                case "3":
                    teksMinat = "Programming";
                    break;
                case "4":
                    teksMinat = "Networking";
                    break;
                default:
                    teksMinat = item.minat;
            }

            const row = `
            <tr>
                <td>${index + 1}</td>
                <td>${item.nama}</td>
                <td>${item.email}</td>
                <td>${teksMinat}</td>
            </tr>
            `;
            tabeldata.innerHTML += row;
        });
    }
}

load_tabel();
