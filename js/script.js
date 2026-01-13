document.addEventListener("DOMContentLoaded", function () {

    /* 
        Prvo imamo validaciju forme. Preko id-a uzimamo elemente i dodeljuje ih promenljivim. Ako je bilo sta prazno, vracamo poruku korisniku da popuni
        sva polja, a ako su sva ispravno popunjena, vratice poruku da je poruka uspesno poslata.
    */
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            if (name === "" || email === "" || message === "") {
                alert("Popuni sva polja!");
                return;
            }

            alert("Poruka je uspešno poslata!");
            form.reset();
        });
    }

    /* 
        Zatim imamo funkciju za prikaz i sakrivanje teksta. Klikom na dugme, ako je tekst vec sakriven, pokazacemo ga na ekranu, a ako se vec pokazuje, sakricemo isti.
        Pored toga, tekst na samom dugmetu se menja. Ako kliknemo prikazi vise, tekst ce se prikazati, a dugme ce sada "nuditi opciju" prikazi manje i obrnuto.
    */
    const toggleButtons = document.querySelectorAll(".toggle-btn");

    toggleButtons.forEach(function (button) {
        button.addEventListener("click", function () {

            const projectContent = button.closest(".project-content");
            const extraText = projectContent.querySelector(".extra-text");
            const span = button.querySelector("span");

            if (!extraText || !span) return;

            if (extraText.classList.contains("hidden")) {
                extraText.classList.remove("hidden");
                span.innerText = "Prikaži manje";
            } else {
                extraText.classList.add("hidden");
                span.innerText = "Prikaži više";
            }
        });
    });


    /* 
        Za kraj imamo funkciju koja predstavlja slideshow fotografija. U nizu imamo sve moguce fotografije. Menjanjem njihovog indeksa, birace se koja se fotografija u
        tom trenutku prikazuje na ekranu. Menjanje fotografija se desava na 3 sekunde.
    */
    const heroImage = document.getElementById("heroImage");

    if (heroImage) {
        const images = [
            "images/kancelarija.jpeg",
            "images/kancelarija2.jpeg",
            "images/kancelarija3.jpeg"
        ];

        let index = 0;

        setInterval(function () {
            index = (index + 1) % images.length;
            heroImage.src = images[index];
        }, 3000);
    }

});
