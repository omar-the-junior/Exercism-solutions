//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this.status = 'closed';
  }

  checkStatus(status) {
    if (this.status === status) {
      throw new ValueError(`Account is ${status}`);
    }
  }

  checkValue(value) {
    if (value < 0) {
      throw new ValueError(`Cannot widthdraw/deposite a negative value`);
    }
  }

  open() {
    this.checkStatus('open');
    this.status = 'open';
    this._balance = 0;
  }

  close() {
    this.checkStatus('closed');
    this.status = 'closed';
  }

  deposit(amount) {
    this.checkStatus('closed');
    this.checkValue(amount);
    this._balance += amount;

  }

  withdraw(amount) {
    this.checkStatus('closed');
    this.checkValue(amount);
    if (amount > this.balance) {
      throw new ValueError(`'${amount}' is more than your balance: '${this.balance}' `);
    }
    this._balance -= amount;
  }

  get balance() {
    this.checkStatus('closed');
    return this._balance;
  }
}

export class ValueError extends Error {
  constructor(message) {
    super(message);
  }
}
