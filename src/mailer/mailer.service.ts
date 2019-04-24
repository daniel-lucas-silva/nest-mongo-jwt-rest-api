import { Injectable } from '@nestjs/common';
import { createTransport, createTestAccount } from 'nodemailer';

@Injectable()
export class MailerService {

  private async getTransporter() {
    const testAccount = await createTestAccount();

    return createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
      },
    });
  }

  public async send() {
    const transporter = await this.getTransporter();

    try {
      await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: 'bar@example.com, baz@example.com', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world?', // plain text body
        html: '<b>Hello world?</b>', // html body
      });
    } catch (error) {
      console.log(error);
    }
  }

}
