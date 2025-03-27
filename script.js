document
  .getElementById("mostrarCanciones")
  .addEventListener("click", function () {
    const genero = document.getElementById("seleccionGenero").value;
    const listaCanciones = document.getElementById("canciones");
    listaCanciones.innerHTML = ""; // Limpiar lista antes de actualizar

    const canciones = {
      pop: [
        {
          titulo: "Blinding Lights",
          artista: "The Weeknd",
          src: "TheWeeknd_BlindingLights.mp3",
        },
        {
          titulo: "Levitating",
          artista: "Dua Lipa",
          src: "DuaLipa_Levitating.mp3",
        },
      ],
      rock: [
        {
          titulo: "Bohemian Rhapsody",
          artista: "Queen",
          src: "Queen_BohemianRhapsody.mp3",
        },
        {
          titulo: "Smells Like Teen Spirit",
          artista: "Nirvana",
          src: "Nirvana_SmellsLikeTeenSpirit.mp3",
        },
      ],
      electro: [
        {
          titulo: "Titanium",
          artista: "David Guetta",
          src: "DavidGuetta_Titanium.mp3",
        },
        {
          titulo: "Animals",
          artista: "Martin Garrix",
          src: "MartinGarrix_Animals.mp3",
        }, // Corrección del artista
      ],
      jazz: [
        {
          titulo: "Take Five",
          artista: "Dave Brubeck",
          src: "DaveBrubeck_TakeFive.mp3",
        },
        {
          titulo: "So What",
          artista: "Miles Davis",
          src: "MilesDavis_SoWhat.mp3",
        },
      ],
    };

    // Verificar si el género seleccionado existe
    if (!canciones[genero]) {
      alert("Género no encontrado, selecciona uno válido.");
      return;
    }

    // Generar la lista de canciones
    canciones[genero].forEach((cancion) => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${cancion.titulo}</strong> - ${cancion.artista} 
                        <audio controls>
                            <source src="${cancion.src}" type="audio/mpeg">
                            Tu navegador no soporta el elemento de audio.
                        </audio>`;
      listaCanciones.appendChild(li);
    });

    db.collection("canciones")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} =>`, doc.data());
        });
      })
      .catch((error) => {
        console.error("Error al obtener documentos: ", error);
      });
  });
