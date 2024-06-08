// Definice třídy Player (hráč)
class Player {
  // Konstruktor třídy, který inicializuje novou instanci hráče
  constructor({ x, y, radius, color, username }) {
    this.x = x               // Nastavení počáteční pozice hráče na ose x
    this.y = y               // Nastavení počáteční pozice hráče na ose y
    this.radius = radius     // Nastavení poloměru hráče
    this.color = color       // Nastavení barvy hráče
    this.username = username // Nastavení uživatelského jména hráče
  }

  // Metoda pro vykreslení hráče na plátno
  draw() {
    // Nastavení fontu a barvy textu pro vykreslení uživatelského jména
    c.font = '12px sans-serif'
    c.fillStyle = 'white'
    // Vykreslení uživatelského jména pod hráčem
    c.fillText(this.username, this.x - 10, this.y + 20)
    
    c.save()                 // Uloží aktuální stav kontextu
    c.shadowColor = this.color // Nastaví barvu stínu na barvu hráče
    c.shadowBlur = 20        // Nastaví rozmazání stínu
    c.beginPath()            // Začne novou cestu (path)
    // Vykreslí kruh reprezentující hráče
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color // Nastaví barvu výplně na barvu hráče
    c.fill()                 // Vyplní kruh barvou
    c.restore()              // Obnoví uložený stav kontextu
  }
}
