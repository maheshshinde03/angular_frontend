import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './reusableComponents/header/header.component';
import { SharedRoutingModule } from './shared-routing.module';
import { TableElementsComponent } from './reusableComponents/reusable-table/table-elements/table-elements.component';
import { NotAvialablePipe } from './pipes/not-avialable.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InlineEditingComponent } from './reusableComponents/reusable-table/inline-editing/inline-editing.component';
import { ReusableButtonComponent } from './reusableComponents/reusable-button/reusable-button.component';
import { InlineEditingReactiveFormComponent } from './reusableComponents/reusable-table/inline-editing-reactive-form/inline-editing-reactive-form.component';
import { ShowMoreComponent } from './reusableComponents/show-more/show-more.component';
import { AlterBackgroundDirective } from './directives/alter-background.directive';
import { AlterBackgroundHandlerDirective } from './directives/alter-background-handler.directive';
import { StepperFormComponent } from './reusableComponents/reusable-form/stepper-form/stepper-form.component';
import { DynamicFormComponent } from './reusableComponents/reusable-form/form-with-json/dynamic-form/dynamic-form.component';
import { ContentProjectionFormComponent } from './reusableComponents/reusable-form/form-content-projection/content-projection-form/content-projection-form.component';
import { FormElementWrapperComponent } from './reusableComponents/reusable-form/form-content-projection/form-element-wrapper/form-element-wrapper.component';
import { ResuableFormConfigComponent } from './reusableComponents/reusable-form/form-with-config/resuable-form-config/resuable-form-config.component';
import { AlertBoxComponent } from './reusableComponents/alert-box/alert-box/alert-box.component';


@NgModule({
  declarations: [
    HeaderComponent,
    TableElementsComponent,
    NotAvialablePipe,
    InlineEditingComponent,
    ReusableButtonComponent,
    InlineEditingReactiveFormComponent,
    ShowMoreComponent,
    AlterBackgroundDirective,
    AlterBackgroundHandlerDirective,
    StepperFormComponent,
    DynamicFormComponent,
    ContentProjectionFormComponent,
    FormElementWrapperComponent,
    ResuableFormConfigComponent,
    AlertBoxComponent
    // Other shared components, directives, pipes
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
   HeaderComponent,
   TableElementsComponent,
   ReusableButtonComponent,
   ShowMoreComponent,
   AlterBackgroundDirective,
   AlterBackgroundHandlerDirective
    // Other shared components, directives, pipes
  ]
})
export class SharedModule {}
