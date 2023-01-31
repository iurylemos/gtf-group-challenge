import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ReceitaFederalClient } from 'src/app/interfaces/ReceitaFederalClient';
import { ReceitaFederalService } from 'src/app/services/receita-federal.service';
import { SharedService } from 'src/app/services/shared.service';
import { checkCPFisValid } from '../../../utils/checkCPFisValid';

@Component({
  selector: 'app-main-stepper',
  templateUrl: './main-stepper.component.html',
  styleUrls: ['./main-stepper.component.scss'],
})
export class MainStepperComponent implements OnChanges, OnInit {
  public text: string = '';
  public loadingButton: boolean = false;
  public dataCard: Partial<ReceitaFederalClient> = {
    nome: '',
  };
  public nameControl = new FormControl('');
  public form: FormGroup;

  constructor(
    private _receitaFederalService: ReceitaFederalService,
    private _sharedService: SharedService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      cpf: this.formBuilder.control({
        value: null,
        disabled: false,
      }),
    });
  }

  public ngOnInit(): void {
    this.form = this.formBuilder.group({
      cpf: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(
            '(?<=D|^)(d{2}.?d{3}.?d{3}/?d{4}-?d{2}|d{3}.?d{3}.?d{3}-?d{2})(?=D|$)'
          ),
        ])
      ),
    });
  }

  public validateCPF(): void {
    const value = this.form.get('cpf')!.value;

    if (!checkCPFisValid(value)) {
      this.form.get('cpf')?.setErrors({ invalid: true });
      this.form.get('cpf')?.markAsTouched();
    } else {
      this.form.get('cpf')?.setErrors({ invalid: false });
    }
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('test', this.form.get('cpf')?.errors);
    console.log('Changes detected');
  }

  public async checkCpf(event: MouseEvent): Promise<void> {
    event.preventDefault();

    console.log(this.form.get('cpf')?.value);

    try {
      this.loadingButton = true;

      if (checkCPFisValid(this.form.get('cpf')?.value)) {
        const data = await this._receitaFederalService.getDataFromCPF(
          this.form.get('cpf')?.value
        );
        this.dataCard = data;
        this._sharedService.emitChange({ cpfValidate: true, cpfData: data });
      } else {
        this.nameControl.setErrors({ invalid: true });
      }

      this.loadingButton = false;
    } catch (error) {
      console.log('error', error);
    }
  }
}
