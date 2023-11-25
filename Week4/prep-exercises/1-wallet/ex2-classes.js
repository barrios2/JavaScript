import eurosFormatter from './euroFormatter.js';

class Wallet {
  #name;
  #cash;
  #dailyAllowance;
  #dayTotalWithdrawals;

  constructor(name, cash) { // added new properties here
    this.#name = name;
    this.#cash = cash;
    this.#dailyAllowance = 40;
    this.#dayTotalWithdrawals = 0;
  }

  get name() {
    return this.#name;
  }

  deposit(amount) {
    this.#cash += amount;
  }

  withdraw(amount) {
    if (this.#cash - amount < 0) {
      console.log(`Insufficient funds!`);
      return 0;
    }

    // added new code here
    if (this.#dayTotalWithdrawals + amount > this.#dailyAllowance){
      console.log(`Insufficient remaining daily allowance!`);
      return 0;
    }

    this.#cash -= amount;
    this.#dayTotalWithdrawals += amount;
    return amount;
  }

  // modified this code
  transferInto(wallet, amount) {
    console.log( 
      `Transferring ${eurosFormatter.format(amount)} from ${this.#name} to ${wallet.#name}`
      );
    const withdrawnAmount = this.withdraw(amount);
    wallet.deposit(withdrawnAmount);
  }

  // added this code
  setDailyAllowance(newAllowance) {
    this.#dailyAllowance = newAllowance;
    console.log(`Daily allowance set to: ${eurosFormatter.format(newAllowance)}`
    );
  }

  // added this function
  resetDailyAllowance(){
    this.#dayTotalWithdrawals = 0;
  }

  // modified here
  reportBalance() {
    console.log(
      `Name: ${this.#name}, balance: ${eurosFormatter.format(this.#cash)}`
    );
  }
}

function main() {
  const walletJack = new Wallet('Jack', 100);
  const walletJoe = new Wallet('Joe', 10);
  const walletJane = new Wallet('Jane', 20);

  walletJack.transferInto(walletJoe, 50);
  walletJack.setDailyAllowance(80);
  walletJack.transferInto(walletJoe, 50);

  walletJane.transferInto(walletJoe, 25);

  walletJane.deposit(20);
  walletJane.transferInto(walletJoe, 25);

  walletJack.reportBalance();
  walletJoe.reportBalance();
  walletJane.reportBalance();
}

main();
