import {Component, Input} from '@angular/core';
import {UntypedFormBuilder, Validators} from '@angular/forms';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';

const STABLE_TEXT:string=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis lobortis massa vitae facilisis. Sed posuere ipsum in ex vehicula ullamcorper. Vestibulum lorem tortor, scelerisque a sollicitudin id, commodo et massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas et ligula in mi volutpat bibendum. Nunc feugiat, tortor id vehicula euismod, ex diam dignissim turpis, ut rhoncus diam metus molestie felis. Cras eu sapien et lacus vulputate dictum quis eget dolor. Sed vitae tempus ex. Quisque interdum, neque ut dignissim ultrices, erat dolor iaculis mauris, eget efficitur neque libero aliquam neque. Pellentesque suscipit maximus tincidunt. Donec convallis lobortis ultricies. Quisque finibus efficitur enim vitae feugiat. Sed aliquet nunc ut dolor tristique sagittis.

Morbi bibendum diam id tortor cursus, ut aliquet mi gravida. Fusce vestibulum augue eget nulla convallis fermentum. Integer in congue ligula. Nam rutrum cursus libero, nec iaculis tortor faucibus eu. Nam ultrices blandit suscipit. Phasellus sit amet consequat diam. Nulla id mauris lacus. Suspendisse arcu augue, dictum a risus posuere, suscipit condimentum tortor. Suspendisse nisi nisi, ultricies quis porttitor sit amet, laoreet at felis. Quisque feugiat, urna et lacinia lacinia, eros neque dapibus orci, maximus efficitur nisl erat ac lacus. Nulla vel arcu gravida, molestie erat nec, ullamcorper nisl.`

@Component({
  selector: "create-course-step-1",
  templateUrl:"create-course-step-1.component.html",
  styleUrls: ["create-course-step-1.component.scss"]
})
export class CreateCourseStep1Component {

  form = this.fb.group({
    title: ['', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(60)
    ]],
    releasedAt: [new Date(1990,0,1), Validators.required],
    category: ['ADVANCED', Validators.required],
    courseType: ['premium', Validators.required],
    downloadsAllowed: [false, Validators.requiredTrue],
    longDescription: [STABLE_TEXT, [Validators.required, Validators.minLength(3)]]
  });

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate,view)=> {

    const date = cellDate.getDate();

    if(view==="month") {
      return (date == 1) ? "highlight-date" : "";
    }

    return "";
  }

  constructor(private fb: UntypedFormBuilder) {

  }

  get courseTitle() {
    return this.form.controls['title'];
  }

}
