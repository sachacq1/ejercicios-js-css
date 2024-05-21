const $respuesta = document.querySelector("p");
const $form = document.getElementById("form-score");

$form.addEventListener("submit", (e) => {
    e.preventDefault();

    const $name = document.getElementById("name").value;
    const $lastname = document.getElementById("lastname").value;
    const $score = document.getElementById("score").value;


    if ($score >= 90 && $score <= 100) {
        $respuesta.innerHTML = `${$name} ${$lastname}  tu calificacion es <strong> A </strong>`
        const $strong = $respuesta.querySelector("strong");
        $strong.style.color = "green"


    } else if ($score >= 80 && $score <= 89) {
        $respuesta.innerHTML = `${$name} ${$lastname}  tu calificacion es <strong> B </strong>`
        const $strong = $respuesta.querySelector("strong");
        $strong.style.color = "green"


    } else if ($score >= 70 && $score <= 79) {
        $respuesta.innerHTML = `${$name} ${$lastname}  tu calificacion es <strong> C</strong>`
        const $strong = $respuesta.querySelector("strong");
        $strong.style.color = "yellow"


    } else if ($score >= 60 && $score <= 69) {
        $respuesta.innerHTML = `${$name} ${$lastname}  tu calificacion es <strong>D</strong>`
        const $strong = $respuesta.querySelector("strong");
        $strong.style.color = "yellow"


    } else if ($score >= 50 && $score <= 59) {
        $respuesta.innerHTML = `${$name} ${$lastname}  tu calificacion es <strong>E</strong>`
        const $strong = $respuesta.querySelector("strong");
        $strong.style.color = "brown"


    } else if ($score >= 0 && $score <= 49) {
        $respuesta.innerHTML = `${$name} ${$lastname}  tu calificacion es <strong>F</strong>`
        const $strong = $respuesta.querySelector("strong");
        $strong.style.color = "red"


    }

    $form.reset();
})

