import { Injectable } from '@angular/core';
import { CoursesListItem } from '../../models/courses-list-item.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CoursesService {
  private twoDays = 2*24*3600*1000;
  private coursesList: CoursesListItem[] = [
    {
      id: 1,
      title: "Video 1", 
      date: new Date(+new Date() + this.twoDays), // upcomming
      duration: 148,
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      topRated: true,
    },
    {
      id: 2,
      title: "Video 2", 
      date: new Date(+new Date() - this.twoDays),  // fresh
      duration: 89,
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      topRated: false,
    },
    {
      id: 3,
      title: "Video 3", 
      date: new Date(+new Date() - (8 * this.twoDays)),   // old
      duration: 35,
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      topRated: true,
    },
    {
      id: 4,
      title: "Video 4", 
      date: new Date(2018, 10, 6),
      duration: 75,
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      topRated: true,
    },
    {
      id: 5,
      title: "Video 5", 
      date: new Date(2018, 11, 18),
      duration: 120,
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      topRated: false,
    }
  ]

  constructor() { }

  getCourses(): Observable<CoursesListItem[]> {
    return of(this.coursesList);
  }
}