// Campus Book Exchange Website

document.addEventListener("DOMContentLoaded", function () {

  // ==================================
  // 1. HOME PAGE
  // ==================================

  const mainHeading = document.getElementById("mainHeading");
  const changeHeadingBtn = document.getElementById("changeHeadingBtn");
  const toggleFeaturedBtn = document.getElementById("toggleFeaturedBtn");
  const featuredBooks = document.getElementById("featuredBooks");
  const homeMessage = document.getElementById("homeMessage");

  // Change the main heading
  if (changeHeadingBtn && mainHeading) {
    changeHeadingBtn.addEventListener("click", function () {
      mainHeading.textContent =
        "Share a book. Discover a new world.";

      homeMessage.textContent =
        "Welcome to your campus book community!";
    });
  }

  // Show or hide featured books
  if (toggleFeaturedBtn && featuredBooks) {
    toggleFeaturedBtn.addEventListener("click", function () {

      const isHidden = featuredBooks.classList.toggle("is-hidden");

      featuredBooks.style.display = isHidden ? "none" : "grid";

      toggleFeaturedBtn.textContent = isHidden
        ? "Show featured books"
        : "Hide featured books";

      homeMessage.textContent = isHidden
        ? "Featured books are hidden."
        : "Featured books are visible.";
    });
  }

  // Change a featured book card's colour
  document.querySelectorAll(".change-card-btn").forEach(function (button) {

    button.addEventListener("click", function () {

      const card = button.closest(".book-card");

      if (!card) return;

      card.classList.toggle("highlight-card");

      homeMessage.textContent =
        card.classList.contains("highlight-card")
          ? "The featured book card colour has changed."
          : "The featured book card colour is back to normal.";
    });
  });


  // ==================================
  // 2. BROWSE BOOKS PAGE
  // ==================================

  const browseMessage = document.getElementById("browseMessage");

  // Mark a book as requested
  document.querySelectorAll(".request-btn").forEach(function (button) {

    button.addEventListener("click", function () {

      button.textContent = "Request Sent";

      button.classList.add("requested");

      button.disabled = true;

      const card = button.closest(".book-card");

      const title = card.querySelector("h3").textContent;

      browseMessage.textContent =
        'Your request for "' + title + '" has been noted.';
    });
  });


  // Display the entered book title
  const showBookBtn = document.getElementById("showBookBtn");
  const bookTitleSearch = document.getElementById("bookTitleSearch");
  const shownBook = document.getElementById("shownBook");
  const searchMessage = document.getElementById("searchMessage");

  if (showBookBtn && bookTitleSearch && shownBook) {

    showBookBtn.addEventListener("click", function () {

      const title = bookTitleSearch.value.trim();

      if (title === "") {
        shownBook.hidden = true;

        searchMessage.textContent =
          "Please enter a book title first.";

        return;
      }

      shownBook.textContent = "Book title entered: " + title;

      shownBook.hidden = false;

      searchMessage.textContent =
        "Your book title was submitted successfully.";
    });
  }


  // ==================================
  // 3. LIST A BOOK PAGE
  // ==================================

  const bookForm = document.getElementById("bookForm");
  const formMessage = document.getElementById("formMessage");
  const formHeading = document.getElementById("formHeading");
  const changeFontBtn = document.getElementById("changeFontBtn");
  const toggleFormBtn = document.getElementById("toggleFormBtn");


  // Change the form heading's font size
  if (changeFontBtn && formHeading) {

    changeFontBtn.addEventListener("click", function () {

      const isLarge = formHeading.classList.toggle("large-heading");

      formHeading.style.fontSize = isLarge
        ? "1.9rem"
        : "1.4rem";

      changeFontBtn.textContent = isLarge
        ? "Reset heading size"
        : "Change heading size";
    });
  }


  // Show or hide the form
  if (toggleFormBtn && bookForm) {

    toggleFormBtn.addEventListener("click", function () {

      const isHidden = bookForm.classList.toggle("form-hidden");

      bookForm.style.display = isHidden ? "none" : "grid";

      toggleFormBtn.textContent = isHidden
        ? "Show form"
        : "Hide form";

      toggleFormBtn.setAttribute(
        "aria-expanded",
        String(!isHidden)
      );

      formMessage.textContent = isHidden
        ? "The form is hidden."
        : "The form is visible.";
    });
  }


  // Validate and submit the book listing form
  if (bookForm && formMessage) {

    bookForm.addEventListener("submit", function (event) {

      // Prevent the page from reloading
      event.preventDefault();

      // Read values from the form
      const studentName =
        document.getElementById("studentName").value.trim();

      const bookTitle =
        document.getElementById("newBookTitle").value.trim();

      const author =
        document.getElementById("bookAuthor").value.trim();

      const category =
        document.getElementById("bookCategory").value.trim();

      const condition =
        document.getElementById("bookCondition").value;


      // Check whether any required field is empty
      if (
        !studentName ||
        !bookTitle ||
        !author ||
        !category ||
        !condition
      ) {
        formMessage.textContent =
          "Please fill in all required fields before submitting.";

        formMessage.className = "notice error-message";

        return;
      }


      // Display a personalised confirmation
      formMessage.className = "notice";

      formMessage.textContent =
        "Thank you, " + studentName +
        "! Your book \"" + bookTitle +
        "\" has been listed in this demo.";

      // Clear the form after successful submission
      bookForm.reset();
    });
  }

});