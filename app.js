const btns = document.querySelectorAll(".btn-box > button");
const values = document.querySelector(".value");

const operators = ["+", "-", "*", "/"];

let numberGroup = [];

let inputs = [];

btns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
        e.preventDefault();

        if (e.target.value !== "delete" && e.target.value !== "=") {
            if (operators.includes(e.target.value)) {
                if (
                    values.textContent.length >= 1 &&
                    !operators.includes(
                        values.textContent[values.textContent.length - 2]
                    )
                ) {
                    values.textContent += ` ${e.target.value} `;
                }
            } else {
                if (e.target.value === ".") {
                    const tempo = values.textContent.split("");

                    if (tempo.find((item) => operators.includes(item))) {
                        const indices = [];

                        tempo.map((item, index) => {
                            operators.includes(item) && indices.push(index);
                        });

                        const lastNums = tempo.slice(
                            indices[indices.length - 1]
                        );

                        if (!lastNums.includes(".")) {
                            values.textContent += ".";
                        }
                    } else {
                        if (!tempo.includes("."))
                            values.textContent += e.target.value;
                    }
                } else {
                    if (values.textContent === "0") {
                        values.textContent = e.target.value;
                    } else {
                        values.textContent += e.target.value;
                    }
                }
            }
        } else if (e.target.value === "delete") {
            if (values.textContent.length > 0) {
                let tempo = values.textContent.split("");

                if (tempo[tempo.length - 1] === " ") {
                    tempo.pop();
                    tempo.pop();
                    tempo.pop();

                    values.textContent = tempo.join("");
                } else {
                    tempo.pop();

                    values.textContent = tempo.join("");
                }
            }
        } else if (e.target.value === "=") {
            const tempo = values.textContent.split("");

            if (tempo.find((item) => operators.includes(item))) {
                const indices = [];

                tempo.map((item, index) => {
                    operators.includes(item) && indices.push(index);
                });

                const lastNums = tempo.slice(indices[indices.length - 1]);

                if (lastNums[1] === ".") {
                    if (lastNums[2]) {
                        operation(tempo);
                    }
                } else {
                    operation(tempo);
                }
            }
        }
    });
});

function operation(arr) {
    // * please find another solutions for this calculations because using eval() function cause an enormous security risks
    values.textContent = eval(arr.join("").split(" ").join(""));
}

const labels = document.querySelectorAll(".labels");

labels.forEach((l) => {
    l.addEventListener("click", () => {
        if (l.getAttribute("for") === "radio1") {
            document.body.className = "";
            l.checked = true;
            document.body.classList.add("theme-one");
        }
        if (l.getAttribute("for") === "radio2") {
            document.body.className = "";
            l.checked = true;
            document.body.classList.add("theme-two");
        }
        if (l.getAttribute("for") === "radio3") {
            document.body.className = "";
            l.checked = true;
            document.body.classList.add("theme-three");
        }
    });
});
