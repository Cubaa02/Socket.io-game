// Přidání posluchače události 'click' na celé okno
addEventListener('click', (event) => {
  // Výběr elementu canvas z dokumentu
  const canvas = document.querySelector('canvas')
  
  // Získání pozice canvasu relativně k viewportu
  const { top, left } = canvas.getBoundingClientRect()
  
  // Získání pozice hráče na plátně (canvas)
  const playerPosition = {
    x: frontEndPlayers[socket.id].x,
    y: frontEndPlayers[socket.id].y
  }

  // Výpočet úhlu mezi pozicí kliknutí a pozicí hráče
  const angle = Math.atan2(
    event.clientY - top - playerPosition.y,   // Y vzdálenost mezi kliknutím a hráčem
    event.clientX - left - playerPosition.x   // X vzdálenost mezi kliknutím a hráčem
  )

  // Odeslání události 'shoot' na server s pozicí hráče a úhlem střely
  socket.emit('shoot', {
    x: playerPosition.x,
    y: playerPosition.y,
    angle
  })

  // Výpis všech projektilů na klientské straně do konzole
  console.log(frontEndProjectiles)
})
