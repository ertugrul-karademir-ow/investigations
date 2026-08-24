document.querySelectorAll("[data-quiz]").forEach((quiz) => {
  quiz.querySelector("button").addEventListener("click", () => {
    const selected = quiz.querySelector("input:checked");
    const feedback = quiz.querySelector(".feedback");
    if (!selected) {
      feedback.textContent = "Choose an answer first.";
      return;
    }
    feedback.textContent = selected.dataset.correct === "true"
      ? quiz.dataset.correctFeedback
      : quiz.dataset.wrongFeedback;
  });
});
