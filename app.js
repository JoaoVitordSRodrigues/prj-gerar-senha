new Vue({
  el: '#app',
  data: {
    contadorComum: 0,
    contadorEspecial: 0,
    filaComum: [],
    filaEspecial: [],
    senhaAtual: 'Nenhuma senha atendida ainda.'
  },
  methods: {
    gerarSenhaComum() {
      this.contadorComum++;
      const senha = 'C' + this.contadorComum;
      this.filaComum.push(senha);
    },
    gerarSenhaEspecial() {
      this.contadorEspecial++;
      const senha = 'E' + this.contadorEspecial;
      this.filaEspecial.push(senha);
    },
    atenderSenhaComum() {
      if (this.filaComum.length > 0) {
        const senhaAtendida = this.filaComum.shift();
        this.senhaAtual = 'Atendendo Senha: ' + senhaAtendida;
      } else {
        this.senhaAtual = 'Nenhuma senha comum para atender.';
      }
    },
    atenderSenhaEspecial() {
      if (this.filaEspecial.length > 0) {
        const senhaAtendida = this.filaEspecial.shift();
        this.senhaAtual = 'Atendendo Senha: ' + senhaAtendida;
      } else {
        this.senhaAtual = 'Nenhuma senha especial para atender.';
      }
    }
  }
});
