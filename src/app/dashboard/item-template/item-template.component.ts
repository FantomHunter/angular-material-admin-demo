import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ViewChild,
  ComponentFactoryResolver,
} from '@angular/core';
import { AdComponent } from '../ad-component.type';
import { AdItem } from '../ad-item';
import { AdDirective } from '../ad.directive';

@Component({
  selector: 'app-item-template',
  templateUrl: './item-template.component.html',
  styleUrls: ['./item-template.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemTemplateComponent implements OnInit {
  @Input() componentAd: AdItem | undefined;
  @ViewChild(AdDirective, { static: true }) adHost: AdDirective | undefined;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {
    this.loadComponent();
  }

  loadComponent() {
    if (this.componentAd) {
      console.log('load Component');

      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
        this.componentAd!.component
      );

      const viewContainerRef = this.adHost!.viewContainerRef;
      viewContainerRef.clear();

      const componentRef = viewContainerRef.createComponent<AdComponent>(
        componentFactory
      );
      componentRef.instance.data = this.componentAd!.data;
    }
  }
}
