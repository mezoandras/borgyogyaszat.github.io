const reviewSets = {
  hu: [
    ["G", "Georgina", "2 hete", "Nagyon jó szívvel ajánlom a Doktornőt! Kedves, türelmes és nagyon alapos, minden kérdésemre készségesen válaszolt. Szakmailag is maximálisan elégedett voltam vele, örülök, hogy rátaláltam."],
    ["K", "Klára", "5 hónapja", "Ma jártam a doktornőnél, csak a legjobbakat tudom mondani róla, mindenkinek csak ajánlani tudom, aki bőrgyógyászt keres Szegeden!"],
    ["Z", "Zita", "egy éve", "A Doktornő igazi nagybetűs ORVOS. Nagyon aranyos, türelmes, alapos. Nagyon örülök, hogy rátaláltam. Sokkal több ilyen orvos kellene az egészségügybe."],
    ["R", "Rita", "11 hónapja", "Nagyon kedves, segítőkész, türelmes, nagy szaktudású orvos. Mindig elérhető, ha éppen nem érem el, akkor visszahív. Mindenkinek szívből ajánlom!"],
    ["P", "Petra", "egy éve", "Soha nem találkoztam még ilyen alapos, türelmes és empatikus doktornővel. Szakmailag nagyon alapos, teljes odafigyeléssel foglalkozik betegeivel."],
    ["E", "Erika", "egy éve", "Most voltam először a doktornőnél. Végtelenül kedves, aranyos, segítőkész bőrgyógyász, türelmes, nagy szaktudású orvos. Csak ajánlani tudom mindenkinek."],
    ["N", "Nóra", "6 éve", "A legkedvesebb doktornő, akivel valaha találkoztam! Alapos, maximálisan figyel a betegre, emberséges! Csakis ajánlani tudom!"],
    ["S", "Szilvia", "2 éve", "Fantasztikus a doktornő hozzáállása, empátiája és szakértelme is. Az egyik legjobb orvos, akivel valaha találkoztam. Profi csapat!"],
    ["L", "Liza", "egy éve", "Évek óta a doktornőhöz járok. Végtelenül aranyos, kedves, maximálisan segítőkész, és bármikor problémám volt, mindig teljes bizalommal fordultam hozzá!"],
    ["A", "Anita", "5 éve", "Mindenkinek ajánlom a Doktornőt! Nagyon kedves, emberséges, lehet bátran kérdezni, szakmailag felkészült, alapos. Az egész család hozzá jár."],
    ["E", "Edit", "5 éve", "Rendkívül kedves és figyelmes a doktornő. Nagyon segítőkész, így öröm volt nála lenni. Köszönöm szépen az alapos vizsgálatot!"],
    ["Y", "Yousef", "4 éve", "The doctor is so nice and has a great experience, I would totally recommend her."]
  ],
  en: [
    ["G", "Georgina", "2 weeks ago", "I wholeheartedly recommend the Doctor! She is kind, patient and very thorough, and answered all my questions willingly. I was completely satisfied professionally too, and I am glad I found her."],
    ["K", "Klára", "5 months ago", "I visited the Doctor today and can only say the very best about her. I recommend her to everyone looking for a dermatologist in Szeged!"],
    ["Z", "Zita", "a year ago", "The Doctor is a true professional in every sense. She is very kind, patient and thorough. I am so glad I found her. There should be many more doctors like her."],
    ["R", "Rita", "11 months ago", "A very kind, helpful and patient doctor with great expertise. She is always available, and if I cannot reach her, she calls me back. I wholeheartedly recommend her!"],
    ["P", "Petra", "a year ago", "I have never met such a thorough, patient and empathetic doctor. She is highly professional and gives every patient her full attention."],
    ["E", "Erika", "a year ago", "This was my first visit. She is an incredibly kind, helpful and patient dermatologist with great expertise. I can only recommend Dr. Krizsa Judit and her team."],
    ["N", "Nóra", "6 years ago", "The kindest doctor I have ever met! Thorough, attentive and humane. I can only recommend her!"],
    ["S", "Szilvia", "2 years ago", "The Doctor's attitude, empathy and expertise are all fantastic. One of the best doctors I have ever met. A professional team!"],
    ["L", "Liza", "a year ago", "I have been visiting the Doctor for years. She is incredibly kind and helpful, and I have always turned to her with complete confidence."],
    ["A", "Anita", "5 years ago", "I recommend the Doctor to everyone! She is kind, humane, highly qualified and thorough. Our whole family visits her."],
    ["E", "Edit", "5 years ago", "The Doctor is exceptionally kind and attentive. It was a pleasure to visit her. Thank you for the thorough examination!"],
    ["Y", "Yousef", "4 years ago", "The doctor is so nice and has a great experience, I would totally recommend her."]
  ],
  sr: [
    ["G", "Georgina", "pre 2 nedelje", "Od srca preporučujem doktorku! Ljubazna je, strpljiva i veoma temeljna, a na svako pitanje spremno odgovara. Veoma sam zadovoljna stručnim pristupom i drago mi je što sam je pronašla."],
    ["K", "Klára", "pre 5 meseci", "Danas sam bila kod doktorke i mogu da kažem samo sve najbolje. Svima je preporučujem, posebno onima koji traže dermatologa u Segedinu!"],
    ["Z", "Zita", "pre godinu dana", "Doktorka je pravi lekar, u najboljem smislu te reči. Veoma je ljubazna, strpljiva i temeljna. Drago mi je što sam je pronašla."],
    ["R", "Rita", "pre 11 meseci", "Veoma ljubazna, susretljiva i strpljiva doktorka, sa velikim stručnim znanjem. Uvek je dostupna, a ako ne može da se javi, pozove kasnije. Od srca je preporučujem!"],
    ["P", "Petra", "pre godinu dana", "Nikada nisam srela tako temeljnu, strpljivu i empatičnu doktorku. Veoma je stručna i svakom pacijentu posvećuje punu pažnju."],
    ["E", "Erika", "pre godinu dana", "Prvi put sam bila kod doktorke. Beskrajno je ljubazna, susretljiva i strpljiva, sa velikim stručnim znanjem. Svima je mogu preporučiti."],
    ["N", "Nóra", "pre 6 godina", "Najljubaznija doktorka koju sam ikada upoznala! Temeljna je, pažljiva i ljudska. Svima je preporučujem!"],
    ["S", "Szilvia", "pre 2 godine", "Odnos doktorke prema pacijentima, njena empatija i stručnost su fantastični. Jedna je od najboljih lekara koje sam upoznala. Profesionalan tim!"],
    ["L", "Liza", "pre godinu dana", "Godinama odlazim kod doktorke. Beskrajno je draga i susretljiva i uvek sam joj se obraćala sa potpunim poverenjem."],
    ["A", "Anita", "pre 5 godina", "Svima preporučujem doktorku! Veoma je ljubazna, stručna i temeljna. Cela naša porodica dolazi kod nje."],
    ["E", "Edit", "pre 5 godina", "Doktorka je izuzetno ljubazna i pažljiva. Bilo je zadovoljstvo doći kod nje. Hvala na detaljnom pregledu!"],
    ["Y", "Yousef", "pre 4 godine", "The doctor is so nice and has a great experience, I would totally recommend her."]
  ],
  ro: [
    ["G", "Georgina", "acum 2 săptămâni", "O recomand cu toată încrederea pe doamna doctor! Este amabilă, răbdătoare și foarte atentă, răspunzând cu răbdare la toate întrebările mele. Sunt pe deplin mulțumită și mă bucur că am găsit-o."],
    ["K", "Klára", "acum 5 luni", "Am fost astăzi la doamna doctor și pot spune numai lucruri bune despre dânsa. O recomand tuturor celor care caută un dermatolog în Szeged!"],
    ["Z", "Zita", "acum un an", "Doamna doctor este un adevărat profesionist. Este foarte amabilă, răbdătoare și atentă. Mă bucur mult că am găsit-o."],
    ["R", "Rita", "acum 11 luni", "Un medic foarte amabil, răbdător și bine pregătit. Este mereu disponibilă, iar dacă nu poate răspunde, revine cu un telefon. O recomand din toată inima!"],
    ["P", "Petra", "acum un an", "Nu am întâlnit niciodată un medic atât de atent, răbdător și empatic. Este foarte bine pregătită și acordă fiecărui pacient toată atenția."],
    ["E", "Erika", "acum un an", "A fost prima mea vizită. Doamna doctor este extrem de amabilă, răbdătoare și bine pregătită. O recomand tuturor, împreună cu echipa sa."],
    ["N", "Nóra", "acum 6 ani", "Cea mai amabilă doctoriță pe care am întâlnit-o vreodată! Este atentă, grijulie și omenoasă. O recomand cu drag!"],
    ["S", "Szilvia", "acum 2 ani", "Atitudinea, empatia și profesionalismul doamnei doctor sunt extraordinare. Este unul dintre cei mai buni medici pe care i-am întâlnit. O echipă profesionistă!"],
    ["L", "Liza", "acum un an", "Merg la doamna doctor de ani de zile. Este extrem de drăguță și amabilă, iar de fiecare dată m-am adresat dânsei cu deplină încredere."],
    ["A", "Anita", "acum 5 ani", "O recomand tuturor pe doamna doctor! Este amabilă, empatică, bine pregătită și atentă. Întreaga noastră familie merge la dânsa."],
    ["E", "Edit", "acum 5 ani", "Doamna doctor este deosebit de amabilă și atentă. A fost o plăcere să merg la dânsa. Vă mulțumesc pentru consultația amănunțită!"],
    ["Y", "Yousef", "acum 4 ani", "The doctor is so nice and has a great experience, I would totally recommend her."]
  ]
};

const locale = document.body.dataset.reviewsLocale || "hu";
const reviews = reviewSets[locale] || reviewSets.hu;
const starLabel = {
  hu: "5 csillag",
  en: "5 stars",
  sr: "5 zvezdica",
  ro: "5 stele"
}[locale] || "5 stars";

const createReviewGroup = (isDuplicate = false) => {
  const group = document.createElement("div");
  group.className = "reviews-group";
  if (isDuplicate) group.setAttribute("aria-hidden", "true");

  reviews.forEach(([initial, author, date, text]) => {
    const card = document.createElement("article");
    card.className = "review-card";
    card.innerHTML = `
      <div class="review-header">
        <div class="review-avatar" aria-hidden="true"></div>
        <div>
          <div class="review-author"></div>
          <div class="review-date"></div>
        </div>
      </div>
      <div class="review-stars" aria-label="${starLabel}">★★★★★</div>
      <p class="review-text"></p>`;
    card.querySelector(".review-avatar").textContent = initial;
    card.querySelector(".review-author").textContent = author;
    card.querySelector(".review-date").textContent = date;
    card.querySelector(".review-text").textContent = text;
    group.append(card);
  });
  return group;
};

const reviewsTrack = document.getElementById("reviews-track");
if (reviewsTrack && !reviewsTrack.children.length) {
  reviewsTrack.append(createReviewGroup(), createReviewGroup(true));
}

const reviewsMarquee = document.querySelector(".reviews-marquee");
if (reviewsMarquee && reviewsTrack) {
  let isDragging = false;
  let startX = 0;
  let startTranslate = 0;
  let translateX = 0;

  const readTranslateX = () => {
    const transform = getComputedStyle(reviewsTrack).transform;
    if (transform === "none") return 0;
    const values = transform.match(/matrix(?:3d)?\(([^)]+)\)/)?.[1].split(",");
    return values?.length === 16 ? Number(values[12]) : Number(values?.[4] || 0);
  };

  const wrapTranslate = (value) => {
    const groupWidth = reviewsTrack.firstElementChild?.getBoundingClientRect().width;
    if (!groupWidth) return value;
    while (value > 0) value -= groupWidth;
    while (value <= -groupWidth) value += groupWidth;
    return value;
  };

  const setTranslate = (value) => {
    translateX = wrapTranslate(value);
    reviewsTrack.style.transform = `translate3d(${translateX}px, 0, 0)`;
  };

  reviewsMarquee.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    isDragging = true;
    startX = event.clientX;
    startTranslate = readTranslateX();
    reviewsTrack.style.animationPlayState = "paused";
    reviewsMarquee.classList.add("is-dragging");
    reviewsMarquee.setPointerCapture(event.pointerId);
  });

  reviewsMarquee.addEventListener("pointermove", (event) => {
    if (!isDragging) return;
    setTranslate(startTranslate + event.clientX - startX);
  });

  const stopDragging = (event) => {
    if (!isDragging) return;
    isDragging = false;
    reviewsMarquee.classList.remove("is-dragging");
    if (reviewsMarquee.hasPointerCapture(event.pointerId)) {
      reviewsMarquee.releasePointerCapture(event.pointerId);
    }
  };

  reviewsMarquee.addEventListener("pointerup", stopDragging);
  reviewsMarquee.addEventListener("pointercancel", stopDragging);
}
