import { NgModule } from '@angular/core';
import { WidgetComponent } from './widget/widget';
import { SimpleListComponent } from './simple-list/simple-list';
import { MediumListComponent } from './medium-list/medium-list';
import { CustomHeaderComponent } from './custom-header/custom-header';
import { PopOverMenuComponent } from './pop-over-menu/pop-over-menu';
import { LeftMenuComponent } from './left-menu/left-menu';
@NgModule({
	declarations: [
    WidgetComponent,
    SimpleListComponent,
    MediumListComponent,
    CustomHeaderComponent,
    PopOverMenuComponent,
    LeftMenuComponent],
	imports: [],
	exports: [
    WidgetComponent,
    SimpleListComponent,
    MediumListComponent,
    CustomHeaderComponent,
    PopOverMenuComponent,
    LeftMenuComponent]
})
export class ComponentsModule {}
