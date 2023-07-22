const realData = [
    {
        title: 'Booki',
        link: 'https://github.com/tmxdrls/Site',
        picture:'./images/real/siteWeb_booki.webp',
        alt:'Photo du site codé en HTML et CSS : Booki',
        year:'2022',
        content:`Conception d'une application web responsible avec HTML & CSS pour une agence de voyage<br>
        Elaboration d'une structure pour la page web ainsi que sa mise en forme<br>`,
            tags: [
			"HTML",
			"CSS"
		]
      },
      {
        title: 'Sophie Bluel',
        link: 'https://github.com/tmxdrls/Portfolio-architecte-sophie-bluel',
        picture:'./images/real/siteWeb_sophie.webp',
        alt:'Photo du site codé en JavaScript : Sophie Bluel',
        year:'2023',
        content:`Se servir d'une API , de requêtes et de code JavaScript pour gérer le frontend d'un portfolio d'architecte<br>
        Intégration dynamique des travaux de l'architecte<br>
        Logique de connexion d'utilisateur<br>
        Ajout d'événements et de fonctionnalitées<br>`,
            tags: [
			"JavaScript",
			"Swagger API",
            "Node.Js (NPM)"    
		]
      },
      {
        title: 'Menu Maker',
        link: 'https://www.figma.com/file/Q6NEUPqwz1U3HFaCaVoF7N/Maquette-desktop---Menu-Maker-by-Qwenta?type=design&node-id=0-6&mode=design&t=9hiBCyEkjxTumdui-0',
        picture:'./images/real/siteWeb_menu.webp',
        alt:'Photo du projet planifié : Menu Maker',
        year:'2023',
        content:`Plannification de l'élaboration d'un "menu-maker".<br>
        Mise en place d'une veille informationnelle concernant le sujet<br>
        Rédaction des spécications techniques du projet<br>
        Conception de la gestion `,
            tags: [
			"Trello",
			"Feedly",
            "Google-Slide"
		]
      },
      {
          title: 'Nina Carducci',
          link: 'https://tmxdrls.github.io/nina-carducci.github.io/',
          picture:'./images/real/siteWeb_nina.webp',
          alt:'Photo du projet SEO : Nina Carudcci',
          year:'2023',
          content:`Optimisation d'un site de photographe , tant bien sur le performances que le SEO.<br>
          Réalisations d'audit, écoute des besoins.<br>
          Correction de bugs et optimisation du code de la page web.<br>
          Mise en place de référencement local et réseaux sociaux`,
            tags: [
			"Devs Tools",
			"GoogleLighthouse",
            "Wave",
            "RichSnippet"
		]
        },
        {
          title: 'Kasa',
          link: 'https://github.com/tmxdrls/Kasa',
          picture:'./images/real/siteWeb_kasa.webp',
          alt:'Photo du site codé en React.js : Kasa',
          year:'2023',
          content:`Conception d'une Single-Page codée exclusivement en React pour une agence de location d'appartement`,
            tags: [
			"React.js"
		]
        },
        {
          title: 'Mes Vieux Grimoires',
          link: 'https://github.com/tmxdrls/P7-Dev-Web-livres',
          picture:'./images/real/siteWeb_grimoire.webp',
          alt:'Photo du projet backend mes Vieux Grimoires',
          year:'2023',
          content:`Elaboration du backend d'un site de notation de libre avec Node.Js et Express.Js.<br>
          Mise en place d'un API RestFul, de ces différentes routes et fonctionnalitées.<br>
          Connexion de l'application à une base de données NOSQL MongoDB.<br>
          Mise en place de midleware additionnel afin de renforcer la sécurité des données de l'application.`,
            tags: [
			"Node.js",
			"Express",
            "MongoDB",
            "Multer",
            "Sharp",
            "Helmet"
		]
        },
    ]

const container = document.getElementById("real");
realData.forEach(data => {
    const article = document.createElement("article");
     article.innerHTML = `
            <h3 class="realName">${data.title}</h3>
            <aside>
            <img src="${data.picture}" alt="${data.alt}" loading="lazy">
            </aside>`;
        article.addEventListener("click", () => {
            openModal(data);
        });
        container.appendChild(article);
    });
    
    function openModal(data) {
        const modalContainer = document.createElement("section");
        modalContainer.classList.add("modalContainer");

        const modalContent = document.createElement("article");
        modalContent.classList.add("modalContent");

        const oneTag = data.tags.map(tag => `<p>${tag}</p>`).join('');

        modalContent.innerHTML = `
       
        <i id="crossClose"class="fa-solid fa-xmark"></i>
            <aside id="modalImg">
                <img src="${data.picture}" alt="${data.alt}">
            </aside>
            <aside id="modalInfo"> 
                <h2>${data.title}</h2>
                <div id="infoYear">
                    <h3>Année :</h3>
                        <p>${data.year}</p>
                </div>
                    <h3>Mission :</h3>
                        <p>${data.content}</p>
                    <h3>Technologies utilisées :</h3>
                        <div class="tagsContainer">${oneTag}</div>
                    <a href="${data.link}">Lien vers le projet</a>
            </aside>
        `;
    
        modalContainer.appendChild(modalContent);
        document.body.appendChild(modalContainer);
        closeModal();
    
    }
    
    function closeModal() {
        const crossClose = document.getElementById('crossClose')
        const modalContainer = document.querySelector(".modalContainer")
        crossClose.addEventListener("click", () => {
        modalContainer.remove()  
    });
    };
