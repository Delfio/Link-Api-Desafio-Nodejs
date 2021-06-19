const fs = require("fs/promises");
const path = require("path");

class Logger {
  #pathPadraoLogger;
  constructor() {
    this.#pathPadraoLogger = path.resolve(__dirname, "..", "..", "temp");
  }

  #formatarData() {
    return new Date()
      .toLocaleDateString("pt-br", {
        dateStyle: "short",
        timeStyle: "medium",
      })
      .replace(/\//g, "-")
      .replace(/:/g, " ");
  }

  async gravarLog(log) {
    const cabecalho = this.#formatarData();

    const pathFormatado = path.resolve(
      this.#pathPadraoLogger,
      `log-${cabecalho.trim()}.log`
    );

    const novoLog = `[${cabecalho}] : ${log}\n`;

    return fs
      .access(pathFormatado)
      .then(() => {
        return fs.appendFile(pathFormatado, novoLog, {
          encoding: "utf-8",
        });
      })
      .catch(() => {
        return fs.writeFile(pathFormatado, novoLog, {
          encoding: "utf-8",
          flag: "wx",
        });
      });
  }
}

module.exports = Logger;
