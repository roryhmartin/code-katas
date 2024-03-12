// @ts-check
export class Kata {
  static getCount(str: string): number {
    const splitString: string[] = str.split("");
    let counter: number = 0;

    splitString.forEach((element: string) => {
      if(element === 'a' || element === 'e' || element === 'i' || element === 'o' || element === 'u'){
        counter++;
      }
    })
    return counter;
  }
}

console.log(getCount("abracadabra"));