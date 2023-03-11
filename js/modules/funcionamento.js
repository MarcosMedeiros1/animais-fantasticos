export default class Funcioanmento {
  constructor(dataSemana, activeClass) {
    this.funcionamento = document.querySelector(dataSemana);
    this.activeClass = activeClass;
  }

  dadosSemana() {
    this.diasSemana = this.funcionamento.dataset.semana.split(",").map(Number);
    this.horarioSemana = this.funcionamento.dataset.horario
      .split(",")
      .map(Number);
  }

  dadosAgora() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horarioAgora = this.dataAgora.getUTCHours() - 3;
  }

  checkEstaAberto() {
    const semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1;
    const horarioAberto =
      this.horarioAgora >= this.horarioSemana[0] &&
      this.horarioAgora < this.horarioSemana[1];

    return semanaAberto && horarioAberto;
  }

  activateAberto() {
    if (this.checkEstaAberto()) {
      this.funcionamento.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.funcionamento) {
      this.dadosSemana();
      this.dadosAgora();
      this.activateAberto();
    }
    return this;
  }
}
