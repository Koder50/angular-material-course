import {Component, OnInit} from '@angular/core';
import {Course} from "../model/course";
import {Observable} from "rxjs";
import {CoursesService} from "../services/courses.service";
import {map, shareReplay, tap} from "rxjs/operators";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    beginnerCourses$: Observable<Course[]>;

    advancedCourses$: Observable<Course[]>;

    tooltipDisable: boolean=false;

    constructor(private coursesService: CoursesService) {

    }

    ngOnInit() {

        const courses$ = this.coursesService.findAllCourses().pipe(
            map(courses=>courses
                .sort(this.sortCoursesById)),
            //tap(courses=>console.log(courses)),
            shareReplay()
        );

        this.beginnerCourses$ = courses$.pipe(
          map(courses => courses
             .filter(course => course.category === 'BEGINNER'))//,
            // tap(courses=>console.log(courses))
          
        );

        this.advancedCourses$ = courses$.pipe(
            map(courses => courses
                .filter(course => course.category === 'ADVANCED'))//,
                //tap(courses=>console.log(courses))
        );

    }

    getTooltipDisable(): boolean {
        console.log(this.tooltipDisable);
        return this.tooltipDisable;
    }

    sortCoursesById(a: Course,b: Course) {
        return a.id>=b.id ? 1 : -1;
    }

}
