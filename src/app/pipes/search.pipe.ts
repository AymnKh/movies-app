import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(movie: any[], term: any): any[] {
    if (term == undefined) {
      return movie
    }
    return movie.filter((movie) => {
      if (movie.title) {
        return movie.title.toLowerCase().includes(term.toLowerCase())
      }
    })
  }

}
