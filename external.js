//ini fungsi buat tombol ganti gambar di galeri
function ganti_gambar() {
            const gambar = document.getElementById("foto");
            
            if (gambar.src.includes("https://mastodon.webs3.bark.lgbt/media_attachments/files/110/000/758/062/109/867/original/d03a6f8c2ce2d392.jpeg")) {
                gambar.src = "https://pbs.twimg.com/media/FL0LM3BUYAQnGvU.jpg"; 
            } else {
                gambar.src = "https://mastodon.webs3.bark.lgbt/media_attachments/files/110/000/758/062/109/867/original/d03a6f8c2ce2d392.jpeg"; 
            }
        }


const audiomedia = document.getElementById("iniaudionya")

function play_audio() {
    audiomedia.play();
}

function stop_audio(){
    audiomedia.pause();
    audiomedia.currentTime = 0;
}