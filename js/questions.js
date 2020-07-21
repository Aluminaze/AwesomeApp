const questions = document.querySelector(".questions__items");

questions.addEventListener("click", function (event) {
  let question = event.target.closest(".questions__item");
  if (question) {
    let questionId = question.dataset.toggleId;

    if (questionId) {
      let answer = document.querySelector(`#${questionId}`);
      let toggleIcon = question.querySelector(".questions__toggle-icon");
      answer.classList.toggle("open");
      toggleIcon.classList.toggle("open");
    }
  }
});
