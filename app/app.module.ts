import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import { EventsAppComponent } from './events-app.component'
import { EventslistComponent } from './events/events-list.components'
import { EventThumbnailComponent } from './events/event-thumbnail.component'
import { NavBarComponent } from './nav/navbar.components'
import { EventService } from './events/shared/event.service'

@NgModule({
	imports: [BrowserModule],
	declarations: [
			EventsAppComponent,
			EventslistComponent,
			EventThumbnailComponent,
			NavBarComponent
		],
		providers: [EventService],
		bootstrap : [EventsAppComponent]

})
export class AppModule{

}
