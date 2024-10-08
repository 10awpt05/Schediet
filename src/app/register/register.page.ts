import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  username: string;
  password: string;
  confirmPassword: string;

  constructor(
    private storage: Storage,
    private router: Router,
    private alertController: AlertController
  ) {}

  async registerUser() {
    // Check if passwords match
    if (this.password !== this.confirmPassword) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Passwords do not match!',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }

    // Store the username and password
    await this.storage.set(this.username, this.password);

    const alert = await this.alertController.create({
      header: 'Success',
      message: 'Account created successfully!',
      buttons: ['OK'],
    });
    await alert.present();

    // Redirect to the login page after registration
    this.router.navigate(['/login1']);
  }
}
