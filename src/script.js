const carousel = document.getElementById("carousel");
      const dots = document.querySelectorAll(".dot");

      dots.forEach((dot) => {
        dot.addEventListener("click", () => {
          const slideIndex = dot.getAttribute("data-slide");
          carousel.style.transform = `translateX(-${slideIndex * 100}%)`;

          // Update active dot styling
          dots.forEach((d) => d.classList.remove("bg-gray-900"));
          dot.classList.add("bg-gray-900");
        });
      });