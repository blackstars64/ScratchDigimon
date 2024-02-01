function Rendomiser(array) {
  // Créez une copie du tableau d'origine pour ne pas le modifier directement.
  const shuffledArray = [...array];

  for (let i = shuffledArray.length - 1; i > 0; i -= 1) {
    // Générez un index aléatoire entre 0 et i inclus.
    const randomIndex = Math.floor(Math.random() * (i + 1));

    // Échangez les éléments à l'index i et à l'index aléatoire.
    [shuffledArray[i], shuffledArray[randomIndex]] = [
      shuffledArray[randomIndex],
      shuffledArray[i],
    ];
  }

  return shuffledArray;
}
export default Rendomiser;
