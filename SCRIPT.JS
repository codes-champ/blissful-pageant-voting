const contestants = [
  {
    id: 1,
    name: "Contestant 1",
    nameofContestant: "Light Laraiyetan",
    state: "Lagos state",
    career: "Architecture",
    className: "Primary 4",
    description: "Meet our charming young prince, a confident and joyful boy with a bright smile and a loving heart. He enjoys learning, playing, and making people around him happy. With his courage and cheerful spirit, he is ready to shine.",
    image: "light.png",
    paymentLink: "payment.html"
  },
  {
    id: 2,
    name: "Contestant 2",
    nameofContestant: "Charles Chinaka",
    state: "Kalabari" ,
    career: "Fire fighter",
    className: "Primary 4",
    description: "This handsome young king is full of energy, intelligence, and confidence. He loves to explore, learn new things, and take part in fun activities. His boldness and happy nature make him a wonderful contestant.",
    image: "charles.png",
    paymentLink: "payment.html"
  },
  {
    id: 3,
    name: "Contestant 3",
    nameofContestant: "Abedenego sewa",
    state:"Delta state",
    career: "Law",
    className: "Primary 4",
    description: "A smart and graceful young prince, he carries himself with confidence and kindness. He enjoys being creative, making friends, and showing respect to others. He is ready to make everyone proud.",
    image: "abednego.png",
    paymentLink: "payment.html"
  },
  {
    id: 4,
    name: "Contestant 4",
    nameofContestant: "Destiny Promise",
    state: "Ikwerre",
    career: "pilot",
    className: "Primary 4",
    description: "Here comes a brave and handsome young boy with a heart full of joy. He is playful, friendly, and always ready to learn. His smile, confidence, and good manners make him stand out beautifully.",
    image: "destiny.png",
    paymentLink: "payment.html"
  },
  {
    id: 5,
    name: "Contestant 5",
    nameofContestant: "Chidera Francis",
    state: "Enugu state",
    career: "Engineering",
    className: "Primary 4",
    description: "This young gentleman is calm, bright, and full of promise. He loves school, enjoys playing with friends, and always tries his best. With his confidence and sweet personality, he is ready to shine on stage.",
    image: "chidera.png",
    paymentLink: "payment.html"
  },
  {
    id: 6,
    name: "Contestant 6",
    nameofContestant: " Emerald Michael",
    state: "Abia state",
    career: "Data Analysis",
    className: "Primary 4",
    description: "Meet our amazing young prince, a boy with great confidence and a lovely attitude. He is active, respectful, and full of happiness. His courage and charm make him a strong contestant.",
    image: "emerald.png",
    paymentLink: "payment.html"
  },
  {
    id: 7,
    name: "Contestant 7",
    nameofContestant: "Chidera samson",
    state: "Akwa-Ibom state",
    career: "Medical practioner (Doctor)",
    className: "Primary 4",
    description: "This handsome contestant is a shining star with a joyful spirit. He loves learning, playing, and expressing himself with confidence. His friendly nature and bright smile make him truly special.",
    image: "samson.png",
    paymentLink: "payment.html"
  },
  {
    id: 8,
    name: "Contestant 8",
    nameofContestant: "Winnerman Emmanuel",
    state: "Imo state",
    career: "Poet",
    className: "Primary 4",
    description: "A bold and cheerful young king, he is full of life, kindness, and confidence. He enjoys taking part in activities and making people smile. He is ready to shine and make his supporters proud.",
    image: "winnerman.png",
    paymentLink: "payment.html"
  },
  {
    id: 9,
    name: "Contestant 9",
    nameofContestant: "Chidinma chinedu",
    state: "Fulani",
    career: "Law",
    className: "Primary 4",
    description: "Meet our beautiful young princess, a confident and graceful girl with a sweet smile. She loves learning, dressing beautifully, and expressing herself with joy. Her charm and confidence make her shine brightly.",
    image: "chinedu.png",
    paymentLink: "payment.html"
  },
  {
    id: 10,
    name: "Contestant 10",
    nameofContestant: "Damilola kayode",
    state: "lagos state",
    career: "Pilot",
    className: "Primary 4",
    description: "This lovely young queen is smart, cheerful, and full of beauty. She enjoys making friends, learning new things, and showing kindness to others. Her confidence and bright personality make her a wonderful contestant.",
    image: "dami.png",
    paymentLink: "payment.html"
  },
  {
    id: 11,
    name: "Contestant 11",
    nameofContestant: "Gold chineye",
    state: "Abia state",
    career: "Engineering",
    className: "Primary 4",
    description: "A graceful and adorable princess, she carries herself with elegance and joy. She loves school, enjoys fun activities, and always wears a beautiful smile. She is ready to shine like a true star.",
    image: "gold.png", 
    paymentLink: "payment.html"
  },
  {
    id: 12,
    name: "Contestant 12",
    nameofContestant: " Rucky okpugo",
    state: "Delta state",
    career: "Medical Practioners(Nurse)",
    className: "Primary 4",
    description: "Here comes a beautiful young girl with confidence, kindness, and charm. She is friendly, smart, and full of happiness. Her lovely attitude and graceful appearance make her stand out.",
    image: "ruky.png", 
    paymentLink: "payment.html"
  },
  {
    id: 13,
    name: "Contestant 13",
    nameofContestant: "Bamson miracle",
    state: "kalabari",
    career: "Poet",
    className: "Primary 4",
    description: "This young princess is bright, bold, and full of promise. She loves to learn, play, and express herself beautifully. With her sweet smile and confident spirit, she is ready to win hearts.",
    image: "bamsy.png", 
    paymentLink: "payment.html"
  },
  {
    id: 14,
    name: "Contestant 14",
    nameofContestant: "Nora Vincent",
    state: "Akwa-Ibom state",
    career: "Teaching",
    className: "Primary 4",
    description: "Meet our adorable young queen, a girl with beauty, confidence, and a joyful heart. She enjoys taking part in school activities and making people around her happy. Her elegance and charm make her special.",
    image: "nora.png",
    paymentLink: "payment.html"
  },
  {
    id: 15,
    name: "Contestant 15",
    nameofContestant: "Emmanuella nwankwo",
    state: "Benue state",
    career: "Military (Naval officer)",
    className: "Primary 4",
    description: "This lovely contestant is a shining princess with a kind heart and a beautiful smile. She is smart, friendly, and confident. Her graceful spirit makes her a wonderful choice to support.",
    image: "emmanuella.png",
    paymentLink: "payment.html"
  },
  {
    id: 16,
    name: "Contestant 16",
    nameofContestant: "Jenica ibeh ezeh",
    state: "imo state",
    career: "Music (Music Artist)",
    className: "Primary 4",
    description: "A beautiful and confident young queen, she is full of joy, kindness, and elegance. She loves learning and sharing happiness with others. She is ready to shine brightly and make everyone proud.",
    image: "janica.png",
    paymentLink: "payment.html"
  }
];

const contestantsGrid = document.getElementById("contestantsGrid");
const contestantModal = document.getElementById("contestantModal");
const closeModalBtn = document.getElementById("closeModalBtn");

const modalImage = document.getElementById("modalImage");
const modalName = document.getElementById("modalName");
const modalContestantRealName = document.getElementById("modalContestantRealName");
const modalContestantCareer = document.getElementById("modalContestantCareer");
const modalContestantState = document.getElementById("modalContestantState");
const modalClass = document.getElementById("modalClass");
const modalDescription = document.getElementById("modalDescription");
const modalVoteBtn = document.getElementById("modalVoteBtn");

let selectedContestantId = null;

function displayContestants() {
  contestantsGrid.innerHTML = "";

  contestants.forEach(function(contestant) {
    const contestantCard = document.createElement("div");
    contestantCard.className = "contestant-card";

    contestantCard.innerHTML = `
      <div class="contestant-image-box">
        <img src="${contestant.image}" alt="${contestant.name}" class="contestant-image">
      </div>

      <div class="contestant-info">
        <h3>${contestant.name}</h3>
         <p>${contestant.nameofContestant}</p>
        <p>${contestant.className}</p>

        <button class="read-more-btn" onclick="readMore(${contestant.id})">
          Read More
        </button>
      </div>
    `;

    contestantsGrid.appendChild(contestantCard);
  });
}

function findContestantById(contestantId) {
  return contestants.find(function(person) {
    return person.id === contestantId;
  });
}

function readMore(contestantId) {
  const contestant = findContestantById(contestantId);

  if (!contestant) {
    alert("Contestant not found.");
    return;
  }

  selectedContestantId = contestant.id;

  modalImage.src = contestant.image;
  modalName.textContent = contestant.name;
  modalContestantRealName.textContent = "Name:" + contestant.nameofContestant;
  modalContestantState.textContent = "state:" + contestant.state;
  modalContestantCareer.textContent = "Career:" + contestant.career;
  modalClass.textContent = contestant.className;
  modalDescription.textContent = contestant.description;

  contestantModal.style.display = "flex";
}

function closeModal() {
  contestantModal.style.display = "none";
}

function voteForContestant(contestantId) {
  const contestant = findContestantById(contestantId);

  if (!contestant) {
    alert("Contestant not found.");
    return;
  }

  localStorage.setItem("selectedContestant", JSON.stringify(contestant));

  window.location.href = contestant.paymentLink;
}

closeModalBtn.addEventListener("click", closeModal);

contestantModal.addEventListener("click", function(event) {
  if (event.target === contestantModal) {
    closeModal();
  }
});

modalVoteBtn.addEventListener("click", function() {
  if (selectedContestantId === null) {
    alert("No contestant selected.");
    return;
  }

  voteForContestant(selectedContestantId);
});

displayContestants();