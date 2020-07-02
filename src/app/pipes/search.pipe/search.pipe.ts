import { Pipe, PipeTransform } from '@angular/core';
import { KalamInterface } from 'src/models/bastah.interface';

@Pipe({ name: 'search' })
export class SearchPipe implements PipeTransform {
  transform(kalams: KalamInterface[], searchStr: string): KalamInterface[] {
    if (!searchStr || !kalams?.length) {
      return kalams;
    }
    const lowerCaseSearchStr = searchStr.toLocaleLowerCase();
    const kalamFound = kalams.find(
      (kalam) =>
        kalam.name.includes(lowerCaseSearchStr) ||
        kalam.id.includes(lowerCaseSearchStr)
    );

    return kalamFound
      ? [kalamFound]
      : kalams.filter((kalamsToFind) =>
          kalamsToFind.ashaar.some((verse) =>
            verse.includes(lowerCaseSearchStr)
          )
        );
  }
}
