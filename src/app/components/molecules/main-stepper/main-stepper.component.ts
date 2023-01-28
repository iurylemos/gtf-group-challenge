import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  OnChanges,
  OnInit,
  QueryList,
  SimpleChanges,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { NgModel } from '@angular/forms';
import { Injectable } from '@angular/core';
import { ReceitaFederalService } from 'src/app/services/receita-federal.service';

@Component({
  selector: 'app-main-stepper',
  templateUrl: './main-stepper.component.html',
  styleUrls: ['./main-stepper.component.scss'],
})
export class MainStepperComponent implements OnChanges, OnInit, AfterViewInit {
  public text = '';

  @ViewChildren(NgModel) cpfInputRef: QueryList<NgModel> | undefined;
  @ViewChild(NgModel, { static: true }) cpfInput: NgModel | undefined;

  constructor(private receitaFederalService: ReceitaFederalService) {}

  public ngOnInit(): void {}

  ngAfterViewInit() {
    this.cpfInputRef!.forEach((ref: NgModel) =>
      ref.valueChanges!.subscribe((val) => this.change(val))
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Changes detected');
  }

  change(text: string): void {
    this.text = text;
  }

  public async checkCpf(event: MouseEvent): Promise<void> {
    event.preventDefault();

    try {
      const data = await this.receitaFederalService.getDataFromCPF(this.text);
      console.log('data', data);
    } catch (error) {
      console.log('error', error);
    }
  }
}
