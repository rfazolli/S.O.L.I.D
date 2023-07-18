import Client from "./Client";

export default class Notify {
  constructor(private client: Client) {}

  sendEmail(): void {
    console.log("Enviando email", this.client.email);
  }
}
