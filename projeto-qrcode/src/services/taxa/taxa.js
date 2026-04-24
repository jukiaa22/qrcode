import prompt from "prompt";
import chalk from "chalk";

async function calcularTaxa() {
  prompt.start();

  prompt.get(
    [
      {
        name: "valor",
        description: chalk.blue("Digite o valor da compra:"),
        required: true,
        conform: (value) => !isNaN(value),
        message: chalk.red("Digite um número válido"),
      },
    ],
    (err, result) => {
      if (err) return console.log(err);

      const valor = parseFloat(result.valor);

      const taxa = valor * 0.1; // 10%
      const total = valor + taxa;

      console.log(chalk.green(`\nValor: R$ ${valor.toFixed(2)}`));
      console.log(chalk.yellow(`Taxa (10%): R$ ${taxa.toFixed(2)}`));
      console.log(chalk.bold(`Total: R$ ${total.toFixed(2)}\n`));
    }
  );
}

export default calcularTaxa;