import { Component, Input } from '@angular/core';
import { ReceitaFederalClient } from '../../../interfaces/ReceitaFederalClient';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() dataCard: Partial<ReceitaFederalClient> = {
    nome: '',
    cpf: '',
    situacao: '',
  };
}
