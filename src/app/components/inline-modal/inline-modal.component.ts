import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-inline-modal',
  templateUrl: './inline-modal.component.html',
  styleUrls: ['./inline-modal.component.scss'],
})
export class InlineModalComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}
  async close() {
    await this.modalCtrl.dismiss();
  }
}
