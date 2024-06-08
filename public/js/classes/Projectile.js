// Definice třídy Projectile (projektil)
class Projectile {
  // Konstruktor třídy, který inicializuje novou instanci projektilu
  constructor({ x, y, radius, color = 'white', velocity }) {
    this.x = x            // Nastavení počáteční pozice projektilu na ose x
    this.y = y            // Nastavení počáteční pozice projektilu na ose y
    this.radius = radius  // Nastavení poloměru projektilu
    this.color = color    // Nastavení barvy projektilu (výchozí je bílá)
    this.velocity = velocity // Nastavení rychlosti projektilu (objekt s vlastnostmi x a y)
  }

  // Metoda pro vykreslení projektilu na plátno
  draw() {
    c.save()                   // Uloží aktuální stav kontextu
    c.shadowColor = this.color // Nastaví barvu stínu na barvu projektilu
    c.shadowBlur = 20          // Nastaví rozmazání stínu
    c.beginPath()              // Začne novou cestu (path)
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false) // Vykreslí kruh
    c.fillStyle = this.color   // Nastaví barvu výplně na barvu projektilu
    c.fill()                   // Vyplní kruh barvou
    c.restore()                // Obnoví uložený stav kontextu
  }

  // Metoda pro aktualizaci stavu projektilu
  update() {
    this.draw()                // Vykreslí projektil
    this.x = this.x + this.velocity.x // Aktualizuje pozici na ose x podle rychlosti
    this.y = this.y + this.velocity.y // Aktualizuje pozici na ose y podle rychlosti
  }
}
