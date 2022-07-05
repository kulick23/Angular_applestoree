export class Feedback {
  firstname!: string;
  lastname!: string;
  telNumber!: number;
  email!: string;
  agree!: boolean;
  contactType!: string;
  message!: string;
}

export const ContactType = ['Телефон', 'Электронная почта'];
